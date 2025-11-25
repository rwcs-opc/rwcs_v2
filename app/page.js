// app/page.js
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SITE from "../data/site";

export default function HomePage() {
  return (
    <section className="pt-6 pb-16">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Modern Digital Solutions for Fast-Growing Businesses
        </h1>

        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          RWORLD COMPUTER SOLUTIONS builds high-quality websites, custom software, cloud setups,
          and automation tools — engineered for speed, security, and long-term scalability.
          Build smarter, faster, and with confidence.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/services" className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
            Explore Services
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100">
            Speak with Us
          </Link>
        </div>
      </motion.div>


      {/* MAIN VISUAL */}
      <div className="mt-12 flex justify-center">
        <img
          src="/images/company_overview.jpg"
          alt="Company overview"
          className="rounded-2xl shadow-xl w-full max-w-5xl object-cover"
        />
      </div>


      {/* SECTIONS: What We Offer */}
      <div className="mt-16">

        <h2 className="text-2xl font-bold text-slate-800 text-center">
          What We Help You Build
        </h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-slate-800">Design & Branding</h3>
            <p className="mt-2 text-sm text-slate-600">
              Modern branding, graphics, PPTs, and clean visual identity for your digital presence.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-slate-800">Custom Tools & Automation</h3>
            <p className="mt-2 text-sm text-slate-600">
              Custom dashboards, workflow automations, backend systems, and API integrations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-slate-800">Cloud, Hosting & Deployment</h3>
            <p className="mt-2 text-sm text-slate-600">
              Secure hosting setup, cloud infrastructure, business email, and managed IT support.
            </p>
          </div>
        </div>
      </div>


      {/* WHY CHOOSE RWCS */}
      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-6">
          Why Businesses Choose RWCS
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl border shadow">
            <h3 className="font-semibold text-slate-800">Fast & Reliable Delivery</h3>
            <p className="mt-2 text-sm text-slate-600">
              We prioritize on-time delivery with clean, maintainable code and structured planning.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl border shadow">
            <h3 className="font-semibold text-slate-800">Clear Communication</h3>
            <p className="mt-2 text-sm text-slate-600">
              Easy to work with, transparent processes, and frequent updates keep you in control.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl border shadow">
            <h3 className="font-semibold text-slate-800">Modern Tech Stack</h3>
            <p className="mt-2 text-sm text-slate-600">
              Built using Next.js, Node.js, cloud tools, and scalable automation frameworks.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl border shadow">
            <h3 className="font-semibold text-slate-800">Long-Term Support</h3>
            <p className="mt-2 text-sm text-slate-600">
              We offer maintenance, monitoring, and improvements long after project completion.
            </p>
          </div>
        </div>
      </section>


      {/* STATS */}
      <section className="mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-3xl font-extrabold text-indigo-600">50+</div>
            <div className="mt-2 text-sm text-slate-600">Pages Built</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-3xl font-extrabold text-indigo-600">5+</div>
            <div className="mt-2 text-sm text-slate-600">Projects Delivered</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-3xl font-extrabold text-indigo-600">100%</div>
            <div className="mt-2 text-sm text-slate-600">On-Time Delivery</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-3xl font-extrabold text-indigo-600">24/7</div>
            <div className="mt-2 text-sm text-slate-600">Support*</div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 bg-gradient-to-r from-indigo-600 to-rose-500 p-8 rounded-3xl text-center text-white shadow-xl"
      >
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to Start Your Project?
        </h2>

        <p className="mt-2 text-indigo-100">
          Share your requirements — we’ll help you build the best version of your idea.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link href="/contact" className="px-6 py-3 bg-white text-slate-900 rounded-xl shadow hover:bg-slate-100">
            Contact Us
          </Link>
          <Link href="/services" className="px-6 py-3 border border-white text-white rounded-xl hover:bg-white/10">
            View Services
          </Link>
        </div>
      </motion.div>

    </section>
  );
}
