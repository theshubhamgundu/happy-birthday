import { motion } from "motion/react";
import { useCountdown } from "../hooks/useCountdown";

function CountdownUnit({
  value,
  label,
  delay,
}: {
  value: number;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 120 }}
      className="flex flex-col items-center gap-2"
      data-ocid={`birthday.countdown.unit.${label.toLowerCase()}`}
    >
      <div
        className="relative w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center"
        style={{
          background: "oklch(0.97 0.02 345)",
          boxShadow:
            "0 0 0 2px oklch(0.55 0.18 30 / 0.3), inset 0 2px 8px oklch(0.55 0.18 30 / 0.08), 0 6px 20px oklch(0.55 0.18 30 / 0.18)",
        }}
      >
        {/* Inner ring accent */}
        <div
          className="absolute inset-2 rounded-full"
          style={{
            background: "transparent",
            border: "1px solid oklch(0.55 0.18 30 / 0.15)",
          }}
        />
        <span
          className="font-display text-2xl md:text-4xl font-bold relative z-10"
          style={{ color: "oklch(0.48 0.16 28)" }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span
        className="text-xs font-body font-semibold tracking-widest uppercase"
        style={{ color: "oklch(0.55 0.06 30)" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

function Separator({ delay }: { delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="font-display text-3xl md:text-5xl font-light mb-6"
      style={{ color: "oklch(0.55 0.18 30 / 0.45)" }}
    >
      :
    </motion.span>
  );
}

export function CountdownTimer() {
  const countdown = useCountdown();

  return (
    <section
      className="py-20 px-6 text-center"
      style={{ background: "oklch(0.97 0.01 75)" }}
      data-ocid="birthday.countdown.section"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-body text-sm tracking-[0.25em] uppercase mb-3"
          style={{ color: "oklch(0.55 0.18 30 / 0.6)" }}
        >
          ✦ Counting Down ✦
        </motion.p>

        <h2
          className="font-display text-4xl md:text-5xl font-bold mb-3"
          style={{ color: "oklch(0.3 0.06 15)" }}
        >
          Memory Timeline
        </h2>
        <p
          className="font-body text-lg mb-12"
          style={{ color: "oklch(0.5 0.04 30)" }}
        >
          {countdown.isPast
            ? "🎉 Her birthday is here! Happy Birthday Vaishu! 🎉"
            : "An elegant countdown to May 8th"}
        </p>

        {!countdown.isPast && (
          <div
            className="flex items-center justify-center gap-3 md:gap-6"
            data-ocid="birthday.countdown.display"
          >
            <CountdownUnit value={countdown.days} label="Days" delay={0} />
            <Separator delay={0.05} />
            <CountdownUnit value={countdown.hours} label="Hours" delay={0.1} />
            <Separator delay={0.15} />
            <CountdownUnit
              value={countdown.minutes}
              label="Minutes"
              delay={0.2}
            />
            <Separator delay={0.25} />
            <CountdownUnit
              value={countdown.seconds}
              label="Seconds"
              delay={0.3}
            />
          </div>
        )}

        {countdown.isPast && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-4xl flex justify-center gap-3"
            data-ocid="birthday.countdown.celebration"
          >
            <span className="float" style={{ animationDelay: "0s" }}>
              🎂
            </span>
            <span className="float" style={{ animationDelay: "0.3s" }}>
              🎉
            </span>
            <span className="float" style={{ animationDelay: "0.6s" }}>
              🌸
            </span>
          </motion.div>
        )}

        <div className="flex justify-center gap-4 mt-10 text-xl">
          <span
            className="float"
            style={{ animationDelay: "0s", opacity: 0.5 }}
          >
            💗
          </span>
          <span
            className="float"
            style={{ animationDelay: "0.5s", opacity: 0.5 }}
          >
            💗
          </span>
          <span
            className="float"
            style={{ animationDelay: "1s", opacity: 0.5 }}
          >
            💗
          </span>
        </div>
      </motion.div>
    </section>
  );
}
