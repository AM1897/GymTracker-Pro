import React from 'react';
import { Code2, Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: 'GymTracker Pro',
      description: 'A comprehensive fitness tracking application for managing workouts, exercises, and progress.',
      image: 'https://camo.githubusercontent.com/f3f1472345a1ecbf47fbe9e889b49d0e3bfb187bb8f9d05bf9c57453d04a46aa/68747470733a2f2f696d616765732e756e73706c6173682e636f6d2f70686f746f2d313533343433383332373237362d3134653533303063336134383f6175746f3d666f726d6174266669743d63726f7026773d3132303026683d34303026713d3830',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Context API', 'Vite'],
      githubUrl: 'https://github.com/AM1897/GymTracker-Pro',
      featured: true,
      features: [
        'Weekly workout schedule management',
        'Exercise library with demonstrations',
        'Progress tracking and analytics',
        'Customizable workout plans',
        'Multi-language support'
      ]
    },
    {
      title: 'SmurfBooks - Social Media Platform',
      description: 'A modern social media platform where users can register, sign in, and share images with others. Built with a focus on responsive design and user experience.',
      image: 'https://raw.githubusercontent.com/AM1897/SmurfBooks-MediaHub/main/client/src/utils/image/Smurf%20Book.png',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/AM1897/SmurfBooks-MediaHub',
      readmeUrl: 'https://github.com/AM1897/SmurfBooks-MediaHub/blob/main/README.md',
      featured: true,
      features: [
        'User authentication and authorization',
        'Image sharing and management',
        'Responsive design for all devices',
        'Real-time updates',
        'Profile management'
      ]
    },
    {
      title: 'GitHub Portfolio',
      description: 'Check out my complete collection of projects and contributions on GitHub.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80',
      technologies: ['Java', 'React', 'Node.js', 'Spring Boot', 'MongoDB'],
      githubUrl: 'https://github.com/AM1897',
      featured: true
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 flex items-center gap-3 text-gray-900 dark:text-white">
        <Code2 className="text-blue-600 dark:text-blue-400" />
        {t('projects.title')}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-slate-700 overflow-hidden hover:border-blue-400/50 transition-colors shadow-sm ${
              project.featured ? 'md:col-span-2' : ''
            }`}
          >
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{project.title}</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>

              {project.features && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-2">{t('projects.features')}:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>{t('projects.viewCode')}</span>
                </a>
                {project.readmeUrl && (
                  <a
                    href={project.readmeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>{t('projects.viewDocs')}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;