import { Montserrat } from 'next/font/google';
import './globals.css';
import Footer from './components/footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <title>Whole Human - Social Wellness</title>
        <meta
          name='description'
          content='Whole Human is dedicated to promoting holistic wellbeing, sustainability, inclusion, equality, and personal growth. Join us in our journey towards a better future.'
        />
        <meta
          name='keywords'
          content='Holistic Wellbeing, Sustainability, Inclusion, Equality, Growth Mindset, Wellness, Whole Human, Personal Development, Social'
        />
        <meta name='author' content='Whole Human' />
        <meta name='robots' content='index, follow' />
        <link rel='icon' href='/assets/images/favicon.png' sizes='any' />
        <meta property='og:title' content='Whole Human - Social Wellness' />
        <meta
          property='og:description'
          content='Promoting holistic wellbeing, sustainability, inclusion, equality, and personal growth.'
        />
        <meta
          property='og:image'
          content='/assets/images/whole-human-logo.png'
        />
        <meta property='og:url' content='https://www.wholehuman.com' />
        <meta property='og:type' content='website' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Whole Human - Social Wellness' />
        <meta
          name='twitter:description'
          content='Join us in promoting holistic wellbeing, sustainability, inclusion, equality, and personal growth.'
        />
        <meta
          name='twitter:image'
          content='/assets/images/whole-human-logo.png'
        />
      </head>
      <body className={montserrat.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
