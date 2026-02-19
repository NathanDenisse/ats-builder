"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import LandingNavbar from "./components/LandingNavbar";
import { useLang } from "./lib/LangContext";

/* ─── Animation helpers ─── */

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const mounted = useMounted();

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimateOnScroll({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── HERO ─── */
function HeroSection() {
  const { t } = useLang();

  return (
    <section className="pt-40 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeUp delay={0.2}>
          <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            {t.badge}
          </span>
        </FadeUp>

        <FadeUp delay={0.35}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mt-8">
            {t.heroTitle1}
            <br />
            <span className="italic bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {t.heroTitle2}
            </span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto mt-6">
            {t.heroSub}
          </p>
        </FadeUp>

        <FadeUp delay={0.65}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a
              href="https://calendly.com/REMPLACER/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {t.ctaDemo}
            </a>
            <a
              href="#features"
              className="bg-white border border-gray-200 text-gray-700 hover:border-gray-400 px-6 py-3 rounded-lg font-semibold transition"
            >
              {t.ctaDiscover}
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── MOCKUP ─── */
function MockupSection() {
  const { t } = useLang();

  const candidates = {
    new: [
      { name: "Marie Laurent", role: "Chef de projet", source: "Indeed Apply", sourceStyle: "bg-blue-50 text-blue-600" },
      { name: "Pierre Dumont", role: "Comptable", source: "Site carrière", sourceStyle: "bg-green-50 text-green-600" },
      { name: "Léa Mercier", role: "Commerciale", source: "Indeed Apply", sourceStyle: "bg-blue-50 text-blue-600" },
    ],
    interview: [
      { name: "Thomas Petit", role: "Développeur", source: "Site carrière", sourceStyle: "bg-green-50 text-green-600" },
      { name: "Sarah Cohen", role: "RH", source: "Manuel", sourceStyle: "bg-orange-50 text-orange-600" },
    ],
    selected: [
      { name: "Julie Martin", role: "Designer", source: "Indeed Apply", sourceStyle: "bg-blue-50 text-blue-600" },
    ],
    offer: [
      { name: "Karim Bensaid", role: "Data Analyst", source: "Indeed Apply", sourceStyle: "bg-blue-50 text-blue-600" },
    ],
  };

  const columns = [
    { key: "new" as const, label: t.mockupNew, cards: candidates.new },
    { key: "interview" as const, label: t.mockupInterview, cards: candidates.interview },
    { key: "selected" as const, label: t.mockupSelected, cards: candidates.selected },
    { key: "offer" as const, label: t.mockupOffer, cards: candidates.offer },
  ];

  return (
    <FadeUp delay={0.8} className="mt-20 max-w-5xl mx-auto px-6">
      <div className="rounded-xl border border-gray-200 shadow-xl overflow-hidden bg-white">
        {/* Window chrome */}
        <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="flex-1 text-center text-sm text-gray-400">
            Riiken — Développeur Frontend Senior
          </span>
        </div>

        {/* Kanban */}
        <div className="overflow-x-auto">
          <div className="flex gap-4 p-6 bg-gray-50 min-w-[700px]">
            {columns.map((col) => (
              <div key={col.key} className="flex-1">
                <div className="flex items-center mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {col.label}
                  </span>
                  <span className="bg-gray-200 text-gray-500 rounded-full px-2 py-0.5 text-xs ml-2">
                    {col.cards.length}
                  </span>
                </div>
                {col.cards.map((card) => (
                  <div
                    key={card.name}
                    className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm mb-2"
                  >
                    <div className="text-sm font-semibold text-gray-800">
                      {card.name}
                    </div>
                    <div className="text-xs text-gray-400">{card.role}</div>
                    <span
                      className={`${card.sourceStyle} text-xs px-2 py-0.5 rounded-full font-medium mt-2 inline-block`}
                    >
                      {card.source}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

/* ─── FEATURES ─── */
function FeaturesSection() {
  const { t } = useLang();

  const features = [
    { icon: "⚡", title: t.feature1Title, desc: t.feature1Desc },
    { icon: "📋", title: t.feature2Title, desc: t.feature2Desc },
    { icon: "🌐", title: t.feature3Title, desc: t.feature3Desc },
    { icon: "✉️", title: t.feature4Title, desc: t.feature4Desc },
    { icon: "👥", title: t.feature5Title, desc: t.feature5Desc },
    { icon: "📊", title: t.feature6Title, desc: t.feature6Desc },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="text-center max-w-2xl mx-auto mb-16 px-6">
        <AnimateOnScroll>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
            {t.featuresLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            {t.featuresTitle}
          </h2>
          <p className="text-lg text-gray-500 mt-4">{t.featuresSub}</p>
        </AnimateOnScroll>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
        {features.map((f, i) => (
          <AnimateOnScroll key={f.title} delay={i * 0.1}>
            <div className="p-8 rounded-xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <span className="text-xl">{f.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {f.desc}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}

/* ─── INDEED APPLY HIGHLIGHT ─── */
function IndeedSection() {
  const { t } = useLang();

  const stats = [
    { value: t.stat1Value, label: t.stat1Label },
    { value: t.stat2Value, label: t.stat2Label },
    { value: t.stat3Value, label: t.stat3Label },
    { value: t.stat4Value, label: t.stat4Label },
  ];

  return (
    <section className="py-24 px-6">
      <AnimateOnScroll>
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-12 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                {t.indeedTitle}
              </h2>
              <p className="text-gray-400 text-base mt-4 leading-relaxed">
                {t.indeedDesc}
              </p>
              <a
                href="https://calendly.com/REMPLACER/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold inline-block transition"
              >
                {t.indeedCta}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur"
                >
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

/* ─── HOW IT WORKS ─── */
function StepsSection() {
  const { t } = useLang();

  const steps = [
    { num: 1, title: t.step1Title, desc: t.step1Desc },
    { num: 2, title: t.step2Title, desc: t.step2Desc },
    { num: 3, title: t.step3Title, desc: t.step3Desc },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="text-center px-6">
        <AnimateOnScroll>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
            {t.stepsLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            {t.stepsTitle}
          </h2>
        </AnimateOnScroll>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16 px-6">
        {/* Horizontal line on desktop */}
        <div className="hidden md:block absolute top-7 left-[16.67%] right-[16.67%] h-0.5 bg-gray-200" />

        {steps.map((step, i) => (
          <AnimateOnScroll key={step.num} delay={i * 0.15}>
            <div className="text-center relative">
              <div className="w-14 h-14 rounded-full bg-blue-50 border-2 border-white shadow-md flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-lg font-bold text-blue-600">
                  {step.num}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CtaSection() {
  const { t } = useLang();

  return (
    <section className="py-24 bg-white">
      <div className="text-center px-6">
        <AnimateOnScroll>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
            {t.ctaLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-lg mx-auto">
            {t.ctaSub}
          </p>
          <a
            href="https://calendly.com/REMPLACER/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            {t.ctaDemo}
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-gray-200 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm text-gray-400">
          © 2025 Riiken. {t.footerRights}
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-gray-600 transition"
          >
            {t.footerLegal}
          </a>
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-gray-600 transition"
          >
            {t.footerPrivacy}
          </a>
          <a
            href="mailto:contact@riiken.com"
            className="text-sm text-gray-400 hover:text-gray-600 transition"
          >
            contact@riiken.com
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function LandingPage() {
  return (
    <>
      <LandingNavbar />
      <main>
        <HeroSection />
        <MockupSection />
        <FeaturesSection />
        <IndeedSection />
        <StepsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
