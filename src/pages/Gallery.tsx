// @ts-nocheck
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  X,
  ZoomIn,
  Grid3X3,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  Heart,
  Star,
  Camera,
  Stethoscope,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  span?: "wide" | "tall" | "normal";
  caption: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const CATEGORIES = [
  "All",
  "Facilities",
  "Treatment Rooms",
  "Staff & Team",
  "Patient Care",
  "Equipment",
];

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    alt: "Modern clinic reception",
    category: "Facilities",
    span: "wide",
    caption: "State-of-the-art reception lobby",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80",
    alt: "Doctor consultation",
    category: "Patient Care",
    span: "tall",
    caption: "Compassionate consultation with specialists",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    alt: "Treatment room",
    category: "Treatment Rooms",
    caption: "Sterile, comfortable treatment rooms",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    alt: "Medical equipment",
    category: "Equipment",
    caption: "Advanced diagnostic equipment",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
    alt: "Caring staff",
    category: "Staff & Team",
    span: "wide",
    caption: "Our dedicated and experienced team",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    alt: "Patient care room",
    category: "Patient Care",
    caption: "Warm, healing patient suites",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800&q=80",
    alt: "Lab facility",
    category: "Equipment",
    span: "tall",
    caption: "In-house laboratory diagnostics",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
    alt: "Surgery room",
    category: "Treatment Rooms",
    caption: "Fully equipped surgical suites",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80",
    alt: "Wellness area",
    category: "Facilities",
    caption: "Relaxing patient wellness lounge",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80",
    alt: "Doctor team",
    category: "Staff & Team",
    caption: "Board-certified physician team",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    alt: "Medical imaging",
    category: "Equipment",
    span: "wide",
    caption: "High-resolution imaging technology",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80",
    alt: "Pediatric care",
    category: "Patient Care",
    caption: "Child-friendly pediatric care",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80",
    alt: "Waiting room",
    category: "Facilities",
    span: "tall",
    caption: "Calming waiting area with natural light",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&q=80",
    alt: "Nurse team",
    category: "Staff & Team",
    caption: "Our compassionate nursing staff",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1543333995-a78aea2eee50?w=800&q=80",
    alt: "Recovery room",
    category: "Treatment Rooms",
    caption: "Comfortable post-treatment recovery",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { icon: Heart, value: "12,000+", label: "Patients Served" },
  { icon: Star, value: "4.9★", label: "Average Rating" },
  { icon: Camera, value: "50+", label: "Gallery Photos" },
  { icon: Stethoscope, value: "35+", label: "Specialists" },
];

// ─── Animations ───────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function ClinicGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);
  const [viewMode, setViewMode] = useState<"masonry" | "grid">("masonry");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, 80]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const filtered =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const lightboxIndex = lightbox
    ? filtered.findIndex((img) => img.id === lightbox.id)
    : -1;

  const navigateLightbox = (dir: "prev" | "next") => {
    if (lightboxIndex === -1) return;
    const newIdx =
      dir === "prev"
        ? (lightboxIndex - 1 + filtered.length) % filtered.length
        : (lightboxIndex + 1) % filtered.length;
    setLightbox(filtered[newIdx]);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") navigateLightbox("prev");
      if (e.key === "ArrowRight") navigateLightbox("next");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, lightboxIndex, filtered]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  // Masonry column distribution
  const masonry = [[], [], [], []] as GalleryImage[][];
  filtered.forEach((img, i) => masonry[i % 4].push(img));
  const masonry3 = [[], [], []] as GalleryImage[][];
  filtered.forEach((img, i) => masonry3[i % 3].push(img));

  return (
    <div
      className="min-h-screen bg-white font-sans"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;900&family=Inter:wght@300;400;500;600&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .green-glow:hover { box-shadow: 0 0 0 3px #10B981, 0 8px 32px rgba(16,185,129,0.25); }
        .img-zoom img { transition: transform 0.5s cubic-bezier(0.22,1,0.36,1); }
        .img-zoom:hover img { transform: scale(1.07); }
      `}</style>

      {/* top */}
      <section className="bg-white max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <h1 className=" text-4xl font-extrabold text-teal-500 text-center">
          Gallery
        </h1>
        <p className=" text-center">A Space Built for Healing</p>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────────────── */}
      <section className="bg-white max-w-6xl mx-auto px-4 sm:px-8 py-2">
        <AnimatePresence mode="wait">
          {viewMode === "masonry" ? (
            <motion.div
              key={`masonry-${activeCategory}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* 4-col masonry on xl, 3-col on md, 2-col on sm */}
              <div className="hidden xl:flex gap-4">
                {masonry.map((col, ci) => (
                  <div key={ci} className="flex flex-col gap-4 flex-1">
                    {col.map((img, ii) => (
                      <GalleryCard
                        key={img.id}
                        img={img}
                        index={ci * 4 + ii}
                        onOpen={setLightbox}
                        hovered={hoveredId === img.id}
                        onHover={setHoveredId}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="hidden md:flex xl:hidden gap-4">
                {masonry3.map((col, ci) => (
                  <div key={ci} className="flex flex-col gap-4 flex-1">
                    {col.map((img, ii) => (
                      <GalleryCard
                        key={img.id}
                        img={img}
                        index={ci * 3 + ii}
                        onOpen={setLightbox}
                        hovered={hoveredId === img.id}
                        onHover={setHoveredId}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 md:hidden">
                {filtered.map((img, i) => (
                  <GalleryCard
                    key={img.id}
                    img={img}
                    index={i}
                    onOpen={setLightbox}
                    hovered={hoveredId === img.id}
                    onHover={setHoveredId}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`grid-${activeCategory}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  className="relative overflow-hidden rounded-2xl cursor-pointer img-zoom green-glow aspect-square"
                  onClick={() => setLightbox(img)}
                  onMouseEnter={() => setHoveredId(img.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === img.id ? 1 : 0 }}
                    className="absolute inset-0 bg-linear-to-t from-emerald-900/70 via-emerald-700/20 to-transparent flex flex-col justify-end p-3"
                  >
                    <span className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">
                      {img.category}
                    </span>
                    <span className="text-white text-sm font-medium leading-snug">
                      {img.caption}
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{
                      opacity: hoveredId === img.id ? 1 : 0,
                      scale: hoveredId === img.id ? 1 : 0.7,
                    }}
                    className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center"
                  >
                    <ZoomIn size={14} className="text-emerald-600" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-gray-400">
            <Camera size={48} className="mx-auto mb-4 text-emerald-200" />
            <p className="text-lg font-medium">
              No images in this category yet
            </p>
          </div>
        )}
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <motion.button
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.15 }}
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <X size={20} />
            </motion.button>

            {/* Prev */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
              className="absolute left-4 sm:left-8 w-11 h-11 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronLeft size={22} />
            </motion.button>

            {/* Next */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
              className="absolute right-4 sm:right-8 w-11 h-11 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronRight size={22} />
            </motion.button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightbox.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-w-4xl w-full max-h-[85vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl ring-2 ring-emerald-500/40">
                  <img
                    src={lightbox.src.replace("w=800", "w=1200")}
                    alt={lightbox.alt}
                    className="w-full max-h-[70vh] object-cover"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between px-1">
                  <div>
                    <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">
                      {lightbox.category}
                    </span>
                    <p className="text-white font-medium mt-0.5">
                      {lightbox.caption}
                    </p>
                  </div>
                  <span className="text-gray-500 text-sm shrink-0 ml-4">
                    {lightboxIndex + 1} / {filtered.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Gallery Card ─────────────────────────────────────────────────────────────
function GalleryCard({
  img,
  index,
  onOpen,
  hovered,
  onHover,
}: {
  img: GalleryImage;
  index: number;
  onOpen: (img: GalleryImage) => void;
  hovered: boolean;
  onHover: (id: number | null) => void;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.05,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="relative overflow-hidden rounded-2xl cursor-pointer img-zoom green-glow"
      onClick={() => onOpen(img)}
      onMouseEnter={() => onHover(img.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full object-cover"
        style={{
          aspectRatio:
            img.span === "tall" ? "3/4" : img.span === "wide" ? "16/9" : "4/3",
        }}
        loading="lazy"
      />

      {/* Overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 bg-linear-to-t from-emerald-900/75 via-emerald-800/20 to-transparent flex flex-col justify-between p-4"
      >
        <div className="flex justify-end">
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.2 }}
            className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center"
          >
            <ZoomIn size={15} className="text-emerald-600" />
          </motion.div>
        </div>
        <div>
          <span className="text-emerald-300 text-xs font-bold uppercase tracking-widest block mb-0.5">
            {img.category}
          </span>
          <p className="text-white text-sm font-medium leading-snug">
            {img.caption}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
