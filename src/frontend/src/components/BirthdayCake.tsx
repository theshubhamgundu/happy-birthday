import { motion } from "motion/react";

function CandleFlame({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="relative"
      animate={{ rotate: [-3, 3, -3] }}
      transition={{
        duration: 0.6,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "easeInOut",
      }}
    >
      <div
        className="w-3 h-5 rounded-tl-full rounded-tr-full rounded-bl-md rounded-br-md"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.95 0.15 75) 0%, oklch(0.78 0.18 50) 50%, oklch(0.60 0.20 35) 100%)",
          boxShadow:
            "0 0 8px 3px oklch(0.80 0.15 60 / 0.7), 0 0 4px 1px oklch(0.90 0.12 75 / 0.5)",
        }}
      />
      <div
        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-3 rounded-tl-full rounded-tr-full"
        style={{ background: "oklch(0.98 0.04 85 / 0.9)" }}
      />
    </motion.div>
  );
}

function Candle({ delay = 0 }: { delay?: number }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <CandleFlame delay={delay} />
      <div
        className="w-2.5 h-8 rounded-sm"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.90 0.08 345) 0%, oklch(0.78 0.12 350) 100%)",
          boxShadow: "inset -1px 0 2px oklch(0.50 0.08 345 / 0.4)",
        }}
      />
    </div>
  );
}

interface SparkleItem {
  id: string;
  x: string;
  y: string;
  rotate: number;
  color: string;
}

interface RibbonItem {
  id: string;
  x: string;
  heart: boolean;
}

const topSprinkles: SparkleItem[] = [
  { id: "ts1", x: "20%", y: "40%", rotate: 30, color: "oklch(0.82 0.14 50)" },
  { id: "ts2", x: "40%", y: "60%", rotate: -20, color: "oklch(0.80 0.15 75)" },
  { id: "ts3", x: "60%", y: "35%", rotate: 45, color: "oklch(0.78 0.15 40)" },
  { id: "ts4", x: "75%", y: "65%", rotate: 15, color: "oklch(0.75 0.16 345)" },
  { id: "ts5", x: "85%", y: "45%", rotate: -35, color: "oklch(0.80 0.13 60)" },
];

const midSprinkles: SparkleItem[] = [
  { id: "ms1", x: "15%", y: "60%", rotate: 25, color: "oklch(0.82 0.14 50)" },
  { id: "ms2", x: "45%", y: "70%", rotate: -15, color: "oklch(0.80 0.14 75)" },
  { id: "ms3", x: "65%", y: "55%", rotate: 50, color: "oklch(0.78 0.15 40)" },
  { id: "ms4", x: "88%", y: "65%", rotate: -40, color: "oklch(0.80 0.13 60)" },
];

const midHearts: RibbonItem[] = [
  { id: "mh1", x: "12%", heart: true },
  { id: "mh2", x: "35%", heart: true },
  { id: "mh3", x: "58%", heart: true },
  { id: "mh4", x: "80%", heart: true },
];

const botDrips: number[] = [
  10, 28, 46, 64, 82, 100, 118, 136, 154, 172, 190, 208,
];

const botSprinkles: SparkleItem[] = [
  { id: "bs1", x: "8%", y: "75%", rotate: 20, color: "oklch(0.90 0.10 75)" },
  { id: "bs2", x: "22%", y: "80%", rotate: -30, color: "oklch(0.90 0.10 50)" },
  { id: "bs3", x: "38%", y: "72%", rotate: 55, color: "oklch(0.88 0.10 85)" },
  { id: "bs4", x: "55%", y: "78%", rotate: -10, color: "oklch(0.90 0.10 60)" },
  { id: "bs5", x: "70%", y: "70%", rotate: 35, color: "oklch(0.88 0.10 70)" },
  { id: "bs6", x: "85%", y: "76%", rotate: -45, color: "oklch(0.90 0.10 45)" },
];

const topDrips: number[] = [12, 32, 52, 72, 92, 112, 132];
const midDrips: number[] = [10, 30, 50, 70, 90, 110, 130, 150, 170];

export function BirthdayCake() {
  return (
    <section
      data-ocid="cake.section"
      className="py-20 px-4 text-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.97 0.01 75) 0%, oklch(0.95 0.025 350) 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.85 0.10 50 / 0.1)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-2"
            style={{ color: "oklch(0.38 0.10 30)" }}
          >
            A Cake For You 🎂
          </h2>
          <p className="font-body text-muted-foreground">
            Made with love and candles 🕯️
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
          data-ocid="cake.illustration"
        >
          {/* Candles */}
          <div className="flex items-end justify-center gap-5 px-8">
            <Candle delay={0} />
            <Candle delay={0.15} />
            <Candle delay={0.08} />
            <Candle delay={0.22} />
            <Candle delay={0.05} />
          </div>

          {/* Top tier */}
          <div
            className="w-48 h-16 mx-auto rounded-t-lg relative overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.90 0.12 345) 0%, oklch(0.82 0.14 350) 100%)",
              boxShadow: "inset 0 -3px 8px oklch(0.60 0.15 345 / 0.3)",
            }}
          >
            {topDrips.map((left) => (
              <div
                key={`top-drip-${left}`}
                className="absolute top-0 w-3 rounded-b-full"
                style={{
                  left,
                  height: `${14 + ((left * 7) % 10)}px`,
                  background: "oklch(0.96 0.04 345 / 0.85)",
                }}
              />
            ))}
            {topSprinkles.map((sp) => (
              <div
                key={sp.id}
                className="absolute w-1 h-3 rounded-full"
                style={{
                  left: sp.x,
                  top: sp.y,
                  transform: `rotate(${sp.rotate}deg)`,
                  background: sp.color,
                }}
              />
            ))}
          </div>

          {/* Middle tier */}
          <div
            className="w-64 h-20 mx-auto relative overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.85 0.14 350) 0%, oklch(0.78 0.16 345) 100%)",
              boxShadow: "inset 0 -4px 10px oklch(0.55 0.16 345 / 0.3)",
            }}
          >
            {midDrips.map((left) => (
              <div
                key={`mid-drip-${left}`}
                className="absolute top-0 w-3 rounded-b-full"
                style={{
                  left,
                  height: `${13 + ((left * 11) % 12)}px`,
                  background: "oklch(0.96 0.04 345 / 0.85)",
                }}
              />
            ))}
            {midHearts.map((h) => (
              <div
                key={h.id}
                className="absolute text-base"
                style={{
                  left: h.x,
                  top: "40%",
                  transform: "translateY(-50%)",
                  color: "oklch(0.96 0.08 345 / 0.7)",
                }}
              >
                ♥
              </div>
            ))}
            {midSprinkles.map((sp) => (
              <div
                key={sp.id}
                className="absolute w-1 h-3 rounded-full"
                style={{
                  left: sp.x,
                  top: sp.y,
                  transform: `rotate(${sp.rotate}deg)`,
                  background: sp.color,
                }}
              />
            ))}
          </div>

          {/* Bottom tier */}
          <div
            className="h-24 mx-auto rounded-b-2xl relative overflow-hidden"
            style={{
              width: "320px",
              background:
                "linear-gradient(180deg, oklch(0.80 0.16 345) 0%, oklch(0.72 0.18 340) 100%)",
              boxShadow:
                "0 12px 40px oklch(0.65 0.15 345 / 0.35), inset 0 -4px 12px oklch(0.50 0.18 340 / 0.3)",
            }}
          >
            {botDrips.map((left) => (
              <div
                key={`bot-drip-${left}`}
                className="absolute top-0 w-3 rounded-b-full"
                style={{
                  left,
                  height: `${12 + ((left * 9) % 14)}px`,
                  background: "oklch(0.96 0.04 345 / 0.85)",
                }}
              />
            ))}
            {/* Gold ribbon band */}
            <div
              className="absolute top-1/2 left-0 right-0 h-4 -translate-y-1/2"
              style={{
                background:
                  "linear-gradient(180deg, oklch(0.82 0.12 70) 0%, oklch(0.72 0.14 55) 50%, oklch(0.82 0.12 70) 100%)",
                opacity: 0.7,
              }}
            />
            {botSprinkles.map((sp) => (
              <div
                key={sp.id}
                className="absolute w-1 h-3 rounded-full"
                style={{
                  left: sp.x,
                  top: sp.y,
                  transform: `rotate(${sp.rotate}deg)`,
                  background: sp.color,
                }}
              />
            ))}
          </div>

          {/* Cake plate */}
          <div
            className="mx-auto rounded-b-full h-3"
            style={{
              width: "340px",
              background:
                "linear-gradient(180deg, oklch(0.82 0.10 65) 0%, oklch(0.75 0.12 55) 100%)",
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-lg md:text-xl italic mt-10 max-w-md mx-auto leading-relaxed"
          style={{ color: "oklch(0.42 0.12 28)" }}
          data-ocid="cake.wish"
        >
          May your birthday be as beautiful as your smile, Vaishu! 🎂✨
        </motion.p>
      </div>
    </section>
  );
}
