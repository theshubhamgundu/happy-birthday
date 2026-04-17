import type { Sticker } from "../types";

const stickers: Sticker[] = [
  {
    id: "s1",
    emoji: "💗",
    top: "5%",
    left: "2%",
    size: "text-2xl",
    opacity: "opacity-40",
    delay: "0s",
    duration: "4s",
  },
  {
    id: "s2",
    emoji: "⭐",
    top: "8%",
    right: "3%",
    size: "text-xl",
    opacity: "opacity-35",
    delay: "0.5s",
    duration: "3.5s",
  },
  {
    id: "s3",
    emoji: "🌸",
    top: "15%",
    left: "5%",
    size: "text-3xl",
    opacity: "opacity-30",
    delay: "1s",
    duration: "5s",
  },
  {
    id: "s4",
    emoji: "✨",
    top: "20%",
    right: "7%",
    size: "text-2xl",
    opacity: "opacity-45",
    delay: "1.5s",
    duration: "4.5s",
  },
  {
    id: "s5",
    emoji: "🦋",
    top: "30%",
    left: "1%",
    size: "text-2xl",
    opacity: "opacity-35",
    delay: "2s",
    duration: "6s",
  },
  {
    id: "s6",
    emoji: "🎀",
    top: "35%",
    right: "2%",
    size: "text-xl",
    opacity: "opacity-30",
    delay: "0.8s",
    duration: "3.8s",
  },
  {
    id: "s7",
    emoji: "💕",
    top: "45%",
    left: "3%",
    size: "text-xl",
    opacity: "opacity-40",
    delay: "2.5s",
    duration: "4.2s",
  },
  {
    id: "s8",
    emoji: "🌺",
    top: "50%",
    right: "4%",
    size: "text-2xl",
    opacity: "opacity-30",
    delay: "1.2s",
    duration: "5.5s",
  },
  {
    id: "s9",
    emoji: "💖",
    top: "60%",
    left: "2%",
    size: "text-xl",
    opacity: "opacity-35",
    delay: "0.3s",
    duration: "4s",
  },
  {
    id: "s10",
    emoji: "🌟",
    top: "65%",
    right: "3%",
    size: "text-xl",
    opacity: "opacity-40",
    delay: "1.8s",
    duration: "3.5s",
  },
  {
    id: "s11",
    emoji: "🌼",
    top: "75%",
    left: "4%",
    size: "text-2xl",
    opacity: "opacity-30",
    delay: "0.7s",
    duration: "5s",
  },
  {
    id: "s12",
    emoji: "💫",
    top: "80%",
    right: "5%",
    size: "text-xl",
    opacity: "opacity-35",
    delay: "2.2s",
    duration: "4.8s",
  },
  {
    id: "s13",
    emoji: "🎀",
    top: "88%",
    left: "3%",
    size: "text-xl",
    opacity: "opacity-30",
    delay: "1.6s",
    duration: "4.5s",
  },
  {
    id: "s14",
    emoji: "💗",
    top: "92%",
    right: "2%",
    size: "text-2xl",
    opacity: "opacity-40",
    delay: "0.4s",
    duration: "3.8s",
  },
  {
    id: "s15",
    emoji: "🌸",
    top: "12%",
    left: "50%",
    size: "text-xl",
    opacity: "opacity-20",
    delay: "3s",
    duration: "5.5s",
  },
  {
    id: "s16",
    emoji: "✨",
    top: "55%",
    left: "92%",
    size: "text-xl",
    opacity: "opacity-25",
    delay: "1.4s",
    duration: "4s",
  },
  {
    id: "s17",
    emoji: "💎",
    top: "40%",
    left: "96%",
    size: "text-lg",
    opacity: "opacity-30",
    delay: "2.8s",
    duration: "4.5s",
  },
  {
    id: "s18",
    emoji: "🌷",
    top: "70%",
    left: "0%",
    size: "text-2xl",
    opacity: "opacity-35",
    delay: "0.6s",
    duration: "6s",
  },
];

export function FloatingStickers() {
  return (
    <div
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {stickers.map((s) => (
        <span
          key={s.id}
          className={`absolute ${s.size} ${s.opacity}`}
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            bottom: s.bottom,
            animation: `float ${s.duration} ease-in-out infinite`,
            animationDelay: s.delay,
          }}
        >
          {s.emoji}
        </span>
      ))}
    </div>
  );
}
