import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter text-gradient">
          BelievStack
        </div>
        
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                  pathname === link.path ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link 
            to="/contact" 
            className="hidden sm:block px-5 py-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-sm font-bold text-white hover:scale-105 transition-transform shadow-lg shadow-brand-primary/20"
          >
            Get Started
          </Link>

          {/* Hamburger Icon */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 right-0 z-[70] h-full w-[280px] bg-[#0f172a] border-l border-white/10 p-8 transition-transform duration-500 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <div className="text-xl font-bold tracking-tighter text-gradient">BelievStack</div>
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="space-y-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={toggleMenu}
                className={`text-lg font-semibold transition-all duration-300 block ${
                  pathname === link.path ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Link 
            to="/contact" 
            onClick={toggleMenu}
            className="w-full block text-center px-5 py-4 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary font-bold text-white shadow-lg shadow-brand-primary/20"
          >
            Get Started
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
