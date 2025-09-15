// import { Twitter, Instagram, Github, ArrowUp } from "lucide-react";

// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-background w-full border-t">
//       <div className="container mx-auto px-4 py-12 md:px-6 2xl:max-w-[1400px]">
//         <div className="flex flex-col justify-between md:flex-row">
//           {/* Brand Section */}
//           <div className="mb-8 md:mb-0">
//             <a href="/" className="flex items-center space-x-2">
//               <span className="text-xl font-bold">Your Company</span>
//             </a>
//             <p className="text-muted-foreground mt-4 max-w-xs text-sm">
//               Simplifying complexity, one interface at a time.
//             </p>
//             <div className="mt-6 flex gap-4">
//               <a
//                 href="https://twitter.com"
//                 className="text-muted-foreground hover:text-foreground transition-colors"
//                 aria-label="Twitter"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <Twitter className="h-5 w-5" aria-hidden="true" />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 className="text-muted-foreground hover:text-foreground transition-colors"
//                 aria-label="Instagram"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <Instagram className="h-5 w-5" aria-hidden="true" />
//               </a>
//               <a
//                 href="https://github.com"
//                 className="text-muted-foreground hover:text-foreground transition-colors"
//                 aria-label="GitHub"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <Github className="h-5 w-5" aria-hidden="true" />
//               </a>
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
//             {/* Product */}
//             <div className="space-y-3">
//               <h3 className="text-sm font-medium">Product</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="/features"
//                     className="text-muted-foreground hover:text-foreground text-sm transition-colors"
//                   >
//                     Features
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/pricing"
//                     className="text-muted-foreground hover:text-foreground text-sm transition-colors"
//                   >
//                     Pricing
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/integrations"
//                     className="text-muted-foreground hover:text-foreground text-sm transition-colors"
//                   >
//                     Integrations
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Company */}
//             <div className="space-y-3">
//               <h3 className="text-sm font-medium">Company</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="/about"
//                     className="text-muted-foreground hover:text-foreground text-sm transition-colors"
//                   >
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/blog"
//                     className="text-muted-foreground hover:text-foreground text-sm transition-colors"
//                   >
//                     Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/careers"
//                     className="text-muted-foreground hover:text-foreground text-sm transition-colors"
//                   >
//                     Careers
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Resources */}
//             <div className="space-y-3">
//               <h3 className="text-sm font-medium">Resources</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="/docs"
//                     className="text-muted-foreground hover:text-foreground text-sm transition-colors"
//                   >
//                     Documentation
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/support"
//                     className="text-muted-foreground hover:text-foreground text-sm transition-colors"
//                   >
//                     Support
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/contact"
//                     className="text-muted-foreground hover:text-foreground text-sm transition-colors"
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Legal */}
//             <div className="space-y-3">
//               <h3 className="text-sm font-medium">Legal</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="/privacy"
//                     className="text-muted-foreground hover:text-foreground text-sm transition-colors"
//                   >
//                     Privacy
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/terms"
//                     className="text-muted-foreground hover:text-foreground text-sm transition-colors"
//                   >
//                     Terms
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/cookies"
//                     className="text-muted-foreground hover:text-foreground text-sm transition-colors"
//                   >
//                     Cookies
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t pt-8 md:flex-row">
//           <p className="text-muted-foreground text-center text-sm md:text-left">
//             © 2025 Your Company. All rights reserved.
//           </p>
//           <button
//             onClick={scrollToTop}
//             className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm transition-colors"
//             aria-label="Scroll to top"
//           >
//             Back to top
//             <ArrowUp className="h-4 w-4" aria-hidden="true" />
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }

export const Footer = () => {
  return (
    <footer className="bg-background w-full border-t">
      <div className="container mx-auto px-4 py-12 md:px-6 2xl:max-w-[1400px]">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="mb-8 md:mb-0">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Your Company</span>
            </a>
            <p className="text-muted-foreground mt-4 max-w-xs text-sm">
              Simplifying complexity, one interface at a time.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://twitter.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-twitter h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-instagram h-5 w-5"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://github.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-github h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/features"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/integrations"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/docs"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="/cookies"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-center text-sm md:text-left">
            © 2025 Your Company. All rights reserved.
          </p>
          <button
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm transition-colors"
            aria-label="Scroll to top"
          >
            Back to top{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-up h-4 w-4"
              aria-hidden="true"
            >
              <path d="m5 12 7-7 7 7"></path>
              <path d="M12 19V5"></path>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};
