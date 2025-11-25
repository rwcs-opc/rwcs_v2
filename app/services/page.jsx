// app/services/page.jsx
"use client";
import { motion } from "framer-motion";
import { SERVICES, PRICING_PLANS, PROCESS_STEPS } from "../../data/site";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <section className="py-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-extrabold">Our Services</h1>
        <p className="mt-2 text-slate-600">Modern, scalable IT solutions tailored to your needs.</p>
      </header>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.12 } } }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s) => (
          <motion.article key={s.title} variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <img src={s.image} alt={s.title} className="h-28 w-full object-contain rounded-md" />
            <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            <ul className="mt-3 text-sm text-slate-700 space-y-1">
              {s.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <Link href="/contact" className="px-3 py-2 bg-indigo-600 text-white rounded-lg text-sm">Request a Quote</Link>
              <button className="text-sm text-indigo-600">Learn more →</button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Pricing */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-center">Flexible Plans for Every Stage</h2>
        <p className="text-center text-sm text-slate-600 mt-2">Pricing varies; contact us for a tailored quote.</p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {PRICING_PLANS.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl p-5 shadow">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{p.name}</h4>
                <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">{p.badge}</span>
              </div>
              <p className="text-xs mt-1 text-slate-600">{p.subtitle}</p>
              <ul className="mt-3 text-sm text-slate-700 space-y-1">
                {p.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <div className="mt-4">
                <Link href="/contact" className="inline-block px-3 py-2 bg-slate-800 text-white rounded-lg text-xs">Contact for Pricing</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-center">How We Work</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {PROCESS_STEPS.map((s, i) => (
            <div key={s} className="bg-white rounded-xl p-4 shadow">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">{i + 1}</div>
              <p className="mt-2 text-sm text-slate-700">{s}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
