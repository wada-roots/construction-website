import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
              2008. DMS Construction - your trusted partner.
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
  );
};

export default Footer;
