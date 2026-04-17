import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const LETTER_PARAGRAPHS = [
  "My dearest Vaishu,",
  "Where do I even begin... From the moment you came into my life, everything became a little brighter, a little more beautiful, a little more whole. You are not just someone I know — you are the warmth I feel on a cold day, the smile I wake up with, the reason my heart feels full.",
  "I still remember the first time we truly laughed together — how time just disappeared, how it felt like the universe paused just for us. That is you, Vaishu. You make every ordinary moment feel like something from a dream.",
  "On this beautiful birthday, I want the world to know how extraordinary you are. Your kindness is a rare gift. Your presence is a calm I never knew I needed. And your love — your love is the most precious thing I have ever been blessed with.",
  "Today and every day, know that you are deeply, endlessly, unconditionally loved. May this year be everything your beautiful heart deserves — overflowing with joy, magic, and every dream you've ever held close.",
  "Happy Birthday, my dearest Vaishu. You are my forever favourite. 💕",
];

export function EnvelopeLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      data-ocid="envelope.section"
      className="py-20 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.95 0.02 350) 0%, oklch(0.97 0.015 60) 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute top-20 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.78 0.12 345 / 0.1)",
          filter: "blur(56px)",
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-3"
            style={{ color: "oklch(0.38 0.10 30)" }}
          >
            A Letter For You 💌
          </h2>
          <p className="font-body text-muted-foreground tracking-wide">
            Written from the heart — tap the envelope to open
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Envelope (shown when closed) */}
          {!isOpen && (
            <button
              type="button"
              className="relative w-full max-w-sm bg-transparent border-none p-0 cursor-pointer"
              onClick={() => setIsOpen(true)}
              data-ocid="envelope.open_modal_button"
              aria-label="Open birthday letter"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative rounded-xl overflow-hidden"
                style={{
                  aspectRatio: "1.6/1",
                  background:
                    "linear-gradient(135deg, oklch(0.88 0.10 345) 0%, oklch(0.82 0.14 350) 100%)",
                  boxShadow:
                    "0 16px 48px oklch(0.65 0.15 345 / 0.25), 0 4px 12px oklch(0.65 0.14 50 / 0.2)",
                  border: "1.5px solid oklch(0.75 0.10 50 / 0.4)",
                }}
              >
                {/* Envelope flap */}
                <div
                  className="absolute top-0 left-0 right-0"
                  style={{ height: "55%" }}
                >
                  <svg
                    viewBox="0 0 320 100"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <polygon
                      points="0,0 320,0 160,95"
                      fill="oklch(0.80 0.13 350)"
                      stroke="oklch(0.72 0.11 50 / 0.4)"
                      strokeWidth="1"
                    />
                  </svg>
                </div>

                {/* Bottom-left triangle */}
                <div
                  className="absolute bottom-0 left-0"
                  style={{ width: "52%", height: "60%" }}
                >
                  <svg
                    viewBox="0 0 160 100"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <polygon
                      points="0,100 160,0 0,0"
                      fill="oklch(0.84 0.12 348)"
                    />
                  </svg>
                </div>

                {/* Bottom-right triangle */}
                <div
                  className="absolute bottom-0 right-0"
                  style={{ width: "52%", height: "60%" }}
                >
                  <svg
                    viewBox="0 0 160 100"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <polygon
                      points="160,100 0,0 160,0"
                      fill="oklch(0.84 0.12 348)"
                    />
                  </svg>
                </div>

                {/* Wax seal */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="flex flex-col items-center justify-center rounded-full w-16 h-16"
                    style={{
                      background:
                        "radial-gradient(circle, oklch(0.52 0.18 30) 0%, oklch(0.42 0.16 25) 100%)",
                      boxShadow:
                        "0 0 0 3px oklch(0.70 0.14 50 / 0.5), 0 4px 16px oklch(0.42 0.16 25 / 0.5)",
                    }}
                  >
                    <span className="text-2xl leading-none">💕</span>
                    <span
                      className="text-xs font-display font-bold tracking-widest mt-0.5"
                      style={{ color: "oklch(0.95 0.04 350)" }}
                    >
                      V
                    </span>
                  </motion.div>
                </div>

                {/* Stamp */}
                <div
                  className="absolute top-3 right-3 w-10 h-12 rounded-sm flex items-center justify-center z-20"
                  style={{
                    background: "oklch(0.95 0.05 75 / 0.9)",
                    border: "1.5px dashed oklch(0.72 0.12 50 / 0.5)",
                    boxShadow: "0 1px 4px oklch(0.60 0.14 45 / 0.3)",
                  }}
                >
                  <span className="text-xl" aria-hidden="true">
                    🌸
                  </span>
                </div>

                {/* Pulsing open hint */}
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-body tracking-widest z-20"
                  style={{ color: "oklch(0.55 0.14 345)" }}
                >
                  ✦ tap to open ✦
                </motion.div>
              </motion.div>
            </button>
          )}

          {/* Letter revealed after opening */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                data-ocid="envelope.dialog"
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full relative rounded-2xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.975 0.015 75) 0%, oklch(0.96 0.025 350) 60%, oklch(0.97 0.02 60) 100%)",
                  boxShadow:
                    "0 12px 56px oklch(0.65 0.15 345 / 0.18), 0 2px 12px oklch(0.65 0.14 50 / 0.15), inset 0 1px 0 oklch(0.95 0.02 75)",
                }}
              >
                {/* Gold left border */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{
                    background:
                      "linear-gradient(180deg, oklch(0.78 0.12 75), oklch(0.65 0.15 50), oklch(0.82 0.1 70), oklch(0.60 0.14 45))",
                  }}
                />
                {/* Gold top border */}
                <div
                  className="absolute top-0 right-0 left-0 h-1 rounded-t-2xl opacity-60"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(0.70 0.13 50), oklch(0.65 0.15 345), oklch(0.70 0.13 50), transparent)",
                  }}
                />

                {/* Close button */}
                <button
                  type="button"
                  data-ocid="envelope.close_button"
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-10 rounded-full w-8 h-8 flex items-center justify-center transition-smooth hover:scale-110"
                  style={{
                    background: "oklch(0.55 0.18 30 / 0.12)",
                    border: "1px solid oklch(0.65 0.12 50 / 0.3)",
                    color: "oklch(0.45 0.12 25)",
                  }}
                  aria-label="Close letter"
                >
                  ✕
                </button>

                <div
                  aria-hidden="true"
                  className="absolute top-4 right-14 opacity-20 text-3xl select-none pointer-events-none"
                >
                  🌸
                </div>
                <div
                  aria-hidden="true"
                  className="absolute bottom-4 right-10 opacity-15 text-2xl select-none pointer-events-none"
                >
                  🌹
                </div>
                <div
                  aria-hidden="true"
                  className="absolute bottom-6 left-12 opacity-15 text-xl select-none pointer-events-none"
                >
                  ✨
                </div>

                <div className="px-8 py-10 pl-10">
                  {LETTER_PARAGRAPHS.map((para, i) => (
                    <motion.p
                      key={para.slice(0, 30)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                      className={`font-display leading-relaxed tracking-wide ${
                        i === 0
                          ? "text-xl font-semibold mb-5"
                          : i === LETTER_PARAGRAPHS.length - 1
                            ? "text-base italic mt-5"
                            : "text-base mb-4 italic"
                      }`}
                      style={{
                        color:
                          i === 0
                            ? "oklch(0.38 0.10 30)"
                            : "oklch(0.32 0.07 20)",
                        fontStyle: i === 0 ? "normal" : "italic",
                      }}
                    >
                      {para}
                    </motion.p>
                  ))}

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
            )}
          </AnimatePresence>
        </motion.div>

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
