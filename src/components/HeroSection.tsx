import React from 'react';
export function HeroSection() {
  return <section id="home" className="w-full bg-gray-900 py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" alt="Architecture background" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Architecture <br />& Design Excellence
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
            Creating spaces that inspire, innovate, and transform the way we
            live and work. Award-winning architectural solutions for the modern
            world.
          </p>
          <a href="#portfolio" className="inline-flex items-center px-8 py-4 bg-white text-gray-900 text-lg font-medium hover:bg-gray-100 transition-colors rounded">
            View Projects
          </a>
        </div>
      </div>
    </section>;
}