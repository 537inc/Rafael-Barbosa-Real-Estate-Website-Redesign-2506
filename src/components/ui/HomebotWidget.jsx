import React, { useEffect } from 'react';

const HomebotWidget = ({ className = "" }) => {
  useEffect(() => {
    // Unique ID for the initialization script to prevent multiple loads
    const scriptId = 'homebot-init-script';
    
    if (!document.getElementById(scriptId)) {
      (function (h, b) {
        var w = window, d = document, s = 'script', x, y;
        w['__hb_namespace'] = h;
        w[h] = w[h] || function () { (w[h].q = w[h].q || []).push(arguments) };
        y = d.createElement(s);
        y.id = scriptId;
        x = d.getElementsByTagName(s)[0];
        y.async = 1;
        y.src = b;
        x.parentNode.insertBefore(y, x);
      })('Homebot', 'https://embed.homebotapp.com/lgw/v1/widget.js');
    }

    // Initialize the widget after a short delay to ensure script has executed
    const initTimer = setTimeout(() => {
      if (window.Homebot) {
        window.Homebot('#homebot_homeowner', 'f8bdf1a69c5851d5f9821ff58132f0712addb84f251a08fe');
      }
    }, 500);

    return () => clearTimeout(initTimer);
  }, []);

  return (
    <div className={`w-full min-h-[400px] ${className}`}>
      <div id="homebot_homeowner" className="w-full"></div>
    </div>
  );
};

export default HomebotWidget;