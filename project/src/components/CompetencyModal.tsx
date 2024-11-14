import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';

interface Course {
  name: string;
  description: string;
  technologies: string[];
}

interface CompetencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  education: {
    title: string;
    courses: Course[];
  };
}

const CompetencyModal: React.FC<CompetencyModalProps> = ({ isOpen, onClose, education }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  if (!isOpen) return null;

  const competencyCategories = {
    'Java Developer Integration': [
      {
        title: 'Core Development',
        courses: ['Object-Oriented Programming', 'Quality Assurance']
      },
      {
        title: 'Advanced Development',
        courses: ['Design and Architecture', 'System Integration']
      },
      {
        title: 'Professional Skills',
        courses: ['Consultancy and Communication']
      },
      {
        title: 'Web & Cloud',
        courses: ['APIs and Web Services', 'Cloud Integration']
      },
      {
        title: 'Project Implementation',
        courses: ['Final Project']
      }
    ],
    'Full Stack Developer': [
      {
        title: 'Frontend Development',
        courses: ['Web Development 1', 'Web Development 2', 'Interface Design']
      },
      {
        title: 'Backend Development',
        courses: ['Programming 1', 'Web Server Programming 1', 'Data Storage']
      },
      {
        title: 'Project & Specialization',
        courses: ['Digital Creation 1', 'Full Stack Project/Technical Specialization']
      }
    ]
  };

  const courses = {
    // Java Developer Integration courses
    'Object-Oriented Programming': {
      description: 'During this course, I built up my understanding of object-oriented programming with Java, striving to write code that was not only correct but also clear and functional. I learned to navigate the Java library with precision and design applications that support a strong object-oriented architecture. I delved into core programming concepts such as data types, variables, operations, expressions, control structures, and iterations.',
      technologies: [
        { name: 'IntelliJ IDEA', description: 'For efficient code development and troubleshooting' },
        { name: 'Git', description: 'Version control to effectively manage code changes and project versions' },
        { name: 'JUnit', description: 'For applying test-driven development (TDD) and creating comprehensive unit tests' },
        { name: 'Java Collections Framework', description: 'To implement advanced data structures and algorithms' },
        { name: 'Java Swing/AWT', description: 'For designing and implementing user interfaces' }
      ]
    },
    'Quality Assurance': {
      description: 'In this course, I focused on test-driven development (TDD) and quality assurance within Java programming. I improved my ability to construct robust algorithms, tested and debugged code efficiently, and applied agile development methods like SCRUM in my software projects.',
      technologies: [
        { name: 'JUnit5', description: 'For developing comprehensive test cases and improving code quality' },
        { name: 'Mockito/EasyMock', description: 'To create mock objects for testing Java components' },
        { name: 'SonarQube', description: 'For code quality analysis and identifying code smells' },
        { name: 'Jenkins', description: 'For continuous integration and delivery with automated builds and tests' },
        { name: 'Jira', description: 'For project tracking and collaboration' }
      ]
    },
    'Design and Architecture': {
      description: 'Throughout the course, I explored advanced design patterns and architectural principles in Java programming. I learned how to create scalable and maintainable systems, integrate databases efficiently, and implement robust APIs. This knowledge has been fundamental to my ability to construct well-structured and long-term viable software solutions.',
      technologies: [
        { name: 'UML Tools', description: 'For modeling program design and architecture' },
        { name: 'MySQL and MongoDB', description: 'For design and interaction with relational databases and document databases' },
        { name: 'Spring Framework', description: 'To create consistent and secure applications' },
        { name: 'Design Pattern Libraries', description: 'Such as Apache Commons to implement best practices' }
      ]
    },
    'System Integration': {
      description: 'In this course, I delved into the theory and practice behind creating integration solutions in complex IT landscapes. I focused on understanding and applying various integration patterns and platforms to effectively connect disparate systems and applications.',
      technologies: [
        { name: 'Apache Camel', description: 'For building powerful integration flows' },
        { name: 'Web Protocols', description: 'Such as REST and SOAP for system integration' },
        { name: 'XML/JSON', description: 'For messaging formats and transformations' },
        { name: 'Kafka', description: 'For message queuing and real-time data flows' },
        { name: 'Integration Patterns', description: 'To manage data flows between systems' },
        { name: 'Java Integration', description: 'Such as JMS for message-based communication' },
        { name: 'Security Tools', description: 'Such as OAuth to ensure authentication and authorization' }
      ]
    },
    'Consultancy and Communication': {
      description: 'During this course, I developed key soft skills that are crucial for success in IT consultancy. I focused on improving my ability to communicate effectively, understanding group dynamics, and self-leadership. These competencies have not only enriched my professional life but also enhanced my ability to collaborate and lead projects within the IT industry.',
      technologies: [
        { name: 'LinkedIn', description: 'For professional networking and job searching' },
        { name: 'Presentation Tools', description: 'To effectively convey ideas and concepts' },
        { name: 'Feedback Tools', description: 'For giving and receiving constructive criticism in group settings' }
      ]
    },
    'APIs and Web Services': {
      description: 'In this course, I focused on creating, publishing, and maintaining RESTful web services and APIs using Java. I learned the importance of ensuring the integrity and security of applications, with a special emphasis on authentication and authorization.',
      technologies: [
        { name: 'Spring Boot', description: 'To quickly develop and deploy RESTful services' },
        { name: 'OAuth2 and JWT', description: 'To implement modern security protocols' },
        { name: 'Swagger/OpenAPI', description: 'To document and specify APIs' },
        { name: 'Postman/Insomnia', description: 'To test API calls and manage various endpoints' }
      ]
    },
    'Cloud Integration': {
      description: 'In this course, I concentrated on using cloud services to develop integration solutions. I explored various cloud platforms, data storage options, and DevOps tools, which provided me with the knowledge to automate and optimize software delivery processes.',
      technologies: [
        { name: 'AWS', description: 'To understand and use leading cloud services' },
        { name: 'Docker/Kubernetes', description: 'For containerization and orchestration of applications' },
        { name: 'CI/CD Pipelines', description: 'Use of Jenkins, Github CI, or other tools to automate builds and deployment' },
        { name: 'CloudFormation', description: 'To script and manage infrastructure as code' }
      ]
    },
    'Final Project': {
      description: 'Comprehensive project implementing CI/CD pipeline using GitLab, Jenkins, and Docker. The project focused on automating testing processes to enhance efficiency and quality in software development.',
      technologies: [
        { name: 'GitLab', description: 'Central repository for code version control' },
        { name: 'Jenkins', description: 'Automated code reviewer, ensuring no errors before updates are approved' },
        { name: 'Docker', description: 'Creates isolated environments for parallel testing without interference' },
        { name: 'CI/CD Tools', description: 'For automated build, test, and deployment processes' }
      ]
    },
    // Full Stack Developer courses
    'Web Development 1': {
      description: 'This course covered the fundamentals of web development, focusing on creating static web pages using HTML, CSS, JavaScript, and jQuery. Techniques for version control with Git and repository management with GitHub were also discussed. The course included practical exercises and projects that enhanced understanding of web design and development.',
      technologies: [
        { name: 'Visual Studio Code', description: 'For code development' },
        { name: 'Git', description: 'For version control' },
        { name: 'GitHub', description: 'For code storage' },
        { name: 'JavaScript and jQuery', description: 'For interactive features' },
        { name: 'Live-server', description: 'For local page testing' }
      ]
    },
    'Digital Creation 1': {
      description: 'Skills in digital creation using a variety of digital tools and platforms.',
      technologies: [
        { name: 'Digital Platforms', description: 'Collaborated on digital platforms' },
        { name: 'Content Creation Tools', description: 'Used tools to create and distribute digital content' }
      ]
    },
    'Web Development 2': {
      description: 'Advanced web development with a focus on contemporary frameworks and libraries.',
      technologies: [
        { name: 'React.js', description: 'Used React.js to build component-based user interfaces' },
        { name: 'REST APIs', description: 'Integrated applications with REST APIs using Axios' }
      ]
    },
    'Data Storage': {
      description: 'An exploration of data storage solutions, focusing on relational databases with SQL, NoSQL databases for unstructured data, and the implementation of data models in web applications.',
      technologies: [
        { name: 'SQL', description: 'For structured data storage and retrieval' },
        { name: 'MongoDB', description: 'NoSQL database for unstructured data handling' },
        { name: 'Database Integration', description: 'Integration of database technologies into web applications' }
      ]
    },
    'Programming 1': {
      description: 'Introduction to programming with JavaScript, covering basic concepts and syntax.',
      technologies: [
        { name: 'JavaScript', description: 'Wrote and tested JavaScript code across various web browser environments' },
        { name: 'Development Tools', description: 'Utilized tools for code debugging and performance testing' }
      ]
    },
    'Interface Design': {
      description: 'Advanced UI development using React and modern frontend technologies. Implemented complex user interfaces with a focus on performance and accessibility.',
      technologies: [
        { name: 'React', description: 'For building dynamic user interfaces' },
        { name: 'TypeScript', description: 'For type-safe component development' },
        { name: 'CSS-in-JS', description: 'For component-scoped styling' },
        { name: 'Accessibility Tools', description: 'For ensuring web accessibility standards' }
      ]
    },
    'Web Server Programming 1': {
      description: 'Server-side development focusing on Node.js and database integration. Built scalable backend services and RESTful APIs.',
      technologies: [
        { name: 'Node.js', description: 'Server-side JavaScript runtime' },
        { name: 'Express.js', description: 'Web application framework' },
        { name: 'MongoDB', description: 'NoSQL database integration' },
        { name: 'MySQL', description: 'Relational database management' }
      ]
    },
    'Full Stack Project/Technical Specialization': {
      description: 'Capstone project implementing a full-stack application using the MERN stack. Applied agile methodologies and DevOps practices.',
      technologies: [
        { name: 'MERN Stack', description: 'Full-stack JavaScript development' },
        { name: 'Docker', description: 'For containerization and deployment' },
        { name: 'Jira', description: 'For project management and tracking' },
        { name: 'Scrum', description: 'Agile development methodology' }
      ]
    }
  };

  const handleCourseClick = (courseName: string) => {
    const course = courses[courseName as keyof typeof courses];
    if (course) {
      setSelectedCourse({
        name: courseName,
        description: course.description,
        technologies: course.technologies.map(tech => `${tech.name}: ${tech.description}`)
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-xl border border-slate-700 w-full max-w-4xl max-h-[80vh] overflow-hidden shadow-xl">
        <div className="p-6 border-b border-slate-700 flex justify-between items-center sticky top-0 bg-slate-800 z-10">
          <h2 className="text-2xl font-bold text-blue-400">{education.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 h-[calc(80vh-80px)]">
          {/* Left side - Course categories */}
          <div className="border-r border-slate-700 overflow-y-auto p-6">
            <div className="space-y-8">
              {competencyCategories[education.title as keyof typeof competencyCategories]?.map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-gray-200 mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.courses.map((courseName, courseIndex) => (
                      <button
                        key={courseIndex}
                        onClick={() => handleCourseClick(courseName)}
                        className={`w-full text-left p-4 rounded-lg border transition-colors flex items-center justify-between ${
                          selectedCourse?.name === courseName
                            ? 'bg-blue-400/10 border-blue-400/50 text-blue-400'
                            : 'bg-slate-700/30 border-slate-600 hover:border-blue-400/50 text-gray-300'
                        }`}
                      >
                        <span>{courseName}</span>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Course details */}
          <div className="overflow-y-auto p-6">
            {selectedCourse ? (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-400">{selectedCourse.name}</h3>
                <div className="prose prose-invert">
                  <p className="text-gray-300">{selectedCourse.description}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-3">Technologies Used</h4>
                  <div className="space-y-2">
                    {selectedCourse.technologies.map((tech, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                        <span className="text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                <p>Select a course to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetencyModal;