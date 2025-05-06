import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Zap, Cpu, CheckCircle2, Layers } from "lucide-react"

export const metadata = {
  title: "RISC-V Processor",
}

export default function RiscVProcessorPage() {
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
              RISC-V Processor
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              High-performance, energy-efficient RISC-V processor cores for next-generation applications
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
                  src="/images/risc-v-processor.jpg"
                  alt="RISC-V Processor"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Product Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                HCELL Engineering's RISC-V processor is a cutting-edge implementation of the open-standard RISC-V
                instruction set architecture. Our processor cores deliver exceptional performance, energy efficiency,
                and flexibility for a wide range of applications from embedded systems to high-performance computing.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                With customizable features and comprehensive development tools, our RISC-V processors provide a
                future-proof foundation for your next-generation products.
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
              Our RISC-V processors combine performance, efficiency, and flexibility
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="bg-hcell-blue-100 dark:bg-hcell-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Cpu className="h-7 w-7 text-hcell-blue-500 dark:text-hcell-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">High Performance</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Advanced microarchitecture delivering exceptional performance with optimized pipeline design and branch
                prediction.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="bg-hcell-blue-100 dark:bg-hcell-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-hcell-blue-500 dark:text-hcell-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Energy Efficient</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Designed for minimal power consumption with advanced power management features, ideal for
                battery-powered and embedded applications.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="bg-hcell-blue-100 dark:bg-hcell-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Layers className="h-7 w-7 text-hcell-blue-500 dark:text-hcell-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Customizable</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Highly configurable architecture with optional extensions and custom instructions to meet specific
                application requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Processor Variants */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Processor Variants</h2>

          <div className="space-y-8">
            {/* Variant 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <h3 className="text-xl font-semibold text-hcell-blue-500 dark:text-hcell-blue-400 mb-2">HC-RV32E</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Embedded Processor</p>
                  <div className="bg-hcell-blue-100 dark:bg-hcell-blue-900/30 p-4 rounded-lg text-center">
                    <span className="text-2xl font-bold text-hcell-blue-500 dark:text-hcell-blue-400">32-bit</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    A compact 32-bit processor core optimized for embedded applications with minimal resource
                    requirements. Ideal for IoT devices, sensors, and microcontrollers.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "RV32E base integer instruction set",
                      "Optional M extension for multiplication/division",
                      "2-stage pipeline architecture",
                      "Ultra-low power consumption: <10mW at 100MHz",
                      "Compact silicon footprint: <0.02mm²",
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

            {/* Variant 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <h3 className="text-xl font-semibold text-hcell-blue-500 dark:text-hcell-blue-400 mb-2">HC-RV64GC</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">General Purpose Processor</p>
                  <div className="bg-hcell-blue-100 dark:bg-hcell-blue-900/30 p-4 rounded-lg text-center">
                    <span className="text-2xl font-bold text-hcell-blue-500 dark:text-hcell-blue-400">64-bit</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    A versatile 64-bit processor core suitable for a wide range of applications from embedded systems to
                    mobile devices and edge computing.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "RV64GC instruction set (G+C extensions)",
                      "5-stage pipeline with out-of-order execution",
                      "L1 and L2 cache support",
                      "Hardware floating-point unit",
                      "Advanced power management features",
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

            {/* Variant 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <h3 className="text-xl font-semibold text-hcell-blue-500 dark:text-hcell-blue-400 mb-2">HC-RV64X</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">High-Performance Processor</p>
                  <div className="bg-hcell-blue-100 dark:bg-hcell-blue-900/30 p-4 rounded-lg text-center">
                    <span className="text-2xl font-bold text-hcell-blue-500 dark:text-hcell-blue-400">64-bit</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Our flagship 64-bit processor core designed for high-performance computing applications with
                    advanced features for maximum throughput and efficiency.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "RV64GC with custom vector extensions",
                      "Superscalar architecture with 8-stage pipeline",
                      "Advanced branch prediction and speculative execution",
                      "Multi-core support with coherent cache",
                      "Hardware acceleration for AI/ML workloads",
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
        </div>
      </section>

      {/* Development Tools */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Development Tools</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive tools and support to accelerate your development process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-hcell-blue-500 dark:text-hcell-blue-400 mb-4">
                Software Development Kit
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our comprehensive SDK includes everything you need to develop software for our RISC-V processors:
              </p>
              <ul className="space-y-2">
                {[
                  "GCC-based compiler toolchain",
                  "LLVM support",
                  "Debugger and profiling tools",
                  "Optimized C/C++ libraries",
                  "RTOS integration examples",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-hcell-blue-500 dark:text-hcell-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-hcell-blue-500 dark:text-hcell-blue-400 mb-4">
                Hardware Development Kit
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our HDK provides the tools and resources for integrating our RISC-V processors into your hardware
                designs:
              </p>
              <ul className="space-y-2">
                {[
                  "RTL source code and documentation",
                  "FPGA development boards",
                  "Verification test benches",
                  "Integration examples",
                  "Power analysis tools",
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
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-hcell-blue-500 to-hcell-blue-700 dark:from-hcell-blue-600 dark:to-hcell-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Power Your Next Project with RISC-V?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact our team to discuss how our RISC-V processors can meet your specific requirements.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get in Touch Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
