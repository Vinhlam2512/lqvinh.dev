'use client';

import Image from 'next/image';
import { useRef } from 'react';

// Dynamically import html2pdf.js with SSR disabled
// const html2pdf: any = dynamic(() => import('html2pdf.js'), { ssr: false });

export default function MyCVPage() {
  const cvRef = useRef<HTMLDivElement>(null);

  //   const handleDownloadPDF = async () => {
  //     if (cvRef.current) {
  //       const element = cvRef.current;
  //       const options = {
  //         margin: 0,
  //         filename: 'MyCV.pdf',
  //         image: { type: 'jpeg', quality: 0.98 },
  //         html2canvas: { scale: 2 },
  //         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  //       };

  //       // Use the imported html2pdf function directly
  //       const html2pdfInstance = await html2pdf;
  //       html2pdfInstance().set(options).from(element).save();
  //     }
  //   };

  return (
    <div>
      {/* <button
        onClick={handleDownloadPDF}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Download PDF
      </button> */}
      <div
        ref={cvRef}
        className="flex flex-col lg:flex-row bg-gray-100 text-gray-800 min-h-screen"
      >
        {/* Left Sidebar */}
        <aside className="bg-gray-900 text-white p-6 lg:w-1/3">
          <div className="text-center">
            <Image
              src="/avt.jpg"
              width={128}
              height={128}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              alt="Profile"
            />

            <h1 className="text-2xl font-bold">Lâm Quang Vinh</h1>
            <p className="text-sm">.NET Backend Developer</p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold border-b border-gray-700 pb-2">
              About Me
            </h2>
            <p className="text-sm mt-2">
              As a .NET Backend Developer, I have honed expertise in .NET Core
              and SQL performance optimization, with a foundation in Next.js...
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold border-b border-gray-700 pb-2">
              Skills
            </h2>
            <ul className="mt-2 space-y-2">
              <li className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
                Problem Solving
              </li>
              <li className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
                Ability to Learn
              </li>
              <li className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
                Tuning SQL
              </li>
              <li className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
                .NET
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold border-b border-gray-700 pb-2">
              Links
            </h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/lqvinh2512"
                  className="text-blue-400 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/VinhLam2512"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold border-b border-gray-700 pb-2">
              Future Goals
            </h2>
            <p className="text-sm mt-2">
              IELTS 7.0 - 7.5 <br />
              Master of Computer Science at HaNoi University of Science and
              Technology.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold border-b border-gray-700 pb-2">
              Personal Details
            </h2>
            <p className="text-sm mt-2">Date of Birth: 25/12/2001</p>
          </div>
        </aside>

        {/* Right Content */}
        <main className="p-6 lg:w-2/3">
          <section>
            <h1 className="text-2xl font-bold border-b border-gray-300 pb-2">
              Work Experience
            </h1>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">HOPLONG TECH</h2>
              <p className="text-sm italic">Aug 2022 - Present</p>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>
                  <strong>SQL Server:</strong> Optimized reporting queries,
                  resolved deadlocks, and provided solutions to enhance system
                  performance during peak usage periods.
                </li>
                <li>
                  <strong>DevOps:</strong> Deployed MongoDB and Redis Cache, set
                  up GitLab, and managed web application deployments on Linux
                  servers.
                </li>
                <li>
                  <strong>.NET Core:</strong> Developed services to integrate
                  with e-commerce platforms, enabling seamless order
                  synchronization.
                </li>
                <li>
                  <strong>NextJS:</strong> Implemented state management using
                  Redux and Redux Toolkit.
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-6">
            <h1 className="text-2xl font-bold border-b border-gray-300 pb-2">
              Education
            </h1>
            <p className="mt-2 text-sm">
              Master of Computer Science at HaNoi University of Science and
              Technology.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
