import React from 'react';
import { Code2 } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        "React", "TypeScript", "JavaScript", "HTML5/CSS3", "Redux",
        "Tailwind CSS", "UX/UI", "HTML", "CSS"
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "Java", "Spring Boot", "Node.js", "Express.js", "RESTful APIs",
        "GraphQL", "OAuth2", "JWT"
      ]
    },
    {
      title: "Databases",
      skills: [
        "PostgreSQL", "MongoDB", "MySQL", "Mongoose"
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Git", "GitHub", "GitHub Actions", "Docker", "AWS",
        "CI/CD Pipelines", "GitLab", "Jenkins"
      ]
    },
    {
      title: "Testing & Integration",
      skills: [
        "JUnit", "Mockito", "EasyMock", "REST", "SOAP",
        "Apache", "Kafka", "Insomnia", "Postman"
      ]
    },
    {
      title: "Additional Skills",
      skills: [
        "UML-verktyg", "XML/JSON", "Swagger/OpenAPI",
        "Scrum", "Agile Methods", "Jira"
      ]
    }
  ];

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Code2 className="text-blue-600 dark:text-blue-400" />
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.title} 
              className="bg-white dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm hover:border-blue-400/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-400/10 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;