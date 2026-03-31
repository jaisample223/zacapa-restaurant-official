import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Menu", href: "/menu" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Visit Us", href: "/#visit" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : isHome
            ? "bg-transparent"
            : "bg-white border-b border-border"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-2xl font-bold text-crimson tracking-wide">
          Zacapa
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.href.startsWith("/#") ? (
              isHome ? (
                <a
                  key={l.label}
                  href={l.href.replace("/", "")}
                  className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-crimson transition-colors font-medium"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  to={l.href}
                  className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-crimson transition-colors font-medium"
                >
                  {l.label}
                </Link>
              )
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className={`font-body text-xs tracking-[0.15em] uppercase transition-colors font-medium ${
                  location.pathname === l.href
                    ? "text-crimson"
                    : "text-muted-foreground hover:text-crimson"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
          <a
            href="https://www.getsauce.com/order/zacapa-mexican-restaurant-and-bar/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-[0.15em] uppercase bg-crimson text-white px-5 py-2.5 rounded-md hover:bg-crimson-light transition-colors font-semibold"
          >
            Order Online
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-border px-6 py-6 space-y-4">
          {links.map((l) =>
            l.href.startsWith("/#") && isHome ? (
              <a
                key={l.label}
                href={l.href.replace("/", "")}
                onClick={() => setOpen(false)}
                className="block font-body text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-crimson transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block font-body text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-crimson transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
          <a
            href="https://www.getsauce.com/order/zacapa-mexican-restaurant-and-bar/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-body text-sm tracking-[0.15em] uppercase text-crimson font-semibold"
          >
            Order Online
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
