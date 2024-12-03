import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import { InfiniteScroll } from "@/components/InfiniteScroll";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import AnimatedTooltipPreview from "@/components/PeopleProfile";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <InfiniteScroll />
      <UpcomingWebinar />
      <AnimatedTooltipPreview />
      <Footer />
    </main>
  );
}
