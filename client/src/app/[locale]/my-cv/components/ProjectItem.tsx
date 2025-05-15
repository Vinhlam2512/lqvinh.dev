interface ProjectItemProps {
  title: string;
  link: string;
  description: string;
  technologies?: string;
  duration?: string;
  locale: string; // Add locale as a prop
}

export default function ProjectItem({
  title,
  link,
  description,
  technologies,
  duration,
  locale
}: ProjectItemProps) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <a href={link} className="text-blue-500 hover:underline text-sm">
        {link}
      </a>
      <p className="text-sm mt-2">
        <strong>{locale === 'en' ? 'Description:' : 'Mô tả:'}</strong>{' '}
        {description}
      </p>
      {technologies && (
        <p className="text-sm mt-2">
          <strong>
            {locale === 'en' ? 'Technologies Used:' : 'Công nghệ sử dụng:'}
          </strong>{' '}
          {technologies}
        </p>
      )}
      {duration && (
        <p className="text-sm mt-2">
          <strong>{locale === 'en' ? 'Duration:' : 'Thời gian:'}</strong>{' '}
          {duration}
        </p>
      )}
    </div>
  );
}
