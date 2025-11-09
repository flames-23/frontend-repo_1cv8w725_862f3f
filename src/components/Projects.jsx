import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Studio Shoot – Neon Portraits',
    tag: 'Photography',
    image:
      'https://images.unsplash.com/photo-1532767153582-b1a0e5145009?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Minimal Product – Headphones',
    tag: 'Creative Direction',
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Tech Editorial – Future Cameras',
    tag: 'Editorial',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Selected Work</h2>
            <p className="mt-2 text-white/70">Modern visuals across photography and creative tech.</p>
          </div>
          <a href="#contact" className="hidden rounded-md border border-white/20 px-4 py-2 text-sm text-white/80 hover:bg-white/10 md:inline-block">
            Book a project
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group relative overflow-hidden rounded-xl bg-white/5">
              <img
                src={p.image}
                alt={p.title}
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-xs">{p.tag}</span>
                <div className="mt-2 flex items-center justify-between">
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 opacity-80" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
