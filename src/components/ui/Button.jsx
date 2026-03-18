import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', to, href, onClick, className = '', type = 'button' }) => {
  // Enhanced padding for mobile accessibility (min 44px height)
  const baseStyle = "inline-flex items-center justify-center px-8 py-5 md:py-4 text-[11px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 ease-out min-h-[52px]";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 border border-black active:scale-[0.98]",
    outline: "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white active:scale-[0.98]",
  };

  const classes = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>;
  }
  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;