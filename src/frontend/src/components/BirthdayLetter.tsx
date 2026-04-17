import { motion } from "motion/react";

const LETTER_TEXT = `Dear Vaishu,

Where do I even begin... From the moment you walked into my life, everything got a little brighter, a little more colorful, a little more fun. You are not just my friend — you are my adventure partner, my laugh-out-loud companion, my home away from home.

I still remember the first time we truly laughed together — how time just disappeared and it felt like we had known each other forever. That is you, Vaishu. You make every moment feel timeless.

On this special day, I want you to know just how deeply you are loved — not just by me, but by everyone whose life you have touched. Your kindness, your warmth, your infectious smile — these are gifts you give the world every single day without even realizing it.

So today, I hope the universe gives back to you even a fraction of the joy you bring to others. May this year be your most beautiful yet — full of laughter, love, new adventures, and all the things your heart desires.

Happy Birthday, my dearest Vaishu. Here is to you. 💕`;

const paragraphs = LETTER_TEXT.split("\n\n");

export function BirthdayLetter() {
  return (
    <section
      data-ocid="letter.section"
      className="py-20 px-4"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.95 0.02 350) 0%, oklch(0.97 0.015 60) 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl font-display mb-3"
            style={{ color: "oklch(0.38 0.10 30)" }}
          >
            A Letter For You 💌
          </h2>
          <p className="font-body text-muted-foreground tracking-wide">
            Written from the heart
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

        {/* Parchment letter card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          data-ocid="letter.card"
          className="relative rounded-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.975 0.015 75) 0%, oklch(0.96 0.025 350) 60%, oklch(0.97 0.02 60) 100%)",
            boxShadow:
              "0 12px 48px oklch(0.65 0.15 345 / 0.18), 0 2px 12px oklch(0.65 0.14 50 / 0.15), inset 0 1px 0 oklch(0.95 0.02 75)",
          }}
        >
          {/* Gold left border accent */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.78 0.12 75), oklch(0.65 0.15 50), oklch(0.82 0.1 70), oklch(0.60 0.14 45))",
            }}
          />

          {/* Decorative top pattern */}
          <div
            className="absolute top-0 right-0 left-0 h-1 rounded-t-2xl opacity-60"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.70 0.13 50), oklch(0.65 0.15 345), oklch(0.70 0.13 50), transparent)",
            }}
          />

          {/* Decorative rose petal shapes */}
          <div
            className="absolute top-4 right-6 opacity-20 text-4xl select-none pointer-events-none"
            aria-hidden
          >
            🌸
          </div>
          <div
            className="absolute bottom-4 right-10 opacity-15 text-3xl select-none pointer-events-none"
            aria-hidden
          >
            🌹
          </div>
          <div
            className="absolute bottom-6 left-12 opacity-15 text-2xl select-none pointer-events-none"
            aria-hidden
          >
            ✨
          </div>

          {/* Letter content */}
          <div className="px-8 py-10 pl-10">
            {paragraphs.map((para, i) => (
              <motion.p
                key={para.slice(0, 30)}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className={`font-display leading-relaxed tracking-wide ${
                  i === 0
                    ? "text-xl font-semibold mb-5"
                    : i === paragraphs.length - 1
                      ? "text-base italic mt-5"
                      : "text-base mb-4 italic"
                }`}
                style={{
                  color:
                    i === 0 ? "oklch(0.38 0.10 30)" : "oklch(0.32 0.07 20)",
                  fontStyle: i === 0 ? "normal" : "italic",
                }}
              >
                {para}
              </motion.p>
            ))}

            {/* Signature divider */}
            <div className="mt-8 flex items-center gap-4">
              <div
                className="flex-1 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.70 0.13 50), transparent)",
                }}
              />
              <span
                style={{ color: "oklch(0.65 0.15 345)" }}
                className="text-xl"
              >
                💕
              </span>
              <div
                className="flex-1 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.70 0.13 50))",
                }}
              />
            </div>

            {/* Date badge */}
            <div className="mt-6 flex justify-center">
              <div
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-display tracking-widest"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.18 30 / 0.10), oklch(0.65 0.15 345 / 0.10))",
                  border: "1px solid oklch(0.65 0.12 50 / 0.3)",
                  color: "oklch(0.42 0.12 30)",
                }}
              >
                <span>🤍</span>
                <span>Happy Birthday, Vaishu</span>
                <span>🤍</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom flourish */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p
            className="font-display italic text-base"
            style={{ color: "oklch(0.55 0.10 345)" }}
          >
            May 8 — A day as beautiful as you 🌸
          </p>
        </motion.div>
      </div>
    </section>
  );
}
