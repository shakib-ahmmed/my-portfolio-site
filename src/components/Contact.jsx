import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(

    )
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error(error);
          setLoading(false);
        }
      );
  };

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/shakib-ahmmed", color: "text-indigo-400" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/shakib-ahmmed1/", color: "text-blue-400" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/shakib.uav/", color: "text-pink-400" },
    { icon: <FaEnvelope />, href: "mailto:shakibahmmed1@gmail.com", color: "text-purple-400" },
  ];

  return (
    <section
      id="contact"
      className="relative px-6 py-24 max-w-6xl mx-auto"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 bg-clip-text text-transparent"
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900/70 backdrop-blur-md rounded-3xl p-8 flex flex-col gap-5 shadow-lg border border-white/10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-gray-800 border border-white/10 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-gray-800 border border-white/10 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-gray-800 border border-white/10 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-40 resize-none text-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-90 transition text-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="flex flex-col justify-center gap-6">
          {[
            { label: "Email", value: "shakibahmmed1@gmail.com" },
            { label: "Phone", value: "+8801818114159" },
            { label: "WhatsApp", value: "+8801818114159" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gray-900/70 border border-white/10 shadow-lg hover:shadow-indigo-500/20 transition"
            >
              <p className="text-sm uppercase tracking-widest text-indigo-400">
                {item.label}
              </p>
              <p className="text-lg text-gray-100 mt-1">{item.value}</p>
            </div>
          ))}

          {/* Social Icons */}
          <div className="flex gap-5 mt-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 hover:${link.color} transition hover:drop-shadow-[0_0_10px_currentColor] text-3xl`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="absolute -top-32 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float2" />


      <style>{`
        @keyframes float { 0%,100%{transform: translateY(0);}50%{transform: translateY(-20px);} }
        @keyframes float2 { 0%,100%{transform: translateY(0);}50%{transform: translateY(-15px);} }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float2 { animation: float2 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Contact;
