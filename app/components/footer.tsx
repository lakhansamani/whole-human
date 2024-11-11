'use client';
import React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  Description,
  Button,
} from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/16/solid';

const Footer = () => {
  const [email, setEmail] = React.useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleNewsLetterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      setIsSuccessModalOpen(true);
    }, 1000);
  };

  return (
    <footer className='footer bg-brandGreen'>
      <div className='container mx-auto p-10'>
        {/* First Section */}
        <div className='flex flex-col md:flex-row'>
          {/* Left Column */}
          <div className='w-full md:w-4/12 mb-6 md:mb-0'>
            <h1 className='text-3xl font-bold'>Whole Human</h1>
            <p className='mt-4'>
              We are the kind of close friend you can feel comfortable being
              vulnerable with one moment, and then will hype you up to do
              something adventurous and exciting the next. We are confident in
              the expertise and value we provide without being arrogant or
              in-your-face.
            </p>
            <ul className='flex space-x-4 mt-4'>
              <li>
                <a href='#'>
                  <Image
                    src='/assets/images/facebook.svg'
                    alt='Facebook'
                    height={30}
                    width={30}
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image
                    src='/assets/images/insta.svg'
                    alt='Instagram'
                    height={30}
                    width={30}
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image
                    src='/assets/images/linkedin.svg'
                    alt='LinkedIn'
                    height={30}
                    width={30}
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image
                    src='/assets/images/youtube.svg'
                    alt='YouTube'
                    height={30}
                    width={30}
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className='w-full md:w-5/12 ml-auto'>
            <h1 className='text-3xl font-bold'>Join our newsletter</h1>
            <form className='mt-6' onSubmit={handleNewsLetterSubmit}>
              <div className='flex flex-col space-y-2'>
                <input
                  placeholder='Email address *'
                  type='email'
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandGreen text-black'
                />
                <small className='text-white'>
                  Don&apos;t worry, we will only use your email address to send
                  you our newsletter.
                </small>
              </div>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='mt-4 px-4 py-2 border-brandYellow bg-brandYellow rounded-md focus:ring-2 focus:ring-brandYellow focus:outline-none text-black'
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </div>
        </div>

        <hr className='my-10' />

        {/* Quick Contact Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          <div className='flex items-center space-x-2'>
            <Image
              src='/assets/images/location.svg'
              alt='Location'
              height={30}
              width={30}
            />
            <a href='https://maps.app.goo.gl/EQtpEiTXSYMXqfJQ6' target='_blank'>
              Get Directions
            </a>
          </div>
          <div className='flex items-center space-x-2'>
            <Image
              src='/assets/images/phone.svg'
              alt='Phone'
              height={30}
              width={30}
            />
            <a href='tel:(316) 555-0116'>(316) 555-0116</a>
          </div>
          <div className='flex items-center space-x-2'>
            <Image
              src='/assets/images/email.svg'
              alt='Email'
              height={30}
              width={30}
            />
            <a href='mailto:info@wholehuman.club'>info@wholehuman.life</a>
          </div>
          <div className='flex items-center space-x-2'>
            <Image
              src='/assets/images/clock.svg'
              alt='Hours'
              height={30}
              width={30}
            />
            <span>9 AM - 6 PM</span>
          </div>
        </div>

        {
          // success modal
          isSuccessModalOpen && (
            <Dialog
              open={isSuccessModalOpen}
              onClose={() => setIsSuccessModalOpen(false)}
              className='relative z-50'
            >
              {/* The backdrop, rendered as a fixed sibling to the panel container */}
              <DialogBackdrop className='fixed inset-0 bg-black/30' />

              {/* Full-screen container to center the panel */}
              <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
                {/* The actual dialog panel  */}
                <DialogPanel className='space-y-4 bg-white rounded-md p-5'>
                  <DialogTitle className='font-semibold text-2xl text-brandGreen flex items-center justify-between'>
                    Thank you for joining us!
                    <XCircleIcon
                      className='ml-2 w-6 h-6 cursor-pointer'
                      onClick={() => setIsSuccessModalOpen(false)}
                    />
                  </DialogTitle>
                  <Description className='pb-10 text-xl'>
                    We will keep you updated with our journey
                  </Description>
                </DialogPanel>
              </div>
            </Dialog>
          )
        }

        {/* Footer */}
        <div className='text-center py-10 mt-10'>
          <p>
            &copy; {new Date().getFullYear()} Whole Human. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
