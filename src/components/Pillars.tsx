import { pillars } from "../data/content";
import Reveal from "./Reveal";

export default function Pillars() {
  return (
    <section className="bg-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-blue">
            Cómo funciona
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-balance text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Tres ideas sostienen todo el sistema.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-blue/30 hover:shadow-xl hover:shadow-primary/10">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-blue text-white shadow-lg shadow-primary/25">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-ink">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-body">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
