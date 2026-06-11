// @ts-nocheck
import  { useEffect, useState } from "react";

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
import logo from "../../public/logo.jpeg"
import { motion, AnimatePresence } from "framer-motion";

import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const NAV_LINKS = ["Home", "Services", "Doctors", "About", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate=useNavigate()


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate=(link:string)=>{
       const linkLowerCase=link.toLowerCase()
        navigate(`/${linkLowerCase}`)
  }

  return (
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-teal-50" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-200">
              <Stethoscope size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">Medi<span className="text-teal-500">Care</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+1800555000" className="flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors">
              <Phone size={15} /> +1 800 555 000
            </a>
            <a href="#contact" className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-teal-200 hover:shadow-teal-300 hover:-translate-y-0.5">
              Book Appointment
            </a>
          </div>

          <button onClick={() => setMenuOpen(p => !p)} className="md:hidden p-2 rounded-lg text-gray-600">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">{link}</a>
              ))}
              <a href="#contact" className="bg-teal-500 text-white text-sm font-semibold px-5 py-3 rounded-xl text-center mt-2">
                Book Appointment
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
  );
};

export default Navbar;
