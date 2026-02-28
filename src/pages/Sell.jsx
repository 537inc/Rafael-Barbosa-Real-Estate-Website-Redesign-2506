import React from 'react';
import SellerValue from '../components/sections/SellerValue';
import Valuation from '../components/sections/Valuation';
import FadeIn from '../components/ui/FadeIn';

const Sell = () => {
  return (
    <div className="pt-32">
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Selling Strategies That Command Results.</h1>
            <p className="text-xl text-gray-500"> We leverage proprietary intelligence to position your property ahead of the competition. </p>
          </FadeIn>
        </div>
      </section>
      <SellerValue />
      <Valuation />
    </div>
  );
};

export default Sell;