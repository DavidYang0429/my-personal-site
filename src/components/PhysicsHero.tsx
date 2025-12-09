'use client';

import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { Network, Bot, Brain, Palette, Bitcoin, Globe, Cpu } from 'lucide-react';

const ICONS = [
    { icon: Network, color: '#3b82f6', label: 'Web3' },
    { icon: Bot, color: '#a855f7', label: 'AI' },
    { icon: Bitcoin, color: '#f59e0b', label: 'Crypto' },
    { icon: Palette, color: '#ec4899', label: 'Design' },
    { icon: Globe, color: '#10b981', label: 'Global' },
    { icon: Cpu, color: '#ef4444', label: 'Tech' },
    { icon: Brain, color: '#8b5cf6', label: 'Thinking' },
];

export function PhysicsHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const [bodies, setBodies] = useState<any[]>([]);
    // Use a state update to trigger re-renders for React-based rendering
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        if (!containerRef.current) return;

        // Module aliases
        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint,
            Common = Matter.Common;

        // Create engine
        const engine = Engine.create();
        engine.gravity.y = 0; // Zero gravity
        engineRef.current = engine;

        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;

        // Create bounds
        const wallThickness = 60;
        const ground = Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true, render: { visible: false } });
        const ceiling = Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true, render: { visible: false } });
        const leftWall = Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true, render: { visible: false } });
        const rightWall = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true, render: { visible: false } });

        Composite.add(engine.world, [ground, ceiling, leftWall, rightWall]);

        // Create bodies for icons
        const iconBodies = ICONS.map((_, i) => {
            const x = Math.random() * (width - 100) + 50;
            const y = Math.random() * (height - 100) + 50;
            return Bodies.circle(x, y, 30, {
                restitution: 0.9,
                frictionAir: 0.001,
                friction: 0.001,
                render: { visible: false } // We render with React
            });
        });

        Composite.add(engine.world, iconBodies);
        setBodies(iconBodies);

        // Track mouse position relative to container
        const mouseRef = { x: -1000, y: -1000 };
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                mouseRef.x = e.clientX - rect.left;
                mouseRef.y = e.clientY - rect.top;
            }
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Physics loop
        Matter.Events.on(engine, 'beforeUpdate', () => {
            iconBodies.forEach(body => {
                // Ambient drift
                if (body.speed < 1) {
                    const forceMagnitude = 0.0001;
                    Matter.Body.applyForce(body, body.position, {
                        x: (Math.random() - 0.5) * forceMagnitude,
                        y: (Math.random() - 0.5) * forceMagnitude
                    });
                }

                // Repulsion interaction
                const dx = mouseRef.x - body.position.x;
                const dy = mouseRef.y - body.position.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const repulsionRadius = 150;

                if (distance < repulsionRadius) {
                    const forceMagnitude = 0.002 * (1 - distance / repulsionRadius);
                    Matter.Body.applyForce(body, body.position, {
                        x: -dx / distance * forceMagnitude,
                        y: -dy / distance * forceMagnitude
                    });
                }
            });
        });

        // Create runner
        const runner = Runner.create();
        Runner.run(runner, engine);

        // Animation loop for React state
        let animationId: number;
        const update = () => {
            setFrame(f => f + 1);
            animationId = requestAnimationFrame(update);
        };
        update();

        // Clean up
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            Runner.stop(runner);
            Engine.clear(engine);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
            {bodies.map((body, i) => {
                const { x, y } = body.position;
                const Icon = ICONS[i].icon;
                return (
                    <div
                        key={i}
                        className="absolute flex items-center justify-center rounded-full backdrop-blur-sm border transition-transform duration-300"
                        style={{
                            left: x,
                            top: y,
                            width: '60px',
                            height: '60px',
                            transform: `translate(-50%, -50%) rotate(${body.angle}rad)`,
                            backgroundColor: `${ICONS[i].color}15`, // 15% opacity background
                            borderColor: `${ICONS[i].color}50`, // 50% opacity border
                            boxShadow: `0 0 15px ${ICONS[i].color}40`, // Soft outer glow
                        }}
                    >
                        <Icon
                            size={28}
                            color={ICONS[i].color}
                            style={{ filter: `drop-shadow(0 0 8px ${ICONS[i].color})` }}
                        />
                    </div>
                );
            })}
        </div>
    );
}
