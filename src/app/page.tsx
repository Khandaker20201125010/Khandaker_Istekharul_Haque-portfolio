import Banner from "@/components/Bannner/Banner";
import LookingForOpportunities from "@/components/LookingForOpportunities/LookingForOpportunities";
import ServicesSection from "@/components/ServicesSection/ServicesSection";


export default function Home() {
  return (
    <div>
      <Banner />
      <ServicesSection />
      <LookingForOpportunities />
    </div>
  );
}
