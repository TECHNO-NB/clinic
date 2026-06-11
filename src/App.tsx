// @ts-nocheck
import { useState, useEffect } from "react";
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
import LandingPage from "./components/LandingPage";
import doctorimg from "./../public/doctor.png"
import ClinicGallery from "./pages/Gallery";
import LocationMap from "./components/MyLocationMap"



const SERVICES = [
  { icon: Heart, title: "Cardiology", desc: "Expert heart care with advanced diagnostics and personalized treatment plans.", color: "bg-rose-50 text-rose-500" },
  { icon: Brain, title: "Neurology", desc: "Comprehensive neurological care for brain, spine, and nervous system disorders.", color: "bg-violet-50 text-violet-500" },
  { icon: Baby, title: "Pediatrics", desc: "Gentle, specialized care for infants, children, and adolescents.", color: "bg-sky-50 text-sky-500" },
  { icon: Bone, title: "Orthopedics", desc: "Treatment for bones, joints, muscles, and sports-related injuries.", color: "bg-amber-50 text-amber-500" },
  { icon: Eye, title: "Ophthalmology", desc: "Comprehensive eye care from routine exams to complex surgeries.", color: "bg-teal-50 text-teal-500" },
  { icon: Microscope, title: "Diagnostics", desc: "State-of-the-art lab testing and imaging for accurate diagnoses.", color: "bg-emerald-50 text-emerald-500" },
];

const DOCTORS = [
  { name: "Dr. Sarah Mitchell", specialty: "Chief Cardiologist", exp: "18 yrs", img: "SM", rating: 4.9, color: "from-rose-400 to-rose-600" },
  { name: "Dr. James Okafor", specialty: "Neurologist", exp: "14 yrs", img: "JO", rating: 4.8, color: "from-violet-400 to-violet-600" },
  { name: "Dr. Priya Sharma", specialty: "Pediatrician", exp: "12 yrs", img: "PS", rating: 5.0, color: "from-teal-400 to-teal-600" },
  { name: "Dr. Marcus Lee", specialty: "Orthopedic Surgeon", exp: "16 yrs", img: "ML", rating: 4.9, color: "from-amber-400 to-amber-600" },
];

const STATS = [
  { icon: Users, value: "25,000+", label: "Patients Served" },
  { icon: Award, value: "48", label: "Specialist Doctors" },
  { icon: Activity, value: "99.2%", label: "Success Rate" },
  { icon: Calendar, value: "15+", label: "Years of Excellence" },
];

const TESTIMONIALS = [
  { name: "Emma Thompson", role: "Heart patient", text: "The cardiology team at MediCare saved my life. Their care and expertise are truly world-class. I felt supported every step of the way.", stars: 5 },
  { name: "Robert Kwame", role: "Pediatrics parent", text: "Dr. Sharma was absolutely wonderful with my daughter. She made the experience comfortable and explained everything clearly. Highly recommend!", stars: 5 },
  { name: "Aiko Tanaka", role: "Orthopedics patient", text: "After my knee surgery, the recovery plan was flawless. I'm back running marathons thanks to the incredible ortho team here.", stars: 5 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function ClinicWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", date: "", message: "" });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(t);
  }, []);

  const handleInput = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800" style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>

      {/* ── NAV ── */}

      {/* ── HERO ── */}
       <LandingPage />

      {/* ── STATS ── */}
      <section className="bg-linear-to-r from-teal-500 to-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <motion.div key={label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="text-center text-white">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3">
                <Icon size={22} className="text-white" />
              </div>
              <p className="text-3xl font-bold">{value}</p>
              <p className="text-teal-100 text-sm mt-1">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <ClinicGallery />

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-white">
        <div className=" md:max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
            <motion.span variants={fadeUp} className="inline-block bg-emerald-50 text-emerald-600 text-xs font-semibold px-4 py-1.5 rounded-full border border-emerald-100">
              About MediCare
            </motion.span>
            <motion.h2 variants={fadeUp} className=" text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Dedicated to Healing,<br />Committed to Excellence
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg leading-relaxed">
              Founded in 2009, MediCare has grown into a leading multi-specialty clinic serving over 25,000 patients. We combine cutting-edge technology with compassionate care to deliver outcomes that transform lives.
            </motion.p>
            {[
              "Accredited by the Joint Commission International",
              "48 board-certified specialist physicians",
              "State-of-the-art diagnostic imaging center",
              "24/7 emergency care & telemedicine support",
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-center gap-3 text-gray-700">
                <CheckCircle size={18} className="text-teal-500 shrink-0" />
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
            <motion.a variants={fadeUp} href="#contact"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-teal-200">
              Get in Touch <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5">
            {[
              { label: "Patients Annually", value: "25K+", color: "bg-teal-500", text: "text-white" },
              { label: "Awards Won", value: "36", color: "bg-emerald-50", text: "text-emerald-700" },
              { label: "Specialist Doctors", value: "48", color: "bg-sky-50", text: "text-sky-700" },
              { label: "Years Active", value: "15+", color: "bg-violet-50", text: "text-violet-700" },
            ].map(({ label, value, color, text }) => (
              <div key={label} className={`${color} rounded-2xl p-8 flex flex-col justify-center items-center text-center`}>
                <p className={`text-4xl font-bold ${text}`}>{value}</p>
                <p className={`text-sm mt-2 ${color === "bg-teal-500" ? "text-teal-100" : "text-gray-500"}`}>{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── DOCTORS ── */}
      <section id="doctors" className="py-24 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.span variants={fadeUp} className="inline-block bg-violet-50 text-violet-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-violet-100">
              Our Specialists
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Doctors</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 max-w-xl mx-auto text-lg">
              Our physicians bring decades of experience and a passion for patient well-being.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCTORS.map(({ name, specialty, exp, img, rating, color }, i) => (
              <motion.div key={name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-teal-100 transition-all duration-300 group">
                <div className={`bg-linear-to-br ${color} h-40 flex items-center justify-center`}>
                  <div className="w-30 h-30 rounded-full overflow-hidden bg-white/30 flex items-center justify-center text-white text-2xl font-bold border-4 border-white/50">
                    <img src={doctorimg} className=" object-fill top-30" />
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">{name}</h3>
                  <p className="text-teal-600 text-sm mt-0.5">{specialty}</p>
                  <p className="text-gray-400 text-xs mt-1">{exp} experience</p>
                  <div className="flex items-center justify-center gap-1 mt-3">
                    <Star size={13} className="text-amber-400 fill-amber-400" />
                    <span className="text-sm font-semibold text-gray-800">{rating}</span>
                  </div>
                  <a href="#contact" className="mt-4 block text-sm font-semibold text-teal-500 hover:text-teal-600 border border-teal-200 hover:bg-teal-50 rounded-xl py-2 transition-all">
                    Book Appointment
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Patient Stories
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12">What Our Patients Say</motion.h2>

          <AnimatePresence mode="wait">
            {TESTIMONIALS.map((t, i) => i === activeTestimonial && (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }} className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
                <div className="flex justify-center mb-4">
                  {[...Array(t.stars)].map((_, j) => <Star key={j} size={18} className="text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-white/90 text-xl leading-relaxed italic mb-8">"{t.text}"</p>
                <div>
                  <p className="text-white font-bold text-base">{t.name}</p>
                  <p className="text-teal-200 text-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? "w-8 bg-white" : "w-2 bg-white/40"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── APPOINTMENT FORM ── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
            <motion.span variants={fadeUp} className="inline-block bg-teal-50 text-teal-600 text-xs font-semibold px-4 py-1.5 rounded-full border border-teal-100">
              Book Now
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-gray-900">Schedule Your Appointment</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg leading-relaxed">
              Fill in the form and our team will confirm your appointment within 2 hours. Emergency? Call us directly.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-4 pt-4">
              {[
                { icon: Phone, label: "Emergency Line", val: "+1 800 555 000" },
                { icon: Mail, label: "Email Us", val: "care@medicare-clinic.com" },
                { icon: MapPin, label: "Location", val: "1420 Wellness Ave, New York, NY" },
                { icon: Clock, label: "Working Hours", val: "Mon–Sat: 8am – 8pm | Sun: 10am – 4pm" },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-teal-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">{label}</p>
                    <p className="text-gray-700 font-medium text-sm mt-0.5">{val}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl shadow-gray-100 border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Appointment Request</h3>
            <div className="space-y-4">
              {[
                { label: "Full Name", name: "name", type: "text", placeholder: "Jane Smith" },
                { label: "Email Address", name: "email", type: "email", placeholder: "jane@example.com" },
                { label: "Phone Number", name: "phone", type: "tel", placeholder: "+1 (555) 000-0000" },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                  <input type={type} name={name} placeholder={placeholder} value={formData[name]} onChange={handleInput}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 transition-all" />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Department</label>
                <select name="service" value={formData.service} onChange={handleInput}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 transition-all bg-white">
                  <option value="">Select a department</option>
                  {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleInput}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Notes</label>
                <textarea name="message" rows={3} placeholder="Describe your symptoms or questions..." value={formData.message} onChange={handleInput}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 transition-all resize-none" />
              </div>

              <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-teal-200 flex items-center justify-center gap-2 text-sm mt-2">
                <Calendar size={16} /> Request Appointment
              </motion.button>
            </div>
          </motion.div>
      
        </div>
             {/* MAP */}
      <motion.div
        className="mt-10 max-w-6xl mx-auto px-4 sm:px-8 py-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="sans text-xs tracking-[0.2em] uppercase text-[#8a7055] mb-3">
          Find Us
        </div>

        <div className="w-full h-65 rounded-2xl overflow-hidden border border-[#e8ddd4]">
          <iframe
            src="https://www.google.com/maps?q=Salon%20And%20Spa%20Galleria%201953%20Golden%20Heights%20Rd%20Fort%20Worth%20Texas%2076177&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                  <Stethoscope size={18} className="text-white" />
                </div>
                <span className="text-xl font-bold text-white">Medi<span className="text-teal-400">Care</span></span>
              </div>
              <p className="text-sm leading-relaxed">
                Delivering compassionate, world-class healthcare since 2009. Your health, our mission.
              </p>
              <div className="flex gap-3">
                {["f", "t", "in", "yt"].map(s => (
                  <div key={s} className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-teal-600 flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-all cursor-pointer">
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {[
              { title: "Services", links: ["Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Diagnostics"] },
              { title: "Company", links: ["About Us", "Our Team", "Careers", "News & Blog", "Contact"] },
              { title: "Support", links: ["Patient Portal", "Insurance Info", "FAQs", "Privacy Policy", "Terms"] },
            ].map(({ title, links }) => (
              <div key={title}>
                <h4 className="text-white font-semibold mb-4 text-sm">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map(l => (
                    <li key={l}><a href="#" className="text-sm hover:text-teal-400 transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2025 MediCare Clinic. All rights reserved.</p>
            <p className="flex items-center gap-1.5">Made with <Heart size={12} className="text-rose-400 fill-rose-400" /> for better health</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
