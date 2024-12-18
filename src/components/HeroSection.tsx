
const HeroSection = () => {
  return (
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <div className="animate-fade-in">
            <img
                src="/src/pic/logo for website.png"
                alt="MindMend Logo"
                className="h-20 w-20 mx-auto mb-15"
            />
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">MindMend</span>
              <span className="block text-blue-600 mt-2">A New Era in Autism Care</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
              Bridging gaps with AI-powered therapy, interactive learning, and secure blockchain technology
              to transform autism care for families worldwide.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="mt-20 relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeroSection;
