'use client';

import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';
import { useParams, useRouter } from 'next/navigation';
import { useRef } from 'react';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

export default function MyCVPage() {
  const cvRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const params = useParams();
  const locale = params?.locale || 'en';
  const handleChangeLocale = (locale: string) => {
    router.push(`/${locale}/my-cv`);
  };

  const handleExportPDF = async () => {
    if (!cvRef.current) return;

    try {
      const canvas = await html2canvas(cvRef.current, { scale: 2 });
      const imgData = canvas.toDataURL('image/jpeg', 1.0);

      const pdfWidth = 210; // A4 width in mm
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      const pdf = new jsPDF({
        unit: 'mm',
        format: [pdfWidth, pdfHeight], // custom size [width, height]
        orientation: 'portrait'
      });

      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('LamQuangVinh_BackEnd_Developer.pdf');

      console.log('PDF exported successfully');
    } catch (error) {
      console.error('Error exporting PDF:', error);
    }
  };

  return (
    <div className="relative">
      {/* Sticky Buttons */}
      <div className="fixed top-4 right-4 flex flex-col gap-2">
        <button
          onClick={() => handleChangeLocale('en')}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 hover:cursor-pointer"
          title="Change language to English"
        >
          English
        </button>
        <button
          onClick={() => handleChangeLocale('vn')}
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 hover:cursor-pointer"
          title="Đổi ngôn ngữ sang Tiếng Việt"
        >
          Tiếng Việt
        </button>
        <button
          onClick={handleExportPDF}
          className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 hover:cursor-pointer"
          title={locale === 'en' ? 'Export CV to PDF' : 'Xuất CV ra PDF'}
        >
          {locale === 'en' ? 'Export to PDF' : 'Tải về PDF'}
        </button>
      </div>

      {/* CV Content */}
      <div
        ref={cvRef}
        className="flex flex-col lg:flex-row bg-gray-100 text-gray-800 min-h-screen container mx-auto"
      >
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
