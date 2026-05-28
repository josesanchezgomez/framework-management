import { ArrowRight, Check, Gem, ShieldCheck } from "lucide-react";
import { howItWorks, dataSovereignty } from "../data/content";
import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue">
              {howItWorks.eyebrow}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {howItWorks.title}
            </h2>
            <p className="mt-4 text-lg text-muted">{howItWorks.subtitle}</p>
          </div>
        </Reveal>

        {/* 3 pasos con conector */}
        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-lightblue to-transparent md:block" />
          {howItWorks.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-blue text-white shadow-lg shadow-primary/25 ring-8 ring-white">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="mb-2 flex items-center gap-2 text-sm font-bold text-blue/40">
                  <span>0{i + 1}</span>
                  {i < howItWorks.steps.length - 1 && (
                    <ArrowRight className="h-4 w-4 md:hidden" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-2.5 max-w-xs leading-relaxed text-body">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Cierre de posicionamiento */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-slate-200 bg-soft px-8 py-10 text-center sm:px-12">
            <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-blue text-white shadow-lg shadow-primary/25">
              <Gem className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold uppercase tracking-wider text-blue">
              {howItWorks.positioning.eyebrow}
            </p>
            <h3 className="mx-auto mt-3 max-w-2xl text-balance text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              {howItWorks.positioning.lead}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-body">
              {howItWorks.positioning.body}
            </p>
            <p className="mt-5 text-lg font-bold text-primary">
              {howItWorks.positioning.punch}
            </p>
          </div>
        </Reveal>

        {/* Soberanía del dato */}
        <Reveal delay={0.15}>
          <div className="mt-8 grid items-center gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-primary-deep via-primary to-blue p-8 text-white sm:p-10 md:grid-cols-[1fr_1fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 ring-1 ring-white/20">
                <ShieldCheck className="h-4 w-4 text-midblue" />
                Soberanía del dato
              </div>
              <h3 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
                {dataSovereignty.title}
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-white/80">
                {dataSovereignty.body}
              </p>
            </div>
            <ul className="space-y-3">
              {dataSovereignty.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/10"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-midblue/30">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </span>
                  <span className="text-[15px] font-medium text-white/90">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
