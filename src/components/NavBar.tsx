import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

interface NavBarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const NavBar = ({ isDark, toggleTheme }: NavBarProps) => {
  const toggle = () => {
    toggleTheme();
    console.log(isDark);
  };

  return (
    <nav
      className={` relative z-50 border-b ${
        isDark ? "bg-black border-gray-800" : "bg-white border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-none w-[200px] flex items-center gap-2 cursor-pointer">
            <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
              ❃
            </span>
            <span
              className={`text-xl font-semibold  ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Pixio
            </span>
          </div>

          <ul
            className={`flex gap-5  ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li
              className={`cursor-pointer  ${
                isDark ? "hover:text-white" : "hover:text-gray-900"
              }`}
            >
              Features
            </li>
            <li
              className={`cursor-pointer  ${
                isDark ? "hover:text-white" : "hover:text-gray-900"
              }`}
            >
              Pricing
            </li>
            <li
              className={`cursor-pointer  ${
                isDark ? "hover:text-white" : "hover:text-gray-900"
              }`}
            >
              How to use
            </li>
            <li
              className={`cursor-pointer  ${
                isDark ? "hover:text-white" : "hover:text-gray-900"
              }`}
            >
              FAQ
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggle}
              className={`inline-flex items-center justify-center 
              gap-2 whitespace-nowrap font-medium transition-all duration-200
              cursor-pointer h-8 rounded-md px-3 text-xs relative ${
                isDark
                  ? "text-gray-100 hover:bg-gray-800"
                  : "text-gray-900 hover:bg-gray-100"
              }`}
            >
              {isDark ? (
                <MdOutlineLightMode className="w-[28px] h-[28px]" />
              ) : (
                <MdOutlineDarkMode className="w-[28px] h-[28px]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </button>

            <button
              className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-sm h-9 px-4 py-2  ${
                isDark
                  ? "bg-white text-black hover:bg-gray-100"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              See Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
