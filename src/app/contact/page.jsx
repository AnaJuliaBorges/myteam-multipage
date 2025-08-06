import pattern1 from '@/assets/bg-pattern-about-2-contact-1.svg'
import pattern2 from '@/assets/bg-pattern-contact-2.svg'
import iconPerson from '@/assets/icon-person.svg'
import iconCog from '@/assets/icon-cog.svg'
import iconChart from '@/assets/icon-chart.svg'

import { ContactForm } from '@/Components/contact/contactForm';
import { FeaturedItem } from '@/Components/contact/featuredItem';
import { Container } from '@/Components/container';
import Image from 'next/image';


export default function About() {

  const featuresList = [
    {
      icon: iconPerson,
      title: 'The quality of our talent network',
    },
    {
      icon: iconCog,
      title: 'Usage & implementation of our software',
    },
    {
      icon: iconChart,
      title: 'How we help drive innovation',
    },
  ]

  return (
    <main className="flex flex-col w-full items-center overflow-hidden ">
      <div className="w-full flex justify-center relative">
        <Image className="absolute top-0 left-[-104px]" width={200} height={200} src={pattern1} aria-hidden alt='pattern'/>
        <Image className="absolute bottom-0 right-[-104px]" width={200} height={200} src={pattern2} aria-hidden alt='pattern'/>
  
        <Container style='flex flex-col justify-between lg:flex-row items-center text-center gap-6 lg:items-start lg:text-start w-full'>
          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-h1-S font-bold">
              Contact
            </h2>
            <h3 className="text-[32px] text-contrast font-bold pb-8">Ask us about</h3>
            <div className='flex flex-col gap-2'>
              {featuresList.map((feature, index) => (
                <FeaturedItem 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                />
              ))}
            </div>
          </div>

          <ContactForm />
        </Container>
      </div>
    </main>        
  );
}
