interface ProjectProps {
  title: string;
  description: string;
  techStack: string;
  role: string;
  achievements: string[];
  locale: string; // Add locale as a prop
}

export default function Project({
  title,
  description,
  techStack,
  role,
  achievements,
  locale
}: ProjectProps) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="pl-5">
        <p className="text-sm mt-2">
          <strong>{locale === 'en' ? 'Description:' : 'Mô tả:'}</strong>{' '}
          {description}
        </p>
        <p className="text-sm mt-2">
          <strong>
            {locale === 'en' ? 'Tech Stack:' : 'Công nghệ sử dụng:'}
          </strong>{' '}
          {techStack}
        </p>
        <p className="text-sm mt-2">
          <strong>{locale === 'en' ? 'Role:' : 'Vai trò:'}</strong> {role}
        </p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <strong>{locale === 'en' ? 'Achievements:' : 'Thành tựu:'}</strong>
          <div className="pl-5">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
