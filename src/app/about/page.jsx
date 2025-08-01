import { AboutCompany } from "@/Components/about/aboutCompany";
import { Clients } from "@/Components/about/clients";
import { Directors } from "@/Components/about/directors";
import { FooterSecondary } from "@/Components/footerSecondary";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center overflow-hidden ">
      <AboutCompany />
      <Directors />
      <Clients />
      <FooterSecondary />
    </main>      
  );
}
