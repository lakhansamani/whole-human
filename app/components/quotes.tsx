'use client';

import React, { useState, useEffect } from 'react';

const quotesList = [
  {
    quote: `THE POWER OF COMMUNITY TO CREATE HEALTH IS FAR GREATER THAN ANY PHYSICIAN, CLINIC, OR HOSPITAL`,
    author: 'Mark Hyman',
  },
  // {
  //   quote: `Happiness is the highest form of health.`,
  //   author: 'Dalai Lama',
  // },
  // {
  //   quote:
  //     'To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.',
  //   author: 'Buddha',
  // },
  // {
  //   quote: 'Take care of your body. It’s the only place you have to live.',
  //   author: 'Jim Rohn',
  // },
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
    }, 5000);

    return () => {
      interval && clearInterval(interval);
    };
  });

  return (
    <div className='container mx-auto p-10 bg-white py-20'>
      <div className='mx-0 md:mx-20 bg-brandGreen p-10 text-white h-72 md:h-48 rounded-md'>
        <div className='relative'>
          <div
            className='text-center h-48 md:h-24 animate-once animate-fade animate-duration-[1000ms]'
            key={`${currentIndex}-${Date.now()}`}
          >
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
