"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="DDF Motors"
              width={220}
              height={80}
              className="w-44 lg:w-60 h-auto object-contain group-hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#aanbod"
              className="text-muted hover:text-text text-sm font-medium transition-colors"
            >
              Aanbod
            </Link>
            <Link
              href="/#over-ons"
              className="text-muted hover:text-text text-sm font-medium transition-colors"
            >
              Over ons
            </Link>
            <Link
              href="/#contact"
              className="text-muted hover:text-text text-sm font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/auto-verkopen"
              className="bg-accent hover:bg-accent/90 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
            >
              Verkoop je auto
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted hover:text-text"
            aria-label="Menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 gap-4">
              {["/#aanbod", "/#over-ons", "/#contact"].map((href, i) => (
                <Link
                  key={i}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="text-muted hover:text-text font-medium transition-colors"
                >
                  {["Aanbod", "Over ons", "Contact"][i]}
                </Link>
              ))}
              <Link
                href="/auto-verkopen"
                onClick={() => setMobileOpen(false)}
                className="bg-accent text-white font-semibold px-5 py-3 rounded-lg text-center mt-2"
              >
                Verkoop je auto
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
