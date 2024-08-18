import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <title>Whole Human - Holistic Wellbeing & Growth</title>
        <meta
          name='description'
          content='Whole Human is dedicated to promoting holistic wellbeing, sustainability, inclusion, equality, and personal growth. Join us in our journey towards a better future.'
        />
        <meta
          name='keywords'
          content='Holistic Wellbeing, Sustainability, Inclusion, Equality, Growth Mindset, Wellness, Whole Human, Personal Development'
        />
        <meta name='author' content='Whole Human' />
        <meta name='robots' content='index, follow' />
        <link rel='icon' href='/assets/images/favicon.ico' sizes='any' />
        <meta
          property='og:title'
          content='Whole Human - Holistic Wellbeing & Growth'
        />
        <meta
          property='og:description'
          content='Promoting holistic wellbeing, sustainability, inclusion, equality, and personal growth.'
        />
        <meta property='og:image' content='/assets/images/logo.png' />
        <meta property='og:url' content='https://www.wholehuman.com' />
        <meta property='og:type' content='website' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Whole Human - Holistic Wellbeing & Growth'
        />
        <meta
          name='twitter:description'
          content='Join us in promoting holistic wellbeing, sustainability, inclusion, equality, and personal growth.'
        />
        <meta name='twitter:image' content='/path-to-your-image.jpg' />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
