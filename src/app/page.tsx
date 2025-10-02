import Banner from "@/components/Bannner/Banner";
import LookingForOpportunities from "@/components/LookingForOpportunities/LookingForOpportunities";
import MySkills from "@/components/MySkills/MySkills";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import Logomarquee from "@/components/ui/Logomarquee";


export default function Home() {
  return (
    <div>
      <Banner />
      <ServicesSection />
      <LookingForOpportunities />
      <MySkills />
      <Logomarquee />
    </div>
  );
}
