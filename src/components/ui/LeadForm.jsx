import React, { useEffect } from 'react';

const LeadForm = ({ className = "" }) => {
  useEffect(() => {
    // Load the LeadConnector form embed script
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={`w-full bg-white ${className}`}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/2vcEJMtPNaxOmghCanLA"
        style={{ width: '100%', height: '740px', border: 'none', borderRadius: '3px' }}
        id="inline-2vcEJMtPNaxOmghCanLA" 
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="rafaelbarbosa.com"
        data-height="740"
        data-layout-iframe-id="inline-2vcEJMtPNaxOmghCanLA"
        data-form-id="2vcEJMtPNaxOmghCanLA"
        title="rafaelbarbosa.com"
        className="w-full"
      ></iframe>
    </div>
  );
};

export default LeadForm;