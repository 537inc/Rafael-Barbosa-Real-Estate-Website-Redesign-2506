import React, { useEffect } from 'react';

const ReviewWidget = ({ className = "" }) => {
  useEffect(() => {
    // Check if script already exists to prevent duplicates
    const scriptId = 'reputation-hub-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://reputationhub.site/reputation/assets/review-widget.js";
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <iframe 
        className='lc_reviews_widget' 
        src='https://reputationhub.site/reputation/widgets/review_widget/YX80CMe65N0bX5qNSceP?widgetId=69a269369d91e819ba0b023d' 
        frameBorder='0' 
        scrolling='no' 
        style={{ minWidth: '100%', width: '100%', minHeight: '600px' }}
        title="Client Reviews"
      ></iframe>
    </div>
  );
};

export default ReviewWidget;