import Image from "next/image"
import { Container } from "../container"
import pattern1 from '@/assets/bg-pattern-home-4-about-3.svg'
import pattern2 from '@/assets/bg-pattern-home-5.svg'
import avatarKady from '@/assets/avatar-kady.jpg'
import avatarAisha from '@/assets/avatar-aiysha.jpg'
import avatarArthur from '@/assets/avatar-arthur.jpg'
import { Testimonials } from "./testimonials"

export const TestimonialsSection = () => {

  const testimonialsList = [
    {
      image: avatarKady,
      role: 'Product Manager at Bookmark',
      name: 'Kady Baker',
      description: 'The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.'
    },
    {
      image: avatarAisha,
      role: 'Founder of Manage',
      name: 'Aiysha Reese',
      description: 'We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!'
    },
    {
      image: avatarArthur,
      name: 'Arthur Clarke',
      role: 'Co-founder of MyPhysio',
      description: 'Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.'
    },
  ]

  return (
    <section className="w-full flex justify-center relative bg-secondary-300">
      <Image className="absolute top-0 left-0" width={147} height={100} src={pattern1} aria-hidden alt='pattern'/> 
      <Image className="absolute bottom-0 right-0" width={200} height={200} src={pattern2} aria-hidden alt='pattern'/> 
      <Container style='flex flex-col items-center text-center gap-23 lg:items-center lg:text-center'>
        <p className="text-h2 font-bold">Delivering real results for top companies. Some of our <span className="text-secondary-100">success stories.</span></p>
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {testimonialsList.map((item, index) => (
            <Testimonials 
              key={index}
              image={item.image} 
              name={item.name}
              role={item.role} 
              description={item.description}/>
          ))}
        </div>
      </Container>
    </section>
  )
}
