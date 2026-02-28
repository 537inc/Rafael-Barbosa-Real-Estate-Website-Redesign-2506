import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Sell', path: '/sell' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Market Insights', path: '/market-insights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4' : 'bg-white py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="z-50 flex items-center">
          <img src="https://media-manager-c.questera.ai/greta-media/172cce278505b230cda0d5f525875f63867f62d5279efa706d36efae4ebb2d8e6137b7923eb5cde22e2ba6646835b5af/images/aW1hZ2UvcG5n/1803f5dc86372bf91e7566f0b60d14bc.png" alt="The Barbosa Team Logo" className="h-10 md:h-12 w-auto object-contain" />
        </Link>
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
              {link.name}
            </Link>
          ))}
          <a href="tel:347-679-6817" className="text-xs font-bold uppercase tracking-widest text-black flex items-center gap-2">
            <SafeIcon icon={FiIcons.FiPhone} /> 347-679-6817
          </a>
        </nav>
        <button className="lg:hidden z-50 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <SafeIcon icon={mobileMenuOpen ? FiIcons.FiX : FiIcons.FiMenu} className="text-2xl" />
        </button>
        <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-2xl font-bold tracking-tight uppercase">
                {link.name}
              </Link>
            ))}
            <a href="tel:347-679-6817" className="text-xl font-medium mt-8 border-b-2 border-black pb-1">
              Call 347-679-6817
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;