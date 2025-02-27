import "./homeComponents.css";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Layers,
  Syringe,
  Paintbrush,
  Zap,
  Plus,
  Minus,
  ArrowRight,
  Printer,
  PenTool,
  ChevronRight,
  ChevronLeft,
  Star,
  Car,
  Cpu,
  Battery,
  Factory,
  Stethoscope,
  Bot,
  Clock,
  Phone,
  Mail,
  Menu,
  X,
  Search,
  File,
  ChevronDown,
  MessageSquare,
  FileText,
  ChevronUp,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import HeroSection from "./HeroSection";




const ServiceCard = ({
  frontIcon: Icon,
  frontTitle,
  backTitle,
  backDescription,
  backLink,
  backgroundImage,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image with zoom effect */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: isHovered ? "scale(1)" : "scale(1.05)", // Zoom out effect
        }}
      />

      {/* Color overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(58, 66, 109, 0.75)", // The requested overlay color
        }}
      />

      {/* Front content (visible when not hovered) */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <Icon className="w-16 h-16 text-white mb-4" />
        <h3 className="text-xl font-bold text-center text-white">
          {frontTitle}
        </h3>
      </div>

      {/* Back content (visible when hovered) */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-white transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-xl font-bold mb-2 text-center">{backTitle}</h3>
        <p className="mb-4 text-center ">{backDescription}</p>
        <a
          href={backLink}
          className="inline-flex items-center border-2 font-semibold py-2 px-4 rounded  transition-colors duration-200"
        >
          View{" "}
          <span>
            <ArrowRight />
          </span>
          {/* <ArrowRight className="ml-2 w-4 h-4" /> */}
        </a>
      </div>
    </div>
  );
};

const services = [
  {
    frontIcon: Printer,
    frontTitle: "3D Printing",
    backTitle: "Rapid 3D Printing",
    backDescription:
      "Rapid 3D printing is the best choice for quick turn, small to medium runs of industrial-strength parts, prototypes and commercial 3D printing products.",
    backgroundImage: "./temp/bgService.webp",
    backLink: "/3d-printing-technologies",
  },
  {
    frontIcon: Layers,
    frontTitle: "Thermoforming",
    backTitle: "Thermoforming",
    backDescription:
      "Thermoforming is ideal for rapid 3D printing products that can be formed from a sheet of plastic, such as custom trays, covers, containers and more.",
    backgroundImage: "./temp/bgService.webp",
    backLink: "/vacuum-thermoforming/",
  },
  {
    frontIcon: Syringe,
    frontTitle: "Injection Molding",
    backTitle: "Injection Molding",
    backDescription:
      "3D printed injection molds yield hundreds of parts and can be made overnight. Open up a world of materials.",
    backgroundImage: "./temp/bgService.webp",
    backLink: "/3d-printed-injection-mold/",
  },
  {
    frontIcon: PenTool,
    frontTitle: "CNC Machining",
    backTitle: "CNC Machining",
    backDescription:
      "CNC machining offers the best accuracy and widest selection of materials, including thermoplastics and metals.",
    backgroundImage: "./temp/bgService.webp",
    backLink: "/cnc-machining/",
  },
  {
    frontIcon: Paintbrush,
    frontTitle: "Finishing",
    backTitle: "Finishing",
    backDescription:
      "With a wide selection of materials and finishing methods, you'll always have the right solution for your project.",
    backgroundImage: "./temp/bgService.webp",
    backLink: "/industrial-finishing/",
  },
  {
    frontIcon: Zap,
    frontTitle: "Rapid Prototyping",
    backTitle: "Rapid Prototyping",
    backDescription:
      "From proof of concept to fully functional prototypes, we'll get it done fast—so you have the most time and money to get your 3D printing product just right.",
    backgroundImage: "./bgService.webp",
    backLink: "/rapid-prototyping/",
  },
];

const ManufacturingServices = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-40 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          3D Fabrication without Limits
        </h2>
        <p className="text-center mb-12">
          From engineering to manufacturing, we empower your business—at light
          speed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};


const TestimonialCard = ({ testimonial, expandedIds, toggleExpanded }) => {
  const isExpanded = expandedIds.includes(testimonial.name);
  const isLongContent = testimonial.content.length > 100;

  return (
    <div className="bg-[#d4f4ec] rounded-lg p-3 md:p-4 shadow-sm border-2 border-[#d4f4ec] h-full flex flex-col">
      <div className="flex items-start gap-2 md:gap-3 mb-2">
        <div className="flex-shrink-0">
          <img
            src={"./temp/googleProfilePhoto.png"}
            alt={testimonial.name}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 md:gap-2 mb-1">
            <img
              src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
              alt="Google"
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <div>
              <p className="font-medium text-xs md:text-sm truncate">{testimonial.name}</p>
              <p className="text-xs text-gray-600">{testimonial.date}</p>
            </div>
          </div>
          <div className="flex mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={14} className="md:w-4 md:h-4" fill="#FFD700" color="#FFD700" />
            ))}
          </div>
          <div
            className={`text-xs md:text-sm leading-tight ${
              isLongContent && !isExpanded ? "line-clamp-3" : ""
            }`}
          >
            {testimonial.content}
          </div>
          {isLongContent && (
            <button
              onClick={() => toggleExpanded(testimonial.name)}
              className="text-gray-600 text-xs mt-1 font-medium"
            >
              {isExpanded ? "Hide" : "Read more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const TestimonialsCarousel = () => {
  // Using the real testimonials data from the top of your code
  const testimonials = [
    {
      name: "Rahil",
      date: "13 February 2025",
      rating: 5,
      content: "Great Service!",
      image: "./temp/googleProfilePhoto.webp",
    },
    {
      name: "Drue Nelson",
      date: "10 February 2025",
      rating: 5,
      content:
        "From start to finish, Rapidmade was great to work with. The engineering staff was informative and helpful, and the production staff worked hard to get us our product as promised",
      image: "./temp/googleProfilePhoto.webp",
    },
    {
      name: "Greg Wagemans",
      date: "27 January 2025",
      rating: 5,
      content: "Great service",
      image: "./temp/googleProfilePhoto.webp",
    },
    {
      name: "Craig Spear",
      date: "6 January 2025",
      rating: 5,
      content:
        "RapidMade did a great job in getting this part printed and shipped out to me in a very timely manner. This part was no longer available to buy from the manufacturer and RapidMade gave me the solution I needed. They do great work! Thanks Andrew!\n\nCraig",
      image: "./temp/googleProfilePhoto.webp",
    },
    {
      name: "Shawn Hale",
      date: "20 September 2024",
      rating: 5,
      content:
        "Excellent quality and service - in particular for a hard-to-find, soft 3d printed material. The prices were very reasonable and are in line with the cheapest options which I thoroughly researched. Especially if you don't want to work with international 3d printers / international shipment delays. They were able to quickly expedite my order and what they delivered exceeded my expectations in quality. I want to highlight the service that Andrew LaPlant gave us, quick responses, quick quote, made the expedited service experience quite easy. I would highly recommend them for any 3d print job based on what they delivered and I have a background in 3d printing, using many 3d print providers, and even doing the 3d printing myself, I would rather have these guys do when needed from now on. Top notch, will be a return customer, thank you!",
      image: "./temp/googleProfilePhoto.webp",
    },
    {
      name: "leejdelorme",
      date: "8 July 2024",
      rating: 5,
      content:
        "Product quality is excellent. Order turn around and delivery is fast. Customer service is top notch. I always know when I order from them it will be exactly what I want and when I want it. Truly a great company to work with.",
      image: "./temp/googleProfilePhoto.webp",
    },
    {
      name: "ARI ALEP",
      date: "21 June 2024",
      rating: 5,
      content:
        "Exceptional customer service. I forgot to add an item to my order,\nI email Andrew and boom he make it happened. In addition, it was Friday afternoon! I don't think the other impersonal online 3D printing cities will do that for you. GO Rapidmade,",
      image: "./temp/googleProfilePhoto.webp",
    },
    {
      name: "Devin Funaro",
      date: "18 April 2024",
      rating: 5,
      content:
        "Rapid made has worked with us through a demanding thermoforming fabrication process! The part needed a few revisions and rapid made has stood by quality all along the way. Great to work with.",
      image: "./temp/googleProfilePhoto.webp",
    },
  ];

  // Create extended slides with clones for infinite looping
  const extendedTestimonials = useMemo(() => {
    return [
      testimonials[testimonials.length - 1],
      ...testimonials,
      testimonials[0],
    ];
  }, []);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [expandedIds, setExpandedIds] = useState([]);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const slideContainerRef = useRef(null);

  // Determine number of visible slides based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleExpanded = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Advance to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Go back one slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Go to a specific slide (dot indicator click)
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex + 1);
  };

  // Handle transition end for infinite loop effect
  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      // We've reached the clone of the last slide
      setTransitionEnabled(false);
      setCurrentIndex(extendedTestimonials.length - 2);
      setTimeout(() => setTransitionEnabled(true), 50);
    }
    if (currentIndex === extendedTestimonials.length - 1) {
      // We've reached the clone of the first slide
      setTransitionEnabled(false);
      setCurrentIndex(1);
      setTimeout(() => setTransitionEnabled(true), 50);
    }
  };

  // Touch and mouse event handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.targetTouches[0].clientX);
    const diff = touchStart - e.targetTouches[0].clientX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (touchStart - touchEnd > 75) {
      nextSlide();
    } else if (touchStart - touchEnd < -75) {
      prevSlide();
    }
    setDragOffset(0);
  };

  const handleMouseDown = (e) => {
    setTouchStart(e.clientX);
    setIsDragging(true);
    setDragOffset(0);
    if (slideContainerRef.current) {
      slideContainerRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
    const diff = touchStart - e.clientX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (touchStart - touchEnd > 75) {
      nextSlide();
    } else if (touchStart - touchEnd < -75) {
      prevSlide();
    }
    setIsDragging(false);
    setDragOffset(0);
    if (slideContainerRef.current) {
      slideContainerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
      if (slideContainerRef.current) {
        slideContainerRef.current.style.cursor = "grab";
      }
    }
  };

  // Auto-advance the slide every 20 seconds if not dragging
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 20000);
    return () => clearInterval(interval);
  }, [isDragging]);

  // Calculate transform value based on current index and any drag offset
  const transformValue = isDragging
    ? `translateX(calc(-${
        (currentIndex * 100) / visibleCount
      }% - ${dragOffset}px))`
    : `translateX(-${(currentIndex * 100) / visibleCount}%)`;

  // Get the active dot index for the indicator
  const getActiveDotIndex = () => {
    if (currentIndex === 0) {
      return testimonials.length - 1;
    }
    if (currentIndex === extendedTestimonials.length - 1) {
      return 0;
    }
    return currentIndex - 1;
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12 xl:px-40 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
          Customers love working with RapidMade!
        </h2>

        <div className="relative">
          {/* Carousel container */}
          <div
            className="overflow-hidden touch-pan-y"
            ref={slideContainerRef}
            style={{ cursor: "grab" }}
          >
            <div
              className="flex"
              style={{
                transform: transformValue,
                transition: isDragging
                  ? "none"
                  : transitionEnabled
                  ? "transform 500ms ease-in-out"
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2 transition-opacity duration-500"
                  style={{
                    opacity:
                      index >= currentIndex &&
                      index < currentIndex + visibleCount
                        ? 1
                        : 0.3,
                    transform:
                      index >= currentIndex &&
                      index < currentIndex + visibleCount
                        ? "scale(1)"
                        : "scale(0.9)",
                    transition:
                      "opacity 500ms ease-in-out, transform 500ms ease-in-out",
                  }}
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    expandedIds={expandedIds}
                    toggleExpanded={toggleExpanded}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons - more responsive positioning */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-2 sm:-ml-3 md:-ml-4 lg:-ml-6 bg-white rounded-full p-1 md:p-2 shadow-md hover:bg-gray-100"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-2 sm:-mr-3 md:-mr-4 lg:-mr-6 bg-white rounded-full p-1 md:p-2 shadow-md hover:bg-gray-100"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-4 md:mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 md:h-2 w-4 md:w-6 mx-1 rounded-full transition-colors duration-300 ${
                getActiveDotIndex() === index ? "bg-teal-500" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-4 md:mt-6 text-xs md:text-sm">
          <p className="text-gray-700">
            <span className="font-medium">Google</span> rating score:
            <span className="font-medium ml-1">4.8</span> of 5, based on{" "}
            <a href="#" className="text-black font-medium">
              79 reviews
            </a>
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-6 md:mt-8">
          <a
            href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x54950a6a2cddf3a5:0x455939d8a15893d4!12e1?source=g.page.m&laa=merchant-review-solicitation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 md:gap-2 text-base md:text-xl underline bg-teal-500 hover:bg-black text-white font-semibold py-2 md:py-3 px-3 md:px-4 rounded-xl transition-colors"
          >
            <span>Please Review Us!</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

const CompanyHighlightSection = () => {
  return (
    <div className=" py-8 px-4 sm:px-6 lg:px-40 bg-[#d4f4ec]">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="./temp/carPark.webp"
              alt="RapidMade|Home"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex items-center lg:ml-28">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-black lg:leading-[70px]">
              30 employees, 30k sq ft:
              <br />
              Large enough to deliver,
              <br />
              small enough to care.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrustedCompaniesSection = () => {
  // Company logos data
  const companyLogos = [
    {
      id: 1,
      alt: "Cornell Manufacturer",
      src: "https://cdn-hnohh.nitrocdn.com/ocjBvGnJhUOWxancuUtcYLluFwYBZCbU/assets/images/optimized/rev-92d29a4/rapidmade.com/wp-content/uploads/2022/08/Cornell-Manufacturer-2.png",
    },
    {
      id: 2,
      alt: "USDA logo",
      src: "https://cdn-hnohh.nitrocdn.com/ocjBvGnJhUOWxancuUtcYLluFwYBZCbU/assets/images/optimized/rev-92d29a4/rapidmade.com/wp-content/uploads/2022/08/Cornell-Manufacturer-3.png",
    },
    {
      id: 3,
      alt: "Oregon logo",
      src: "https://cdn-hnohh.nitrocdn.com/ocjBvGnJhUOWxancuUtcYLluFwYBZCbU/assets/images/optimized/rev-92d29a4/rapidmade.com/wp-content/uploads/2022/08/Oregon.png",
    },
    {
      id: 4,
      alt: "Oregon",
      src: "https://cdn-hnohh.nitrocdn.com/ocjBvGnJhUOWxancuUtcYLluFwYBZCbU/assets/images/optimized/rev-92d29a4/rapidmade.com/wp-content/uploads/2022/08/Oregon-1.png",
    },
    {
      id: 5,
      alt: "America's Navy (A global force for good)",
      src: "https://cdn-hnohh.nitrocdn.com/ocjBvGnJhUOWxancuUtcYLluFwYBZCbU/assets/images/optimized/rev-92d29a4/rapidmade.com/wp-content/uploads/2022/08/Oregon-2.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 lg:px-40 animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="mb-8">
            <div className="h-8"></div> {/* Spacer */}
            <h3 className="text-2xl font-bold text-center">
              Trusted by Over 5,000 American Companies
            </h3>
          </div>

          <div className="logos-list">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {companyLogos.map((logo) => (
                <figure
                  key={logo.id}
                  className="flex justify-center items-center"
                >
                  <div className="p-4 bg-white rounded shadow-sm">
                    <img
                      width="208"
                      height="117"
                      src={logo.src}
                      alt={logo.alt}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const industries = [
    {
      id: 1,
      title: "Automotive",
      icon: Car,
      description:
        "Simplify your supply chain and speed up prototyping, parts supply, and custom assembly.",
    },
    {
      id: 2,
      title: "Electronics",
      icon: Cpu,
      description:
        "Utilize anti-static materials in custom electronic parts and assemblies.",
    },
    {
      id: 3,
      title: "Energy",
      icon: Battery,
      description:
        "Custom tooling and rapid prototyping in the USA. Quick production for repair or replacement.",
    },
    {
      id: 4,
      title: "Industrial",
      icon: Factory,
      description:
        "Custom rapid prototyping in the USA, manufacturing, and finishing processes for unique applications.",
    },
    {
      id: 5,
      title: "Medical",
      icon: Stethoscope,
      description:
        "Rapid 3D fabrication service for medical devices, surgical, and diagnostic equipment providers.",
    },
    {
      id: 6,
      title: "Robotics",
      icon: Bot,
      description:
        "Scale your manufacturing and innovate faster with rapid prototyping and critical flexibility.",
    },
  ];

  return (
    <section className="py-16  px-2 lg:px-40 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Industries We Serve
        </h2>

        <p className="text-lg text-center text-gray-600 max-w-4xl mx-auto mb-16 font-bold">
          As one of the best 3D printing companies in the USA, we have custom
          manufacturing solutions for every type of industry. We provide
          on-demand 3D fabrication services for businesses around the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 text-teal-500">
                <industry.icon size={64} strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                <a
                  href={`#${industry.title.toLowerCase()}`}
                  className="hover:text-teal-600 transition-colors"
                >
                  {industry.title}
                </a>
              </h3>

              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MadeInUsaSection = () => {
  return (
    <section className="bg-gray-100 py-12 lg:px-40">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left Column with Image */}
        <div className="w-full md:w-1/2">
          <div className="flex justify-center">
            <img
              src="./temp/Portland.webp"
              alt="Portland 3D Printing"
              className="w-full max-w-lg rounded-3xl shadow-md"
            />
          </div>
        </div>

        {/* Right Column with Text */}
        <div className="w-full md:w-1/2 animate-fadeIn ">
          <h2 className="text-6xl text-gray-800 font-bold mb-4">
            Made in the USA
          </h2>
          <p className="text-gray-600 font-bold text-2xl leading-[40px] mb-6">
            We provide all engineering, design, and rapid 3D printing product
            manufacturing services at our location in Portland, OR. Our team is
            large enough to handle complex and fast-production orders but small
            enough to maintain a customer and quality-focused approach.
          </p>
          <div className="flex md:justify-start justify-center">
            <a
              href="/info"
              className="inline-flex items-center text-xl underline bg-teal-500 hover:bg-black text-white font-semibold  rounded-xl px-6 py-3 transition-colors duration-300"
            >
              <span className="mr-2">Learn More</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="py-16 bg-gray-50 lg:px-40">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Portland, Oregon Local - Service You Can Trust
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <iframe
              src="https://maps.google.com/maps?q=12141%20SW%20Herman%20rd&t=m&z=9&output=embed&iwloc=near"
              title="12141 SW Herman rd"
              className="w-full h-64 md:h-96"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="md:w-1/2">
            <figure>
              <img
                src="./temp/plant.webp"
                alt="Our Facility"
                className="w-full rounded"
              />
              <figcaption className="mt-2 text-center text-sm">
                Our brand new 30,000 sq ft facility is located just south of the
                city off i5
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

const cardData = [
  {
    id: "01",
    title: "Request Quote",
    description:
      "Get started with your project today by requesting a quote or giving us a call. We even offer instant 3D printing quotes for our most popular rapid 3D printing services.",
  },
  {
    id: "02",
    title: "Engineering",
    description:
      "With our in-house engineering and product design services, we can work with your team to ensure product viability and successful production and finishing.",
  },
  {
    id: "03",
    title: "Production",
    description:
      "RapidMade uses the latest technologies and materials to help you supercharge your rapid 3D printing product development cycles with our rapid prototyping and 3D fabrication services in the USA.",
  },
];

const RapidManufacturingProcess = () => {
  return (
    <section className="bg-gray-200 py-8 lg:px-40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-black fade-in">
            Our Rapid Manufacturing Process
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className={`w-full md:w-1/3 px-4 mb-8 md:mb-0 fade-in-up ${
                index === 1 ? "delay-200" : index === 2 ? "delay-400" : ""
              } relative`}
            >
              <div className=" p-6  relative overflow-hidden">
                {/* Centered Background Number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-300 text-[200px] font-bold select-none pointer-events-none">
                    {card.id}
                  </span>
                </div>
                {/* Foreground Content */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center mb-4">
                    {card.id}
                  </div>
                  <h6 className="text-xl font-semibold mb-2">{card.title}</h6>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const slides = [
  {
    id: 1,
    title: "Enhancing SLA 3D Prints: Post-Processing Tips For Superior Results",
    date: "January 5, 2025",
    url: "#",
    bgImage: "./temp/image1.webp",
  },
  {
    id: 2,
    title: "image1 Consumer Product Prototyping with SLA Technology",
    date: "January 10, 2025",
    url: "#",
    bgImage: "./temp/image2.webp",
  },
  {
    id: 3,
    title: "Design Optimization For Multi Jet Fusion: Tips For Success",
    date: "January 15, 2025",
    url: "#",
    bgImage: "./temp/image1.webp",
  },
  {
    id: 4,
    title: "The Future of Additive Manufacturing in Healthcare",
    date: "January 20, 2025",
    url: "#",
    bgImage: "./temp/image2.webp",
  },
  {
    id: 5,
    title: "Metal 3D Printing: Industrial Applications and Challenges",
    date: "January 25, 2025",
    url: "#",
    bgImage: "./temp/image1.webp",
  },
  {
    id: 6,
    title: "Sustainable Materials for Eco-Friendly 3D Printing",
    date: "February 1, 2025",
    url: "#",
    bgImage: "./temp/image2.webp",
  },
];

const NewsCarousel = () => {
  const extendedSlides = useMemo(() => {
    return [slides[slides.length - 1], ...slides, slides[0]];
  }, []);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const slideContainerRef = useRef(null);
  
  // Responsive visible count based on screen size
  const [visibleCount, setVisibleCount] = useState(3);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  // Update visible count based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      
      if (width < 640) {
        setVisibleCount(1); // Mobile: show one slide
      } else if (width < 1024) {
        setVisibleCount(2); // Tablet: show two slides
      } else {
        setVisibleCount(3); // Desktop: show three slides
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Advance to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Go back one slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // When a dot is clicked, offset the index by 1 (because index 0 is a clone)
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex + 1);
  };

  // When the transition ends, check if we're on a clone and jump immediately
  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      // We've reached the clone of the last slide.
      setTransitionEnabled(false);
      setCurrentIndex(extendedSlides.length - 2);
      setTimeout(() => setTransitionEnabled(true), 50);
    }
    if (currentIndex === extendedSlides.length - 1) {
      // We've reached the clone of the first slide.
      setTransitionEnabled(false);
      setCurrentIndex(1);
      setTimeout(() => setTransitionEnabled(true), 50);
    }
  };

  // Touch events for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.targetTouches[0].clientX);
    const diff = touchStart - e.targetTouches[0].clientX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (touchStart - touchEnd > 75) {
      nextSlide();
    } else if (touchStart - touchEnd < -75) {
      prevSlide();
    }
    setDragOffset(0);
  };

  // Mouse events for drag
  const handleMouseDown = (e) => {
    setTouchStart(e.clientX);
    setIsDragging(true);
    setDragOffset(0);
    if (slideContainerRef.current) {
      slideContainerRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
    const diff = touchStart - e.clientX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (touchStart - touchEnd > 75) {
      nextSlide();
    } else if (touchStart - touchEnd < -75) {
      prevSlide();
    }
    setIsDragging(false);
    setDragOffset(0);
    if (slideContainerRef.current) {
      slideContainerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
      if (slideContainerRef.current) {
        slideContainerRef.current.style.cursor = "grab";
      }
    }
  };

  // Auto-advance the slide every 5 seconds if not dragging
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isDragging]);

  // Calculate transform value based on current index and any drag offset.
  const transformValue = isDragging
    ? `translateX(calc(-${
        (currentIndex * 100) / visibleCount
      }% - ${dragOffset}px))`
    : `translateX(-${(currentIndex * 100) / visibleCount}%)`;

  // Get the active dot index for the indicator
  const getActiveDotIndex = () => {
    if (currentIndex === 0) {
      return slides.length - 1;
    }
    if (currentIndex === extendedSlides.length - 1) {
      return 0;
    }
    return currentIndex - 1;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 md:py-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-4 md:mb-8">
        3D Printing News
      </h1>

      <div className="relative">
        {/* Carousel container */}
        <div
          className="overflow-hidden touch-pan-y"
          ref={slideContainerRef}
          style={{ cursor: "grab" }}
        >
          <div
            className="flex"
            style={{
              transform: transformValue,
              transition: isDragging
                ? "none"
                : transitionEnabled
                ? "transform 500ms ease-in-out"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {extendedSlides.map((slide, index) => (
              <div
                key={index}
                className={`flex-none px-2 transition-transform ${
                  visibleCount === 1 ? 'w-full' : 
                  visibleCount === 2 ? 'w-1/2' : 
                  'w-full sm:w-1/2 lg:w-1/3'
                }`}
                style={{
                  opacity:
                    index >= currentIndex && index < currentIndex + visibleCount
                      ? 1
                      : 0.3,
                  transform:
                    index >= currentIndex && index < currentIndex + visibleCount
                      ? "scale(1)"
                      : "scale(0.9)",
                  transition:
                    "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div 
                  className="bg-white rounded-lg shadow-md overflow-hidden h-full transform transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
                    <img
                      src={slide.bgImage}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-end">
                      <h6 className="text-white font-semibold p-2 sm:p-3 md:p-4 text-base sm:text-lg">
                        <a
                          href={slide.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline transition-colors duration-300"
                        >
                          {slide.title}
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4">
                    <div className="flex items-center text-gray-500">
                      <Clock size={windowWidth < 640 ? 14 : 16} className="mr-2" />
                      <span className="text-xs sm:text-sm">{slide.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons - hidden on small screens */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 -ml-1 sm:-ml-2 md:-ml-4 bg-white rounded-full p-1 sm:p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={windowWidth < 640 ? 18 : 24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 -mr-1 sm:-mr-2 md:-mr-4 bg-white rounded-full p-1 sm:p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={windowWidth < 640 ? 18 : 24} />
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center mt-2 md:mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 md:h-2 w-1.5 md:w-2 mx-1 rounded-full transition-colors duration-300 ${
                getActiveDotIndex() === index ? "bg-gray-800" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Sample FAQ data
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "You can create an account by clicking the 'Sign Up' button in the top right corner of our homepage. Fill out the required information and follow the verification steps sent to your email.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. For certain regions, we also support local payment options.",
    },
    {
      question: "Can you accommodate high-volume 3D printing orders?",
      answer:
        "Yes, we are equipped to handle high-volume orders across various 3D printing technologies. Our team can work with you to optimize production schedules and ensure that your order is fulfilled efficiently.",
    },
    {
      question: "What materials are available for 3D printing?",
      answer:
        "Material selection depends on the desired properties of the final part, such as durability, flexibility, or heat resistance. We offer a wide range of materials, including plastics like ABS, PLA, and nylon, Resins for SLA, Metals such as aluminum and stainless steel. Contact one of the best 3D printing companies in the USA.",
    },
    {
      question: "Do you offer post-processing services for 3D printed parts?",
      answer:
        "Absolutely, we provide a comprehensive suite of post-processing services, including sanding, painting, dyeing, and sealing, to improve the appearance and functionality of your parts.",
    },
    {
      question:
        "What are the unique advantages of each 3D printing technology you offer?",
      answer:
        "Each 3D printing technology we offer has unique advantages: FDM (Fused Deposition Modeling): Affordable and great for rapid prototyping with a variety of thermoplastics. SLA (Stereolithography): High precision and smooth surface finish, ideal for detailed prototypes. SLS (Selective Laser Sintering): Produces strong and durable parts without the need for support structures, suitable for functional prototypes and end-use parts. DLP (Digital Light Processing): Faster than SLA with comparable detail and surface quality. MJF (Multi Jet Fusion): High-quality, detailed parts with excellent mechanical properties, suitable for both prototyping and production.",
    },
    {
      question: "How do you ensure the quality of 3D printed parts?",
      answer:
        "We implement stringent quality control measures, including: Detailed design reviews before printing. In-process monitoring to ensure dimensional accuracy and consistency. Post-print inspection for structural integrity and finish quality.",
    },
    {
      question: "What materials are available for 3D printing?",
      answer:
        "Material selection depends on the desired properties of the final part, such as durability, flexibility, or heat resistance. We offer a wide range of materials, including plastics like ABS, PLA, and nylon, Resins for SLA, Metals such as aluminum and stainless steel. Contact one of the best 3D printing companies in the USA.",
    },
    {
      question: "What materials are available for 3D printing?",
      answer:
        "Material selection depends on the desired properties of the final part, such as durability, flexibility, or heat resistance. We offer a wide range of materials, including plastics like ABS, PLA, and nylon, Resins for SLA, Metals such as aluminum and stainless steel. Contact one of the best 3D printing companies in the USA.",
    },
    {
      question: "What materials are available for 3D printing?",
      answer:
        "Material selection depends on the desired properties of the final part, such as durability, flexibility, or heat resistance. We offer a wide range of materials, including plastics like ABS, PLA, and nylon, Resins for SLA, Metals such as aluminum and stainless steel. Contact one of the best 3D printing companies in the USA.",
    },
    {
      question: "What materials are available for 3D printing?",
      answer:
        "Material selection depends on the desired properties of the final part, such as durability, flexibility, or heat resistance. We offer a wide range of materials, including plastics like ABS, PLA, and nylon, Resins for SLA, Metals such as aluminum and stainless steel. Contact one of the best 3D printing companies in the USA.",
    },
  ];

  return (
    <section className="py-8 px-16 lg:px-40 bg-gray-100">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-2">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b pb-2 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <button
                className="w-full text-left flex justify-between items-center font-bold text-lg py transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                <span className="transform transition-transform duration-300 ease-in-out">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`mt-2 text-gray-700 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="py-2">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



const HomePage = () =>{
  return (
    <div className="font-montserrat">
      <main id="content" className="site-main">
        <div className="page-content">
          {/* <Navbar /> */}
          <HeroSection
            mediaItems={[
              { type: "image", src: "./image-1.jpg", duration: 3000 },
              { type: "video", src: "./video1.mp4" },
              { type: "video", src: "./video2.mp4" },
            ]}
          />
          <ManufacturingServices />
          <TestimonialsCarousel />
          <TrustedCompaniesSection />
          <CompanyHighlightSection />
          <IndustriesSection />
          <MadeInUsaSection />
          <MapSection />
          <RapidManufacturingProcess />
          <NewsCarousel />
          <FAQSection />
          {/* <Footer /> */}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
