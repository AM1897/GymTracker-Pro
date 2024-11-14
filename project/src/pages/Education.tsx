import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import CompetencyModal from '../components/CompetencyModal';

const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState<any>(null);

  const educations = [
    {
      title: 'Java Developer Integration',
      school: 'Vocational University Campus Mölndal, Gothenburg',
      period: '2023/01 - 2024/11',
      degree: {
        title: 'Higher Vocational Education Diploma in Java Development - Integration',
        points: '400 HVE credits',
        completionDate: '2024-10-31',
        certificateImage: 'https://media.licdn.com/dms/image/v2/D4D22AQEGxnzCnE6fdw/feedshare-shrink_1280/feedshare-shrink_1280/0/1730730008251?e=1734566400&v=beta&t=Y2ch_pl9w2Tj5ySFm5GbYRTuBdq7-DkcBF2QffPBOv0'
      },
      courses: []
    },
    {
      title: 'Full Stack Developer',
      school: 'Campus Mölndal, Gothenburg',
      period: '2021/08 - 2022/10',
      degree: {
        title: 'Higher Vocational Education Diploma in Full Stack Development',
        points: '400 HVE credits',
        completionDate: '2022-10-31'
      },
      courses: []
    },
    {
      title: 'Business Economics',
      school: 'Ale Gymnasium, Nödinge',
      period: '2006 - 2009',
      degree: {
        title: 'Upper Secondary School Diploma in Business Economics',
        completionDate: '2009-06-15'
      }
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 flex items-center gap-3 text-gray-900 dark:text-white">
        <GraduationCap className="text-blue-600 dark:text-blue-400" />
        Education
      </h1>

      {/* Latest Degree Certificate Section */}
      <div className="mb-12 bg-white dark:bg-slate-800/50 p-8 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Degree Certificate</h2>
            <div className="space-y-4">
              <p className="text-xl text-gray-800 dark:text-gray-200">
                {educations[0].degree.title}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Comprising {educations[0].degree.points}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Completed with passing grades on {educations[0].degree.completionDate}
              </p>
            </div>
          </div>
          {educations[0].degree.certificateImage && (
            <div className="md:w-1/3">
              <img
                src={educations[0].degree.certificateImage}
                alt="Degree Certificate"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* Education Timeline */}
      <div className="space-y-8">
        {educations.map((edu, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800/50 p-8 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm hover:border-blue-400/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{edu.title}</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">{edu.school}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{edu.period}</p>
                {edu.degree && (
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                    {edu.degree.title}
                  </p>
                )}
              </div>
              {edu.courses && edu.courses.length > 0 && (
                <button
                  onClick={() => setSelectedEducation(edu)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors whitespace-nowrap"
                >
                  View Competencies
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedEducation && (
        <CompetencyModal
          isOpen={!!selectedEducation}
          onClose={() => setSelectedEducation(null)}
          education={selectedEducation}
        />
      )}
    </div>
  );
};

export default Education;