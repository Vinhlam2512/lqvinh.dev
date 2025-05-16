'use client';

import { useParams } from 'next/navigation';
import ProjectItem from './ProjectItem';

export default function PersonalProjects() {
  const params = useParams();
  const locale = Array.isArray(params?.locale)
    ? params.locale[0]
    : params?.locale || 'en'; // Ensure locale is a string

  const data =
    locale === 'vn'
      ? [
          {
            title: 'LETOS',
            link: 'https://letossafety.vn/',
            description:
              'Trang web giới thiệu sản phẩm, tối ưu hoá SEO, kết nối với các sàn thương mại điện tử, đồng bộ tồn kho, quản lí đơn hàng từ tiktok, shopee, lazada, ... Hỗ trợ doanh nghiệp kết nối với các sàn thương mại điện tử!',
            technologies: '.NET, SQL, Stored Procedures',
            duration: 'Tháng 11/2024 - Hiện tại'
          },
          {
            title: 'Thuật toán',
            link: 'https://github.com/VinhLam2512/Algorithm',
            description:
              'Dự án luyện tập thuật toán, làm các bài thuật toán hàng ngày trên LeetCode',
            technologies: 'C#, Python, Javascript',
            duration: 'Tháng 08/2024 - Hiện tại'
          },
          {
            title: 'Base Project',
            link: 'https://github.com/VinhLam2512/BaseStructure',
            description:
              'Đây là một dự án tôi tự phát triển để tạo ra một nền tảng cơ bản vững chắc cho các ứng dụng trong tương lai. Nó sử dụng .NET cho phát triển backend, Next.js cho frontend, và Docker để đảm bảo tính di động và triển khai dễ dàng. Kiến trúc này tích hợp CQRS để tách biệt các mối quan tâm, Mediatr để quản lý giao tiếp trong ứng dụng, và FluentValidation để xác thực đầu vào.',
            technologies:
              '.NET, Next.js, Docker, CQRS, FluentValidation, Mediatr, DDD Pattern, Dapper, Redis Cache, MSSQL'
          },
          {
            title: 'Hệ thống FU Foody',
            link: 'https://github.com/DaoDucHieu1712/FU-Foody-System',
            description:
              'Phát triển một hệ thống quản lý thực phẩm, sử dụng .NET cho phát triển backend và SQL cho quản lý cơ sở dữ liệu. Thiết kế và tối ưu hóa các thủ tục lưu trữ để xử lý các truy vấn phức tạp và cải thiện hiệu suất.',
            technologies: '.NET, SQL, Stored Procedures',
            duration: 'Tháng 6/2023 - Tháng 12/2023'
          }
        ]
      : [
          {
            title: 'LETOS',
            link: 'https://letossafety.vn/',
            description:
              'A product showcase website with SEO optimization, integration with e-commerce platforms, inventory synchronization, and order management from TikTok, Shopee, Lazada, etc. Supports businesses in connecting with e-commerce platforms!',
            technologies: '.NET, SQL, Stored Procedures',
            duration: 'November 2024 - Present'
          },
          {
            title: 'Algorithm',
            link: 'https://github.com/VinhLam2512/Algorithm',
            description:
              'A project for practicing algorithms by solving daily problems on LeetCode.',
            technologies: 'C#, Python, JavaScript',
            duration: 'August 2024 - Present'
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

  return (
    <section>
      <h1 className="text-2xl mt-3.5 font-bold border-b border-gray-300 pb-2">
        {locale === 'en' ? 'Personal Projects' : 'Dự án cá nhân'}
      </h1>
      <div className="mt-4">
        {data.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            link={project.link}
            description={project.description}
            technologies={project.technologies}
            duration={project.duration}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
