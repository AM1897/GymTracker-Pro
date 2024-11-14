import React from 'react';

const Hero = () => {
  return (
    <header className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-12">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 dark:opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80')"
        }}
      />
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/3">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4E03AQGofL9KSt0JQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1665403658923?e=1736985600&v=beta&t=dsiivQ6gG0f4zIyghIN22C5exfTgRmzkAAwZWT_r3Z8"
              alt="Aram Mohammed" 
              className="w-64 h-64 object-cover rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80';
              }}
            />
          </div>
          <div className="lg:w-2/3 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-teal-600 dark:from-blue-400 dark:to-teal-400 text-transparent bg-clip-text">
                Aram Mohammed
              </h1>
              <div className="space-y-2">
                <p className="text-2xl text-gray-800 dark:text-gray-300">Java Developer Integration</p>
                <p className="text-2xl text-gray-800 dark:text-gray-300">Full Stack Developer</p>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                There is nothing more rewarding than finding ways to overcome a challenge. This is what I know I can contribute with. A person that does not shy away from difficulty and does so with a smile on my face. I am an analytical and logical thinker which is how I approach my profession. A willingness to learn, as well as share what I know are corner stones In the way I lead myself professionally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;