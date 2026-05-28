import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { User, Sparkles, FileCheck2 } from "lucide-react";
import { conversations } from "../data/content";
import Reveal from "./Reveal";

export default function Conversation() {
  const [active, setActive] = useState(0);
  const ex = conversations.examples[active];

  return (
    <section id="conversacion" className="bg-soft py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue">
              Cómo se siente usarlo
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {conversations.title}
            </h2>
            <p className="mt-4 text-lg text-muted">
              {conversations.subtitle}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {conversations.examples.map((e, i) => (
              <button
                key={e.title}
                onClick={() => setActive(i)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active === i
                    ? "border-primary bg-primary text-white"
                    : "border-slate-300 bg-white text-body hover:border-blue"
                }`}
              >
                {e.title}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-primary/5 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {/* PM */}
                <div className="flex justify-end gap-3">
                  <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-primary to-blue px-5 py-3.5 text-white">
                    <p className="text-[15px] leading-relaxed">{ex.pm}</p>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-white">
                    <User className="h-4 w-4" />
                  </span>
                </div>

                {/* Sistema */}
                <div className="flex gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lightblue text-primary">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <div className="max-w-[80%]">
                    <div className="rounded-2xl rounded-tl-sm bg-soft px-5 py-3.5">
                      <p className="text-[15px] leading-relaxed text-body">
                        {ex.system}
                      </p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {ex.outputs.map((o) => (
                        <span
                          key={o}
                          className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                        >
                          <FileCheck2 className="h-3.5 w-3.5" />
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
