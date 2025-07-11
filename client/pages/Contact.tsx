import Navigation from "../components/Navigation";

export default function Contact() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-construction-brown mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch for your construction needs
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-construction-brown">
                Contact form and details coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
