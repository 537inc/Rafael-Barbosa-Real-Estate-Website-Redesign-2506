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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Buy', path: '/buy' },
    { name: 'Sell', path: '/sell' },
    { name: 'Market Insights', path: '/market-insights' },
    {
      name: 'Neighborhoods',
      path: '#',
      sub: [
        { name: 'Riverdale', path: '/riverdale' },
        { name: 'Upper Manhattan', path: '/upper-manhattan' },
        { name: 'The Bronx', path: '/the-bronx' },
        { name: 'Yonkers', path: '/yonkers' },
        { name: 'Bronxville', path: '/bronxville' },
        { name: 'Westchester', path: '/westchester' }
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 shadow-sm' : 'bg-white py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="z-50 flex items-center">
          <img src="https://media-manager-c.questera.ai/greta-media/172cce278505b230cda0d5f525875f63867f62d5279efa706d36efae4ebb2d8e6137b7923eb5cde22e2ba6646835b5af/images/aW1hZ2UvcG5n/1803f5dc86372bf91e7566f0b60d14bc.png" alt="The Barbosa Team Logo" className="h-10 md:h-12 w-auto object-contain" loading="eager" />
        </Link>

        {/* Desktop Nav - Item 2 */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Primary desktop navigation">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.sub ? (
                <button className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors flex items-center gap-1">
                  {link.name}
                  <SafeIcon icon={FiIcons.FiChevronDown} className="text-[10px]" />
                </button>
              ) : (
                <Link to={link.path} className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
                  {link.name}
                </Link>
              )}

              {link.sub && (
                <div className="absolute top-full left-0 mt-4 w-56 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {link.sub.map((sub) => (
                      <Link key={sub.name} to={sub.path} className="block px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a href="tel:347-679-6817" className="text-[11px] font-black uppercase tracking-widest text-black flex items-center gap-2 border-l border-gray-100 pl-8">
            <SafeIcon icon={FiIcons.FiPhone} /> 347.679.6817
          </a>
        </nav>

        {/* Mobile Toggle - Item 1 */}
        <button 
          className="lg:hidden z-50 p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          aria-label="Open navigation menu"
        >
          <SafeIcon icon={mobileMenuOpen ? FiIcons.FiX : FiIcons.FiMenu} className="text-2xl" />
        </button>

        <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
          {/* Mobile Nav - Item 2 */}
          <nav className="flex flex-col items-center space-y-6 pt-20 overflow-y-auto w-full" aria-label="Primary mobile navigation">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.sub ? (
                  link.sub.map(s => (
                    <Link key={s.name} to={s.path} className="text-xl font-black tracking-tighter uppercase px-4 py-2 hover:text-gray-500">
                      {s.name}
                    </Link>
                  ))
                ) : (
                  <Link to={link.path} className="text-xl font-black tracking-tighter uppercase px-4 py-2 hover:text-gray-500">
                    {link.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;