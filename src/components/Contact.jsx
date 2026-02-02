import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! (Connect backend to save messages)");
  };

  return (
    <section
      id="contact"
      className="px-6 py-24 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r`npm from-indigo-400 to-pink-400 bg-clip-text text-transparent">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-gray-900/70 backdrop-blur rounded-2xl p-8 shadow-lg border border-white/10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-white/10 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-white/10 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-white/10 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-36 resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6 text-gray-300 flex flex-col justify-center">
          <div className="p-6 rounded-xl bg-gray-900/60 border border-white/10 shadow">
            <p className="text-sm uppercase tracking-widest text-indigo-400">Email</p>
            <p className="text-lg">shakibahmmed1@gmail.com</p>
          </div>

          <div className="p-6 rounded-xl bg-gray-900/60 border border-white/10 shadow">
            <p className="text-sm uppercase tracking-widest text-indigo-400">Phone</p>
            <p className="text-lg">+8801818114159</p>
          </div>

          <div className="p-6 rounded-xl bg-gray-900/60 border border-white/10 shadow">
            <p className="text-sm uppercase tracking-widest text-indigo-400">WhatsApp</p>
            <p className="text-lg">+8801818114159</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
