import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ChevronRight,
  Menu,
  X,
  Shield,
  Stethoscope,
  Activity,
  Microscope,
  Baby,
  Brain,
  Eye,
  Bone,
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
  Award,
  ChevronDown,
} from "lucide-react";

import doctorimg from "../../public/doctor.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function LandingPage() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* bg decoration */}
      {/* FIXED: bg-linear-to-* → bg-gradient-to-*, w-150/h-150 → w-96/h-96, w-100/h-100 → w-80/h-80 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-teal-50 to-emerald-50 rounded-full translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-sky-50 to-teal-50 rounded-full -translate-x-1/3 translate-y-1/4" />
        {/* grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0d9488 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-7"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-xs font-semibold px-4 py-2 rounded-full border border-teal-100"
          >
            <Shield size={13} /> Trusted Healthcare Since 2009
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 tracking-tight"
          >
            Your Health,
            <br />
            {/* FIXED: bg-linear-to-r → bg-gradient-to-r */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
              Our Priority
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-500 leading-relaxed max-w-lg"
          >
            World-class medical care with a human touch. Our team of 48
            specialist physicians delivers compassionate, evidence-based
            treatment tailored to you.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-xl shadow-teal-200 hover:shadow-teal-300 hover:-translate-y-0.5"
            >
              Book Appointment <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-teal-200 text-gray-700 hover:text-teal-600 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:bg-teal-50"
            >
              Our Services <ChevronRight size={16} />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-6 pt-2"
          >
            <div className="flex -space-x-3">
              {["bg-rose-400", "bg-violet-400", "bg-teal-400", "bg-amber-400"].map(
                (c, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {["E", "J", "P", "M"][i]}
                  </div>
                )
              )}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                ))}
                <span className="text-sm font-semibold text-gray-800 ml-1">
                  4.9
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">
                Rated by 12,000+ patients
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Visual Card */}
        {/* FIXED: Added explicit min-h so doctor image (absolute) has space to render without overflow */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden md:flex items-end"
          style={{ minHeight: "330px" }}
        >
          <img
            src={doctorimg}
            alt="Doctor"
            className="absolute bottom-0 right-8 h-96 object-contain z-10 pointer-events-none select-none"
            style={{ filter: "drop-shadow(0 20px 32px rgba(0,0,0,0.12))" }}
          />

          {/* Card stays behind the image */}
          {/* FIXED: bg-linear-to-br → bg-gradient-to-br */}
          <div className="relative bg-linear-to-br from-teal-500 to-emerald-600 rounded-3xl p-8 shadow-2xl shadow-teal-200/60 w-full">
            {/* Floating pill cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -left-8 bg-white rounded-2xl ring-0 shadow-xl px-5 py-3 flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center">
                <Heart size={18} className="text-rose-500" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Today's Checkups</p>
                <p className="text-lg font-bold text-gray-900">142</p>
              </div>
            </motion.div>

            {/* FIXED: removed stray `re` className */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-5 -right-6 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                <CheckCircle size={18} className="text-emerald-500" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Success Rate</p>
                <p className="text-lg font-bold text-gray-900">99.2%</p>
              </div>
            </motion.div>

            {/* Inner card content */}
            <div className="bg-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Stethoscope size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Dr. Sarah Mitchell</p>
                  <p className="text-teal-100 text-sm">Chief Cardiologist</p>
                </div>
              </div>

              <p className="text-white/90 text-sm leading-relaxed">
                "We believe every patient deserves the highest quality care
                delivered with empathy and respect."
              </p>

              <div className="pt-4 border-t border-white/20">
                <div className="flex justify-between text-sm">
                  <div className="text-center">
                    <p className="text-white font-bold text-xl">8:00</p>
                    <p className="text-teal-100 text-xs">Opens at</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-xl">48</p>
                    <p className="text-teal-100 text-xs">Specialists</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-xl">6</p>
                    <p className="text-teal-100 text-xs">Departments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}

export default LandingPage;