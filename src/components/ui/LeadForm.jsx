import React, { useEffect } from 'react';

const LeadForm = ({ className = "" }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={`w-full bg-white ${className}`}>
      <iframe src="https://api.leadconnectorhq.com/widget/form/2vcEJMtPNaxOmghCanLA" style={{ width: '100%', height: '740px', border: 'none' }} id="inline-2vcEJMtPNaxOmghCanLA" title="Contact Form"></iframe>
    </div>
  );
};

export default LeadForm;