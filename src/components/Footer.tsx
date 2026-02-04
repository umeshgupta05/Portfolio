import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Umesh Gupta
            </h3>
            <p className="text-gray-600">
              Full Stack Developer & AI Enthusiast
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Experience", "Projects", "Skills", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-600 hover:text-gray-900 transition"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/umeshgupta05"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-lg hover:from-gray-800 hover:to-black transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/umesh-gupta-pedamallu-9504b825a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:saiumeshgupta@gmail.com"
                className="p-2 bg-gradient-to-br from-red-500 to-pink-600 text-white rounded-lg hover:from-red-600 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://leetcode.com/SaiUmeshGupta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center text-gray-600">
          <p>© 2026 Umesh Gupta Pedamallu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
