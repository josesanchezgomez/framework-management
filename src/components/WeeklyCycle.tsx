import { motion } from "framer-motion";
import { User, Cpu, ArrowRight } from "lucide-react";
import { weeklyCycle } from "../data/content";
import Reveal from "./Reveal";

export default function WeeklyCycle() {
  return (
    <section
      id="ciclo"
      className="relative overflow-hidden bg-gradient-to-br from-primary-deep via-primary to-blue py-24 text-white"
    >
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-midblue">
              El ciclo semanal
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              {weeklyCycle.title}
            </h2>
            <p className="mt-4 text-lg text-white/75">{weeklyCycle.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-16 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {weeklyCycle.steps.map((s, i) => (
            <Reveal key={s.day} delay={i * 0.12} className="contents">
              <div className="relative flex h-full flex-col rounded-2xl border border-white/15 bg-white/[0.07] p-7 backdrop-blur-sm">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-wide text-midblue">
                    {s.day}
                  </span>
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-lg ${
                      s.actor === "system"
                        ? "bg-accent text-white"
                        : "bg-white/15 text-white"
                    }`}
                  >
                    {s.actor === "system" ? (
                      <Cpu className="h-4 w-4" />
                    ) : (
                      <User className="h-4 w-4" />
                    )}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {s.body}
                </p>
                <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/70">
                  {s.actor === "system" ? "Lo hace el sistema" : "Lo hace el PM"}
                </span>
              </div>

              {i < weeklyCycle.steps.length - 1 && (
                <div className="hidden items-center justify-center md:flex">
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  >
                    <ArrowRight className="h-6 w-6 text-midblue" />
                  </motion.div>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
