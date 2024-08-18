'use client';

// components/Hero.js
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const values = [
  'Holistic Wellbeing',
  'People-Centric',
  'Sustainability',
  'Inclusion & Equality',
  'Play & Curiosity',
  'Growth Mindset',
  'Grit',
  'Safety',
];

const logoURL = '/assets/images/logo.png';
const videoURL = '/assets/videos/hero-video.mp4';
const instagramIcon = '/assets/images/instagram.svg';
// const audioURL = '/assets/audios/hero-audio.mp3';
const instagramURL = 'https://www.instagram.com/wholehumanpodcast/';

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const audioRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 2000); // Change the value every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-full h-screen overflow-hidden bg-black font-montserrat'>
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        src={videoURL}
        autoPlay
        loop
        muted
      />

      {/* Semi-transparent overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
      <div className='absolute top-3 right-3'>
        <a href={instagramURL}>
          <Image src={instagramIcon} alt='Instagram' width={30} height={30} />
        </a>
      </div>
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-[#DACDB9]'>
        <div className='bg-[#DACDB9] rounded-full p-3'>
          <Image
            src={logoURL}
            alt='Whole Human Logo'
            height={200}
            width={200}
          />
        </div>
        <div className='text-2xl font-light p-5 max-w-full md:max-w-[60%]'>
          <b>Bridging the worlds of Nosara</b> (between expats and locals,
          nature and technology, self and community, action and recovery) by
          being the go-to space for connection, creation, and inspiration. Your
          daily retreat.
        </div>
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          className='text-4xl font-bold'
        >
          {values[index]}
        </motion.h1>

        <div className='mt-8'>
          <input
            type='email'
            placeholder='Your Email'
            className='px-4 py-2 text-black rounded-l-md focus:outline-none'
          />
          <button className='px-4 py-2 text-white bg-[#556541] rounded-r-md'>
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
