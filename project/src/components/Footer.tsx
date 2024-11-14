import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-800/50 border-t border-gray-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">About</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Passionate about creating elegant solutions to complex problems. Every line of code is an opportunity to make something better.
            </p>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Connect</h3>
            <div className="space-y-2">
              <a
                href="https://github.com/AM1897"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/aram-mohammed-51a5a821a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:Aram10.1897@gmail.com"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Legal</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>© {currentYear} Aram Mohammed</p>
              <p>All rights reserved.</p>
              <p className="flex items-center gap-1">
                Built with <Heart className="w-4 h-4 text-red-500" /> in Gothenburg
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-slate-700 text-center text-gray-500 dark:text-gray-400 text-sm">
          This portfolio website and all its content is protected by copyright. Designed and developed by Aram Mohammed.
        </div>
      </div>
    </footer>
  );
};

export default Footer;