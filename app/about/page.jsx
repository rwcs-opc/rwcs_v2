// app/about/page.jsx
"use client";
import { motion } from "framer-motion";
import SITE, { SERVICES } from "../../data/site";

export default function AboutPage() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left */}
        <motion.article initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow">
          <h2 className="text-2xl font-semibold">Our Mission</h2>

          <img src="/images/our_mission.jpg" alt="Our mission" className="mt-6 rounded-lg shadow" />

          <p className="mt-6 text-slate-600 leading-relaxed">
            RWORLD COMPUTER SOLUTIONS (OPC) PRIVATE LIMITED was founded to deliver high-quality digital
            solutions that empower businesses of all sizes. We help companies modernize, automate and grow
            through practical, future-ready technology.
          </p>

          <h3 className="mt-8 text-lg font-semibold">Our Vision</h3>
          <p className="mt-2 text-slate-600">To become a trusted technology partner across India — delivering digital solutions powered by innovation and cloud.</p>

          <h3 className="mt-8 text-lg font-semibold">What We Do</h3>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li>✓ Custom Website Development</li>
            <li>✓ Cloud Deployment & Email Hosting</li>
            <li>✓ Automation & Custom Software Tools</li>
            <li>✓ AI Chatbots & Business Agents</li>
            <li>✓ Branding, Media & Digital Content</li>
            <li>✓ Long-term Technical Support</li>
          </ul>
        </motion.article>

        {/* Right */}
        <motion.aside initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow flex flex-col">
          <h3 className="text-2xl font-semibold">Contact & Snapshot</h3>
          <img src="/images/contact_location.jpg" alt="Contact / incorporation" className="mt-4 rounded-lg shadow" />

          <div className="mt-4 text-slate-600">
            <p>📍 <strong>Head Office:</strong> {SITE.address}</p>
            <p className="mt-2">📧 <strong>Email:</strong> <a href={`mailto:${SITE.email}`} className="text-indigo-600">{SITE.email}</a></p>
          </div>

          <div className="mt-6 p-4 bg-slate-50 rounded-xl border">
            <h4 className="font-semibold">Company Snapshot</h4>
            <ul className="mt-2 text-sm text-slate-600 space-y-1">
              <li>• Incorporated: 08 Dec 2020</li>
              <li>• Pages Built: 50+</li>
              <li>• Projects Delivered: 5+</li>
              <li>• Sectors: Startups, NGOs, Institutes, Local Businesses</li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-slate-50 rounded-xl border">
            <h4 className="font-semibold">Core Values</h4>
            <ul className="mt-2 text-sm text-slate-600 space-y-1">
              <li>• Transparency & Trust</li>
              <li>• Quality Over Quantity</li>
              <li>• Long-Term Partnership</li>
              <li>• Innovation-Driven Approach</li>
            </ul>
          </div>
        </motion.aside>
      </div>
    </motion.section>
  );
}
