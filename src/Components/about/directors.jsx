import Image from "next/image"
import { Container } from "../container"

import pattern1 from '@/assets/bg-pattern-about-2-contact-1.svg'
import pattern2 from '@/assets/bg-pattern-home-4-about-3.svg'

import avatarNikita from '@/assets/avatar-nikita.jpg'
import avatarChristian from '@/assets/avatar-christian.jpg'
import avatarDrake from '@/assets/avatar-drake.jpg'
import avatarCruz from '@/assets/avatar-cruz.jpg'
import avatarAden from '@/assets/avatar-aden.jpg'
import avatarGriffin from '@/assets/avatar-griffin.jpg'

import { CardDirector } from "./cardDirector"

export const Directors = () => {

  const listDirectors = [
    {
      name: 'Nikita Marks',
      role: 'Founder & CEO',
      image: avatarNikita, 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum sed quam at cursus',
      x: 'https://x.com/home',
      linkedIn: 'https://www.linkedin.com/in/anajuliaborges/'
    },
    {
      name: 'Cristian Duncan',
      role: 'Co-founder & COO',
      image: avatarChristian, 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum sed quam at cursus',
      x: 'https://x.com/home',
      linkedIn: 'https://www.linkedin.com/in/anajuliaborges/'
    },
    {
      name: 'Cruz Hamer',
      role: 'Co-founder & CTO',
      image: avatarCruz, 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum sed quam at cursus',
      x: 'https://x.com/home',
      linkedIn: 'https://www.linkedin.com/in/anajuliaborges/'
    },
    {
      name: 'Drake Heaton',
      role: 'Business Development Lead',
      image: avatarDrake, 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum sed quam at cursus',
      x: 'https://x.com/home',
      linkedIn: 'https://www.linkedin.com/in/anajuliaborges/'
    },
    {
      name: 'Griffin Wise',
      role: 'Lead Marketing',
      image: avatarGriffin, 
      description: 'Unique perspectives shape unique products, which is what you need to survive these days.',
      x: 'https://x.com/home',
      linkedIn: 'https://www.linkedin.com/in/anajuliaborges/'
    },
    {
      name: 'Aden Allan',
      role: 'Head of Talent',
      image: avatarAden, 
      description: 'Empowered teams create truly amazing products. Set the north star and let them follow it.',
      x: 'https://x.com/home',
      linkedIn: 'https://www.linkedin.com/in/anajuliaborges/'
    }
  ]


  return (
    <section className="w-full flex justify-center relative bg-secondary-300">
      <Image className="absolute top-0 left-[-104px]" width={200} height={200} src={pattern1} aria-hidden alt='pattern'/>
      <Image className="absolute bottom-0 right-0" width={147} height={100} src={pattern2} aria-hidden alt='pattern'/>


      <Container style='flex flex-row justify-between lg:flex-col items-center text-center gap-6 items-center'>
        <h2 className="text-h1-S font-bold">
          Meet the directors
        </h2>
        <div className="grid grid-cols-3 gap-x-7 gap-y-15">
          {listDirectors.map((item, index) => (
            <CardDirector 
              key={index}
              name={item.name}
              role={item.role}
              image={item.image}
              description={item.description}
              x={item.x}
              linkedIn={item.linkedIn}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
