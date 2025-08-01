import Image from "next/image"
import { Container } from "../container"
import pattern1 from '@/assets/bg-pattern-about-1-mobile-nav-1.svg'
import { Divider } from "../divider"

export const AboutCompany = () => {
  return (
    <section className="w-full flex justify-center relative">
      <Image className="absolute bottom-0 right-[-104px]" width={200} height={200} src={pattern1} aria-hidden alt='pattern'/>

      <Container style='flex flex-col justify-between lg:flex-row items-center text-center gap-6 lg:items-start lg:text-start '>
          <h2 className="text-h1-S font-bold">
            About
          </h2>
        <div className="flex flex-col h-full justify-between gap-10 lg:w-[60%]">
          <Divider color="contrast"/>
          <p>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
        </div>
      </Container>
    </section>
  )
}
