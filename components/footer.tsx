import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="relative w-40 h-10 mb-4">
              <Image
                src="/hcell-logo.png"
                alt="HCELL Engineering"
                fill
                style={{ objectFit: "contain", objectPosition: "left" }}
                quality={100}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Innovative engineering solutions for tomorrow's challenges.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-hcell-blue-500 dark:text-gray-400 dark:hover:text-hcell-blue-300"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-hcell-blue-500 dark:text-gray-400 dark:hover:text-hcell-blue-300"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-hcell-blue-500 dark:text-gray-400 dark:hover:text-hcell-blue-300"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-hcell-blue-500 dark:hover:text-hcell-blue-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-hcell-blue-500 dark:hover:text-hcell-blue-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products/avionics-ip"
                  className="text-gray-600 dark:text-gray-400 hover:text-hcell-blue-500 dark:hover:text-hcell-blue-300"
                >
                  Avionics IP
                </Link>
              </li>
              <li>
                <Link
                  href="/products/risc-v-processor"
                  className="text-gray-600 dark:text-gray-400 hover:text-hcell-blue-500 dark:hover:text-hcell-blue-300"
                >
                  RISC-V Processor
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-hcell-blue-500 dark:hover:text-hcell-blue-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-hcell-blue-500 dark:text-hcell-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400">
                  123 Engineering Way, Tech Park, Silicon Valley, CA 94043
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-hcell-blue-500 dark:text-hcell-blue-400 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-hcell-blue-500 dark:text-hcell-blue-400 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">info@hcellengineering.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t dark:border-gray-800 mt-8 pt-6">
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} HCELL Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
