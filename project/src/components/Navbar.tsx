import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, GraduationCap, Briefcase, Code2, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/education', icon: GraduationCap, label: 'Education' },
    { to: '/experience', icon: Briefcase, label: 'Experience' },
    { to: '/projects', icon: Code2, label: 'Projects' },
    { to: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className="bg-white dark:bg-slate-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50 transition-colors duration-200 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-slate-700/50 font-medium'
                      : 'text-gray-800 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700/30'
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{label}</span>
              </NavLink>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;