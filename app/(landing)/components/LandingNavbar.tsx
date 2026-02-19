"use client";

import { useState, useEffect } from "react";
import { useLang } from "../lib/LangContext";

export default function LandingNavbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-all ${
        scrolled ? "border-b border-gray-200" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-bold text-xl text-gray-900">
          riiken<span className="text-blue-600">.</span>
        </a>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Language switch */}
          <div className="hidden md:flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setLang("fr")}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition ${
                lang === "fr"
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition ${
                lang === "en"
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              EN
            </button>
          </div>

          {/* Login link */}
          <a
            href="/login"
            className="hidden md:inline-block text-gray-600 hover:text-gray-900 font-medium text-sm transition"
          >
            {t.navLogin}
          </a>

          {/* Demo CTA */}
          <a
            href="https://calendly.com/REMPLACER/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            {t.navDemo}
          </a>
        </div>
      </div>
    </header>
  );
}
