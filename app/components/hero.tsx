'use client';

// components/Hero.js
import { useEffect, useState } from 'react';
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
  'Whole',
];

const logoURL = '/assets/images/wh-h-logo.svg';
const videoURL = '/assets/videos/forest.mp4';

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const isLastWord = index === values.length - 1;
    const delay = isLastWord ? 10000 : 2000; // 10 seconds for "Whole", 2 seconds for others

    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, delay);

    return () => clearTimeout(timer);
  }, [index]);

  function toggleVideoModal() {
    setIsVideoModalOpen(!isVideoModalOpen);
  }
  console.log('HeroSection', index);
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
        <div className='flex flex-col items-center mt-16 md:flex-row justify-center text-center'>
          <h1
            className={`font-semibold text-white text-5xl md:text-7xl pb-2 md:mt-0 animate-fade-right animate-once`}
          >
            Live
          </h1>
          <h1
            key={`${values[index]}-${Date.now()}`}
            className={`font-semibold ml-0 mt-5 md:ml-5 md:mt-0 text-5xl md:text-7xl text-primary animate-fade-left animate-once ${index === values.length - 1 ? 'text-white' : 'animate-duration-[2000ms]'}`}
          >
            {values[index]}
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
          <Button className='text-black border-2 border-white bg-white py-3 px-4 rounded-md m-3 text-xl hover:bg-app-off-white'>
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
