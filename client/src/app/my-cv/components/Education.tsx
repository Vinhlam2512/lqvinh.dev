interface EducationItem {
  institution: string;
  degree: string;
  description: string;
}

const educationData: EducationItem[] = [
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
];

export default function Education() {
  return (
    <section className="mt-6">
      <h1 className="text-2xl font-bold border-b border-gray-300 pb-2">
        Education
      </h1>
      <div className="mt-4">
        {educationData.map((item, index) => (
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
