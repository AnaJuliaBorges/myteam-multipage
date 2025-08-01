import { FooterSecondary } from "@/Components/footerSecondary";
import { Features } from "@/Components/home/features";
import { Introduction } from "@/Components/home/introduction";
import { TestimonialsSection } from "@/Components/home/testimonialsSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center overflow-hidden ">
        <Introduction />
        <Features />
        <TestimonialsSection />
        <FooterSecondary />
    </main>      
  );
}
