import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">About</h2>
        <p className="mt-4 text-white/80">
          I craft clean visuals and thoughtful stories through the lens. My approach blends minimalist aesthetics with
          modern technology to deliver striking, timeless images. From studio portraits to product campaigns, I focus on
          details that elevate brand narratives.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl bg-white/5 p-5">
            <h3 className="text-lg font-medium">Expertise</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-white/80">
              <li>Portrait & Editorial Photography</li>
              <li>Product & Lifestyle Shoots</li>
              <li>Creative Direction & Lighting</li>
              <li>Retouching & Color Grading</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white/5 p-5">
            <h3 className="text-lg font-medium">Tools</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-white/80">
              <li>Canon R System • Sony Alpha</li>
              <li>Capture One • Lightroom • Photoshop</li>
              <li>DaVinci Resolve • Figma • Notion</li>
              <li>Lighting: Aputure, Godox, Nanlite</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
