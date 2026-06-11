// @ts-nocheck
import { ArrowRight, FlaskConical, Microscope, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css"

const Services = () => {
  const navigate = useNavigate();
  const SERVICES = [
    {
      icon: <FlaskConical className="w-7 h-7" />,
      title: "Personalized Skin Consultation",
      desc: "One-on-one expert analysis of your skin type, concerns, and goals.",
      price: "—",
      tag: "Core Service",
    },
    {
      icon: <FlaskConical className="w-7 h-7" />,
      title: "Treatment & Home-Care Recommendation",
      desc: "Customized skincare routine and professional treatment plan for best results.",
      price: "—",
      tag: "Core Service",
    },
    {
      icon: <FlaskConical className="w-7 h-7" />,
      title: "Goal-Focused Skincare Planning",
      desc: "Long-term strategy to achieve clear, healthy, and glowing skin based on your goals.",
      price: "—",
      tag: "Core Service",
    }, // Advanced Facial Treatments

    {
      icon: <Microscope className="w-7 h-7" />,
      title: "Microdermabrasion",
      desc: "Exfoliates dead skin cells to improve tone, texture, and radiance.",
      price: "$80",
      tag: "Advanced Facial",
    },
    {
      icon: <Microscope className="w-7 h-7" />,
      title: "Micromist Microdermabrasion",
      desc: "micromist microdermabrasion.",
      price: "$80",
      tag: "Advanced Facial",
    },
    {
      icon: <Microscope className="w-7 h-7" />,
      title: "Microdermabrasion + Collagen Mask",
      desc: "Enhances hydration, firmness, and post-treatment glow.",
      price: "$150",
      tag: "Advanced Facial",
    },
    {
      icon: <Microscope className="w-7 h-7" />,
      title: "Microdermabrasion + Hyaluronic Acid Mask",
      desc: "Provides deep hydration to plump and soothe the skin.",
      price: "$120",
      tag: "Advanced Facial",
    }, // Microchanneling Treatments
    //
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Microneedling/Microchanneling with Serum Infusion",
      desc: "Stimulates natural skin repair to improve texture, fine lines, acne scars, and hyperpigmentation.",
      price: "$200",
      tag: "Microchanneling",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Derma Planning",
      desc: "Dermaplanning is a gentle, non-invasive skincare treatment where a professional uses a sterile blade to remove dead skin cells and fine facial hair (peach fuzz). This helps reveal smoother, brighter skin, improves product absorption, and allows makeup to go on more evenly. The procedure is painless and safe when performed by a trained provider, with no downtime required.",
      price: "$200",
      tag: "dermaplanning",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Microdermabrasion + Microchanneling/Microneedling Combo",
      desc: "Combines exfoliation and microchanneling for advanced skin rejuvenation.",
      price: "$250",
      tag: "Microchanneling",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Microchanneling/Microneedling for Hair Loss / Thinning",
      desc: "Stimulates scalp and hair follicles, enhances serum absorption, and supports healthier, denser hair growth.",
      price: "$250",
      tag: "Hair Treatment",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Skin Care Party",
      desc: "Gather your friends  or family for an skin care party that includes  skincare education, exclusive party-only specials, refreshments, giveaways, and glowing skin vibes. Whether you’re looking to refresh your routine, target specific skin concerns, or simply enjoy a girls’ day out, this event is the perfect mix of beauty, relaxation, and confidence.Host perks availableExclusive treatment discountsProfessional skincare guidance by Richa Parvate, RNPerfect for birthdays, girls’ nights, bridal events, and self-care gatherings.",
      price: "$250",
      tag: "Skin Care",
    },
  ];

  

  // Variants for cards
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const iconAnim = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-24 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.span variants={fadeUp} className="inline-block bg-teal-50 text-teal-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-teal-100">
              What We Offer
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Medical Services</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 max-w-xl mx-auto text-lg">
              From routine check-ups to complex surgeries, our specialists are equipped to handle all your healthcare needs.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-300 group cursor-pointer">
                <div className={`w-13 h-13 rounded-2xl ${color} flex items-center justify-center mb-5 w-12 h-12`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="flex items-center gap-1 text-teal-500 text-sm font-semibold">
                  Learn more <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Services;
