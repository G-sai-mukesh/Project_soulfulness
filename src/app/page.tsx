import Navbar       from "@/components/Navbar";
import HeroSection  from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Experiences  from "@/components/Experiences";
import WhoWeServe   from "@/components/WhoWeServe";
import Positioning  from "@/components/Positioning";
import Events       from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <Experiences />
        <WhoWeServe />
        <Positioning />
        <Events />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
