import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero-stunning.png';

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background Mesh/Gradient */}
      <div className="absolute inset-0 -z-10 bg-[#0f172a]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="inline-block px-4 py-1.5 rounded-full glass text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Next-Gen Technology Partners
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            Scale Your <br />
            <span className="text-gradient">Potential</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            BelievStack delivers premium full-stack solutions that transform businesses. We build the future, one line of code at a time.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="px-8 py-4 rounded-2xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all shadow-xl"
            >
              View Projects
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 rounded-2xl glass text-white font-bold text-lg hover:bg-white/10 transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>

        <div className="relative animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/40 to-brand-secondary/40 blur-3xl -z-10 scale-90"></div>
          <img 
            src={heroImg} 
            alt="Hero" 
            className="w-full h-auto rounded-3xl shadow-2xl border border-white/10 hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full text-center border-t border-white/5 pt-12">
        <div>
          <div className="text-4xl font-bold text-white">99%</div>
          <div className="text-sm text-gray-500 uppercase tracking-widest mt-1">Satisfaction</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-white">150+</div>
          <div className="text-sm text-gray-500 uppercase tracking-widest mt-1">Projects</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-white">24/7</div>
          <div className="text-sm text-gray-500 uppercase tracking-widest mt-1">Support</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-white">10+</div>
          <div className="text-sm text-gray-500 uppercase tracking-widest mt-1">Experts</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
