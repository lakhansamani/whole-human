import React from 'react';
import Image from 'next/image';

const Stats = () => {
  return (
    <div className='bg-white container mx-auto py-20'>
      <h1 className='text-4xl md:text-5xl font-bold text-brandGreen leading-tight px-4 md:px-0 mb-10 text-center'>
        Global (un)wellness stats
      </h1>
      <div className='mx-0 md:mx-20 bg-brandGreen p-10 text-white rounded-md'>
        {/* Stats Section 5 cards with text-brandYellow as background */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {/* Card 1 */}
          <div className='bg-brandYellow p-5 rounded-md flex items-center justify-center'>
            <Image
              src='/assets/images/mental.png'
              alt='mental'
              width={250}
              height={250}
            />
          </div>
          <div className='bg-brandYellow p-5 rounded-md flex items-center justify-center'>
            <Image
              src='/assets/images/social.png'
              alt='mental'
              width={250}
              height={250}
            />
          </div>
          <div className='bg-brandYellow p-5 rounded-md flex items-center justify-center'>
            <Image
              src='/assets/images/emotional.png'
              alt='mental'
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 justify-center'>
          <div className='bg-brandYellow p-5 rounded-md flex items-center justify-center'>
            <Image
              src='/assets/images/spiritual.png'
              alt='mental'
              width={250}
              height={250}
            />
          </div>
          <div className='bg-brandYellow p-5 rounded-md flex items-center justify-center'>
            <Image
              src='/assets/images/physical.png'
              alt='mental'
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
