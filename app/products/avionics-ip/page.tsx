import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Shield, Zap, Cpu, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Avionics IP",
}

export default function AvionicsIPPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full tech-pattern-light dark:tech-pattern-dark"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-hcell-blue-500 to-hcell-blue-700 dark:from-hcell-blue-300 dark:to-hcell-blue-500 mb-6">
              Avionics IP
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              High-reliability integrated circuits designed specifically for aerospace applications
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-[300px] sm:h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/avionics-ip.jpg"
                  alt="Avionics IP"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Product Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                HCELL Engineering's Avionics IP is a comprehensive suite of integrated circuit designs specifically
                engineered for the demanding requirements of aerospace applications. Our IP cores are designed to meet
                the highest standards of reliability, performance, and safety required by the aviation industry.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                With certification-ready components and extensive documentation, our Avionics IP significantly reduces
                development time and certification costs for aerospace systems integrators and manufacturers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-hcell-blue-500 hover:bg-hcell-blue-600">
                  <Link href="/contact">
                    Request Information
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#">
                    Download Datasheet
                    <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our Avionics IP is designed with safety, reliability, and performance in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="bg-hcell-blue-100 dark:bg-hcell-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-hcell-blue-500 dark:text-hcell-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">DO-254 Compliant</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Designed to meet the rigorous requirements of DO-254 for airborne electronic hardware, simplifying the
                certification process.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="bg-hcell-blue-100 dark:bg-hcell-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-hcell-blue-500 dark:text-hcell-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Radiation Hardened</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Engineered to withstand the harsh radiation environments encountered in aerospace applications, ensuring
                reliable operation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="bg-hcell-blue-100 dark:bg-hcell-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Cpu className="h-7 w-7 text-hcell-blue-500 dark:text-hcell-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Low Power Consumption</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Optimized for minimal power consumption without compromising performance, ideal for power-constrained
                aerospace systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Specifications
          </h2>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-hcell-blue-500 dark:text-hcell-blue-400 mb-4">
                  Performance Characteristics
                </h3>
                <ul className="space-y-3">
                  {[
                    "Operating Temperature: -55°C to +125°C",
                    "Supply Voltage: 1.8V to 3.3V",
                    "Power Consumption: <500mW typical",
                    "Clock Frequency: Up to 200MHz",
                    "Radiation Tolerance: 100 krad (Si) TID",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-hcell-blue-500 dark:text-hcell-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-hcell-blue-500 dark:text-hcell-blue-400 mb-4">
                  Certification & Standards
                </h3>
                <ul className="space-y-3">
                  {[
                    "DO-254 Design Assurance Level A-D",
                    "MIL-STD-883 Compliant",
                    "RTCA/DO-160G Environmental Testing",
                    "ISO 9001:2015 Certified Manufacturing",
                    "ECSS-Q-ST-60C Space Product Assurance",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-hcell-blue-500 dark:text-hcell-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Applications</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our Avionics IP is used in a wide range of aerospace applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Flight Control Systems",
                description: "Critical systems for aircraft navigation and control",
                image: "/images/flight-control.jpg",
              },
              {
                title: "Communication Systems",
                description: "Reliable data transmission in aerospace environments",
                image: "/images/communication.jpg",
              },
              {
                title: "Navigation Equipment",
                description: "Precision positioning and guidance systems",
                image: "/images/navigation.jpg",
              },
              {
                title: "Satellite Electronics",
                description: "Durable components for space applications",
                image: "/images/satellite.jpg",
              },
            ].map((app, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="relative h-48 w-full">
                  <Image src={app.image || "/placeholder.svg"} alt={app.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{app.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-hcell-blue-500 to-hcell-blue-700 dark:from-hcell-blue-600 dark:to-hcell-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Integrate Our Avionics IP?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact our team of experts to discuss how our Avionics IP can meet your specific requirements.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get in Touch Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
