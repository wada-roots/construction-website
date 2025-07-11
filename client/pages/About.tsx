import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Users,
  Award,
  Target,
  Eye,
  Heart,
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Navigation from "../components/Navigation";

export default function About() {
  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Expert Team Members" },
    { number: "5", label: "Counties Served" },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest quality in every project, ensuring exceptional results that exceed expectations.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Honesty and transparency guide all our interactions with clients, partners, and team members.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in working together with our clients and partners to achieve shared success.",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "Embracing new technologies and methods to deliver cutting-edge construction solutions.",
    },
  ];

  const teamMembers = [
    {
      name: "David Mwangi",
      position: "Chief Executive Officer",
      experience: "20+ years",
      expertise: "Project Management, Business Development",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description:
        "Visionary leader with over two decades of experience in the construction industry.",
      email: "david.mwangi@dmsconstruction.co.ke",
      phone: "+254 722 123 456",
    },
    {
      name: "Sarah Wanjiku",
      position: "Chief Operations Officer",
      experience: "15+ years",
      expertise: "Operations Management, Quality Control",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=400&h=400&fit=crop&crop=face",
      description:
        "Operations expert ensuring seamless project execution and quality delivery.",
      email: "sarah.wanjiku@dmsconstruction.co.ke",
      phone: "+254 733 234 567",
    },
    {
      name: "John Kiprop",
      position: "Head of Engineering",
      experience: "18+ years",
      expertise: "Structural Engineering, Project Design",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description:
        "Senior engineer specializing in structural design and innovative construction solutions.",
      email: "john.kiprop@dmsconstruction.co.ke",
      phone: "+254 744 345 678",
    },
    {
      name: "Grace Akinyi",
      position: "Head of Architecture",
      experience: "12+ years",
      expertise: "Architectural Design, Urban Planning",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description:
        "Creative architect bringing innovative design concepts to life in every project.",
      email: "grace.akinyi@dmsconstruction.co.ke",
      phone: "+254 755 456 789",
    },
    {
      name: "Michael Otieno",
      position: "Safety Director",
      experience: "14+ years",
      expertise: "Site Safety, Risk Management",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      description:
        "Safety expert ensuring all projects meet the highest safety standards and regulations.",
      email: "michael.otieno@dmsconstruction.co.ke",
      phone: "+254 766 567 890",
    },
    {
      name: "Lucy Cheptoo",
      position: "Financial Director",
      experience: "16+ years",
      expertise: "Financial Management, Cost Control",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      description:
        "Financial expert managing project budgets and ensuring cost-effective delivery.",
      email: "lucy.cheptoo@dmsconstruction.co.ke",
      phone: "+254 777 678 901",
    },
  ];

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System Certification",
      issuer: "Kenya Bureau of Standards",
      year: "2023",
    },
    {
      title: "OHSAS 18001",
      description: "Occupational Health & Safety Management",
      issuer: "British Standards Institution",
      year: "2023",
    },
    {
      title: "NCA Registration",
      description: "National Construction Authority License",
      issuer: "National Construction Authority",
      year: "2024",
    },
    {
      title: "ISO 14001:2015",
      description: "Environmental Management System",
      issuer: "Kenya Bureau of Standards",
      year: "2023",
    },
  ];

  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "DMS CONSTRUCTION established in Nairobi",
    },
    {
      year: "2012",
      title: "First Major Project",
      description: "Completed 100-unit residential complex",
    },
    {
      year: "2015",
      title: "ISO Certification",
      description: "Achieved ISO 9001 quality certification",
    },
    {
      year: "2018",
      title: "Regional Expansion",
      description: "Extended operations to 5 counties",
    },
    {
      year: "2020",
      title: "Innovation Award",
      description: "Received National Construction Innovation Award",
    },
    {
      year: "2023",
      title: "500+ Projects",
      description: "Milestone of 500 completed projects",
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
              About DMS CONSTRUCTION
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8">
              Building Kenya's future since 2008 - your trusted partner in
              delivering exceptional construction projects with integrity,
              innovation, and excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
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
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-construction-brown mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2008 by a team of passionate construction
                  professionals, DMS CONSTRUCTION began with a simple vision: to
                  build Kenya's future through exceptional construction
                  projects.
                </p>
                <p>
                  What started as a small team in Nairobi has grown into one of
                  Kenya's most trusted construction companies, with over 500
                  completed projects across 5 counties. Our journey has been
                  marked by consistent growth, innovation, and an unwavering
                  commitment to quality.
                </p>
                <p>
                  Today, we pride ourselves on being more than just builders -
                  we are partners in Kenya's development, contributing to the
                  nation's infrastructure and helping families and businesses
                  achieve their dreams through quality construction.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
                alt="Construction team at work"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-construction-orange text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
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
              Our Mission, Vision & Values
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-construction-orange/5 rounded-xl"
            >
              <div className="bg-construction-orange/10 p-4 rounded-full w-fit mx-auto mb-6">
                <Target className="h-8 w-8 text-construction-orange" />
              </div>
              <h3 className="text-2xl font-bold text-construction-brown mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To deliver exceptional construction services that exceed client
                expectations while contributing to Kenya's infrastructure
                development through innovation, quality, and sustainability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-construction-blue/5 rounded-xl"
            >
              <div className="bg-construction-blue/10 p-4 rounded-full w-fit mx-auto mb-6">
                <Eye className="h-8 w-8 text-construction-blue" />
              </div>
              <h3 className="text-2xl font-bold text-construction-brown mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To be East Africa's leading construction company, recognized for
                innovation, quality, and sustainable building practices that
                shape communities and inspire future generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gray-50 rounded-xl"
            >
              <div className="bg-construction-brown/10 p-4 rounded-full w-fit mx-auto mb-6">
                <Heart className="h-8 w-8 text-construction-brown" />
              </div>
              <h3 className="text-2xl font-bold text-construction-brown mb-4">
                Our Values
              </h3>
              <p className="text-muted-foreground">
                Integrity, Excellence, Innovation, and Collaboration form the
                foundation of everything we do, ensuring lasting relationships
                and exceptional results.
              </p>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg border border-gray-200 hover:border-construction-orange/30 transition-colors"
              >
                <div className="bg-construction-orange/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-construction-orange" />
                </div>
                <h4 className="font-bold text-construction-brown mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-construction-brown text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Key milestones that have shaped DMS CONSTRUCTION into the company
              we are today
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-construction-orange/30"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-1/2"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-construction-orange rounded-full border-4 border-construction-brown"></div>
                <div
                  className={`w-1/2 p-6 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                  }`}
                >
                  <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-construction-orange mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals leading DMS CONSTRUCTION with expertise,
              vision, and dedication to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-construction-brown mb-1">
                    {member.name}
                  </h3>
                  <div className="text-construction-orange font-medium mb-2">
                    {member.position}
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">
                    {member.experience} • {member.expertise}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex space-x-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-construction-orange hover:text-construction-orange-dark transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="text-construction-orange hover:text-construction-orange-dark transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                      </a>
                      <button className="text-construction-orange hover:text-construction-orange-dark transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {member.experience}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
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
              Certifications & Accreditations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence is backed by industry-recognized
              certifications and standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-construction-orange/5 transition-colors"
              >
                <div className="bg-construction-orange/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-8 w-8 text-construction-orange" />
                </div>
                <h3 className="font-bold text-construction-brown mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {cert.description}
                </p>
                <div className="text-xs text-construction-orange">
                  {cert.issuer} • {cert.year}
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
              Partner with DMS CONSTRUCTION
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join the hundreds of satisfied clients who have trusted us with
              their construction projects. Experience the DMS difference today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-construction-orange px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center group"
              >
                Start Your Project
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
