import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { capabilityBlocks } from "../data/content";
import Reveal from "./Reveal";

export default function Capabilities() {
  const [active, setActive] = useState(capabilityBlocks[0].id);
  const block = capabilityBlocks.find((b) => b.id === active)!;
  const total = capabilityBlocks.reduce((n, b) => n + b.items.length, 0);

  return (
    <section id="capacidades" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue">
              {total} capacidades · 3 bloques
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Todo lo que un proyecto necesita, generado y conectado.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Cada capacidad se alimenta de la anterior. El PM dirige; el sistema
              produce las evidencias y las mantiene coherentes entre sí.
            </p>
          </div>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.05}>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {capabilityBlocks.map((b) => (
              <button
                key={b.id}
                onClick={() => setActive(b.id)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active === b.id
                    ? "text-white"
                    : "text-body hover:text-primary"
                }`}
              >
                {active === b.id && (
                  <motion.span
                    layoutId="cap-tab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-blue"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">
                  {b.label}
                  <span
                    className={`ml-2 rounded-full px-1.5 py-0.5 text-[11px] ${
                      active === b.id
                        ? "bg-white/20"
                        : "bg-slate-100 text-muted"
                    }`}
                  >
                    {b.items.length}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <p className="mt-6 text-center text-sm italic text-muted">
          {block.tagline}
        </p>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {block.items.map((c) => (
              <div
                key={c.name}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-blue/30 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-lightblue text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-ink">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {c.benefit}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
