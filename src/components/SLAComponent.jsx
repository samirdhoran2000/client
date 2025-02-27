import React from "react";
import { ArrowRight, FileText, Info } from "lucide-react";
import bottleMold from "../assets/Bottle-Mold_4744.webp";
import highSpeedSLA from "../assets/High-Speed-SLA-Build-Plate.webp";

const SLA3DPrintingOverview = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="w-full">
          <div className="mb-8 animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 w-full text-center">
              Overview of SLA 3D Printing
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 animate-fadeIn">
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold mb-4 text-gray-900">
                  The revolutionary Triple Threat: Unparalleled print
                  resolution, a diverse portfolio of engineering plastics, rapid
                  and affordable production.
                </h3>

                <h3 className="text-xl font-bold mb-4">Critical Stats</h3>

                <p className="mb-2">
                  <strong>Build bed volume:</strong> 10.8″ x 6.3″ x 15.7″ (XYZ)
                </p>
                <p className="mb-2">
                  <strong>Build Speed:</strong> Up to 4&ldquo; per hour
                </p>
                <p className="mb-2">
                  <strong>Max Resolution:</strong> 4K (3840 x 2160)
                </p>
                <p className="mb-2">
                  <strong>Layer Thickness:</strong> 100um
                </p>

                <p className="my-4">
                  SLA produces high-resolution 3D printed plastic parts in
                  relatively large volumes by selectively curing a
                  light-sensitive photopolymer in a tank. It is a great solution
                  for quickly creating plastic parts with the finest features
                  and smoothest surface finish. High-speed SLA, as the name
                  implies, has the added advantage of being extremely fast –
                  able to print 15&ldquo; tall builds in only a few hours.
                </p>

                <p className="my-4">
                  SLA offers one of the widest selections of materials of any 3D
                  printing technology: translucent acrylics, ABS and
                  polypropylene-like mechanical properties and medical grade
                  materials.
                </p>

                <p className="my-4">
                  No longer just for modeling anymore the available surface
                  finish, production speeds and material properties are allowing
                  RapidMade customers to phase out injection molds altogether
                  for small part manufacturing.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 animate-fadeIn">
              <div className="mb-6">
                {/* <figure className="mb-4"> */}
                <img
                  src={highSpeedSLA}
                  alt="High-Speed SLA Build Plate"
                  className="w-full rounded"
                  loading="lazy"
                />
                {/* </figure> */}

                <p className="font-bold text-gray-800 mb-6">
                  High speed SLA build plate of production grade parts printed
                  in under 60 minutes.
                </p>

                <div className="flex justify-center mb-6">
                  <a
                    href="#"
                    className="bg-teal-500 text-white py-2 px-6 rounded flex items-center hover:bg-teal-600 transition-colors"
                  >
                    <span className="mr-2">Get Instant Quote</span>
                    <ArrowRight size={16} />
                  </a>
                </div>

                <div className="my-8"></div>

                <p className="text-gray-700">
                  If you are interested in our full length{" "}
                  <a href="#" className="text-teal-500 hover:underline">
                    comprehensive guide for SLA 3D printing
                  </a>{" "}
                  you can find it linked right here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const MaterialSpecifications = () => {
  return (
    <div className="max-w-screen mx-auto bg-gray-100">
      {/* High Speed SLA Materials Header */}
      <div className=" p-8 rounded-lg w-full text-center mb-8">
        <div className=" mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">
            High Speed SLA Materials
          </h2>
        </div>
      </div>

      {/* General Purpose Acrylic Section */}
      <div className="bg-gray-100 py-8 px-8 lg:px-40 rounded-lg shadow-md animate-fadeIn">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Specifications */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-10">
              General Purpose Acrylic
            </h2>

            <div className="flex flex-row">
              {/* Property Names */}
              <div className="flex flex-col mr-6">
                <p className="font-bold py-1">Colors</p>
                <p className="font-bold py-1">Hardness</p>
                <p className="font-bold py-1">Modulus of Elasticity</p>
                <p className="font-bold py-1">Heat Deflection Temperature</p>
                <p className="font-bold py-1">Tensile Strength</p>
                <p className="font-bold py-1">Elongation at Break</p>
                <p className="font-bold py-1">Biocompatability ISO 10993-10</p>
              </div>

              {/* Property Values */}
              <div className="flex flex-col">
                <p className="font-bold py-1">White, Black and Clear</p>
                <p className="font-bold py-1">80D</p>
                <p className="font-bold py-1">1900 MPa</p>
                <p className="font-bold py-1">63°C</p>
                <p className="font-bold py-1">60 MPa</p>
                <p className="font-bold py-1">40%</p>
                <p className="font-bold py-1">Comply</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image and Description */}
          <div>
            <div className="mb-4">
              <img
                src={bottleMold}
                alt="3D Printed Acrylic Parts"
                className="w-full h-auto rounded-lg shadow"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Low Cost Resin
            </h3>
            <p className="flex items-center text-teal-500 font-bold">
              <FileText size={16} className="mr-2" />
              View the Acrylic Data Sheet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const DigitalABS = () => {
  return (
    <div className="max-w-screen mx-auto bg-gray-100">
      

      {/* Digital ABS Section */}
      <div className="bg-gray-100 py-8 px-8 lg:px-40 rounded-lg shadow-md animate-fadeIn">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Specifications */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Digital ABS
            </h2>

            <div className="flex flex-row">
              {/* Property Names */}
              <div className="flex flex-col mr-6">
                <p className="font-bold py-1">Colors</p>
                <p className="font-bold py-1">Hardness</p>
                <p className="font-bold py-1">Modulus of Elasticity</p>
                <p className="font-bold py-1">Heat Deflection Temperature</p>
                <p className="font-bold py-1">Tensile Strength</p>
                <p className="font-bold py-1">Elongation at Break</p>
                <p className="font-bold py-1">Biocompatability ISO 10993-10</p>
              </div>

              {/* Property Values */}
              <div className="flex flex-col">
                <p className="font-bold py-1">White, Black and Clear</p>
                <p className="font-bold py-1">80D</p>
                <p className="font-bold py-1">1900 MPa</p>
                <p className="font-bold py-1">63°C</p>
                <p className="font-bold py-1">60 MPa</p>
                <p className="font-bold py-1">40%</p>
                <p className="font-bold py-1">Comply</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image and Description */}
          <div>
            <div className="mb-4">
              <img
                src={bottleMold}
                alt="3D Printed Acrylic Parts"
                className="w-full h-auto rounded-lg shadow"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Low Cost Resin
            </h3>
            <p className="flex items-center text-teal-500 font-bold">
              <FileText size={16} className="mr-2" />
              View the Acrylic Data Sheet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};




const SLADesignGuidelines = () => {
  return (
    <section className="w-full py-12 px-4 bg-white shadow-md rounded-lg animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <div className="w-full">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                High Speed SLA Design Guidelines
              </h2>
              <p className="italic text-gray-600 mb-6">
                Please note that these are guidelines, not hard-and-fast rules.
                Follow these, and you should be in pretty good shape. We&apos;ll let
                you know if we see any problems with your design.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="border border-gray-300 p-3 font-semibold">
                      Parameter
                    </td>
                    <td className="border border-gray-300 p-3 font-semibold">
                      Inches
                    </td>
                    <td className="border border-gray-300 p-3 font-semibold">
                      Milimeters
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      Minimum Supported Wall Thickness
                    </td>
                    <td className="border border-gray-300 p-3">0.030</td>
                    <td className="border border-gray-300 p-3">0.75</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">
                      Minimum Unsupported Wall Thickness
                    </td>
                    <td className="border border-gray-300 p-3">0.040</td>
                    <td className="border border-gray-300 p-3">1.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      Minimum Supported Bosses
                    </td>
                    <td className="border border-gray-300 p-3">0.030</td>
                    <td className="border border-gray-300 p-3">0.75</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">
                      Minimum Unsupported Bosses
                    </td>
                    <td className="border border-gray-300 p-3">0.040</td>
                    <td className="border border-gray-300 p-3">1.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      Minimum Embossed Detail (Height and Width)
                    </td>
                    <td className="border border-gray-300 p-3">0.010</td>
                    <td className="border border-gray-300 p-3">0.25</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">
                      Minimum Engraved Detail (Height and Width)
                    </td>
                    <td className="border border-gray-300 p-3">0.010</td>
                    <td className="border border-gray-300 p-3">0.25</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Clearance</td>
                    <td className="border border-gray-300 p-3">0.010</td>
                    <td className="border border-gray-300 p-3">0.25</td>
                  </tr>
                </tbody>
              </table>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};





export {
  SLA3DPrintingOverview,
  MaterialSpecifications,
  DigitalABS,
  SLADesignGuidelines,
};
