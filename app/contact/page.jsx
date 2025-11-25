"use client";

import { useState } from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-extrabold text-red-600 text-center"
      >
        Contact Us
      </motion.h1>

      <p className="mt-3 text-center text-slate-600 max-w-xl mx-auto">
        Have a question or want to start a project? Send us a message.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        {/* CONTACT CARD – Light animations & optimized blur */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-slate-200"
        >
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Get in Touch
          </h2>

          <div className="flex items-center gap-3 mb-3">
            <MdEmail className="text-red-500 text-xl" />
            <span className="text-slate-700">
              contact@rwcs.in
            </span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <MdPhone className="text-red-500 text-xl" />
            <span className="text-slate-700">+91 70024 53818</span>
          </div>

          <div className="flex items-center gap-3">
            <MdLocationOn className="text-red-500 text-xl" />
            <span className="text-slate-700">
              Ward No.-9, Santi Nagar, Barpeta Road, Assam - 781315
            </span>
          </div>
        </motion.div>

        {/* CONTACT FORM – Fastest possible animation */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-slate-200"
        >
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Send Us a Message
          </h2>

          <div className="flex flex-col gap-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-400 outline-none"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-red-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-red-700 transition w-full"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-sm mt-2">
                ✔ Your message has been sent!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 text-sm mt-2">
                ✖ Something went wrong. Try again!
              </p>
            )}
          </div>
        </motion.form>

      </div>
    </div>
  );
}
