import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Hammer,
  HardHat,
  Wrench,
  Zap,
  Users,
  CheckCircle,
  Star,
  Phone,
  ArrowRight,
  Clock,
  Shield,
  Award,
} from "lucide-react";
import Navigation from "../components/Navigation";

export default function Index() {
  const services = [
    {
      icon: Building2,
      title: "Residential Construction",
      description: "Custom homes and residential developments",
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform your space with expert renovation",
    },
    {
      icon: HardHat,
      title: "Civil Works",
      description: "Roads, bridges, and infrastructure projects",
    },
    {
      icon: Wrench,
      title: "Plumbing Services",
      description: "Complete plumbing installation and repair",
    },
    {
      icon: Zap,
      title: "Electrical Works",
      description: "Safe and reliable electrical solutions",
    },
    {
      icon: Users,
      title: "Project Management",
      description: "End-to-end project coordination",
    },
  ];

  const projects = [
    {
      title: "Nairobi Residential Complex",
      category: "Residential",
      image: "/placeholder.svg",
      completion: "2023",
      description: "Modern 50-unit apartment complex in Westlands",
    },
    {
      title: "Mombasa Shopping Center",
      category: "Commercial",
      image: "/placeholder.svg",
      completion: "2023",
      description: "3-story retail and office complex",
    },
    {
      title: "Kisumu Highway Bridge",
      category: "Infrastructure",
      image: "/placeholder.svg",
      completion: "2022",
      description: "200-meter concrete bridge construction",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Expert Team" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const testimonials = [
    {
      name: "Sarah Wanjiku",
      role: "Homeowner, Nairobi",
      content:
        "DMS CONSTRUCTION transformed our dream home into reality. Their attention to detail and professionalism exceeded our expectations.",
      rating: 5,
    },
    {
      name: "James Ochieng",
      role: "Business Owner, Mombasa",
      content:
        "Outstanding work on our office complex. Delivered on time and within budget. Highly recommend their services.",
      rating: 5,
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-construction-brown via-construction-brown to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center bg-construction-orange/10 border border-construction-orange/20 rounded-full px-4 py-2 text-sm"
                >
                  <Award className="w-4 h-4 mr-2 text-construction-orange" />
                  ISO 9001 Certified Construction Company
                </motion.div>

                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Building Kenya's
                  <span className="text-construction-orange block">
                    Future Together
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-gray-300 max-w-xl">
                  From residential homes to commercial complexes and
                  infrastructure projects, we deliver excellence in every build
                  across Kenya.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-construction-orange hover:bg-construction-orange-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center group"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/projects"
                  className="border-2 border-white hover:bg-white hover:text-construction-brown text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
                >
                  View Our Work
                </Link>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-construction-orange">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-construction-orange/20 to-construction-blue/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <img
                  src="/placeholder.svg"
                  alt="Construction site"
                  className="w-full h-80 lg:h-96 object-cover rounded-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-construction-orange text-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-6 w-6" />
                    <div>
                      <div className="font-semibold">Quality Assured</div>
                      <div className="text-sm opacity-90">Every Project</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-construction-orange/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-construction-blue/10 rounded-full blur-xl"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-construction-brown mb-4">
              Our Construction Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to meet your
              specific needs across Kenya
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-construction-orange/10 p-3 rounded-lg group-hover:bg-construction-orange group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-construction-orange group-hover:text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-construction-brown mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center bg-construction-orange hover:bg-construction-orange-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 group"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-construction-brown mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing our recent construction achievements across Kenya
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-construction-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-construction-brown mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-construction-orange font-medium">
                      Completed: {project.completion}
                    </span>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Recent</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center bg-construction-blue hover:bg-construction-blue-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 group"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-construction-brown text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose DMS CONSTRUCTION?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                With over 15 years of experience in the Kenyan construction
                industry, we combine local expertise with international
                standards.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Licensed & Insured",
                    description:
                      "Fully licensed with comprehensive insurance coverage",
                  },
                  {
                    icon: Clock,
                    title: "On-Time Delivery",
                    description:
                      "95% of projects completed on or ahead of schedule",
                  },
                  {
                    icon: Award,
                    title: "Quality Certified",
                    description:
                      "ISO 9001 certified with proven quality management",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-construction-orange/20 p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-construction-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-construction-orange fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
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
              Ready to Start Your Construction Project?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Get a free consultation and quote for your next construction
              project. Our team of experts is ready to bring your vision to
              life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-construction-orange px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+254700123456"
                className="border-2 border-white hover:bg-white hover:text-construction-orange text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +254 700 123 456
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-construction-brown text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-construction-orange to-construction-orange-dark p-2 rounded-lg">
                  <div className="w-8 h-8 bg-white rounded text-construction-orange flex items-center justify-center font-bold text-lg">
                    DMS
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold">DMS CONSTRUCTION</h3>
                  <p className="text-xs text-gray-400">
                    Building Excellence Together
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Building Kenya's future with quality construction services since
                2008.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {["Home", "Services", "Projects", "About", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <Link
                        to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                        className="hover:text-construction-orange transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  "Residential Construction",
                  "Commercial Buildings",
                  "Renovations",
                  "Civil Works",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="hover:text-construction-orange transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Nairobi, Kenya</p>
                <p>+254 700 123 456</p>
                <p>info@dmsconstruction.co.ke</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 DMS CONSTRUCTION. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/254700123456"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-colors duration-200"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </motion.a>
    </>
  );
}
