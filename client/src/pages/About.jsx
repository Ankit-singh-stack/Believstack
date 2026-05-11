import React from 'react';

const About = () => (
  <div className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <h2 className="text-5xl font-black tracking-tighter text-gradient">Innovation Driven By Belief</h2>
        <p className="text-xl text-gray-400 leading-relaxed">
          At BelievStack, we don't just build websites; we craft digital experiences that redefine how businesses interact with the world. Our team of visionary designers and elite engineers work in harmony to turn your most ambitious ideas into reality.
        </p>
        <div className="space-y-4">
          {[
            "Experienced full-stack engineers with deep MERN expertise.",
            "Modern design philosophy focused on user experience.",
            "Agile methodology for fast and transparent delivery.",
            "Scalable architectures ready for millions of users."
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-xs text-white">✓</div>
              <span className="text-gray-300 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <div className="glass rounded-3xl p-12 relative border border-white/10">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-black text-white">10+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Global Awards</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-white">50+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Active Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-white">500k+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Lines of Code</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-white">100%</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
