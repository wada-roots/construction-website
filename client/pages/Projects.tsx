import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Users,
  Building2,
  Home,
  Construction,
  Building,
  Filter,
  CheckCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Navigation from "../components/Navigation";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCategories = [
    "All",
    "Residential",
    "Commercial",
    "Infrastructure",
    "Renovation",
  ];

  const projects = [
    {
      id: 1,
      title: "Westlands Residential Complex",
      category: "Residential",
      location: "Westlands, Nairobi",
      completionDate: "December 2023",
      duration: "18 months",
      description:
        "Modern 50-unit apartment complex with state-of-the-art amenities including swimming pool, gym, and landscaped gardens.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      features: [
        "50 residential units",
        "Swimming pool & gym",
        "Landscaped gardens",
        "Underground parking",
        "24/7 security",
      ],
      status: "Completed",
      client: "Westlands Properties Ltd.",
    },
    {
      id: 2,
      title: "Mombasa Shopping Center",
      category: "Commercial",
      location: "Nyali, Mombasa",
      completionDate: "October 2023",
      duration: "24 months",
      description:
        "3-story retail and office complex featuring modern architectural design and energy-efficient systems.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      features: [
        "15,000 sqm retail space",
        "Office complexes",
        "Food court",
        "Ample parking",
        "Energy-efficient design",
      ],
      status: "Completed",
      client: "Coastal Developments",
    },
    {
      id: 3,
      title: "Thika Highway Bridge",
      category: "Infrastructure",
      location: "Thika, Kiambu",
      completionDate: "September 2022",
      duration: "15 months",
      description:
        "200-meter reinforced concrete bridge construction improving regional connectivity and traffic flow.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      features: [
        "200m span length",
        "4-lane capacity",
        "Pedestrian walkways",
        "LED lighting",
        "Seismic resistant design",
      ],
      status: "Completed",
      client: "Kenya National Highways Authority",
    },
    {
      id: 4,
      title: "Karen Luxury Villas",
      category: "Residential",
      location: "Karen, Nairobi",
      completionDate: "In Progress",
      duration: "20 months",
      description:
        "Exclusive gated community featuring 25 luxury villas with premium finishes and smart home technology.",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      features: [
        "25 luxury villas",
        "Gated community",
        "Smart home tech",
        "Private gardens",
        "Club house",
      ],
      status: "In Progress",
      client: "Karen Estates Development",
    },
    {
      id: 5,
      title: "CBD Office Tower",
      category: "Commercial",
      location: "Central Business District, Nairobi",
      completionDate: "June 2024",
      duration: "30 months",
      description:
        "20-story Grade A office tower with modern amenities and sustainable building features.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      features: [
        "20 floors",
        "Grade A office space",
        "Green building certified",
        "Sky lobby",
        "High-speed elevators",
      ],
      status: "In Progress",
      client: "Metropolitan Properties",
    },
    {
      id: 6,
      title: "Kisumu Water Treatment Plant",
      category: "Infrastructure",
      location: "Kisumu County",
      completionDate: "March 2023",
      duration: "18 months",
      description:
        "Modern water treatment facility serving 200,000 residents with advanced purification technology.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      features: [
        "200,000 people capacity",
        "Advanced filtration",
        "24/7 monitoring",
        "Eco-friendly design",
        "Backup systems",
      ],
      status: "Completed",
      client: "Kisumu Water & Sewerage Company",
    },
    {
      id: 7,
      title: "Historic Bank Renovation",
      category: "Renovation",
      location: "Mombasa Old Town",
      completionDate: "August 2023",
      duration: "12 months",
      description:
        "Careful restoration of a colonial-era building maintaining historical integrity while adding modern functionality.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
      features: [
        "Historical preservation",
        "Modern HVAC systems",
        "Restored facades",
        "Accessibility upgrades",
        "Heritage compliance",
      ],
      status: "Completed",
      client: "Heritage Bank of Kenya",
    },
    {
      id: 8,
      title: "Nakuru Industrial Park",
      category: "Commercial",
      location: "Nakuru County",
      completionDate: "February 2024",
      duration: "22 months",
      description:
        "Large-scale industrial development featuring warehouses, manufacturing facilities, and office spaces.",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      features: [
        "50,000 sqm warehouse space",
        "Manufacturing facilities",
        "Office complexes",
        "Rail connectivity",
        "Power infrastructure",
      ],
      status: "Completed",
      client: "Nakuru Industrial Development Corporation",
    },
    {
      id: 9,
      title: "Eldoret Bypass Road",
      category: "Infrastructure",
      location: "Eldoret, Uasin Gishu",
      completionDate: "In Progress",
      duration: "36 months",
      description:
        "15km dual carriageway bypass road improving traffic flow and regional connectivity.",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      features: [
        "15km dual carriageway",
        "4 interchanges",
        "Street lighting",
        "Drainage systems",
        "Environmental compliance",
      ],
      status: "In Progress",
      client: "Kenya Rural Roads Authority",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "₦15B+", label: "Project Value" },
    { number: "5", label: "Counties Served" },
    { number: "100%", label: "On-Time Delivery" },
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
              Our Project Portfolio
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8">
              Showcasing our finest construction achievements across Kenya -
              from residential complexes to major infrastructure projects
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

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="flex items-center mb-4 md:mb-0">
              <Filter className="h-5 w-5 text-construction-orange mr-2" />
              <span className="text-construction-brown font-medium">
                Filter Projects:
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {filterCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeFilter === category
                      ? "bg-construction-orange text-white"
                      : "bg-gray-100 text-construction-brown hover:bg-construction-orange/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="bg-construction-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-construction-brown mb-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{project.location}</span>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>
                      {project.completionDate} • {project.duration}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-construction-brown text-sm mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-xs text-muted-foreground"
                        >
                          <CheckCircle className="h-3 w-3 text-construction-orange mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-xs text-construction-orange">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Client:</span>{" "}
                        {project.client}
                      </div>
                      <button className="text-construction-orange hover:text-construction-orange-dark transition-colors p-1">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">
                No projects found for the selected category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Process Section */}
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
              Why Our Projects Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach ensures every project meets the highest
              standards of quality, safety, and client satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Skilled professionals with years of experience in their respective fields",
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description:
                  "Rigorous quality control at every stage of construction",
              },
              {
                icon: Calendar,
                title: "Timely Delivery",
                description:
                  "Proven track record of completing projects on or ahead of schedule",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="bg-construction-orange/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-construction-orange" />
                </div>
                <h3 className="text-xl font-semibold text-construction-brown mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
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
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join our growing list of satisfied clients. Let us bring your
              construction vision to life with the same excellence shown in our
              portfolio.
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
                to="/services"
                className="border-2 border-white hover:bg-white hover:text-construction-orange text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
