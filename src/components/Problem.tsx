import { Check, X } from "lucide-react";
import { problem } from "../data/content";
import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section id="problema" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {problem.title}
            </h2>
            <p className="mt-4 text-lg text-muted">{problem.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-slate-200 bg-soft p-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-200/70 px-4 py-1.5 text-sm font-semibold text-slate-600">
                {problem.before.label}
              </div>
              <ul className="space-y-4">
                {problem.before.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-300/60 text-slate-500">
                      <X className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-slate-600">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-blue/20 bg-gradient-to-br from-primary to-blue p-8 text-white shadow-xl shadow-primary/20">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="relative">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold">
                  {problem.after.label}
                </div>
                <ul className="space-y-4">
                  {problem.after.items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/20">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-white/90">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
