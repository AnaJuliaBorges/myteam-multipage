import { FirstSection } from "@/Components/home/firstSection";
import { SecondSection } from "@/Components/home/secondSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center">
        <FirstSection />
        <SecondSection />
    </main>      
  );
}
