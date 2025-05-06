import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "About Us",
}

export default function AboutPage() {
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
              About HCELL Engineering
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Pioneering the future of integrated circuit technology since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-[300px] sm:h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/engineering-team.jpg"
                  alt="HCELL Engineering Team"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                HCELL Engineering was founded in 2010 by a team of visionary engineers with a passion for creating
                innovative integrated circuit solutions. What began as a small startup has grown into a leading provider
                of cutting-edge technology for various industries.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our journey has been marked by continuous innovation, research, and development. We've consistently
                pushed the boundaries of what's possible in circuit design, creating more efficient, powerful, and
                reliable solutions for our clients.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Today, HCELL Engineering stands at the forefront of the industry, trusted by clients worldwide for our
                expertise, quality, and commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Driving innovation and excellence in integrated circuit technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-hcell-blue-500 dark:text-hcell-blue-400 mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To deliver innovative and reliable integrated circuit solutions that empower our clients to achieve
                their technological goals while maintaining the highest standards of quality and efficiency.
              </p>
              <ul className="space-y-3">
                {["Quality Excellence", "Customer Satisfaction", "Technological Innovation"].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-hcell-blue-500 dark:text-hcell-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-hcell-blue-500 dark:text-hcell-blue-400 mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To be the global leader in integrated circuit technology, pioneering solutions that shape the future of
                electronics and contribute to a more connected and efficient world.
              </p>
              <ul className="space-y-3">
                {["Global Leadership", "Sustainable Innovation", "Technological Advancement"].map((item) => (
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

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Meet the experts driving innovation at HCELL Engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-64 w-full">
                <Image src="/images/team-member-1.jpg" alt="John Smith" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">John Smith</h3>
                <p className="text-hcell-blue-500 dark:text-hcell-blue-400 mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 dark:text-gray-400">
                  With over 20 years of experience in the industry, John leads our company with vision and expertise.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-64 w-full">
                <Image src="/images/team-member-2.jpg" alt="Sarah Johnson" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Sarah Johnson</h3>
                <p className="text-hcell-blue-500 dark:text-hcell-blue-400 mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Sarah drives our technological innovation, bringing cutting-edge solutions to life.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-64 w-full">
                <Image src="/images/team-member-3.jpg" alt="Michael Chen" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Michael Chen</h3>
                <p className="text-hcell-blue-500 dark:text-hcell-blue-400 mb-3">Head of Research & Development</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Michael leads our R&D team, constantly pushing the boundaries of what's possible in circuit design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
