import Project from './Project';

interface TechStackItem {
  title: string;
  description: string;
}

interface CompanyProps {
  name: string;
  duration: string;
  role: string;
  techStack: TechStackItem[]; // Add techStack for the company
  projects: {
    title: string;
    description: string;
    techStack: string;
    role: string;
    achievements: string[];
  }[];
  locale: string;
}

export default function Company({
  name,
  duration,
  role,
  techStack,
  projects,
  locale
}: CompanyProps) {
  return (
    <div className="mt-4 border-b border-gray-300 pb-2">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm italic">{duration}</p>
      <p className="text-sm mt-2">
        <strong>{locale === 'en' ? 'Role:' : 'Vai trò:'}</strong> {role}
      </p>
      <div className="text-sm mt-2">
        <strong>
          {locale === 'en' ? 'Tech Stack:' : 'Công nghệ sử dụng:'}
        </strong>
        <ul className="list-disc list-inside mt-2">
          {techStack.map((tech, index) => (
            <li key={index}>
              <strong>{tech.title}:</strong> {tech.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="pl-5">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            role={project.role}
            achievements={project.achievements}
            locale={locale} // Pass the locale here
          />
        ))}
      </div>
    </div>
  );
}
