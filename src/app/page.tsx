import { AppIntegration } from "@/components/pages/app-integration";
import { CreatePixel } from "@/components/pages/create-pixel-section";
import { Dependencies } from "@/components/pages/dependencies";
import { DesignBuild } from "@/components/pages/design-and-build-section";
import { Footer } from "@/components/pages/Footer";
import { HeroSection } from "@/components/pages/heroSection";
import { ImageCarouseSection } from "@/components/pages/image-carousel-section";
import { MainSection } from "@/components/pages/main-section";
import { MainSectionTwo } from "@/components/pages/main-section2";
import { ScaleBusiness } from "@/components/pages/scale-business";
import { SetApartSection } from "@/components/pages/setApart";
import { SiteNav } from "@/components/pages/siteHeader";
import { SubFooter } from "@/components/pages/subfooter";

export default function LandingPage() {
  return (
    <div>
      <div className="bg-gray-900/5 pb-4">
    <SiteNav/>
    <HeroSection/>
    <MainSection/>
    <MainSectionTwo/>
    <ScaleBusiness/>
    <CreatePixel/>
    <ImageCarouseSection/>
    <Dependencies/>
    <SetApartSection/>
    
    <DesignBuild/>
    <SubFooter/>
    <Footer/>
    </div>
    </div>
  )
}
