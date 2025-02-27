import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

// Footer data
const capabilities = [
  { title: "3D Printing", href: "/3d-printing-technologies" },
  { title: "CNC Machining", href: "/cnc-machining" },
  { title: "Engineering", href: "/engineering-services" },
  { title: "Finishing", href: "/industrial-finishing" },
  { title: "Thermoforming", href: "/thermoforming-design-for-manufacturing" },
  { title: "Urethane Casting", href: "/silicone-and-urethane-casting" },
];

const industries = [
  { title: "Automotive", href: "https://rapidmade.com/automotive-industry/" },
  {
    title: "Electronics",
    href: "https://rapidmade.com/electronics-manufacturing/",
  },
  {
    title: "Industrial",
    href: "https://rapidmade.com/industrial-manufacturing/",
  },
  { title: "Energy", href: "https://rapidmade.com/energy-sector/" },
  { title: "Medical", href: "/3d-printing-in-the-medical-industry/" },
  { title: "Robotics", href: "https://rapidmade.com/robotics-manufacturing/" },
];

const company = [
  { title: "About", href: "/info" },
  { title: "Blog", href: "/rapidmade-blog" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Contact", href: "/contact" },
  { title: "Privacy Policy", href: "/privacy-policy" },
];

const socialMedia = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/RapidMade-150412631725702",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/rapidmade",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://twitter.com/Rapidmade", icon: Twitter },
];

const Footer = () => {
  return (
    <footer className="bg-green-100 py-8 px-8 lg:px-52">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Capabilities Section */}
        <div className="text-center">
          <h4 className="text-lg font-bold mb-4">
            <Link to="/info" aria-label="capabilities">
              Capabilities
            </Link>
          </h4>
          <ul className="space-y-2 mx-auto">
            {capabilities.map((item) => (
              <li key={item.title} className="text-center">
                <Link to={item.href} className="text-gray-700 hover:text-black">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries Section */}
        <div className="text-center">
          <h4 className="text-lg font-bold mb-4">
            <Link to="/info" aria-label="industries">
              Industries
            </Link>
          </h4>
          <ul className="space-y-2 mx-auto">
            {industries.map((item) => (
              <li key={item.title} className="text-center">
                <a href={item.href} className="text-gray-700 hover:text-black">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Section */}
        <div className="text-center">
          <h4 className="text-lg font-bold mb-4">
            <Link to="/info" aria-label="company">
              Company
            </Link>
          </h4>
          <ul className="space-y-2 mx-auto">
            {company.map((item) => (
              <li key={item.title} className="text-center">
                <Link to={item.href} className="text-gray-700 hover:text-black">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact and Social Media Section (Left Column on md and above) */}
        <div className="text-center md:col-span">
          <h4 className="text-lg font-bold mb-4">
            <Link to="/info" aria-label="contact">
              Contact
            </Link>
          </h4>
          <p className="text-gray-700">RapidMade, Inc</p>
          <p className="text-gray-700">
            <strong>12141 SW Herman Road</strong>
          </p>
          <p className="text-gray-700">Tualatin, OR 97062</p>
          <h4 className="text-lg font-bold mt-6 mb-4">
            <Link to="/info" aria-label="follow us">
              Follow us
            </Link>
          </h4>
          <div className="flex justify-center space-x-4">
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Map Section (Right Column on md and above) */}
        <div className="md:col-span-2 mt-8">
          <iframe
            loading="lazy"
            src="https://maps.google.com/maps?q=12141%20SW%20Herman%20Rd%2C%20Tualatin%2C%20OR%2097062%2C%20United%20States&t=m&z=10&output=embed&iwloc=near"
            title="12141 SW Herman Rd, Tualatin, OR 97062, United States"
            className="w-full h-64 border-0"
          ></iframe>
        </div>

        {/* Copyright Section */}
        <div className="col-span-1 md:col-span-3 text-center mt-8">
          <p className="text-gray-700">
            © 2024 RapidMade. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;