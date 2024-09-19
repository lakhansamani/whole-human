import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className='bg-white container mx-auto p-10'>
      <div className='container mx-auto flex flex-col md:flex-row items-center md:space-x-8 text-center md:text-left'>
        {/* Text Section */}
        <div className='w-full md:w-1/2 space-y-6'>
          <h1 className='text-4xl md:text-5xl font-bold text-brandGreen leading-tight px-4 md:px-0'>
            Mission & Vision
          </h1>
          <p className='mt-4 text-lg font-semibold text-gray-700 px-4 md:px-0'>
            In a time of increasingly more disconnection, separation, and
            isolation.
          </p>
          <p className='text-lg text-gray-700 px-4 md:px-0'>
            Whole Human exists to bring people back together—within themselves
            and with each other, dedicated to a new normal—
            <span className='font-semibold'>one of interconnection</span>
            —bridging harmony between social connection, professional creation,
            and personal wellness.
          </p>
          <p className='text-lg text-gray-700 px-4 md:px-0'>
            <span className='font-semibold'>
              The community glue in the transient town of Nosara.
            </span>
            <br /> Whole Human is your home away from home.
          </p>
          <p className='text-2xl font-medium text-brandGreen px-4 md:px-0'>
            With a vision to return to your whole self.
          </p>
          <p className='text-2xl font-extrabold text-brandGreen px-4 md:px-0'>
            Live Free. Live Full. Live Whole.
          </p>
        </div>

        {/* Image Section */}
        <div className='w-full md:w-1/2 mt-8 md:mt-0 md:flex md:justify-end'>
          <Image
            alt='Ryan'
            src='/assets/images/ryan.webp'
            height={500}
            width={500}
            className='object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
