import Image from "next/image"
import { Container } from "../container"
import pattern1 from '@/assets/bg-pattern-home-1.svg'
import pattern2 from '@/assets/bg-pattern-home-2.svg'
import { Divider } from "../divider"

export const Introduction = () => {
  return (
    <section className="w-full flex justify-center relative">
      <Image className="absolute top-32 left-[-128px]" width={200} height={200} src={pattern1} aria-hidden alt='pattern'/>
      <Image className="absolute bottom-0 right-32" width={200} height={200} src={pattern2} aria-hidden alt='pattern'/>

      <Container style='flex flex-col justify-between lg:flex-row items-center text-center gap-6 lg:items-start lg:text-start pb-[250px]'>
          <h2 className="text-h1 leading-[100px] font-bold">
            Find the <br /> best <span className="text-contrast">talent</span>
          </h2>
        <div className="flex flex-col h-full justify-between lg:w-[40%]">
          <Divider color="secondary"/>
          <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
        </div>
      </Container>
    </section>
  )
}
