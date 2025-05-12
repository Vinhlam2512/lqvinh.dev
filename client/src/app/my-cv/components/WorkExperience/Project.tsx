interface ProjectProps {
  title: string;
  description: string;
  techStack: string;
  role: string;
  achievements: string[];
}

export default function Project({
  title,
  description,
  techStack,
  role,
  achievements
}: ProjectProps) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm mt-2">
        <strong>Description:</strong> {description}
      </p>
      <p className="text-sm mt-2">
        <strong>Tech Stack:</strong> {techStack}
      </p>
      <p className="text-sm mt-2">
        <strong>Role:</strong> {role}
      </p>
      <ul className="list-disc list-inside mt-2 text-sm">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
}
