import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import Navigation from "../components/Navigation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 700 123 456", "+254 733 234 567"],
      description: "Mon - Fri: 8:00 AM - 6:00 PM",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@dmsconstruction.co.ke", "projects@dmsconstruction.co.ke"],
      description: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["Westlands Business Park", "Nairobi, Kenya"],
      description: "Suite 12A, 3rd Floor",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
      ],
      description: "Sunday: Closed",
    },
  ];

  const offices = [
    {
      city: "Nairobi (Head Office)",
      address: "Westlands Business Park, Suite 12A, 3rd Floor",
      phone: "+254 700 123 456",
      email: "nairobi@dmsconstruction.co.ke",
      manager: "David Mwangi - CEO",
    },
    {
      city: "Mombasa",
      address: "Nyali Centre, 2nd Floor, Office 8B",
      phone: "+254 722 345 678",
      email: "mombasa@dmsconstruction.co.ke",
      manager: "Sarah Wanjiku - Regional Manager",
    },
    {
      city: "Kisumu",
      address: "Mega Plaza, 1st Floor, Suite 15",
      phone: "+254 733 456 789",
      email: "kisumu@dmsconstruction.co.ke",
      manager: "John Kiprop - Site Manager",
    },
  ];

  const projectTypes = [
    "Residential Construction",
    "Commercial Building",
    "Infrastructure Project",
    "Renovation/Remodeling",
    "Electrical Works",
    "Plumbing Services",
    "Consultation",
    "Other",
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-construction-brown to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get In Touch With Us
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8">
              Ready to start your construction project? Contact our expert team
              for a free consultation and detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+254700123456"
                className="bg-construction-orange hover:bg-construction-orange-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center group"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +254 700 123 456
              </a>
              <a
                href="mailto:info@dmsconstruction.co.ke"
                className="border-2 border-white hover:bg-white hover:text-construction-brown text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-3xl font-bold text-construction-brown mb-6">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours with a detailed response to your inquiry.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-construction-brown mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll be in touch soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-construction-brown mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-colors"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-construction-brown mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-colors"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-construction-brown mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-colors"
                            placeholder="+254 700 123 456"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-construction-brown mb-2">
                          Company/Organization
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-colors"
                            placeholder="Your company name"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-construction-brown mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-colors"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-construction-brown mb-2">
                        Project Details *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-colors resize-none"
                          placeholder="Please describe your project requirements, timeline, budget range, and any specific details..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-construction-orange hover:bg-construction-orange-dark disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-construction-orange/10 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-construction-orange" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-construction-brown mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground mb-1">
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-construction-orange">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="font-semibold text-construction-brown mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, href: "#", color: "text-blue-600" },
                    { icon: Twitter, href: "#", color: "text-blue-400" },
                    { icon: Instagram, href: "#", color: "text-pink-600" },
                    { icon: Linkedin, href: "#", color: "text-blue-700" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className={`${social.color} hover:opacity-80 transition-opacity`}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-construction-brown mb-4">
              Our Office Locations
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit us at any of our convenient locations across Kenya
            </p>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-200 h-96 rounded-xl mb-12 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="h-12 w-12 text-construction-orange mx-auto mb-4" />
              <p className="text-muted-foreground">
                Interactive map would be embedded here
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Google Maps integration showing all office locations
              </p>
            </div>
          </motion.div>

          {/* Office Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-construction-orange/5 transition-colors"
              >
                <h3 className="font-bold text-construction-brown text-lg mb-3">
                  {office.city}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p>{office.address}</p>
                  <p>{office.phone}</p>
                  <p>{office.email}</p>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-construction-orange font-medium">
                    {office.manager}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-construction-orange to-construction-orange-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Build Your Dream Project?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Don't wait - start your construction journey today. Our team is
              ready to turn your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/254700123456"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center group"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href="tel:+254700123456"
                className="border-2 border-white hover:bg-white hover:text-construction-orange text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
