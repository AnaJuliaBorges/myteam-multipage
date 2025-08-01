import { FooterSecondary } from "@/Components/footerSecondary";
import { FirstSection } from "@/Components/home/firstSection";
import { SecondSection } from "@/Components/home/secondSection";
import { ThirdSection } from "@/Components/home/thirdSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center overflow-hidden ">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FooterSecondary />
    </main>      
  );
}
