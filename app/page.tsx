import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Zap, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full tech-pattern-light dark:tech-pattern-dark"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-8 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-hcell-blue-500 to-hcell-blue-700 dark:from-hcell-blue-300 dark:to-hcell-blue-500 mb-6">
                Innovative Engineering Solutions
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                HCELL Engineering delivers cutting-edge integrated circuit solutions for tomorrow's technological
                challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-hcell-blue-500 hover:bg-hcell-blue-600">
                  <Link href="/products/avionics-ip">
                    Explore Our Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[300px] sm:h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/circuit-board.jpg"
                  alt="Circuit Board"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Featured Products</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover our innovative solutions designed for the most demanding applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="relative h-64 w-full">
                <Image src="/images/avionics-ip.jpg" alt="Avionics IP" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Avionics IP</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  High-reliability integrated circuits designed specifically for aerospace applications, meeting the
                  strictest industry standards.
                </p>
                <Button asChild className="bg-hcell-blue-500 hover:bg-hcell-blue-600">
                  <Link href="/products/avionics-ip">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="relative h-64 w-full">
                <Image src="/images/risc-v-processor.jpg" alt="RISC-V Processor" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">RISC-V Processor</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  High-performance, energy-efficient RISC-V processor cores for next-generation applications from
                  embedded systems to high-performance computing.
                </p>
                <Button asChild className="bg-hcell-blue-500 hover:bg-hcell-blue-600">
                  <Link href="/products/risc-v-processor">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose HCELL Engineering</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We combine innovative technology with engineering excellence to deliver superior solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="bg-hcell-blue-100 dark:bg-hcell-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Cpu className="h-7 w-7 text-hcell-blue-500 dark:text-hcell-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Advanced Technology</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our cutting-edge integrated circuits are designed with the latest technology to ensure optimal
                performance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="bg-hcell-blue-100 dark:bg-hcell-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-hcell-blue-500 dark:text-hcell-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Energy Efficient</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our products are designed with energy efficiency in mind, reducing power consumption without sacrificing
                performance.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="bg-hcell-blue-100 dark:bg-hcell-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-hcell-blue-500 dark:text-hcell-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Reliability & Security</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We prioritize reliability and security in all our designs, ensuring your systems operate safely and
                consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-hcell-blue-500 to-hcell-blue-700 dark:from-hcell-blue-600 dark:to-hcell-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Engineering Projects?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Partner with HCELL Engineering for innovative solutions that drive your success.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get in Touch Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
