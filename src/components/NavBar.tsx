interface NavBarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const NavBar = ({ isDark, toggleTheme }: NavBarProps) => {
  return (
    <nav className="bg-white dark:bg-black transition-colors duration-200 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-none w-[200px] flex items-center gap-2 cursor-pointer">
            <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
              ❃
            </span>
            <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Pixio
            </span>
          </div>

          <ul className="flex gap-5 text-gray-700 dark:text-gray-300">
            <li className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">
              Features
            </li>
            <li className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">
              Pricing
            </li>
            <li className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">
              How to use
            </li>
            <li className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">
              FAQ
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center gap-2 
              whitespace-nowrap font-medium transition-all duration-200
              focus-visible:outline-hidden focus-visible:ring-1
              focus-visible:ring-ring disabled:pointer-events-none
              disabled:opacity-50 h-8 rounded-md px-3 text-xs
              hover:bg-gray-100 dark:hover:bg-gray-800
              text-gray-700 dark:text-gray-300 relative"
            >
              {isDark ? (
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
                  className="h-5 w-5"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              ) : (
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
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              )}
              <span className="sr-only">Toggle theme</span>
            </button>

            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-sm h-9 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-white/90 transition-colors">
              See Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
