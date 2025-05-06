"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

// EmailJS imports
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)

  // Initialize EmailJS
  useEffect(() => {
    // Initialize with your EmailJS public key
    emailjs.init("1eC0hPW-IMbw68hFc")
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Get current date for the email template
      const currentDate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })

      const currentYear = new Date().getFullYear()

      // Send email using EmailJS
      const templateParams = {
        to_email: "oussama98.sgh@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        message: formData.message,
        date: currentDate,
        year: currentYear,
      }

      await emailjs.send(
        "service_gowsue7", // Replace with your EmailJS service ID
        "template_opagjg4", // Replace with your EmailJS template ID
        templateParams,
      )

      // Success
      setSubmitStatus({
        success: true,
        message: "Thank you for your message! We'll get back to you shortly.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    } catch (error) {
      // Error
      console.error("Error sending email:", error)
      setSubmitStatus({
        success: false,
        message: "There was an error sending your message. Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)

      // Clear success message after 5 seconds
      if (submitStatus?.success) {
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      }
    }
  }

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
              Contact Us
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Have questions or need more information? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-hcell-blue-500 dark:text-hcell-blue-400 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Address</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Engineering Way
                      <br />
                      Tech Park, Silicon Valley
                      <br />
                      CA 94043, USA
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-hcell-blue-500 dark:text-hcell-blue-400 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-hcell-blue-500 dark:text-hcell-blue-400 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">info@hcellengineering.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>

                {submitStatus && (
                  <Alert
                    className={`mb-6 ${
                      submitStatus.success
                        ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                        : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
                    }`}
                  >
                    <AlertDescription
                      className={
                        submitStatus.success ? "text-green-800 dark:text-green-300" : "text-red-800 dark:text-red-300"
                      }
                    >
                      {submitStatus.message}
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="bg-white dark:bg-gray-900"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-white dark:bg-gray-900"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="bg-white dark:bg-gray-900"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="bg-white dark:bg-gray-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                      className="bg-white dark:bg-gray-900"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-hcell-blue-500 hover:bg-hcell-blue-600 w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                          </svg>
                        </span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Location</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Visit our headquarters in the heart of Silicon Valley.
            </p>
          </div>

          <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
            {/* Placeholder for map - in a real implementation, you would use a map component */}
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">
                Map would be displayed here in a production environment
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
