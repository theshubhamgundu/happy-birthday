import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const photos = [
  { src: "/assets/images/photo1.jpg", alt: "Our beautiful memory 1" },
  { src: "/assets/images/photo2.jpg", alt: "Our beautiful memory 2" },
  { src: "/assets/images/photo3.jpg", alt: "Our beautiful memory 3" },
  { src: "/assets/images/photo4.jpg", alt: "Our beautiful memory 4" },
];

function PhotoCard({
  photo,
  index,
  onClick,
}: {
  photo: { src: string; alt: string };
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={onClick}
      data-ocid={`gallery.item.${index + 1}`}
      className="group cursor-pointer relative"
    >
      {/* Gold frame outer */}
      <div
        className="rounded-xl p-[3px] transition-smooth hover:scale-[1.03]"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.78 0.12 75), oklch(0.65 0.15 50), oklch(0.82 0.1 70), oklch(0.60 0.14 45))",
          boxShadow:
            "0 8px 32px oklch(0.65 0.15 345 / 0.3), 0 2px 8px oklch(0.65 0.14 45 / 0.4)",
        }}
      >
        <div className="rounded-[10px] overflow-hidden bg-card relative">
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full aspect-square object-cover transition-smooth group-hover:brightness-110"
          />
          {/* Hover shimmer overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
            <div
              className="rounded-full px-3 py-1 text-xs font-display text-primary-foreground"
              style={{ background: "oklch(0.55 0.18 30 / 0.85)" }}
            >
              View
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + photos.length) % photos.length : 0,
    );
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % photos.length : 0));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <section
      data-ocid="gallery.section"
      className="py-20 px-4"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.97 0.01 75) 0%, oklch(0.95 0.02 350) 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto">
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
            Our Memories Together 📸
          </h2>
          <p className="font-body text-muted-foreground tracking-wide">
            Moments worth treasuring forever
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div
              className="h-px w-16"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.70 0.12 50))",
              }}
            />
            <span className="text-lg" style={{ color: "oklch(0.70 0.14 50)" }}>
              ✦
            </span>
            <div
              className="h-px w-16"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.70 0.12 50), transparent)",
              }}
            />
          </div>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {photos.map((photo, i) => (
            <PhotoCard
              key={photo.src}
              photo={photo}
              index={i}
              onClick={() => openLightbox(i)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            data-ocid="gallery.dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: "oklch(0.08 0.02 10 / 0.92)" }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              type="button"
              data-ocid="gallery.close_button"
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-10 rounded-full p-2 transition-smooth hover:scale-110"
              style={{ background: "oklch(0.98 0.01 75 / 0.15)" }}
              aria-label="Close lightbox"
            >
              <X size={24} style={{ color: "oklch(0.96 0.01 75)" }} />
            </button>

            {/* Prev arrow */}
            <button
              type="button"
              data-ocid="gallery.pagination_prev"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 md:left-8 z-10 rounded-full p-3 transition-smooth hover:scale-110"
              style={{ background: "oklch(0.55 0.18 30 / 0.80)" }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} style={{ color: "oklch(0.96 0.01 75)" }} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative mx-16 max-w-2xl w-full"
            >
              <div
                className="rounded-2xl p-[3px]"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.78 0.12 75), oklch(0.65 0.15 50), oklch(0.82 0.1 70))",
                  boxShadow: "0 24px 80px oklch(0.25 0.05 10 / 0.6)",
                }}
              >
                <div className="rounded-[14px] overflow-hidden bg-card">
                  <img
                    src={photos[lightboxIndex].src}
                    alt={photos[lightboxIndex].alt}
                    className="w-full max-h-[75vh] object-contain"
                  />
                </div>
              </div>
              {/* Counter */}
              <p
                className="text-center mt-3 text-sm font-body"
                style={{ color: "oklch(0.85 0.02 75)" }}
              >
                {lightboxIndex + 1} / {photos.length}
              </p>
            </motion.div>

            {/* Next arrow */}
            <button
              type="button"
              data-ocid="gallery.pagination_next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 md:right-8 z-10 rounded-full p-3 transition-smooth hover:scale-110"
              style={{ background: "oklch(0.55 0.18 30 / 0.80)" }}
              aria-label="Next photo"
            >
              <ChevronRight
                size={28}
                style={{ color: "oklch(0.96 0.01 75)" }}
              />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
