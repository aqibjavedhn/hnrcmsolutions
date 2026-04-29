"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#00C2FF,transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl text-center relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Revenue Cycle Management Built for{" "}
          <span className="gradient-text">Modern Healthcare</span>
        </h1>

        <p className="mt-8 text-white/70 text-lg md:text-xl">
          Medical Billing, Credentialing, Denial Management,
          Virtual Assistants & Patient Help Desk Services.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="bg-cyanPrimary text-black px-8 py-4 rounded-full font-semibold">
            Schedule Consultation
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-full">
            Book Free Audit
          </button>
        </div>
      </motion.div>
    </section>
  );
}