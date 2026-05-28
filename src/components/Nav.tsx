import { useEffect, useState } from "react";
import { brand } from "../data/content";

const links = [
  { href: "#problema", label: "El problema" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#capacidades", label: "Capacidades" },
  { href: "#ciclo", label: "Ciclo semanal" },
  { href: "#ventajas", label: "Ventajas" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-lightblue shadow-[0_1px_30px_-12px_rgba(31,78,121,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span
            className={`grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-blue text-white font-black ${
              scrolled ? "" : "shadow-lg shadow-primary/30"
            }`}
          >
            M
          </span>
          <span
            className={`text-lg font-extrabold tracking-tight ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            {brand.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-body hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#capacidades"
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
            scrolled
              ? "bg-primary text-white hover:bg-primary-deep"
              : "bg-white text-primary hover:bg-lightblue"
          }`}
        >
          Ver capacidades
        </a>
      </div>
    </header>
  );
}
