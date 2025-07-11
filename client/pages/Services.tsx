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
  ArrowRight,
  Home,
  Building,
  Construction,
  Droplets,
  Lightbulb,
  Settings,
  Shield,
  Clock,
  Award,
} from "lucide-react";
import Navigation from "../components/Navigation";

export default function Services() {
  const mainServices = [
    {
      icon: Building2,
      title: "Residential Construction",
      description: "Custom homes, apartments, and residential developments",
      features: [
        "Custom home design and build",
        "Apartment complexes",
        "Gated communities",
        "Residential renovations",
        "Interior finishing",
      ],
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    },
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial complexes",
      features: [
        "Office buildings",
        "Retail centers",
        "Warehouses",
        "Hospitality projects",
        "Mixed-use developments",
      ],
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    },
    {
      icon: Construction,
      title: "Infrastructure & Civil Works",
      description: "Constructions, bridges, and public infrastructure projects",
      features: [
        "Construction construction",
        "Bridge engineering",
        "Drainage systems",
        "Water treatment plants",
        "Public facilities",
      ],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with expert renovation",
      features: [
        "Home renovations",
        "Office remodeling",
        "Kitchen & bathroom upgrades",
        "Structural modifications",
        "Accessibility improvements",
      ],
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
    },
    {
      icon: Droplets,
      title: "Plumbing Services",
      description: "Complete plumbing installation, repair, and maintenance",
      features: [
        "Water supply systems",
        "Sewerage systems",
        "Bathroom installations",
        "Emergency repairs",
        "Pipe laying and maintenance",
      ],
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
    },
    {
      icon: Zap,
      title: "Electrical Works",
      description: "Safe and reliable electrical solutions for all projects",
      features: [
        "Electrical installations",
        "Power distribution",
        "Lighting systems",
        "Security systems",
        "Solar installations",
      ],
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
    },
  ];

  const additionalServices = [
    {
      icon: Settings,
      title: "Project Management",
      description: "End-to-end project coordination and oversight",
    },
    {
      icon: Shield,
      title: "Architectural Design",
      description: "Professional architectural and engineering design",
    },
    {
      icon: Users,
      title: "Consultation Services",
      description: "Expert advice and feasibility studies",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality control and testing",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Initial meeting to understand your requirements and vision",
    },
    {
      step: "02",
      title: "Planning & Design",
      description: "Detailed planning, design, and project documentation",
    },
    {
      step: "03",
      title: "Approval & Permits",
      description: "Handling all necessary permits and regulatory approvals",
    },
    {
      step: "04",
      title: "Construction",
      description: "Expert execution with regular progress updates",
    },
    {
      step: "05",
      title: "Quality Check",
      description: "Thorough inspection and quality assurance",
    },
    {
      step: "06",
      title: "Handover",
      description: "Final walkthrough and project handover with warranty",
    },
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
              Comprehensive Construction Services
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8">
              From residential homes to large-scale infrastructure, we deliver
              excellence in every project across Kenya
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-construction-orange hover:bg-construction-orange-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
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
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional construction services backed by years of experience
              and expertise
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-construction-orange/10 p-3 rounded-lg mr-4">
                        <service.icon className="h-8 w-8 text-construction-orange" />
                      </div>
                      <h3 className="text-2xl font-bold text-construction-brown">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-construction-orange mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Supporting services to ensure your project's complete success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-construction-orange/5 transition-colors duration-300"
              >
                <div className="bg-construction-orange/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-construction-orange" />
                </div>
                <h3 className="text-xl font-semibold text-construction-brown mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-construction-brown text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Construction Process
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A streamlined approach ensuring quality, efficiency, and
              transparency at every step
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-4xl font-bold text-construction-orange mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-construction-orange" />
                  </div>
                )}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us today for a free consultation and detailed quote for
              your construction needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-construction-orange px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white hover:bg-white hover:text-construction-orange text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
