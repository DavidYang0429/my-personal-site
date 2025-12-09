export function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-black py-6 text-center">
            <p className="text-xs text-secondary">
                © {new Date().getFullYear()} David Yang. All rights reserved.
            </p>
        </footer>
    );
}
