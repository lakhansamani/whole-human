'use client';

// components/Hero.js
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  Description,
} from '@headlessui/react';

const values = [
  'Mindful',
  'Connected',
  'Expressed',
  'Sustainable',
  'Powerful',
  'Calm',
  'Focused',
  'Free',
  'Full',
  'Fun',
];

const logoURL = '/assets/images/wh-h-logo.svg';
const videoURL = '/assets/videos/forest.mp4';
const instagramIcon = '/assets/images/instagram.svg';
// const audioURL = '/assets/audios/hero-audio.mp3';
const instagramURL = 'https://www.instagram.com/wholehumanpodcast/';

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 2000); // Change the value every 2 seconds
    return () => clearInterval(interval);
  }, []);

  function toggleVideoModal() {
    setIsVideoModalOpen(!isVideoModalOpen);
  }

  return (
    <div className='relative w-full h-screen overflow-hidden bg-black'>
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        src={videoURL}
        autoPlay
        loop
        muted
      />

      {/* Semi-transparent overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
      <div className='relative z-10 flex flex-col items-center h-full text-center text-app-off-white py-10'>
        <Image
          src={logoURL}
          alt='Whole Human Logo'
          height={200}
          width={200}
          className='mb-10'
        />
        {/* <div className='mt-10 text-3xl px-10 md:text-4xl'>
          Bridging the worlds. <br />
          Whole human is your home away from home.
        </div> */}
        <div className='flex flex-col items-center mt-18 md:flex-row'>
          <h1 className='font-semibold text-white text-5xl md:pr-3 md:text-6xl pb-2 md:mt-0'>
            LIVE
          </h1>
          {/* framer motion to fade in */}
          <motion.h1
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className='text-5xl font-medium md:text-6xl pb-2 md:mt-0'
          >
            {values[index]}
          </motion.h1>
          <h1 className='font-semibold text-white text-5xl md:pl-3 md:text-6xl'>
            WHOLE
          </h1>
        </div>

        {isVideoModalOpen && (
          <Dialog
            open={isVideoModalOpen}
            onClose={toggleVideoModal}
            className='relative z-50'
          >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <DialogBackdrop className='fixed inset-0 bg-black/30' />

            {/* Full-screen container to center the panel */}
            <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
              {/* The actual dialog panel  */}
              <DialogPanel className='space-y-4 bg-slate-100 p-5 rounded-md'>
                <DialogTitle className='font-semibold text-2xl'>
                  How we can help you?
                </DialogTitle>
                <Description>
                  <iframe
                    height='315'
                    src='https://www.youtube.com/embed/E36_MJBoVMM?si=0WuuyYkuGjmQ_Clh'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    className='rounded-md md:w-[560px]'
                    allowFullScreen
                  ></iframe>
                </Description>

                <div className='flex justify-end'>
                  <Button
                    onClick={toggleVideoModal}
                    className='font-xl bg-brandGreen text-white py-3 px-5 rounded-md'
                  >
                    Close
                  </Button>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}

        <div className='mt-10 flex flex-wrap center items-center justify-center'>
          <Button className='text-black bg-white py-3 px-4 rounded-md m-3 text-xl hover:bg-app-off-white'>
            Start your assessment
          </Button>
          <Button
            className='text-white border-2 py-3 px-4 rounded-md m-3 text-xl hover:text-app-off-white'
            onClick={toggleVideoModal}
          >
            Watch Video
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
