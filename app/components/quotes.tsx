'use client';

import React, { useState, useEffect } from 'react';

const quotesList = [
  {
    quote: `Mental health is not a destination, but a process. It's about how you drive, not where you're going.`,
    author: 'Noam Shpancer',
  },
  {
    quote: `Happiness is the highest form of health.`,
    author: 'Dalai Lama',
  },
  {
    quote:
      'To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.',
    author: 'Buddha',
  },
  {
    quote: 'Take care of your body. It’s the only place you have to live.',
    author: 'Jim Rohn',
  },
];

const Quotes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    // at every few seconds change the index to next index
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotesList.length);
    }, 1000);

    return () => {
      interval && clearInterval(interval);
    };
  });

  return (
    <div className='container mx-auto p-10 bg-white py-20'>
      <div className='mx-10 md:mx-20 bg-brandGreen p-10 text-white h-48 rounded-md'>
        <div className='relative'>
          <div className='text-center h-24'>
            <p className='text-xl font-semibold mb-4'>
              {`"${quotesList[currentIndex].quote}"`}
            </p>
            <p className='text-lg font-medium text-white'>
              — {quotesList[currentIndex].author}
            </p>
          </div>

          {/* Navigation Dots */}
          <div className='flex justify-center mt-6 space-x-2'>
            {quotesList.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full ${
                  currentIndex === index ? 'bg-white' : 'bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
