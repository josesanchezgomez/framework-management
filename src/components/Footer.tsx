import { brand, finalCta } from "../data/content";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-deep text-white">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-blue/30 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
            {finalCta.body}
          </p>
          <a
            href="#capacidades"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5 hover:bg-lightblue"
          >
            Volver a las capacidades
          </a>
        </Reveal>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-white/55 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-blue font-black text-white">
              M
            </span>
            <span className="font-semibold text-white/80">
              {brand.name} · {brand.product}
            </span>
          </div>
          <p>{brand.internalNote}</p>
        </div>
      </div>
    </footer>
  );
}
