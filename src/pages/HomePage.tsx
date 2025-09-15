import FAQComponent from "../components/FAQs";
import FeaturesSection from "../components/Features";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
interface HeroSectionProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const HomePage = ({ isDark, toggleTheme }: HeroSectionProps) => {
  return (
    <div>
      <HeroSection isDark={isDark} toggleTheme={toggleTheme} />
      <div className=" mt-[96px]">
        <FeaturesSection />
      </div>
      <div className=" mt-[48px]">
        <FAQComponent />
      </div>
      <Footer />
    </div>
  );
};
