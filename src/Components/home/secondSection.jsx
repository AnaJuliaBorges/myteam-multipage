import Image from "next/image"
import { Container } from "../container"
import pattern1 from '@/assets/bg-pattern-home-3.svg'
import iconPerson from '@/assets/icon-person.svg'
import iconCog from '@/assets/icon-cog.svg'
import iconChart from '@/assets/icon-chart.svg'
import { Divider } from "../divider"
import { FeaturedItem } from "./featuredItem"

export const SecondSection = () => {

  const featuresList = [
    {
      icon: iconPerson,
      title: 'Experienced Individuals',
      description: 'Our network is made up of highly experienced professionals who are passionate about what they do.'
    },
    {
      icon: iconCog,
      title: 'Easy to Implement',
      description: 'Our processes have been refined over years of implementation meaning our teams always deliver.'
    },
    {
      icon: iconChart,
      title: 'Enhanced Productivity',
      description: 'Our customized platform with in-built analytics helps you manage your distributed teams.'
    },
  ]

  return (
    <section className="w-full flex justify-center relative bg-secondary-400">
      <Image className="absolute bottom-0 right-[-108px]" width={200} height={200} src={pattern1} aria-hidden alt='pattern'/>
      
      <Container style='flex flex-col justify-between lg:flex-row items-center text-center gap-6 lg:items-start lg:text-start'>
        <div className="flex flex-col h-full gap-14 lg:w-[40%]">
          <Divider color="contrast"/>
          <p className="text-h2 leading-12 font-bold">Build & manage distributed teams like no one else.</p>
        </div>
          <div className="flex flex-col gap-8 w-1/2">
            {featuresList.map((item, index) => (
              <FeaturedItem key={index} icon={item.icon} title={item.title} description={item.description}/>
            ))}
          </div>
      </Container>
    </section>
  )
}
