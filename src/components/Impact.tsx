import { impact } from "../data/content";
import Reveal from "./Reveal";

export default function Impact() {
  return (
    <section className="bg-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {impact.title}
            </h2>
            <p className="mt-4 text-lg text-muted">{impact.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impact.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 text-center">
                <p className="bg-gradient-to-br from-primary to-blue bg-clip-text text-4xl font-black text-transparent">
                  {m.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {m.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
