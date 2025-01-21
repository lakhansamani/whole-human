import React from 'react';

const Story = () => {
  return (
    <div
      style={{
        backgroundColor: '#f8f3ec',
      }}
    >
      <div className='container mx-auto p-10 rounded-md'>
        <h1 className='text-4xl md:text-5xl font-bold text-brandGreen leading-tight px-4 md:px-0 mt-5 mb-10 text-center'>
          Our Story
        </h1>
        <div className='container mx-auto flex flex-col md:flex-row md:space-x-8 text-center md:text-left'>
          {/* Text Section */}
          <div className='w-full md:w-1/2 space-y-6 animate-fade-right'>
            <p className='text-lg text-gray-700 px-4 md:px-0 text-justify'>
              Life can often feel scattered—balancing work, relationships,
              health, and personal growth. For many of us, this leaves us
              feeling overwhelmed, unfulfilled, and creates the illusion that
              all of these vital parts of life are separate from one another.
              Whole Human was created to change that.
            </p>
            <p className='text-lg text-gray-700 px-4 md:px-0 text-justify'>
              Our story starts with a simple realization:{' '}
              <b>
                True wellness comes from the interconnection between all parts
                of ourselves.
              </b>{' '}
              Bridging every aspect of well-being—
              <b>physical, emotional, mental, spiritual, and social.</b>
            </p>
            <p className='text-lg text-gray-700 px-4 md:px-0 text-justify'>
              We know true human potential isn&apos;t fulfilled by simply
              pushing harder or doing more in isolation; it comes from walking a
              path of wholeness alongside others doing the same. This is what it
              means to be a Whole Human.
            </p>
          </div>

          {/* Image Section */}
          <div className='w-full md:w-1/2 space-y-6 animate-fade-left'>
            <h3 className='text-xl font-bold text-gray-700 px-4 md:px-0 text-justify'>
              This Isn’t Just Our Story—It’s Yours
            </h3>
            <p className='text-lg text-gray-700 px-4 md:px-0 text-justify'>
              Whole Human isn’t about telling you what to do. It’s about walking
              alongside you, offering spaces, tools, and a loving community as
              you create your own path to wholeness, and having a damn good time
              every step of the way!
            </p>
            <p className='text-lg text-gray-700 px-4 md:px-0 text-justify'>
              Because being human is messy, beautiful, and full of
              possibility—and it’s not meant to be navigated alone.
            </p>
            <h3 className='text-xl font-bold text-gray-700 px-4 md:px-0 text-justify'>
              Join Us
            </h3>
            <p className='text-lg text-gray-700 px-4 md:px-0 text-justify'>
              Your journey starts here. Explore the tools, and community we’ve
              built to support you. Together, we’ll help you awaken what it
              means to live as a <b>Whole Human.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
