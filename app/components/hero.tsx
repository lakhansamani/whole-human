'use client';

// components/Hero.js
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  Description,
} from '@headlessui/react';
import { FaWhatsapp, FaYoutube } from 'react-icons/fa';

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
  'WHOLE',
];

const logoURL = '/assets/images/whole-human-logo.png';
const videoURL = '/assets/videos/hero.mp4';

const BebasFont = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

const HeroSection = () => {
  // const [index, setIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const lastIndex = values.length - 1;

  // Fade in animation
  useEffect(() => {
    const fadeDuration = currentWordIndex === lastIndex ? 3500 : 1500;

    const timeout = setTimeout(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === lastIndex ? 0 : prevIndex + 1,
      );
    }, fadeDuration);

    return () => clearTimeout(timeout);
  }, [currentWordIndex]);

  // states used for typing animation
  // const [text, setText] = useState('');
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [loopIndex, setLoopIndex] = useState(0); // Tracks which word is being typed
  // const [charIndex, setCharIndex] = useState(0); // Tracks the current character position
  // const [isPaused, setIsPaused] = useState(false); // Tracks if there's a pause
  // const typingSpeed = 80;
  // const pauseDuration = 3000; // 5-second pause after last word

  // Typing animation
  // useEffect(() => {
  //   if (isPaused) {
  //     // Wait for the pause duration without deleting the word
  //     const pauseTimeout = setTimeout(() => {
  //       setIsPaused(false);
  //       setIsDeleting(true); // Start deleting after the pause
  //     }, pauseDuration);
  //     return () => clearTimeout(pauseTimeout);
  //   }

  //   let typingTimeout;

  //   const handleTyping = () => {
  //     const currentWord = values[loopIndex];

  //     if (isDeleting) {
  //       setText(currentWord.substring(0, charIndex - 1));
  //       setCharIndex((prev) => prev - 1);

  //       if (charIndex === 0) {
  //         setIsDeleting(false);
  //         const nextIndex = loopIndex + 1;
  //         if (nextIndex === values.length) {
  //           setLoopIndex(0);
  //         } else {
  //           setLoopIndex(nextIndex);
  //         }
  //       }
  //     } else {
  //       setText(currentWord.substring(0, charIndex + 1));
  //       setCharIndex((prev) => prev + 1);

  //       if (charIndex === currentWord.length) {
  //         if (loopIndex === values.length - 1) {
  //           // If it's the last word, pause before deleting
  //           setIsPaused(true);
  //         } else {
  //           setIsDeleting(true);
  //         }
  //       }
  //     }
  //   };

  //   typingTimeout = setTimeout(handleTyping, typingSpeed);

  //   // Clear timeout when component unmounts
  //   return () => clearTimeout(typingTimeout);
  // }, [charIndex, isDeleting, loopIndex, isPaused]);

  function toggleVideoModal() {
    setIsVideoModalOpen(!isVideoModalOpen);
  }

  function toggleAssessmentModal() {
    setIsAssessmentModalOpen(!isAssessmentModalOpen);
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
      <div className='relative z-10 flex flex-col items-center justify-between h-full text-center text-app-off-white py-10'>
        <Image
          src={logoURL}
          alt='Whole Human Logo'
          height={250}
          width={250}
          className='mt-5'
        />
        {/* <div className='mt-10 text-3xl px-10 md:text-4xl'>
          Bridging the worlds. <br />
          Whole human is your home away from home.
        </div> */}
        <div className='flex flex-col items-center my-8 justify-center text-center'>
          <h1
            className={`text-7xl md:text-9xl pb-2 md:mt-0 animate-fade-right animate-once ${BebasFont.className}`}
          >
            <span className='text-brandYellow inline-block'>LIVE</span>
            {/* <span
              className={`inline-block animate-fade duration-150 ml-0 md:ml-5 min- ${lastIndex === currentWordIndex ? `font-bold text-brandYellow ${BebasFont.className}` : `${BebasFont.className}`}`}
              style={{
                minWidth: '10ch',
                display: 'inline-block',
                textAlign: 'left',
              }}
            >
              {values[currentWordIndex]}
            </span> */}
          </h1>
          <h1
            key={`${values[currentWordIndex]}-${Date.now()}`}
            className={`animate-fade duration-150 font-semibold text-7xl md:text-9xl text-primary ${lastIndex === currentWordIndex ? `font-bold text-brandYellow ${BebasFont.className}` : `${BebasFont.className}`}`}
            style={{
              minHeight: 72,
            }}
          >
            {values[currentWordIndex]}
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
                  {/* <iframe
                    height='315'
                    src='https://www.youtube.com/embed/E36_MJBoVMM?si=0WuuyYkuGjmQ_Clh'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    className='rounded-md md:w-[560px]'
                    allowFullScreen
                  ></iframe> */}

                  <div className='min-h-500 min-w-320 py-20'>
                    <h1 className='font-bold text-6xl text-center'>
                      Whole Human story
                      <br />
                      coming soon...
                    </h1>
                  </div>
                </Description>

                <div className='flex justify-end'>
                  <Button
                    onClick={toggleVideoModal}
                    className='font-xl border-brandYellow bg-brandYellow py-3 px-5 rounded-md'
                  >
                    Close
                  </Button>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}

        {isAssessmentModalOpen && (
          <Dialog
            open={isAssessmentModalOpen}
            onClose={toggleAssessmentModal}
            className='relative z-50'
          >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <DialogBackdrop className='fixed inset-0 bg-black/30' />

            {/* Full-screen container to center the panel */}
            <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
              {/* The actual dialog panel  */}
              <DialogPanel className='space-y-4 bg-slate-100 p-5 rounded-md'>
                <DialogTitle className='font-semibold text-2xl'>
                  Your Wellbeing Assessment
                </DialogTitle>
                <Description>
                  <div className='min-h-500 min-w-320 py-20'>
                    <h1 className='font-bold text-6xl text-center'>
                      Whole Human assessment
                      <br />
                      coming soon...
                    </h1>
                  </div>
                </Description>

                <div className='flex justify-end'>
                  <Button
                    onClick={toggleAssessmentModal}
                    className='font-xl border-brandYellow bg-brandYellow py-3 px-5 rounded-md'
                  >
                    Close
                  </Button>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}

        <div className='my-5 flex flex-wrap center items-center justify-center'>
          <a
            href='https://chat.whatsapp.com/Ly284FKRu442BHlAaX3XWz'
            target='_blank'
            rel='noreferrer'
          >
            <Button
              className='flex items-center justify-center text-black border-2 border-brandYellow bg-brandYellow py-3 px-4 rounded-md m-3 text-xl hover:bg-app-off-white'
              // onClick={toggleAssessmentModal}
            >
              <FaWhatsapp className='mr-2' />
              Join WhatsApp Group
            </Button>
          </a>
          <Button
            className='flex items-center justify-center text-white border-2 py-3 px-4 rounded-md m-3 text-xl hover:text-app-off-white'
            onClick={toggleVideoModal}
          >
            <FaYoutube className='mr-2' />
            Watch Video
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
