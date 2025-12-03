import React from 'react';
import Icon from '../../../components/AppIcon';

const ProductHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 mb-6">
            <Icon name="Sparkles" size={20} color="#6B46C1" />
            <span className="text-sm font-semibold text-purple-700">AI-Powered Digital Products</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with{' '}
            <span className="gradient-text">Intelligent Solutions</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Explore our comprehensive suite of AI-first digital products designed to automate operations, enhance customer experiences, and accelerate growth. Each solution is built for scale with enterprise-grade security.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Icon name="Rocket" size={20} />
              Start Free Trial
            </button>
            <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 hover:border-purple-500 transition-all duration-300">
              <Icon name="Play" size={20} />
              Watch Demo
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Icon name="Check" size={18} color="#10B981" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" size={18} color="#10B981" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" size={18} color="#10B981" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;