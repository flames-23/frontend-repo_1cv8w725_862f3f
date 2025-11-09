import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Camera } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[92vh] min-h-[640px] overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient fade for text legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 text-white">
        <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm backdrop-blur">
          <Camera className="mr-2 h-4 w-4" />
          Camera • Photography • Creative Tech
        </div>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Your Name</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          A modern, minimalist portfolio showcasing photography, creative direction, and technology-driven visuals.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center rounded-md bg-white px-4 py-2 font-medium text-black transition hover:bg-white/90"
          >
            View Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-white/20 bg-white/10 px-4 py-2 font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
