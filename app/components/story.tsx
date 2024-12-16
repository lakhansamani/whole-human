import React from 'react';

const Story = () => {
  return (
    <div className='bg-white container mx-auto p-10'>
      <h1 className='text-4xl md:text-5xl font-bold text-brandGreen leading-tight px-4 md:px-0 mt-5 mb-10 text-center'>
        Our Story
      </h1>
      <div className='container mx-auto flex flex-col md:flex-row md:space-x-8 text-center md:text-left'>
        {/* Text Section */}
        <div className='w-full md:w-1/2 space-y-6 animate-fade-right'>
          <p className='text-lg text-gray-700 px-4 md:px-0 text-justify'>
            Ryan’s (Founder) journey began as a teenager, when the gym became
            his refuge. It wasn’t just about building physical strength—it was
            where he found body confidence and connection. As he pursued a
            career in fitness and physical health, he began to feel the pressure
            to look perfect, which led to stress, anxiety, and burnout. What had
            once been a source of empowerment became a place of disconnection.
          </p>
          <p className='text-lg text-gray-700 px-4 md:px-0 text-justify'>
            Seeking a deeper meaning of wellness, Ryan left the fitness industry
            and set off on a journey, traveling around the US and eventually to
            Bali where he dove deep into meditation and mindful living. It was
            then he realized that focusing on just one aspect of well-being,
            whether physical, mental, or spiritual, wasn’t enough.{' '}
            <b>
              True wellness comes from integrating all parts of ourselves, and,
              Ryan discovered, that the path to wholeness happens not in
              isolation, but alongside a supportive community.
            </b>
          </p>
        </div>

        {/* Image Section */}
        <div className='w-full md:w-1/2 space-y-6 animate-fade-left'>
          <p className='text-lg text-gray-700 px-4 md:px-0 text-justify'>
            When he returned from his travels, Ryan saw how fragmented and
            isolated wellness was in most places. You had to go to one place to
            exercise, another for recovery, and still another to focus on your
            career/purpose, all of which were highly individual experiences.
            That’s when the idea for Whole Human was born:{' '}
            <b>a space that integrates all aspects of well-being</b>—physical,
            emotional, mental, spiritual, and social —so that people can{' '}
            <b>heal, grow, and transform together.</b>
          </p>
          <p className='text-lg text-gray-700 px-4 md:px-0 text-justify'>
            <b>Whole Human</b> exists to bring people back to their true selves,
            whole, complete and interconnected with a loving community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
