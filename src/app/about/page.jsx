import { AboutCompany } from "@/Components/about/aboutCompany";
import { Clients } from "@/Components/about/clients";
import { Directors } from "@/Components/about/directors";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center overflow-hidden ">
      <AboutCompany />
      <Directors />
      <Clients />
    </main>      
  );
}
