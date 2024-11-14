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
      description: 'Under denna kurs byggde jag upp min förståelse för objektorienterad programmering med Java, strävade efter att skriva kod som inte bara var korrekt utan också tydlig och funktionell. Jag lärde mig att navigera i Java-biblioteket med precision och designa applikationer som stödjer en stark objektorienterad arkitektur. Jag fördjupade mig i grundläggande programmeringskoncept som datatyper, variabler, operationer, uttryck, kontrollstrukturer och iterationer.',
      technologies: [
        { name: 'IntelliJ IDEA', description: 'För effektiv kodutveckling och felsökning' },
        { name: 'Git', description: 'Versionshantering för att effektivt hantera kodändringar och projektversioner' },
        { name: 'JUnit', description: 'För att tillämpa testdriven utveckling (TDD) och skapa omfattande enhetstester' },
        { name: 'Java Collections Framework', description: 'För att implementera avancerade datastrukturer och algoritmer' },
        { name: 'Java Swing/AWT', description: 'För att designa och implementera användargränssnitt' }
      ]
    },
    'Quality Assurance': {
      description: 'I denna kurs fokuserade jag på testdriven utveckling (TDD) och kvalitetssäkring inom Java-programmering. Jag förbättrade min förmåga att konstruera robusta algoritmer, testade och felsökte kod effektivt, och tillämpade agila utvecklingsmetoder som SCRUM i mina mjukvaruprojekt.',
      technologies: [
        { name: 'JUnit5', description: 'För att utveckla omfattande testfall och förbättra kodkvaliteten' },
        { name: 'Mockito/EasyMock', description: 'För att skapa mockobjekt för testning av Java-komponenter' },
        { name: 'SonarQube', description: 'För kodkvalitetsanalys och identifiering av kodlukt' },
        { name: 'Jenkins', description: 'För kontinuerlig integration och leverans med automatiserade byggen och tester' },
        { name: 'Jira', description: 'För projektspårning och samarbete' }
      ]
    },
    'Design and Architecture': {
      description: 'Under kursens gång utforskade jag avancerade designmönster och arkitekturprinciper inom Java-programmering. Jag lärde mig hur man skapar skalbara och underhållbara system, integrerar databaser effektivt och implementerar robusta API:er. Denna kunskap har varit grundläggande för min förmåga att konstruera välstrukturerade och långsiktigt hållbara mjukvarulösningar.',
      technologies: [
        { name: 'UML-verktyg', description: 'För modellering av programdesign och arkitektur' },
        { name: 'MySQL och MongoDB', description: 'För design och interaktion med relationsdatabaser och dokumentdatabaser' },
        { name: 'Spring Framework', description: 'För att skapa konsekventa och säkra applikationer' },
        { name: 'Design Pattern Libraries', description: 'Som Apache Commons för att implementera best practices' }
      ]
    },
    'System Integration': {
      description: 'I denna kurs fördjupade jag mig i teorin och praktiken bakom att skapa integrationslösningar i komplexa IT-landskap. Jag fokuserade på att förstå och tillämpa olika integrationsmönster och plattformar för att effektivt koppla samman olika system och applikationer.',
      technologies: [
        { name: 'Apache Camel', description: 'För att bygga kraftfulla integrationsflöden' },
        { name: 'Webbprotokoll', description: 'Som REST och SOAP för systemintegration' },
        { name: 'XML/JSON', description: 'För meddelandeformat och transformationer' },
        { name: 'Kafka', description: 'För meddelandeköer och realtidsdataflöden' },
        { name: 'Integrationsmönster', description: 'För att hantera dataflöden mellan system' },
        { name: 'Java Integration', description: 'Som JMS för meddelandebaserad kommunikation' },
        { name: 'Säkerhetsverktyg', description: 'Som OAuth för att säkerställa autentisering och auktorisering' }
      ]
    },
    'Consultancy and Communication': {
      description: 'Under denna kurs utvecklade jag viktiga mjuka färdigheter som är avgörande för framgång inom IT-konsultation. Jag fokuserade på att förbättra min förmåga att kommunicera effektivt, förstå gruppdynamik och självledarskap. Dessa kompetenser har inte bara berikat mitt professionella liv utan också förbättrat min förmåga att samarbeta och leda projekt inom IT-branschen.',
      technologies: [
        { name: 'LinkedIn', description: 'För professionellt nätverkande och jobbsökning' },
        { name: 'Presentationsverktyg', description: 'För att effektivt förmedla idéer och koncept' },
        { name: 'Feedbackverktyg', description: 'För att ge och ta emot konstruktiv kritik i gruppsammanhang' }
      ]
    },
    'APIs and Web Services': {
      description: 'I denna kurs fokuserade jag på att skapa, publicera och underhålla RESTful webbtjänster och API:er med Java. Jag lärde mig vikten av att säkerställa applikationers integritet och säkerhet, med särskilt fokus på autentisering och auktorisering.',
      technologies: [
        { name: 'Spring Boot', description: 'För att snabbt utveckla och driftsätta RESTful-tjänster' },
        { name: 'OAuth2 och JWT', description: 'För att implementera moderna säkerhetsprotokoll' },
        { name: 'Swagger/OpenAPI', description: 'För att dokumentera och specificera API:er' },
        { name: 'Postman/Insomnia', description: 'För att testa API-anrop och hantera olika endpoints' }
      ]
    },
    'Cloud Integration': {
      description: 'I denna kurs koncentrerade jag mig på att använda molntjänster för att utveckla integrationslösningar. Jag utforskade olika molnplattformar, datalagringslösningar och DevOps-verktyg, vilket gav mig kunskapen att automatisera och optimera mjukvaruleveransprocesser.',
      technologies: [
        { name: 'AWS', description: 'För att förstå och använda ledande molntjänster' },
        { name: 'Docker/Kubernetes', description: 'För containerisering och orkestrering av applikationer' },
        { name: 'CI/CD Pipelines', description: 'Användning av Jenkins, Github CI eller andra verktyg för att automatisera byggen och driftsättning' },
        { name: 'CloudFormation', description: 'För att skriva och hantera infrastruktur som kod' }
      ]
    },
    'Final Project': {
      description: 'Omfattande projekt som implementerar CI/CD-pipeline med GitLab, Jenkins och Docker. Projektet fokuserade på att automatisera testprocesser för att öka effektivitet och kvalitet i mjukvaruutveckling.',
      technologies: [
        { name: 'GitLab', description: 'Central repository för kodversionshantering' },
        { name: 'Jenkins', description: 'Automatiserad kodgranskare som säkerställer att inga fel finns innan uppdateringar godkänns' },
        { name: 'Docker', description: 'Skapar isolerade miljöer för parallell testning utan störningar' },
        { name: 'CI/CD-verktyg', description: 'För automatiserade bygg-, test- och driftsättningsprocesser' }
      ]
    },
    // Full Stack Developer courses
    'Web Development 1': {
      description: 'Kursen omfattade grunderna i webbutveckling med fokus på att skapa statiska webbsidor med HTML, CSS, JavaScript och jQuery. Tekniker för versionshantering med Git och repository-hantering med GitHub diskuterades också. Kursen innehöll praktiska övningar och projekt som förbättrade förståelsen för webbdesign och utveckling.',
      technologies: [
        { name: 'Visual Studio Code', description: 'För kodutveckling' },
        { name: 'Git', description: 'För versionshantering' },
        { name: 'GitHub', description: 'För kodlagring' },
        { name: 'JavaScript och jQuery', description: 'För interaktiva funktioner' },
        { name: 'Live-server', description: 'För lokal sidtestning' }
      ]
    },
    'Digital Creation 1': {
      description: 'Färdigheter inom digital skapande med hjälp av olika digitala verktyg och plattformar.',
      technologies: [
        { name: 'Digitala plattformar', description: 'Samarbetade på digitala plattformar' },
        { name: 'Innehållsskapande verktyg', description: 'Använde verktyg för att skapa och distribuera digitalt innehåll' }
      ]
    },
    'Web Development 2': {
      description: 'Avancerad webbutveckling med fokus på moderna ramverk och bibliotek.',
      technologies: [
        { name: 'React.js', description: 'Använde React.js för att bygga komponentbaserade användargränssnitt' },
        { name: 'REST APIs', description: 'Integrerade applikationer med REST APIs med hjälp av Axios' }
      ]
    },
    'Data Storage': {
      description: 'En utforskning av datalagringslösningar, med fokus på relationsdatabaser med SQL, NoSQL-databaser för ostrukturerad data och implementering av datamodeller i webbapplikationer.',
      technologies: [
        { name: 'SQL', description: 'För strukturerad datalagring och hämtning' },
        { name: 'MongoDB', description: 'NoSQL-databas för hantering av ostrukturerad data' },
        { name: 'Databasintegration', description: 'Integration av databasteknologier i webbapplikationer' }
      ]
    },
    'Programming 1': {
      description: 'Introduktion till programmering med JavaScript, omfattande grundläggande koncept och syntax.',
      technologies: [
        { name: 'JavaScript', description: 'Skrev och testade JavaScript-kod i olika webbläsarmiljöer' },
        { name: 'Utvecklingsverktyg', description: 'Använde verktyg för kodfelsökning och prestandatestning' }
      ]
    },
    'Interface Design': {
      description: 'Avancerad UI-utveckling med React och moderna frontend-teknologier. Implementerade komplexa användargränssnitt med fokus på prestanda och tillgänglighet.',
      technologies: [
        { name: 'React', description: 'För att bygga dynamiska användargränssnitt' },
        { name: 'TypeScript', description: 'För typsäker komponentutveckling' },
        { name: 'CSS-in-JS', description: 'För komponentspecifik styling' },
        { name: 'Tillgänglighetsverktyg', description: 'För att säkerställa webbstandarder för tillgänglighet' }
      ]
    },
    'Web Server Programming 1': {
      description: 'Serversidig utveckling med fokus på Node.js och databasintegration. Byggde skalbara backend-tjänster och RESTful APIs.',
      technologies: [
        { name: 'Node.js', description: 'Serversidig JavaScript-runtime' },
        { name: 'Express.js', description: 'Webbapplikationsramverk' },
        { name: 'MongoDB', description: 'NoSQL-databasintegration' },
        { name: 'MySQL', description: 'Hantering av relationsdatabaser' }
      ]
    },
    'Full Stack Project/Technical Specialization': {
      description: 'Avslutande projekt som implementerar en fullstack-applikation med MERN-stacken. Tillämpade agila metoder och DevOps-praxis.',
      technologies: [
        { name: 'MERN Stack', description: 'Fullstack JavaScript-utveckling' },
        { name: 'Docker', description: 'För containerisering och driftsättning' },
        { name: 'Jira', description: 'För projekthantering och spårning' },
        { name: 'Scrum', description: 'Agil utvecklingsmetodik' }
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