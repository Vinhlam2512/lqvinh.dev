import Project from './Project';

interface CompanyProps {
  name: string;
  duration: string;
  role: string;
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
  projects,
  role,
  locale
}: CompanyProps) {
  return (
    <div className="mt-4 border-b border-gray-300 pb-2">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm italic">{duration}</p>
      <p className="text-sm mt-2">
        <strong>{locale === 'en' ? 'Role:' : 'Vai trò:'}</strong> {role}
      </p>
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
