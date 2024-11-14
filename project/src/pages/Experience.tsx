import React from 'react';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  
  const experiences = [
    {
      title: 'Java Systems Integration Expert',
      company: 'DSVE AB',
      location: 'Gothenburg',
      period: '2023/09 - Present',
      description: 'Working with system integration solutions and Java development.',
      responsibilities: [
        'Developing integration solutions using Java and related technologies',
        'Implementing and maintaining RESTful web services',
        'Collaborating with cross-functional teams on complex integration projects',
        'Ensuring code quality and best practices in development'
      ],
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'Apache Camel', 'Integration Patterns']
    },
    {
      title: 'Java Developer Integration (Internship, 14 weeks)',
      company: 'DSVE AB',
      location: 'Gothenburg',
      period: '2024/07/29 - 2024/11/01',
      description: 'This internship was completed as part of my education while I was employed at DSVE AB.',
      responsibilities: [
        'Developing and maintaining Java-based integration solutions',
        'Working with REST APIs and web services',
        'Participating in agile development processes',
        'Contributing to system architecture discussions'
      ],
      technologies: ['Java', 'Spring Framework', 'REST APIs', 'Integration Tools', 'Git']
    },
    {
      title: 'Java Developer Integration (Internship, 6 weeks)',
      company: 'DSVE AB',
      location: 'Gothenburg',
      period: '2024/05/20 - 2024/06/28',
      description: 'This shorter internship further developed my skills earlier in the year.',
      responsibilities: [
        'Learning and applying integration patterns',
        'Developing Java applications',
        'Working with REST services',
        'Participating in code reviews'
      ],
      technologies: ['Java', 'Integration Patterns', 'REST', 'Git', 'Maven']
    },
    {
      title: 'Full Stack Developer (Internship 8 weeks)',
      company: 'Vinnter AB',
      location: 'Gothenburg',
      period: '2022/08 - 2022/10',
      description: 'Internship focused on full-stack development using modern web technologies.',
      responsibilities: [
        'Developing frontend components using React',
        'Building backend services with Node.js',
        'Working with databases and API integration',
        'Participating in agile development processes'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs']
    },
    {
      title: 'Soccer Coach',
      company: 'Ögryte IS',
      location: 'Gothenburg',
      period: 'August 2015 - February 2018',
      description: 'Youth soccer coach focusing on player development and team management.',
      responsibilities: [
        'Planning and conducting training sessions',
        'Managing youth teams during matches',
        'Developing training programs',
        'Communicating with parents and club officials'
      ],
      technologies: ['Leadership', 'Team Management', 'Communication', 'Planning']
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 flex items-center gap-3 text-gray-900 dark:text-white">
        <Briefcase className="text-blue-600 dark:text-blue-400" />
        {t('experience.title')}
      </h1>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800/50 p-8 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-400/50 transition-colors shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{exp.title}</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">{exp.company} • {exp.location}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{exp.period}</p>
              </div>
            </div>

            <p className="mt-4 text-gray-700 dark:text-gray-300">{exp.description}</p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-300">{t('experience.responsibilities')}</h3>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2" />
                    <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-300">{t('experience.technologies')}</h3>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;