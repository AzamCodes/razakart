'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const BrandSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(6);

  const brands = [
    {
      name: 'Apple',
      logo: '/brands/apple.webp',
      url: 'https://www.apple.com',
      bgColor: 'bg-white'
    },
    {
      name: 'Xiaomi',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg',
      url: 'https://www.mi.com',
      bgColor: 'bg-white'
    },
    {
      name: 'Samsung',
      logo: '/brands/samsung.svg',
      url: 'https://www.samsung.com',
      bgColor: 'bg-white'
    },
    {
      name: 'Realme',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Realme_logo_SVG.svg',
      url: 'https://www.realme.com',
      bgColor: 'bg-yellow-400'
    },
    {
      name: 'Lenovo',
      logo: '/brands/lenovo.svg',
      url: 'https://www.lenovo.com',
    //   bgColor: 'bg-red-600'
    },
    {
      name: 'Nokia',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Nokia_wordmark.svg',
      url: 'https://www.nokia.com',
      bgColor: 'bg-white'
    },
    {
      name: 'Dell',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg',
      url: 'https://www.dell.com',
      bgColor: 'bg-white'
    },
    {
      name: 'HP',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg',
      url: 'https://www.hp.com',
      bgColor: 'bg-white'
    },
    {
      name: 'OnePlus',
      logo: '/brands/oneplus.svg',
      url: 'https://www.oneplus.com',
      bgColor: 'bg-white'
    },
    {
      name: 'Oppo',
      logo: '/brands/oppo.svg',
      url: 'https://www.oppo.com',
      bgColor: 'bg-white'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2);
      } else if (window.innerWidth < 768) {
        setItemsPerView(3);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(5);
      } else {
        setItemsPerView(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, brands.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Top Selling Brands</h2>
      
      <div className="relative">
        {/* Previous Button */}
        {canGoPrevious && (
          <button
            onClick={handlePrevious}
            className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/85 rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous brands"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Brands Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  aria-label={`Visit ${brand.name} official website`}
                >
                  <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 h-32 flex flex-col items-center justify-center">
                    <div className={`w-full h-20 flex items-center justify-center mb-2 rounded  `}>
                      <Image
                      width={60}
                      height={60}
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-800 text-center group-hover:text-blue-600 transition-colors">
                      {brand.name}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        {canGoNext && (
          <button
            onClick={handleNext}
            className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/85 rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next brands"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>

      {/* Dots Indicator */}
      {maxIndex > 0 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandSlider;