import { motion } from "motion/react";

const PETALS = [
  {
    id: "p1",
    emoji: "🌸",
    left: "10%",
    delay: "0s",
    duration: "6s",
    size: "text-2xl",
  },
  {
    id: "p2",
    emoji: "🌺",
    left: "25%",
    delay: "1s",
    duration: "5s",
    size: "text-xl",
  },
  {
    id: "p3",
    emoji: "🌸",
    left: "40%",
    delay: "2s",
    duration: "7s",
    size: "text-lg",
  },
  {
    id: "p4",
    emoji: "🌷",
    left: "55%",
    delay: "0.5s",
    duration: "5.5s",
    size: "text-2xl",
  },
  {
    id: "p5",
    emoji: "🌸",
    left: "70%",
    delay: "1.5s",
    duration: "6.5s",
    size: "text-xl",
  },
  {
    id: "p6",
    emoji: "🌺",
    left: "85%",
    delay: "3s",
    duration: "4.5s",
    size: "text-lg",
  },
];

export function BirthdayWish() {
  return (
    <section
      data-ocid="wish.section"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.94 0.04 345) 0%, oklch(0.96 0.03 25) 50%, oklch(0.93 0.04 350) 100%)",
      }}
    >
      {/* Falling petals */}
      {PETALS.map((p) => (
        <div
          key={p.id}
          aria-hidden="true"
          className={`absolute top-0 pointer-events-none select-none ${p.size} opacity-40`}
          style={{
            left: p.left,
            animation: `fall-petal ${p.duration} ease-in infinite`,
            animationDelay: p.delay,
          }}
        >
          {p.emoji}
        </div>
      ))}

      {/* Bokeh orbs */}
      <div
        aria-hidden="true"
        className="absolute top-10 left-1/3 w-40 h-40 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.75 0.14 345 / 0.15)",
          filter: "blur(48px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-1/3 w-56 h-56 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.72 0.13 30 / 0.12)",
          filter: "blur(56px)",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Decorative top */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="float text-2xl" style={{ animationDelay: "0s" }}>
              🌸
            </span>
            <span className="float text-3xl" style={{ animationDelay: "0.4s" }}>
              💕
            </span>
            <span className="float text-2xl" style={{ animationDelay: "0.8s" }}>
              🌸
            </span>
          </div>

          {/* Gold decorative border top */}
          <div
            className="h-px w-32 mx-auto mb-8"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.70 0.14 50), oklch(0.65 0.15 345), oklch(0.70 0.14 50), transparent)",
            }}
          />

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight"
            style={{ color: "oklch(0.35 0.12 25)" }}
          >
            Happy Birthday,
            <br />
            <span
              className="italic"
              style={{
                color: "oklch(0.48 0.16 28)",
                textShadow: "0 2px 24px oklch(0.65 0.15 345 / 0.3)",
              }}
            >
              Vaishu
            </span>{" "}
            🌸
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative rounded-3xl px-8 py-10 mx-auto max-w-2xl"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.98 0.015 75 / 0.85) 0%, oklch(0.97 0.02 345 / 0.85) 100%)",
              border: "1px solid oklch(0.75 0.10 50 / 0.35)",
              boxShadow:
                "0 16px 64px oklch(0.65 0.15 345 / 0.15), 0 4px 16px oklch(0.65 0.14 50 / 0.12)",
              backdropFilter: "blur(8px)",
            }}
          >
            {/* Corner accents */}
            <div
              aria-hidden="true"
              className="absolute top-3 left-3 text-xl opacity-50 float"
              style={{ animationDelay: "0.2s" }}
            >
              ✨
            </div>
            <div
              aria-hidden="true"
              className="absolute top-3 right-3 text-xl opacity-50 float"
              style={{ animationDelay: "0.6s" }}
            >
              ✨
            </div>
            <div
              aria-hidden="true"
              className="absolute bottom-3 left-3 text-xl opacity-40 float"
              style={{ animationDelay: "1s" }}
            >
              💫
            </div>
            <div
              aria-hidden="true"
              className="absolute bottom-3 right-3 text-xl opacity-40 float"
              style={{ animationDelay: "1.4s" }}
            >
              💫
            </div>

            <p
              className="font-display text-lg md:text-xl italic leading-relaxed"
              style={{ color: "oklch(0.32 0.07 20)" }}
            >
              Today is your day, and the world is brighter because you're in it.
              🌟 May this year bring you all the joy, love, and magic you
              deserve. You are my favorite person, and I love you more than
              words can say. 💕
            </p>
          </motion.div>

          {/* Gold decorative border bottom */}
          <div
            className="h-px w-32 mx-auto mt-8"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.70 0.14 50), oklch(0.65 0.15 345), oklch(0.70 0.14 50), transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
