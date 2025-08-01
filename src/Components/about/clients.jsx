import Image from "next/image"
import { Container } from "../container"

import pattern1 from '@/assets/bg-pattern-about-4.svg'

import logoGadgets from '@/assets/logo-gadgets-now.png'
import logoJakarta from '@/assets/logo-jakarta-post.png'
import logoTechRadar from '@/assets/logo-tech-radar.png'
import logoGuardian from '@/assets/logo-the-guardian.png'
import logoVerge from '@/assets/logo-the-verge.png'

export const Clients = () => {

  return (
    <section className="w-full flex justify-center relative bg-secondary-400">
      <Image className="absolute top-0 left-0" width={200} height={200} src={pattern1} aria-hidden alt='pattern'/>
      <Container style='flex flex-row justify-between lg:flex-col items-center text-center gap-16 items-center'>
        <h2 className="text-h2 font-bold">
          Some of our clients
        </h2>
        <div className="flex gap-15 w-full">
          <Image className="h-fit" width={130} src={logoVerge} alt='logo-the-verge' />
          <Image className="h-fit" width={140} src={logoJakarta} alt='logo-jakarta-post' />
          <Image className="h-fit" width={140} src={logoGuardian} alt='logo-the-guardian' />
          <Image className="h-fit" width={130} src={logoTechRadar} alt='logo-tech-radar' />
          <Image className="h-fit" width={80} src={logoGadgets} alt='logo-gadgets-now' />
        </div>
      </Container>
    </section>
  )
}
