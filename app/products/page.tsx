import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export const metadata = {
  title: "Products",
}

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "HC-5000 Series",
      description: "High-performance integrated circuits for advanced computing applications.",
      image: "/images/product-1.jpg",
      features: ["Ultra-low power consumption", "High processing speed", "Compact design", "Temperature resistant"],
    },
    {
      id: 2,
      name: "MicroFlex™ IC",
      description: "Flexible integrated circuits designed for wearable technology and IoT devices.",
      image: "/images/product-2.jpg",
      features: [
        "Flexible substrate",
        "Miniaturized components",
        "Wireless connectivity",
        "Energy harvesting capability",
      ],
    },
    {
      id: 3,
      name: "SecureChip™ Platform",
      description: "Secure integrated circuits with advanced encryption for sensitive applications.",
      image: "/images/product-3.jpg",
      features: ["Military-grade encryption", "Tamper detection", "Secure boot process", "Hardware security modules"],
    },
  ]

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
              Our Products
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Discover our range of innovative integrated circuit solutions designed for the challenges of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-[300px] sm:h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{product.description}</p>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-700 dark:text-gray-300">
                          <div className="h-2 w-2 rounded-full bg-hcell-blue-500 dark:bg-hcell-blue-400 mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Custom Solutions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Can't find what you're looking for? We specialize in creating custom integrated circuit solutions tailored
              to your specific needs.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="relative h-[200px] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/custom-solution.jpg"
                    alt="Custom IC Solutions"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Custom Design Process</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our team of expert engineers works closely with you to understand your requirements and develop a
                  custom solution that meets your specific needs. From initial concept to final production, we ensure
                  quality and precision at every step.
                </p>
                <Button asChild className="bg-hcell-blue-500 hover:bg-hcell-blue-600">
                  <Link href="/contact">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
