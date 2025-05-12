interface ProjectItemProps {
  title: string;
  link: string;
  description: string;
  technologies?: string;
  duration?: string;
}

export default function ProjectItem({
  title,
  link,
  description,
  technologies,
  duration
}: ProjectItemProps) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <a href={link} className="text-blue-500 hover:underline text-sm">
        {link}
      </a>
      <p className="text-sm mt-2">
        <strong>Description:</strong> {description}
      </p>
      {technologies && (
        <p className="text-sm mt-2">
          <strong>Technologies Used:</strong> {technologies}
        </p>
      )}
      {duration && (
        <p className="text-sm mt-2">
          <strong>Duration:</strong> {duration}
        </p>
      )}
    </div>
  );
}
