import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', to, href, onClick, className = '', type = 'button' }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 ease-out";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 border border-black",
    outline: "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white",
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