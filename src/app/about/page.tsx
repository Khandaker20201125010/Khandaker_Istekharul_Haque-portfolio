import AboutBanner from '@/components/AboutComponenet/AboutBanner';
import AboutIntro from '@/components/AboutComponenet/AboutIntro';
import ContactForm from '@/components/Contact/ContactForm';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "About Khandaker Istekharul Haque",
  description:
    "Learn more about Khandaker Istekharul Haque, a passionate web developer and programmer.",
};
const AboutPage = () => {
    return (
        <div>
             <AboutBanner />
             <AboutIntro />
             <ContactForm />
        </div>
    );
};

export default AboutPage;