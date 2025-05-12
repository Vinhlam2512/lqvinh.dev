'use client';

import MainContent from '@/app/my-cv/components/MainContent';
import Sidebar from '@/app/my-cv/components/Sidebar';
import { useRef } from 'react';

export default function MyCVPage() {
  const cvRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cvRef}
      className="flex flex-col lg:flex-row bg-gray-100 text-gray-800 min-h-screen"
    >
      <Sidebar />
      <MainContent />
    </div>
  );
}
