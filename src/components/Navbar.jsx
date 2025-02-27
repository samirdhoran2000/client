import "./homeComponents.css";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Menu,
  MessageSquare,
  Search,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import imaginariaLogo from "../assets/Imaginaria_Logo.png";


const menuItems = [
  {
    title: "3D Printing",
    href: "/3d-printing-technologies",
    subItems: [
      { title: "Multi Jet Fusion", href: "/3d-printing/hp-multi-jet-fusion" },
      {
        title: "High Speed Stereolithography SLA 3D Printing",
        href: "/3d-services/sla",
      },
      {
        title: "Fused Deposition Modeling (FDM) 3D Printing",
        href: "/3d-services/fdm",
      },
      {
        title: "Production Metal 3D Printing",
        href: "/3d-printing/direct-metal-3d-printing",
      },
      {
        title: "3D Printed Rubber / Elastomer",
        href: "/3d-printing/3d-printed-rubber-elastomer-products",
      },
      {
        title: "Design for Additive Manufacturing",
        href: "/3d-printing/design-for-additive-manufacturing",
      },
      {
        title: "3D Printing in the Medical Field",
        href: "/3d-printing/in-the-medical-industry",
      },
    ],
  },
  {
    title: "Manufacturing",
    href: "/manufacturing-services",
    subItems: [
      { title: "Thermoforming", href: "/plastic-thermoforming" },
      { title: "Machining", href: "/cnc-machining" },
      {
        title: "3D Print Injection Molding",
        href: "/3d-printed-injection-mold",
      },
      { title: "Industrial Finishing", href: "/industrial-finishing" },
      { title: "ESD Materials", href: "/esd-materials-3d-printing" },
      { title: "Interactive 3D Marketing", href: "/interactive-marketing" },
      { title: "Custom Replacement Parts", href: "/replacement-parts" },
      {
        title: "Thermoformable Carbon Fiber",
        href: "/aerolite-thermoformable-carbon-fiber",
      },
    ],
  },
  {
    title: "Engineering",
    href: "/engineering-services",
    subItems: [
      { title: "Engineering Services", href: "/engineering-services" },
      { title: "Rapid Prototyping", href: "/rapid-prototyping" },
      { title: "Product Design", href: "/product-design" },
      {
        title: "Industrial Pattern & Tool Making",
        href: "/industrial-pattern-and-tool-making",
      },
      {
        title: "Reverse Engineering & 3D Scanning",
        href: "/engineering/reverse-engineering",
      },
      {
        title: "Thermoforming Design",
        href: "/thermoforming-design-for-manufacturing",
      },
    ],
  },
  {
    title: "About",
    href: "/info",
    subItems: [
      { title: "5 Minute Buyer’s Guide", href: "/buyers-guide" },
      { title: "Blog", href: "/rapidmade-blog" },
      { title: "Case Studies", href: "/case-studies" },
      { title: "About RapidMade", href: "/info" },
      {
        title: "Portland & Beyond",
        href: "/3d-printing/3d-print-technologies-portland",
      },
    ],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  // Click outside handler for closing menus
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Listen for scroll events to toggle sticky state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hover for menu items
  const handleMenuHover = (index) => {
    setActiveMenu(index);
  };

  return (
    <header>
      {/* Top Contact Information Section */}
      <div className="bg-gray-100 py-2 px-40 hidden md:flex justify-between items-center container mx-auto">
        <div className="flex space-x-4">
          <span className="text-black">
            <a href="tel:503-943-2781">
              Call: <b>XXX-XXX-2781</b>
            </a>
          </span>
          <span className="text-black">
            <a href="mailto:info@rapidmade.com">
              Email: <b>solutions@imaginaria.co.in</b>
            </a>
          </span>
        </div>
        <button
          onClick={() => setIsSearchOpen(true)}
          aria-label="Search"
          className="text-black"
        >
          <Search className="h-6 w-6" />
        </button>
      </div>

      {/* Full-Screen Search Overlay */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
          onClick={(e) => {
            // Close the overlay when clicking the backdrop, but not when clicking the content
            if (e.target === e.currentTarget) {
              setIsSearchOpen(false);
            }
          }}
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-md shadow-2xl transform transition-all duration-300 ease-in-out">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-full p-4 pl-12 border-0 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
                autoFocus
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setIsSearchOpen(false)}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200">
                Search
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Main Navigation Section */}
      <div
        className={`${
          isSticky
            ? "fixed top-0 left-0 right-0 bg-white shadow-md"
            : "relative"
        } z-50 flex items-center justify-between lg:px-40 px-4 py-1 transition-all duration-300`}
      >
        <div className="container mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/">
            <img src={imaginariaLogo} alt="Imaginaria Logo" className="h-10 logo" />
          </Link>

          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex space-x-6" ref={navRef}>
            {menuItems.map((item, index) => (
              <li
                key={item.title}
                className="relative group"
                onMouseEnter={() => handleMenuHover(index)}
              >
                <Link
                  to={item.href}
                  className="flex items-center text-black py-2"
                >
                  {item.title}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                <ul
                  className={`submenu-${index} absolute left-0 w-64 bg-white shadow-lg rounded 
                    transition-all duration-300 transform origin-top 
                    ${
                      activeMenu === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }
                    pt-2 mt-0`}
                  onMouseEnter={() => handleMenuHover(index)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  {item.subItems.map((subItem) => (
                    <li key={subItem.title}>
                      <Link
                        to={subItem.href}
                        className="block px-4 py-2 hover:bg-gray-200 text-black transition-colors duration-150"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/contact"
              className="bg-teal-500 hover:bg-black  text-white px-4 py-2 rounded-xl flex items-center"
            >
              <MessageSquare className="h-10 w-10 mr-2" />
              Contact Us
            </Link>
            <Link
              to="/quote-picker"
              className="bg-teal-500 text-white px-4 py-2 rounded-xl flex items-center hover:bg-black"
            >
              <FileText className="h-10 w-10 mr-2" />
              Get A Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50">
            <ul className="flex flex-col space-y-2 p-4">
              {menuItems.map((item, index) => (
                <li key={item.title} className="relative">
                  <div className="flex justify-between items-center">
                    <Link
                      to={item.href}
                      className="block py-2 text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    <button
                      onClick={() =>
                        setActiveMenu(activeMenu === index ? null : index)
                      }
                      className="p-2 text-black focus:outline-none"
                    >
                      {activeMenu === index ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  {activeMenu === index && (
                    <ul className="pl-4 mt-2 border-l-2 border-gray-200">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            to={subItem.href}
                            className="block py-2 text-black"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="block py-2 text-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/quote-picker"
                  className="block py-2 text-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get A Quote
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
