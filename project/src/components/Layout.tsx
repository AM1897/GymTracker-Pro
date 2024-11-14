import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Container({ children }: LayoutProps) {
  return (
    <div className="container mx-auto px-4 py-4 sm:py-6 lg:py-8 max-w-7xl">
      {children}
    </div>
  );
}

export function Grid({ children }: LayoutProps) {
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}

export function Card({ children }: LayoutProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-full transition-all hover:shadow-lg">
      {children}
    </div>
  );
}

export function CardHeader({ children }: LayoutProps) {
  return (
    <div className="bg-indigo-600 dark:bg-indigo-700 px-6 py-4">
      {children}
    </div>
  );
}

export function CardBody({ children }: LayoutProps) {
  return (
    <div className="p-6">
      {children}
    </div>
  );
}

export function Section({ children }: LayoutProps) {
  return (
    <section className="mb-8">
      {children}
    </section>
  );
}

export function Flex({ children }: LayoutProps) {
  return (
    <div className="flex items-center justify-between">
      {children}
    </div>
  );
}