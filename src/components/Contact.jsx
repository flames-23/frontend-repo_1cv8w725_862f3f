import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  }

  return (
    <section id="contact" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">Contact</h2>
        <p className="mt-2 text-white/70">Have a project in mind? Let’s talk.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          <textarea
            name="message"
            required
            rows="5"
            placeholder="Tell me about your project"
            className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <button
            type="submit"
            className="inline-flex w-fit items-center justify-center rounded-md bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
          >
            Send Message
          </button>
          {status && <p className="text-sm text-white/70">{status}</p>}
        </form>
      </div>
    </section>
  );
}
