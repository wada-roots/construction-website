import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-construction-brown text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+254 700 123 456</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@dmsconstruction.co.ke</span>
            </div>
          </div>
          <div className="text-sm">
            Mon - Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-construction-orange to-construction-orange-dark p-2 rounded-lg">
                <div className="w-8 h-8 bg-white rounded text-construction-orange flex items-center justify-center font-bold text-lg">
                  DMS
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-construction-brown">
                  DMS CONSTRUCTION
                </h1>
                <p className="text-xs text-muted-foreground -mt-1">
                  Building Excellence Together
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 relative ${
                    isActive(item.href)
                      ? "text-construction-orange"
                      : "text-construction-brown hover:text-construction-orange"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-construction-orange"
                      layoutId="activeTab"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-construction-orange hover:bg-construction-orange-dark text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-construction-brown hover:text-construction-orange transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block font-medium py-2 transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-construction-orange"
                        : "text-construction-brown hover:text-construction-orange"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 mb-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>+254 700 123 456</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>info@dmsconstruction.co.ke</span>
                  </div>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block bg-construction-orange hover:bg-construction-orange-dark text-white px-6 py-3 rounded-lg font-medium text-center transition-colors duration-200"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navigation;
