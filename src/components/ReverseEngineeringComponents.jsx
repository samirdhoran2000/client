import { ArrowRight } from "lucide-react";

const ReverseEngineering = () => {
  return (
    <section className="mx-auto animate-fadeInUp">
      <div className="bg-gray-100 p-8 lg:px-40  rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Reverse Engineering & 3D Scanning
        </h1>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="text-lg space-y-4">
            <p>
              3D scanners create mesh models by capturing every segment of a
              part from different angles that can be merged into a single
              digital recreation. We capture millions of points to create a mesh
              which can then be converted into a 3D surface, accurate within
              0.001″. From there we can reverse engineer into a solid model or
              even a detailed drawing, including callouts and tolerances.
            </p>
            <p>
              RapidMade runs desktop and handheld scanners. Our desktop systems
              are great for highly detailed, small parts – up to about a 10″
              cube.
            </p>
            <p>Our handheld systems can scan up to a 3′ cube or more!</p>
            <p>
              Learn about our other{" "}
              <a
                href="https://rapidmade.com/"
                className="text-teal-500 underline"
              >
                3D Printing Services
              </a>{" "}
              and more!{" "}
              <a
                href="https://rapidmade.com/contact"
                className="text-teal-500 underline"
              >
                Contact us
              </a>{" "}
              today for a quote on your next project!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-hnohh.nitrocdn.com/ocjBvGnJhUOWxancuUtcYLluFwYBZCbU/assets/images/optimized/rev-92d29a4/rapidmade.com/wp-content/uploads/2022/09/3D-scanner-3D-Systems-Geomagic-Capture-front.jpg"
              alt="Geomagic Capture scanner"
              className="rounded-lg shadow-lg w-full max-w-sm"
            />
            <a
              href="/new-quick-quote-form"
              className="mt-6 inline-flex items-center px-6 py-2 bg-teal-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-teal-600 transition"
            >
              <ArrowRight className="mr-2" /> Get Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 animate-fadeInUp">
        How It Works
      </h2>

      <div className="text-center mb-6">
        <p>
          3D scans start at <strong>$250</strong>.
        </p>
        <p>
          CAD Design services at <strong>$130 per hour</strong>
        </p>
        <p>
          Reverse Engineering at <strong>$195 per hour</strong>
        </p>
        <p>Volume discounts available.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center p-4  rounded-lg shadow-lg">
          <img
            src="https://cdn-hnohh.nitrocdn.com/ocjBvGnJhUOWxancuUtcYLluFwYBZCbU/assets/images/optimized/rev-92d29a4/rapidmade.com/wp-content/uploads/2022/11/3d-scan-old-parts-cropped-2-scaled.jpeg"
            alt="Rusted metallic car parts"
            className="w-full rounded-lg"
          />
          <h3 className="text-xl font-semibold mt-4">Step 1</h3>
          <p className="text-gray-700 mt-2">
            Images of the part are submitted via email and evaluated. A
            preliminary price is quoted to the customer based on the images
            provided. The client then sends the physical part. If it differs
            from the original photo, the price may be adjusted.
          </p>
        </div>

        <div className="text-center p-4  rounded-lg shadow-lg">
          <img
            src="https://cdn-hnohh.nitrocdn.com/ocjBvGnJhUOWxancuUtcYLluFwYBZCbU/assets/images/optimized/rev-92d29a4/rapidmade.com/wp-content/uploads/2022/11/3d-scan-3-scaled.jpeg"
            alt="3D-modeling. Scanning a complex metal part."
            className="w-full rounded-lg"
          />
          <h3 className="text-xl font-semibold mt-4">Step 2</h3>
          <p className="text-gray-700 mt-2">
            The part is measured with precision tools to accurately capture it’s
            shape and size. We used a 3D scanner to create a mech and other
            tools like CMM or even gauges and calipers to confirm precise
            measurements. This information is used to create a 3D model of the
            part using DesignX, SolidWorks and other CAD programs.
          </p>
        </div>

        <div className="text-center p-4  rounded-lg shadow-lg">
          <img
            src="https://cdn-hnohh.nitrocdn.com/ocjBvGnJhUOWxancuUtcYLluFwYBZCbU/assets/images/optimized/rev-92d29a4/rapidmade.com/wp-content/uploads/2022/11/3d-scan-old-parts-cropped-2-scaled.jpeg"
            alt="CAD Design process"
            className="w-full rounded-lg"
          />
          <h3 className="text-xl font-semibold mt-4">Step 3</h3>
          <p className="text-gray-700 mt-2">
            The completed 3D CAD file is then sent to the client or used by
            RapidMade to manufacture the part for them. Customers review the
            data and make sure the geometric capture includes all necessary
            details. If moving into production RapidMade will create a first
            article for fit and approval before making the full run of parts. If
            adjustments need to be made we can iterate as much as needed.
          </p>
        </div>
      </div>
    </section>
  );
};


const ScanningArticle = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-center">
        <picture>
          <source
            type="image/webp"
            sizes="(max-width: 768px) 100vw, 768px"
            srcSet="https://cdn-hnohh.nitrocdn.com/ocjBvGnJhUOWxancuUtcYLluFwYBZCbU/assets/images/optimized/rev-92d29a4/rapidmade.com/wp-content/uploads/2023/01/3d-scan-2-768x512.jpeg.webp 768w, 
                     https://cdn-hnohh.nitrocdn.com/ocjBvGnJhUOWxancuUtcYLluFwYBZCbU/assets/images/optimized/rev-92d29a4/rapidmade.com/wp-content/uploads/2023/01/3d-scan-2-300x200.jpeg.webp 300w, 
                     https://cdn-hnohh.nitrocdn.com/ocjBvGnJhUOWxancuUtcYLluFwYBZCbU/assets/images/optimized/rev-92d29a4/rapidmade.com/wp-content/uploads/2023/01/3d-scan-2-1024x683.jpeg.webp 1024w"
          />
          <img
            className="rounded-lg shadow-lg"
            src="https://cdn-hnohh.nitrocdn.com/ocjBvGnJhUOWxancuUtcYLluFwYBZCbU/assets/images/optimized/rev-92d29a4/rapidmade.com/wp-content/uploads/2023/01/3d-scan-2-768x512.jpeg"
            alt="3D Scanner Scanning an Object"
          />
        </picture>
      </div>

      <h2 className="text-2xl font-bold mt-6 text-center">
        Feeling Shafted by your OEMs? The Power of 3D Scanning and Printing
        Services in Equipment Maintenance
      </h2>

      <h3 className="text-xl font-semibold mt-4">
        The Costs of New Equipment: Beyond the Sticker Price
      </h3>
      <p className="mt-2">
        Buying industrial equipment often comes with a catch: you are entering
        into a monopoly market for spare parts run by the Original Equipment
        Manufacturers (OEMs). This monopoly leads to overpricing, limited
        inventory, and planned obsolescence, pushing companies to replace
        equipment prematurely.
      </p>
      <p className="mt-2">
        Additionally, the user base is often forced into a long-term
        relationship where the OEM is unresponsive and unaccountable after the
        purchase. What are you going to do? Shut down your $500,000 dollar
        investment because the manufacturer is always on backorder?
      </p>
      <p className="mt-2">
        RapidMade’s 3D scanning and printing services challenge this norm by
        enabling businesses an unprecedented out –{" "}
        <a
          href="https://rapidmade.com/replacement-parts/"
          className="text-teal-500 underline"
        >
          by digitizing and producing their own spare parts.
        </a>
      </p>

      <p className="mt-2">
        This shift is a practical step towards independence from OEMs. It allows
        companies to replicate parts that are either too expensive or
        unavailable, breaking free from the shackles of predatory OEM behavior.
      </p>
      <p className="mt-2">
        When OEMs stop supporting equipment, businesses can still keep their
        machinery running for years, bypassing forced upgrades.
      </p>
      <p className="mt-2">
        The benefits are clear: significant cost savings, more flexible
        inventories, and greater control over equipment maintenance. With
        RapidMade’s precise 3D scanning and printing, businesses extend the
        lifespan of their machinery in a cost-effective and flexible manner,
        reducing waste and the environmental impact associated with
        manufacturing new equipment.
      </p>
      <p className="mt-2">
        Not only does 3D scanning lower the barriers for digitizing your spare
        part inventory – 3D printing technology greatly reduces costs and lead
        times for part manufacturing since machine part volumes are typically
        very low and often failures are unpredictable.
      </p>
      <p className="mt-2">
        RapidMade is focused on providing this empowering solution, helping
        businesses maintain their equipment more efficiently and economically,
        free from the restrictions of OEM part monopolies.
      </p>
    </div>
  );
};

const ThreeDPrintingSection = () => {
  return (
    <section className="max-w-6xl mx-auto p-4">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          className="rounded-lg shadow-lg"
          src="https://cdn-hnohh.nitrocdn.com/ocjBvGnJhUOWxancuUtcYLluFwYBZCbU/assets/images/optimized/rev-92d29a4/rapidmade.com/wp-content/uploads/2023/02/plastic-3d-printer-heading-768x432.jpg"
          alt="RapidMade | Reverse Engineering & 3D Scanning"
        />
      </div>

      {/* Text Content */}
      <div className="mt-6">
        <h3 className="text-xl font-bold">Breaking Free with 3D Technology</h3>
        <h4 className="text-lg font-medium mt-2">
          Gaining Independence through 3D Scanning
        </h4>
        <p className="mt-2 text-gray-700">
          The advent of 3D scanning technology offers a pivotal shift for
          businesses struggling with OEM dependencies. By digitizing and
          replicating their own spare parts, companies can effectively break
          free from the shackles of OEM monopolies. 3D scanning provides a
          detailed and accurate digital blueprint of parts, even those that are
          obsolete or unique to specific equipment. This process ensures
          precision in replication, essential for the seamless functioning of
          machinery. It’s a gateway to self-sufficiency, allowing businesses to
          maintain their equipment independently, free from the constraints of
          OEM pricing and limited availability.
        </p>
        <p className="mt-2 text-gray-700">
          RapidMade harnesses this technology to empower businesses, turning a
          once-captive market into one where freedom and choice prevail.
          RapidMade parts are certified! This means that we can produce an
          approved drawing up front of the specifications of your parts and we
          will make them to that drawing. We can then produce a certificate of
          conformance to say all products we make comply with the specifications
          we create at the outset of the project.
        </p>

        <h4 className="text-lg font-medium mt-4">
          The Advantages of 3D Printing in Spare Parts Manufacturing
        </h4>
        <p className="mt-2 text-gray-700">
          Complementing 3D scanning, 3D printing brings a transformative
          approach to manufacturing spare parts. It’s not just about creating
          parts more affordably; it’s about redefining the entire production
          process.
          <a
            href="https://rapidmade.com/get-something-3d-printed/"
            className="text-teal-500 hover:underline"
          >
            {" "}
            3D printing allows for on-demand manufacturing
          </a>
          , meaning parts are produced exactly when needed, in the exact
          quantity required. This approach significantly reduces costs
          associated with storage and inventory management.
        </p>
        <p className="mt-2 text-gray-700">
          3D printing technology caters to low-volume, customized part
          production without the need for expensive tooling or setup, a common
          barrier in traditional manufacturing. For businesses, this means when
          an OEM discontinues a part or ceases support for specific equipment,
          they can still keep their machinery operational, bypassing forced
          upgrades and the associated costs.
        </p>
        <p className="mt-2 text-gray-700">
          RapidMade specializes in leveraging this technology, offering
          businesses not just savings in cost and time but also an unprecedented
          level of manufacturing flexibility.
        </p>
      </div>
    </section>
  );
};
const Conclusion = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg ">
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Conclusion</h3>
        <p className="text-gray-700">
          RapidMade’s 3D scanning and printing services offer a powerful
          solution to the challenges imposed by OEM monopolies. By choosing us,
          businesses not only enjoy significant cost savings and enhanced
          flexibility in their inventories but also contribute to a more
          sustainable manufacturing landscape. Our commitment to precision,
          quality, and client-specific solutions makes us an ideal partner for
          companies looking to break free from the limitations of traditional
          equipment maintenance and part sourcing.
        </p>
        <p className="text-gray-700">
          Are you ready to take control of your equipment maintenance and spare
          part sourcing?
          <a
            href="https://rapidmade.com/contact"
            className="text-blue-600 hover:underline"
          >
            {" "}
            Contact RapidMade
          </a>{" "}
          or
          <a
            href="https://rapidmade.com/new-quick-quote-form"
            className="text-teal-500 hover:underline"
          >
            {" "}
            fill out our quote form
          </a>{" "}
          today to discover how our 3D scanning and printing services can
          transform your business operations, reduce costs, and elevate your
          manufacturing processes. Let’s redefine what’s possible together.
        </p>
      </div>
    </div>
  );
};


export {
  ReverseEngineering,
  HowItWorks,
  ScanningArticle,
  ThreeDPrintingSection,
  Conclusion,
};
