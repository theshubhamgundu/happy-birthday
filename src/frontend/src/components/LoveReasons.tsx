import { motion } from "motion/react";
import type { LoveReason } from "../types";

const reasons: LoveReason[] = [
  {
    id: "r1",
    number: 1,
    text: "I love the way you make me feel understood even when I can't explain myself.",
  },
  {
    id: "r2",
    number: 2,
    text: "I love how your presence alone makes everything feel peaceful.",
  },
  {
    id: "r3",
    number: 3,
    text: "I love the way you heal my heart without even trying.",
  },
  {
    id: "r4",
    number: 4,
    text: "I love how you make ordinary moments feel magical.",
  },
  {
    id: "r5",
    number: 5,
    text: "I love the comfort I feel whenever I talk to you.",
  },
  {
    id: "r6",
    number: 6,
    text: "I love how you bring out the best version of me.",
  },
  {
    id: "r7",
    number: 7,
    text: "I love the way your love feels pure and effortless.",
  },
  {
    id: "r8",
    number: 8,
    text: "I love how you turned my loneliness into happiness.",
  },
  {
    id: "r9",
    number: 9,
    text: "I love how you make me believe in beautiful bonds again.",
  },
  { id: "r10", number: 10, text: "I love everything about you." },
];

interface CardStyle {
  bg: string;
  border: string;
  numColor: string;
  numBg: string;
}

const cardStyles: CardStyle[] = [
  {
    bg: "oklch(0.96 0.03 345 / 0.85)",
    border: "1.5px solid oklch(0.75 0.14 345 / 0.4)",
    numColor: "oklch(0.48 0.16 345)",
    numBg: "oklch(0.96 0.04 345 / 0.15)",
  },
  {
    bg: "oklch(0.96 0.03 25 / 0.85)",
    border: "1.5px solid oklch(0.75 0.13 30 / 0.4)",
    numColor: "oklch(0.48 0.16 28)",
    numBg: "oklch(0.96 0.05 25 / 0.15)",
  },
  {
    bg: "oklch(0.96 0.02 350 / 0.85)",
    border: "1.5px solid oklch(0.72 0.12 350 / 0.4)",
    numColor: "oklch(0.50 0.15 345)",
    numBg: "oklch(0.95 0.04 350 / 0.15)",
  },
  {
    bg: "oklch(0.97 0.025 35 / 0.85)",
    border: "1.5px solid oklch(0.72 0.12 40 / 0.4)",
    numColor: "oklch(0.48 0.14 30)",
    numBg: "oklch(0.96 0.04 35 / 0.15)",
  },
  {
    bg: "oklch(0.96 0.03 345 / 0.85)",
    border: "1.5px solid oklch(0.75 0.14 345 / 0.4)",
    numColor: "oklch(0.48 0.16 345)",
    numBg: "oklch(0.96 0.04 345 / 0.15)",
  },
  {
    bg: "oklch(0.96 0.03 25 / 0.85)",
    border: "1.5px solid oklch(0.75 0.13 30 / 0.4)",
    numColor: "oklch(0.48 0.16 28)",
    numBg: "oklch(0.96 0.05 25 / 0.15)",
  },
  {
    bg: "oklch(0.96 0.02 350 / 0.85)",
    border: "1.5px solid oklch(0.72 0.12 350 / 0.4)",
    numColor: "oklch(0.50 0.15 345)",
    numBg: "oklch(0.95 0.04 350 / 0.15)",
  },
  {
    bg: "oklch(0.97 0.025 35 / 0.85)",
    border: "1.5px solid oklch(0.72 0.12 40 / 0.4)",
    numColor: "oklch(0.48 0.14 30)",
    numBg: "oklch(0.96 0.04 35 / 0.15)",
  },
  {
    bg: "oklch(0.96 0.03 345 / 0.85)",
    border: "1.5px solid oklch(0.75 0.14 345 / 0.4)",
    numColor: "oklch(0.48 0.16 345)",
    numBg: "oklch(0.96 0.04 345 / 0.15)",
  },
  {
    bg: "oklch(0.94 0.05 30 / 0.9)",
    border: "1.5px solid oklch(0.68 0.16 28 / 0.5)",
    numColor: "oklch(0.42 0.18 25)",
    numBg: "oklch(0.94 0.06 30 / 0.18)",
  },
];

function ReasonCard({ reason, index }: { reason: LoveReason; index: number }) {
  const style = cardStyles[index % cardStyles.length];
  const isLast = index === reasons.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.65,
        delay: 0.05 + index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      data-ocid={`love.item.${index + 1}`}
      className="group relative rounded-2xl p-5 flex items-start gap-4 transition-smooth hover:scale-[1.02]"
      style={{
        background: style.bg,
        border: style.border,
        boxShadow: isLast
          ? "0 8px 32px oklch(0.65 0.15 345 / 0.2), 0 2px 8px oklch(0.65 0.14 50 / 0.15)"
          : "0 4px 16px oklch(0.65 0.15 345 / 0.08), 0 1px 4px oklch(0.65 0.14 50 / 0.08)",
        backdropFilter: "blur(4px)",
      }}
    >
      {/* Number badge */}
      <div
        className="flex-none w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg shrink-0"
        style={{
          background: style.numBg,
          border: style.border,
          color: style.numColor,
        }}
      >
        {reason.number}
      </div>

      {/* Text */}
      <p
        className={`font-display leading-relaxed ${isLast ? "text-lg font-semibold italic" : "text-base italic"} flex-1 min-w-0`}
        style={{
          color: isLast ? "oklch(0.38 0.12 25)" : "oklch(0.32 0.07 20)",
        }}
      >
        {reason.text}
        {isLast && <span className="ml-2">💕</span>}
      </p>

      {/* Decorative hover sparkle */}
      <div
        aria-hidden="true"
        className="absolute top-3 right-3 text-sm opacity-0 group-hover:opacity-60 transition-smooth"
      >
        ✨
      </div>
    </motion.div>
  );
}

export function LoveReasons() {
  return (
    <section
      data-ocid="love.section"
      className="py-20 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.97 0.01 75) 0%, oklch(0.94 0.03 345) 50%, oklch(0.96 0.02 25) 100%)",
      }}
    >
      {/* Background bokeh */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.80 0.12 345 / 0.08)",
          filter: "blur(64px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.78 0.14 30 / 0.07)",
          filter: "blur(72px)",
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6, type: "spring" }}
            className="flex justify-center gap-2 mb-4 text-2xl"
          >
            <span className="float" style={{ animationDelay: "0s" }}>
              💗
            </span>
            <span className="float" style={{ animationDelay: "0.4s" }}>
              ✨
            </span>
            <span className="float" style={{ animationDelay: "0.8s" }}>
              💗
            </span>
          </motion.div>

          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-3"
            style={{ color: "oklch(0.38 0.10 30)" }}
          >
            10 Reasons I Love You
          </h2>
          <p className="font-body text-muted-foreground tracking-wide">
            For the one who makes my heart feel at home
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div
              className="h-px w-16"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.65 0.15 345))",
              }}
            />
            <span className="text-lg" style={{ color: "oklch(0.65 0.15 345)" }}>
              ♥
            </span>
            <div
              className="h-px w-16"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.65 0.15 345), transparent)",
              }}
            />
          </div>
        </motion.div>

        {/* Reasons list */}
        <div className="flex flex-col gap-4">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.id} reason={reason} index={i} />
          ))}
        </div>

        {/* Bottom flourish */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-10 flex justify-center gap-3 text-xl"
        >
          <span className="float" style={{ animationDelay: "0s" }}>
            💕
          </span>
          <span className="float" style={{ animationDelay: "0.4s" }}>
            🌸
          </span>
          <span className="float" style={{ animationDelay: "0.8s" }}>
            💕
          </span>
        </motion.div>
      </div>
    </section>
  );
}
