import Navigation from "../components/Navigation";

export default function Projects() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-construction-brown mb-4">
              Our Projects
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Showcasing our finest construction achievements
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-construction-brown">
                Projects portfolio coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
