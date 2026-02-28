import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div>
            <img 
              src="https://media-manager-c.questera.ai/greta-media/172cce278505b230cda0d5f525875f63867f62d5279efa706d36efae4ebb2d8e6137b7923eb5cde22e2ba6646835b5af/images/aW1hZ2UvcG5n/1803f5dc86372bf91e7566f0b60d14bc.png" 
              alt="The Barbosa Team" 
              className="h-8 w-auto mb-6 grayscale"
            />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Upper Manhattan<br />
              The Bronx<br />
              Lower Westchester
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Contact</h3>
            <div className="space-y-3">
              <a href="tel:347-679-6817" className="block text-lg hover:text-gray-600 transition-colors">347-679-6817</a>
              <a href="mailto:rb@serhant.com" className="block text-lg hover:text-gray-600 transition-colors">rb@serhant.com</a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-black transition-colors">Terms of Service</Link></li>
              <li><Link to="/sop" className="hover:text-black transition-colors">Standard Operating Procedure</Link></li>
              <li><Link to="/fair-housing" className="hover:text-black transition-colors">Fair Housing Notice</Link></li>
              <li><Link to="/accessibility" className="hover:text-black transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-400">
          <div className="max-w-2xl">
            <p className="mb-2">
              <span className="font-bold">Equal Housing Opportunity.</span> All information deemed reliable but not guaranteed. Subject to errors, omissions, change of price, prior sale, or withdrawal without notice.
            </p>
            <p>&copy; {currentYear} Rafael Barbosa. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;