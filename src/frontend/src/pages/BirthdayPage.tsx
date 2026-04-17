import { motion } from "motion/react";
import { BirthdayCake } from "../components/BirthdayCake";
import { BirthdayWish } from "../components/BirthdayWish";
import { CountdownTimer } from "../components/CountdownTimer";
import { EnvelopeLetter } from "../components/EnvelopeLetter";
import { FloatingStickers } from "../components/FloatingStickers";
import { HeroSection } from "../components/HeroSection";
import { LoveReasons } from "../components/LoveReasons";
import { PhotoGallery } from "../components/PhotoGallery";
import { SectionDivider } from "../components/SectionDivider";

export default function BirthdayPage() {
  return (
    <div className="overflow-x-hidden relative" data-ocid="birthday.page">
      {/* Floating stickers overlay across entire page */}
      <FloatingStickers />

      {/* HERO SECTION */}
      <HeroSection />

      {/* COUNTDOWN SECTION */}
      <CountdownTimer />

      <SectionDivider variant="hearts" />

      {/* BIRTHDAY WISH */}
      <BirthdayWish />

      <SectionDivider variant="floral" />

      {/* BIRTHDAY CAKE */}
      <BirthdayCake />

      <SectionDivider variant="stars" />

      {/* ANIMATED ENVELOPE LETTER */}
      <EnvelopeLetter />

      <SectionDivider variant="hearts" />

      {/* 10 REASONS I LOVE YOU */}
      <LoveReasons />

      <SectionDivider variant="floral" />

      {/* PHOTO GALLERY */}
      <PhotoGallery />

      {/* FOOTER SIGN-OFF */}
      <section
        className="py-16 px-6 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.93 0.04 35) 0%, oklch(0.96 0.02 350) 100%)",
        }}
        data-ocid="birthday.signoff.section"
      >
        {/* Bokeh */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div
            className="w-96 h-96 rounded-full"
            style={{
              background: "oklch(0.80 0.10 345 / 0.1)",
              filter: "blur(60px)",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mx-auto relative z-10"
        >
          <div className="flex justify-center gap-3 mb-6 text-2xl">
            <span className="float" style={{ animationDelay: "0s" }}>
              💕
            </span>
            <span className="float" style={{ animationDelay: "0.3s" }}>
              🌸
            </span>
            <span className="float" style={{ animationDelay: "0.6s" }}>
              ✨
            </span>
            <span className="float" style={{ animationDelay: "0.9s" }}>
              🌸
            </span>
            <span className="float" style={{ animationDelay: "1.2s" }}>
              💕
            </span>
          </div>

          <p
            className="font-display text-3xl md:text-4xl font-bold italic mb-3"
            style={{ color: "oklch(0.48 0.16 28)" }}
          >
            May 8, 2026
          </p>
          <p
            className="font-body text-lg"
            style={{ color: "oklch(0.5 0.04 30)" }}
          >
            Made with love for Vaishu.{" "}
            <span className="font-semibold text-primary">#VaishuDay</span>
          </p>

          <p
            className="text-sm mt-6"
            style={{ color: "oklch(0.6 0.04 30 / 0.7)" }}
          >
            © {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
