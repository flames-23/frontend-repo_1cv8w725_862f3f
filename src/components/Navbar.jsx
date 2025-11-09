import React from 'react';
import { Camera, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="inline-flex items-center gap-2 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur">
            <Camera className="h-5 w-5" />
          </span>
          <span className="font-semibold">Portfolio</span>
        </a>
        <nav className="hidden gap-6 text-sm text-white/90 md:flex">
          <a href="#projects" className="hover:text-white">Work</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
