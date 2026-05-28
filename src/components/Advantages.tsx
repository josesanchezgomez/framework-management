import { ArrowUpRight } from "lucide-react";
import { advantages } from "../data/content";
import Reveal from "./Reveal";

export default function Advantages() {
  return (
    <section id="ventajas" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue">
              Diferenciales
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {advantages.title}
            </h2>
            <p className="mt-4 text-lg text-muted">{advantages.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {advantages.items.map((a, i) => (
            <Reveal key={a.title} delay={(i % 2) * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-soft p-8 transition-all hover:border-blue/30 hover:shadow-xl hover:shadow-primary/10">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-lightblue/60 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-2xl font-black text-blue/30">
                      0{i + 1}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-blue opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h3 className="text-xl font-bold text-ink">{a.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-body">{a.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
