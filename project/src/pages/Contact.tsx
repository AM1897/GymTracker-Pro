import React from 'react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const contactLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aram-mohammed-51a5a821a/',
      username: 'Aram Mohammed'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:Aram10.1897@gmail.com',
      username: 'Aram10.1897@gmail.com'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 flex items-center gap-3 text-gray-900 dark:text-white">
        <Mail className="text-blue-600 dark:text-blue-400" />
        Contact
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {contactLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-400/50 transition-colors group shadow-sm"
            >
              <div className="flex items-center gap-4">
                <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {link.label}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    {link.username}
                    <ExternalLink className="w-4 h-4" />
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-16 bg-white dark:bg-slate-800/50 p-8 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Let's Collaborate</h2>
        <p className="text-gray-700 dark:text-gray-300">
          I'm always interested in exciting projects and new opportunities. 
          Don't hesitate to reach out if you want to discuss a project or just say hello!
        </p>
      </div>
    </div>
  );
};

export default Contact;