'use client';

import { useParams } from 'next/navigation';
import Company from './Company';

export default function WorkExperience() {
  const params = useParams();
  const locale = Array.isArray(params?.locale)
    ? params.locale[0]
    : params?.locale || 'en'; // Ensure locale is a string

  const data =
    locale === 'vn'
      ? [
          {
            name: 'CMC Global',
            role: 'FullStack Developer',
            duration: '01/2025 - Hiện tại',
            projects: [
              {
                title: 'Aspire LifeStyle',
                description: 'Mô tả dự án A.',
                techStack: 'MySQL, SQL Server, .Net, Blazor, AWS',
                role: 'Lập trình viên Fullstack',
                achievements: [
                  'Thiết kế sản phẩm kết hợp Blazor và .Net Api',
                  'Đảm bảo hiệu suất phần mềm'
                ]
              }
            ]
          },
          {
            name: 'HOPLONG TECH',
            role: 'FullStack Developer',
            duration: '08/2022 - 01/2025',
            projects: [
              {
                title: 'Hệ thống ERP',
                description:
                  'Phát triển và duy trì hệ thống hoạch định nguồn lực doanh nghiệp (ERP) nhằm tối ưu hóa và tích hợp các quy trình kinh doanh cốt lõi.',
                techStack: '.NET, SQL Server, AngularJS, Redis',
                role: 'Trưởng nhóm 4 thành viên trong đội 10 người',
                achievements: [
                  'Đồng bộ dữ liệu từ các sàn thương mại điện tử vào ERP',
                  'Đảm bảo hệ thống ERP hoạt động trơn tru và hiệu quả.',
                  'Thiết kế và triển khai chiến lược phân mảnh và phân vùng cơ sở dữ liệu.',
                  'Tối ưu hóa hiệu suất hệ thống.',
                  'Giảm thời gian chết và duy trì độ tin cậy của hệ thống trong điều kiện sử dụng cao.',
                  'Tạo báo cáo động và tùy chỉnh để đáp ứng các yêu cầu kinh doanh đa dạng.'
                ]
              },
              {
                title: 'Kết nối hệ thống với nền tảng thương mại điện tử',
                description:
                  'Tự phát triển hệ thống từ đầu để tích hợp API của các nền tảng thương mại điện tử, kết nối webhook và chuyển dữ liệu vào hệ thống ERP.',
                techStack: '.NET, SQL Server, NextJS, Redis, Kafka',
                role: 'N/A',
                achievements: [
                  'Tự động hóa đồng bộ dữ liệu giữa các nền tảng thương mại điện tử và hệ thống ERP.',
                  'Đảm bảo cập nhật thời gian thực thông qua tích hợp webhook.',
                  'Triển khai Kafka với mô hình Outbox để đảm bảo xử lý dữ liệu đáng tin cậy.',
                  'Cải thiện độ chính xác dữ liệu và giảm xử lý thủ công.',
                  'Triển khai ứng dụng bằng Docker để đảm bảo tính di động và nhất quán.',
                  'Cấu hình Nginx để cân bằng tải và xử lý lưu lượng truy cập cao một cách hiệu quả.'
                ]
              }
            ]
          }
        ]
      : [
          {
            name: 'CMC Global',
            role: 'FullStack Developer',
            duration: '01/2025 - Present',
            projects: [
              {
                title: 'Aspire LifeStyle',
                description: 'Description of Project A.',
                techStack: 'MySQL, SQL Server, .Net, Blazor, AWS',
                role: 'Fullstack Developer',
                achievements: [
                  'Design products using a combination of Blazor and .NET API',
                  'Ensure software performance'
                ]
              }
            ]
          },
          {
            name: 'HOPLONG TECH',
            role: 'FullStack Developer',
            duration: '08/2022 - 01/2025',
            projects: [
              {
                title: 'ERP System',
                description:
                  'Developed and maintained an enterprise resource planning (ERP) system designed to streamline and integrate core business processes.',
                techStack: '.NET, SQL Server, AngularJS, Redis',
                role: 'Leader of a 4-member sub-team within a 10-member team',
                achievements: [
                  'Synchronize data from e-commerce platforms into the ERP system.',
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
        {locale === 'en' ? 'Work Experience' : 'Kinh nghiệm làm việc'}
      </h1>
      {data.map((company, index) => (
        <Company
          key={index}
          name={company.name}
          role={company.role}
          duration={company.duration}
          projects={company.projects}
          locale={locale}
        />
      ))}
    </section>
  );
}
