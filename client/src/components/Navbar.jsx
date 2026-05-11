import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold tracking-tighter text-gradient">
        BelievStack
      </div>
      
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
          className="px-5 py-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-sm font-bold text-white hover:scale-105 transition-transform shadow-lg shadow-brand-primary/20"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
