'use client';

import React from 'react';
import {
  Checkbox,
  Field,
  Label,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  Description,
  Button,
} from '@headlessui/react';
import { CheckIcon, XCircleIcon } from '@heroicons/react/16/solid';

const cardData = [
  {
    title: 'Mental Wellbeing',
    features: [
      'Silent Meditation Room',
      'Specialized Healing Treatments',
      'Sensory Deprivation Tanks',
      'Outdoor “resting zone”',
      'Facility Based Frequencies',
    ].map((feature) => ({
      title: feature,
      selected: false,
      value: feature.toLocaleLowerCase().replace(' ', '_'),
    })),
  },
  {
    title: 'Physical Wellbeing',
    features: [
      'Creative Movement Tools',
      'Recovery Zone',
      'Bio-hack Zone',
      'Hot and Cold Plunges',
      'Outdoor Functional Movement Space',
      'Custom Juice and Smoothie Bar',
    ].map((feature) => ({
      title: feature,
      selected: false,
      value: feature.toLocaleLowerCase().replace(' ', '_'),
    })),
  },
  {
    title: 'Communal Wellbeing',
    features: [
      'Community Courtyard',
      'Canopy Lounge Lofts',
      'Outdoor Social Seating Areas',
      'Themed Social Events',
      'Collaborative Dining Space',
      'Community Garden',
    ].map((feature) => ({
      title: feature,
      selected: false,
      value: feature.toLocaleLowerCase().replace(' ', '_'),
    })),
  },
  {
    title: 'Recreational Wellbeing',
    features: [
      'Natural Pool',
      'Creative Play Equipment',
      'Unique Event Shala Features',
      'Outdoor Jungle Gym',
      'Climbing Wall',
      'Quotes/Invitations',
    ].map((feature) => ({
      title: feature,
      selected: false,
      value: feature.toLocaleLowerCase().replace(' ', '_'),
    })),
  },
  {
    title: 'Work Wellbeing',
    features: [
      'Creative Workstations',
      'Podcast Booth',
      'Private Soundproof Pods',
      'Collaborative Meeting Spaces',
      'Unique “Seating”',
    ].map((feature) => ({
      title: feature,
      selected: false,
      value: feature.toLocaleLowerCase().replace(' ', '_'),
    })),
  },
  {
    title: 'Environmental Wellbeing',
    features: [
      'Grounding Zone',
      'Living Plant Walls',
      'Outdoor Showers',
      'Waste/Compost Recycling Systems',
      'Water Features and Landscaping',
      'Horticulture Classes:',
    ].map((feature) => ({
      title: feature,
      selected: false,
      value: feature.toLocaleLowerCase().replace(' ', '_'),
    })),
  },
];

const DailyRetreat = () => {
  const [selectedFeatures, setSelectedFeatures] = React.useState<string[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = React.useState(false);
  const [isSaving, setIsSaving] = React.useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const handleCreateRetreat = () => {
    // Validate selected features
    if (selectedFeatures.length === 0) {
      setError(`Please select at least one activity to create your retreat.`);
      return;
    }
    setIsEmailModalOpen(true);
  };

  const toggleEmailModal = () => {
    setIsEmailModalOpen(!isEmailModalOpen);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // await for 1 second and then show success modal
    setTimeout(() => {
      setIsSaving(false);
      setSelectedFeatures([]);
      setEmail('');
      setIsEmailModalOpen(false);
      setIsSuccessModalOpen(true);
    }, 1000);
  };

  return (
    <div
      className='bg-app-leaves pt-10'
      style={{
        backgroundColor: '#f8f3ec',
      }}
    >
      <div className='container mx-auto p-10'>
        <h1 className='text-4xl md:text-5xl font-bold text-brandGreen text-center'>
          Built For Community, By Community
        </h1>
        <h3 className='text-center text-xl md:text-3xl mt-2'>
          Help us co-create the perfect facility: Vote on your favorite features
          below!
        </h3>

        <div className='container mx-auto p-4 mt-10 md:mt-20'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {cardData.map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                className='bg-white shadow-md rounded-lg overflow-hidden pb-10'
              >
                <div className='p-4'>
                  <h3 className='text-xl font-semibold'>{card.title}</h3>
                  {
                    <div className='mt-5'>
                      {card.features.map((feature, index) => (
                        <Field
                          className='flex items-center gap-2 mt-1'
                          key={`${feature.value}-${index}`}
                        >
                          <Checkbox
                            checked={selectedFeatures.includes(feature.value)}
                            onChange={() =>
                              setSelectedFeatures((prev) =>
                                prev.includes(feature.value)
                                  ? prev.filter(
                                      (item) => item !== feature.value,
                                    )
                                  : [...prev, feature.value],
                              )
                            }
                            className='group block size-4 rounded border-brandGreen border cursor-pointer bg-white data-[checked]:bg-brandGreen'
                          >
                            <CheckIcon className='text-white' />
                          </Checkbox>
                          <Label>{feature.title}</Label>
                        </Field>
                      ))}
                    </div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {
          // modal to show error
          error && (
            <Dialog
              open={Boolean(error)}
              onClose={() => {
                setError(null);
              }}
              className='relative z-50'
            >
              {/* The backdrop, rendered as a fixed sibling to the panel container */}
              <DialogBackdrop className='fixed inset-0 bg-black/30' />

              {/* Full-screen container to center the panel */}
              <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
                {/* The actual dialog panel  */}
                <DialogPanel className='space-y-4 bg-slate-100 rounded-md p-5'>
                  <DialogTitle className='font-semibold text-2xl text-brandYellow flex items-center justify-between'>
                    Invalid Selection
                    <XCircleIcon
                      className='ml-2 w-6 h-6 cursor-pointer'
                      onClick={() => setError(null)}
                    />
                  </DialogTitle>
                  <Description className='pb-10 text-xl'>{error}</Description>
                </DialogPanel>
              </div>
            </Dialog>
          )
        }

        {
          // modal with email form
          isEmailModalOpen && (
            <Dialog
              open={isEmailModalOpen}
              onClose={toggleEmailModal}
              className='relative z-50'
            >
              {/* The backdrop, rendered as a fixed sibling to the panel container */}
              <DialogBackdrop className='fixed inset-0 bg-black/30' />

              {/* Full-screen container to center the panel */}
              <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
                {/* The actual dialog panel  */}
                <DialogPanel className='space-y-4 bg-white rounded-md p-5'>
                  <DialogTitle className='font-semibold text-2xl text-brandGreen flex items-center justify-between'>
                    Enter Your Email
                    <XCircleIcon
                      className='ml-2 w-6 h-6 cursor-pointer'
                      onClick={toggleEmailModal}
                    />
                  </DialogTitle>

                  <form onSubmit={handleEmailSubmit}>
                    <Field>
                      <Label className='my-5'>
                        Please enter your email to save your preferences.
                      </Label>
                      <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='your_email@domain.com'
                        className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-brandGreen mt-3'
                      />
                    </Field>
                    <Button
                      className='border-brandYellow bg-brandYellow px-6 py-3 rounded-lg mt-5 disabled:bg-brandYellow disabled:text-black'
                      type='submit'
                      disabled={isSaving}
                    >
                      {isSaving ? 'Saving...' : 'Save My Preferences'}
                    </Button>
                  </form>
                </DialogPanel>
              </div>
            </Dialog>
          )
        }

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
                    Thank you for choosing us!
                    <XCircleIcon
                      className='ml-2 w-6 h-6 cursor-pointer'
                      onClick={() => setIsSuccessModalOpen(false)}
                    />
                  </DialogTitle>
                  <Description className='pb-10 text-xl'>
                    Your preferences have been saved successfully.
                  </Description>
                </DialogPanel>
              </div>
            </Dialog>
          )
        }

        <div className='text-center mt-10'>
          <Button
            className='border-brandYellow bg-brandYellow px-6 py-3 rounded-lg text-lg'
            onClick={handleCreateRetreat}
          >
            Submit My Vote
          </Button>
        </div>
        <h1 className='text-4xl text-center font-bold my-10'>
          Coming Soon - Dec 2026
        </h1>
      </div>
    </div>
  );
};

export default DailyRetreat;
