import Company from './Company';

export default function WorkExperience() {
  const companies = [
    {
      name: 'CMC Global',
      duration: '01/2025 - Present',
      projects: [
        {
          title: 'Aspire LifeStyle',
          description: 'Description of Project A.',
          techStack: 'MySQL, SQL server, .Net, Blazor, AWS',
          role: 'Fullstack Developer',
          achievements: ['Create UI Base from design in Figma with Blazor']
        }
      ]
    },
    {
      name: 'HOPLONG TECH',
      duration: '08/2022 - 01/2025',
      projects: [
        {
          title: 'ERP System',
          description:
            'Developed and maintained an enterprise resource planning (ERP) system designed to streamline and integrate core business processes.',
          techStack: '.NET, SQL Server, AngularJS, Redis',
          role: 'Leader of a 4-member sub-team within a 10-member team',
          achievements: [
            'Ensured the ERP system operated smoothly and efficiently.',
            'Designed and implemented database sharding and partitioning strategies.',
            'Implemented performance optimizations.',
            'Reduced downtime and maintained system reliability under high usage.',
            'Created dynamic and customizable reports to meet diverse business requirements.'
          ]
        },
        {
          title: 'System Connect with E-commerce Platform',
          description:
            'Solo-developed a system from scratch to integrate APIs of various e-commerce platforms, connecting their webhooks and transferring data to the ERP system.',
          techStack: '.NET, SQL Server, NextJS, Redis, Kafka',
          role: 'N/A',
          achievements: [
            'Successfully automated data synchronization between e-commerce platforms and the ERP system.',
            'Ensured real-time updates via webhook integration.',
            'Implemented Kafka with the Outbox pattern to guarantee reliable data processing.',
            'Improved data accuracy and reduced manual data handling.',
            'Deployed the application using Docker for portability and consistency.',
            'Configured Nginx for load balancing and reverse proxy to handle high traffic efficiently.'
          ]
        }
      ]
    }
  ];

  return (
    <section>
      <h1 className="text-2xl font-bold border-b border-gray-300 pb-2">
        Work Experience
      </h1>
      {companies.map((company, index) => (
        <Company
          key={index}
          name={company.name}
          duration={company.duration}
          projects={company.projects}
        />
      ))}
    </section>
  );
}
