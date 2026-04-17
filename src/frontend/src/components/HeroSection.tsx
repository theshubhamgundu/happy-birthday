import { motion } from "motion/react";

interface FloatingEmoji {
  id: string;
  emoji: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: string;
  opacity: string;
  delay: string;
}

const floatingEmojis: FloatingEmoji[] = [
  {
    id: "petal-tl",
    emoji: "🌸",
    top: "top-8",
    left: "left-8",
    size: "text-5xl",
    opacity: "opacity-60",
    delay: "0s",
  },
  {
    id: "flower-tr",
    emoji: "🌺",
    top: "top-16",
    right: "right-12",
    size: "text-4xl",
    opacity: "opacity-50",
    delay: "0.8s",
  },
  {
    id: "tulip-bl",
    emoji: "🌷",
    bottom: "bottom-24",
    left: "left-16",
    size: "text-3xl",
    opacity: "opacity-40",
    delay: "1.5s",
  },
  {
    id: "petal-br",
    emoji: "🌸",
    bottom: "bottom-16",
    right: "right-8",
    size: "text-5xl",
    opacity: "opacity-55",
    delay: "0.4s",
  },
  {
    id: "spark-ml",
    emoji: "✨",
    top: "top-1/3",
    left: "left-4",
    size: "text-2xl",
    opacity: "opacity-30",
    delay: "2s",
  },
  {
    id: "spark-mr",
    emoji: "✨",
    top: "top-1/4",
    right: "right-4",
    size: "text-3xl",
    opacity: "opacity-35",
    delay: "1.2s",
  },
  {
    id: "heart-bl",
    emoji: "💕",
    bottom: "bottom-32",
    left: "left-1/4",
    size: "text-2xl",
    opacity: "opacity-25",
    delay: "0.6s",
  },
  {
    id: "spark-br",
    emoji: "✨",
    top: "top-2/3",
    right: "right-1/4",
    size: "text-xl",
    opacity: "opacity-30",
    delay: "1.8s",
  },
];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.93 0.04 35) 0%, oklch(0.96 0.02 350) 40%, oklch(0.92 0.05 25) 100%)",
      }}
      data-ocid="birthday.hero.section"
    >
      {/* Floating decoration emojis */}
      {floatingEmojis.map((item) => (
        <div
          key={item.id}
          className={`absolute ${item.size} ${item.opacity} float pointer-events-none select-none`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            animationDelay: item.delay,
          }}
        >
          {item.emoji}
        </div>
      ))}

      {/* Bokeh glow orbs */}
      <div
        className="absolute top-20 left-1/4 w-48 h-48 rounded-full pulse-glow pointer-events-none"
        style={{
          background: "oklch(0.75 0.12 345 / 0.2)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full pulse-glow pointer-events-none"
        style={{
          background: "oklch(0.7 0.14 30 / 0.15)",
          filter: "blur(50px)",
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.85 0.06 50 / 0.1)",
          filter: "blur(60px)",
        }}
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          style={{ color: "oklch(0.55 0.18 30 / 0.7)" }}
        >
          ✦ A Special Tribute ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl md:text-8xl font-bold leading-tight mb-4"
          style={{ color: "oklch(0.32 0.08 20)" }}
        >
          Happy Birthday
          <br />
          <span className="italic" style={{ color: "oklch(0.48 0.16 28)" }}>
            Vaishu
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-body text-lg md:text-xl mt-4"
          style={{ color: "oklch(0.45 0.06 20)" }}
        >
          A special tribute for a beautiful soul
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
          className="flex justify-center gap-3 mt-8 text-2xl"
          data-ocid="birthday.hero.emojis"
        >
          <span className="float" style={{ animationDelay: "0s" }}>
            🌸
          </span>
          <span className="float" style={{ animationDelay: "0.3s" }}>
            💕
          </span>
          <span className="float" style={{ animationDelay: "0.6s" }}>
            ✨
          </span>
          <span className="float" style={{ animationDelay: "0.9s" }}>
            💕
          </span>
          <span className="float" style={{ animationDelay: "1.2s" }}>
            🌸
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        data-ocid="birthday.hero.scroll_indicator"
      >
        <span
          className="text-xs font-body tracking-widest uppercase"
          style={{ color: "oklch(0.55 0.18 30 / 0.5)" }}
        >
          Scroll to explore
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
