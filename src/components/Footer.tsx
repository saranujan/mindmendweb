import {Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <img
                    src="/src/pic/final logoooo.png"
                    alt="MindMend Logo"
                    className="h-12 w-12 text-blue-400"
                />
                <span className="text-xl font-bold">MindMend</span>
              </div>
              <p className="mt-4 text-gray-400">
              Transforming autism care through innovation and compassion.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>contact@mindmend.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>+94 11 234 5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>Colombo, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="h-5 w-5 text-blue-400" />
                  <a
                      href="https://www.instagram.com/mindmend74?igsh=d2NzbmV0ZWQ3ams5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                  >
                    @mindmend
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest news and updates.</p>
              <div className="flex gap-2">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-lg bg-gray-800 text-white flex-grow"
                />
                <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} MindMend. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
