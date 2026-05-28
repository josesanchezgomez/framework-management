import { motion } from "framer-motion";

// Mockup abstracto de "evidencias vivas" — sin datos reales, solo lenguaje visual.
const bars = [
  { w: "82%", d: 0.0, c: "bg-emerald-400" },
  { w: "64%", d: 0.08, c: "bg-midblue" },
  { w: "73%", d: 0.16, c: "bg-midblue" },
  { w: "48%", d: 0.24, c: "bg-amber-400" },
  { w: "90%", d: 0.32, c: "bg-emerald-400" },
  { w: "56%", d: 0.4, c: "bg-midblue" },
];

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* Tarjeta principal: planificación viva */}
      <div className="glass rounded-2xl border border-white/15 p-6 shadow-2xl shadow-primary-deep/40">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="text-sm font-semibold text-white/90">
              Planificación · viva
            </span>
          </div>
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/70">
            Semana actual
          </span>
        </div>

        <div className="space-y-3.5">
          {bars.map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-2 w-14 shrink-0 rounded-full bg-white/15" />
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className={`h-full rounded-full ${b.c}`}
                  initial={{ width: 0 }}
                  animate={{ width: b.w }}
                  transition={{ duration: 1, delay: 0.6 + b.d, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tarjeta flotante: cierre automático */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute -bottom-7 -left-6 w-56 rounded-xl border border-white/15 bg-white p-4 shadow-xl"
      >
        <p className="text-[11px] font-semibold uppercase tracking-wide text-blue">
          Cierre semanal
        </p>
        <p className="mt-1 text-sm font-medium text-ink">
          Recalculado en cascada
        </p>
        <div className="mt-2.5 flex gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <motion.span
              key={i}
              className="h-1.5 flex-1 rounded-full bg-blue/30"
              animate={{ backgroundColor: ["#9dc3e6", "#2e75b6", "#9dc3e6"] }}
              transition={{
                duration: 1.6,
                delay: 1.3 + i * 0.15,
                repeat: Infinity,
                repeatDelay: 1.2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Tarjeta flotante: memoria */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.25 }}
        className="absolute -right-5 -top-6 rounded-xl border border-white/15 bg-accent px-4 py-3 shadow-xl"
      >
        <p className="text-[11px] font-semibold uppercase tracking-wide text-white/80">
          Memoria
        </p>
        <p className="text-sm font-bold text-white">Contexto intacto</p>
      </motion.div>
    </motion.div>
  );
}
