
import { ArrowRight, Table } from "lucide-react";
import bgImage from '../assets/Bottle-Mold_4744.webp'

const FDMSection = () => {
  return (
    <section className="bg-gray-100 py-12 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4">
        <div className="w-full">
          <div className="mb-8 animate-fadeIn">
            <h1 className="text-3xl font-bold text-gray-800">
              Fused Deposition Modeling (FDM)
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-fadeIn">
              <div className="text-gray-700">
                <p className="mb-4">
                  Fused deposition modeling (FDM,) also known as fused filament
                  fabrication (FFF,) creates 3D printed plastic parts by
                  extruding thermoplastic filaments in successive layers. FDM 3D
                  printing provides high dimensional accuracy and consistency on
                  every part. FDM also provides the widest portfolio of
                  thermoplastics of any 3DP technology. Because of the strength
                  and durability of industrial thermoplastics like ABS, PC and
                  Ultem, it is ideal for fixtures, stamping tools, mechanical
                  prototypes, form-fit-function models and small-batch
                  production.
                </p>
                <p className="mb-4">
                  Filament 3D printed plastics are durable, inexpensive and
                  quick to produce. They also eliminate many of the design
                  restrictions of traditional manufacturing.
                </p>
                <p className="mb-4">
                  At RapidMade we offer{" "}
                  <span className="font-bold">ABS, Polycarbonate, Ultem</span>{" "}
                  and <span className="font-bold">Carbon-filled Nylon 12</span>{" "}
                  for a wide range of industrial applications.
                </p>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <img
                  src={bgImage}
                  alt="RapidMade|Fused Deposition Modeling (FDM) 3D Printing"
                  className="w-full h-auto rounded shadow"
                />
              </div>
              <div className="text-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white rounded hover:bg-teal-600 transition duration-300"
                >
                  <span className="mr-2">Get Quote</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const MaterialsData = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Standard Materials</h2>

        <p className="text-gray-700 mb-8">
          Filament 3D printing offers the most diverse portfolio of engineering
          grade thermoplastics. RapidMade is proud to stock the best materials
          this technology has to offer, listed below:
        </p>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Table className="h-5 w-5 text-gray-700" />
          <h2 className="text-xl font-semibold">ABS Technical Data</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Mechanical and Thermal Properties of FDM ABS
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Category</th>
              <th className="border px-4 py-2 text-left">Measurement</th>
              <th className="border px-4 py-2 text-left">Value</th>
              <th className="border px-4 py-2 text-left">Method</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border px-4 py-2">Mechanical Properties</td>
              <td className="border px-4 py-2">Density of parts</td>
              <td className="border px-4 py-2">1.04 g/cm3</td>
              <td className="border px-4 py-2">ASTM D792</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">
                Tensile Strength, Max Load - XY
              </td>
              <td className="border px-4 py-2">30.8 MPa/4470 psi</td>
              <td className="border px-4 py-2">ASTM D638</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">
                Tensile Strength, Max Load - Z
              </td>
              <td className="border px-4 py-2">27.5 MPa/3990 psi</td>
              <td className="border px-4 py-2">ASTM D638</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">Tensile Modulus - XY</td>
              <td className="border px-4 py-2">2400 MPa/349 ksi</td>
              <td className="border px-4 py-2">ASTM D638</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">Tensile Modulus - Z</td>
              <td className="border px-4 py-2">2300 MPa/334 ksi</td>
              <td className="border px-4 py-2">ASTM D638</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">Elongation at Break - XY</td>
              <td className="border px-4 py-2">8.1%</td>
              <td className="border px-4 py-2">ASTM D638</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">Elongation at Break - Z</td>
              <td className="border px-4 py-2">1.8%</td>
              <td className="border px-4 py-2">ASTM D638</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="border px-4 py-2">Thermal Properties</td>
              <td className="border px-4 py-2">
                Heat Deflection Temperature 0.45 MPa
              </td>
              <td className="border px-4 py-2">96ºC/204 ºF</td>
              <td className="border px-4 py-2">ASTM D638</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">
                Heat Deflection Temperature 1.82 MPa
              </td>
              <td className="border px-4 py-2">82 ºC/180 ºF</td>
              <td className="border px-4 py-2">ASTM D638</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">Glass Transition</td>
              <td className="border px-4 py-2">105 ºC/221 ºF</td>
              <td className="border px-4 py-2">ASTM D3418</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { FDMSection,MaterialsData };
