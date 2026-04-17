interface SectionItem {
  id: string;
  symbol: string;
  isCenter: boolean;
}

interface SectionDividerProps {
  variant?: "floral" | "hearts" | "stars";
}

const dividerPatterns: Record<string, SectionItem[]> = {
  floral: [
    { id: "fl-1", symbol: "🌸", isCenter: false },
    { id: "fl-2", symbol: "✦", isCenter: false },
    { id: "fl-3", symbol: "🌺", isCenter: true },
    { id: "fl-4", symbol: "✦", isCenter: false },
    { id: "fl-5", symbol: "🌸", isCenter: false },
  ],
  hearts: [
    { id: "he-1", symbol: "💕", isCenter: false },
    { id: "he-2", symbol: "✦", isCenter: false },
    { id: "he-3", symbol: "💗", isCenter: true },
    { id: "he-4", symbol: "✦", isCenter: false },
    { id: "he-5", symbol: "💕", isCenter: false },
  ],
  stars: [
    { id: "st-1", symbol: "✨", isCenter: false },
    { id: "st-2", symbol: "✦", isCenter: false },
    { id: "st-3", symbol: "⭐", isCenter: true },
    { id: "st-4", symbol: "✦", isCenter: false },
    { id: "st-5", symbol: "✨", isCenter: false },
  ],
};

export function SectionDivider({ variant = "floral" }: SectionDividerProps) {
  const items = dividerPatterns[variant];

  return (
    <div
      className="flex items-center justify-center gap-3 py-8 px-6"
      aria-hidden="true"
    >
      <div
        className="flex-1 h-px max-w-32"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.70 0.12 50 / 0.5))",
        }}
      />
      {items.map((item) => (
        <span
          key={item.id}
          className="text-lg"
          style={{
            color: item.isCenter
              ? "oklch(0.68 0.14 345)"
              : "oklch(0.72 0.12 50)",
            opacity: item.isCenter ? 0.9 : 0.6,
            fontSize: item.isCenter ? "1.25rem" : "1rem",
          }}
        >
          {item.symbol}
        </span>
      ))}
      <div
        className="flex-1 h-px max-w-32"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.70 0.12 50 / 0.5), transparent)",
        }}
      />
    </div>
  );
}
