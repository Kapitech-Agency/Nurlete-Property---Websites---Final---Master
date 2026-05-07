import { Hero } from "../components/home/Hero";
import { Previews } from "../components/home/Previews";
import { FeaturedProperties } from "../components/home/FeaturedProperties";
import { AbsoluteAssurance } from "../components/home/AbsoluteAssurance";
import { HomeCTA } from "../components/home/HomeCTA";
import { NavaTerraOverview } from "../components/home/NavaTerraOverview";
import { CoreValues } from "../components/home/CoreValues";
import { InsightsOverview } from "../components/home/InsightsOverview";

export default function Home() {
  return (
    <div className="bg-[#F5F4F0] font-sans">
      <Hero />
      <Previews />
      <FeaturedProperties />
      <NavaTerraOverview />
      <CoreValues />
      <AbsoluteAssurance />
      <InsightsOverview />
      <HomeCTA />
    </div>
  );
}
