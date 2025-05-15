'use client';

import { useParams } from 'next/navigation';

interface EducationItem {
  institution: string;
  degree: string;
  description: string;
}

export default function Education() {
  const params = useParams();
  const locale = params?.locale || 'en'; // Default to 'en' if no locale is provided

  const educationData: { [key: string]: EducationItem[] } = {
    en: [
      {
        institution: 'The IELTS Workshop',
        degree: '',
        description:
          'I am studying English here to support my pursuit of a master’s degree and to work towards my future aspirations. My target is to achieve an IELTS score of 7.0 to 7.5.'
      },
      {
        institution: 'FPT University',
        degree: 'Bachelor',
        description: 'Student at FPT'
      }
    ],
    vn: [
      {
        institution: 'The IELTS Workshop',
        degree: '',
        description: 'Mục tiêu của tôi là đạt được IELTS 7.0 đến 7.5.'
      },
      {
        institution: 'Đại học FPT',
        degree: 'Cử nhân',
        description: 'Sinh viên tại FPT'
      }
    ]
  };

  const data = educationData[locale as string];

  return (
    <section className="mt-6 border-b border-gray-300 pb-2">
      <h1 className="text-2xl font-bold border-b border-gray-300 pb-2">
        {locale === 'en' ? 'Education' : 'Học vấn'}
      </h1>
      <div className="mt-4">
        {data.map((item, index) => (
          <div key={index} className="mt-4">
            <h2 className="text-lg font-semibold">{item.institution}</h2>
            <p className="text-sm italic">{item.degree}</p>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
