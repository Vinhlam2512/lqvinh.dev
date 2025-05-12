import ProjectItem from './ProjectItem';

const personalProjects = [
  {
    title: 'Algorithm',
    link: 'https://github.com/VinhLam2512/Algorithm',
    description:
      'One of the activities in my WeCommit100x community involves participating in daily LeetCode challenges with others, where we collaborate to solve problems and share our solutions.'
  },
  {
    title: 'Base Project',
    link: 'https://github.com/VinhLam2512/BaseStructure',
    description:
      'This is a project I developed independently to create a robust foundational base for future applications. It features .NET for backend development, Next.js for the frontend, and Docker for containerization to ensure seamless portability and deployment. The architecture incorporates CQRS for better separation of concerns, Mediatr for managing in-app communication, and FluentValidation for validating input.',
    technologies:
      '.NET, Next.js, Docker, CQRS, FluentValidation, Mediatr, DDD Pattern, Dapper, Redis Cache, MSSQL'
  },
  {
    title: 'FU Foody System',
    link: 'https://github.com/DaoDucHieu1712/FU-Foody-System',
    description:
      'Developed a Food System, utilizing .NET for backend development and SQL for database management. Designed and optimized stored procedures to handle complex queries and improve performance.',
    technologies: '.NET, SQL, Stored Procedures',
    duration: 'Jun 2023 - Dec 2023'
  }
];

export default function PersonalProjects() {
  return (
    <section className="mt-6">
      <h1 className="text-2xl font-bold border-b border-gray-300 pb-2">
        Personal Projects
      </h1>
      <div className="mt-4">
        {personalProjects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            link={project.link}
            description={project.description}
            technologies={project.technologies}
            duration={project.duration}
          />
        ))}
      </div>
    </section>
  );
}
