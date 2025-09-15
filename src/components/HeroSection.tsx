import { NavBar } from "./NavBar";
import ProductShowcase from "./ProductShowcase";

interface HeroSectionProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const HeroSection = ({ isDark, toggleTheme }: HeroSectionProps) => {
  return (
    <section
      className={`min-h-screen  relative ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="relative z-40">
        <NavBar isDark={isDark} toggleTheme={toggleTheme} />
      </div>

      <div className="relative z-30 pt-16">
        <div className="text-center py-20 px-6">
          <h1
            className={`text-4xl md:text-6xl xl:text-7xl leading-tight font-bold 
            mb-6 max-w-5xl mx-auto  ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Turn long videos into viral clips
          </h1>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed  ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            AI-powered clip extraction with viral scoring. Auto-generate
            captions, extract custom moments, and optimize for TikTok, YouTube
            Shorts, and Reels.
          </p>

          <div className="flex flex-col items-center gap-4 mb-16">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-lg hover:shadow-xl py-3 h-12 px-8 text-base font-medium bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-in-out border border-blue-500/20"
              type="button"
            >
              Extract viral clips now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4 opacity-80"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <span
              className={`text-sm font-medium  ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              No credit card required
            </span>
          </div>
        </div>
      </div>
      <ProductShowcase />
    </section>
  );
};
