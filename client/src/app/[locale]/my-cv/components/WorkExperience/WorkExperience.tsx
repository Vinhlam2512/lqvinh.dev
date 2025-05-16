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
            techStack: [
              { title: '.NET', description: 'Phát triển backend' },
              { title: 'Blazor', description: 'Xây dựng giao diện người dùng' }
            ],
            projects: [
              {
                title: 'Aspire LifeStyle',
                description:
                  'Trang web thương mại điện tử cung cấp các sản phẩm phong cách sống cao cấp như đồ nội thất, đồ gia dụng thông minh, thiết bị trang trí, quà tặng sang trọng và phụ kiện du lịch. Hệ thống hỗ trợ quản lý sản phẩm, giỏ hàng, đặt hàng, theo dõi đơn hàng và tích hợp thanh toán trực tuyến. Giao diện được tối ưu cho trải nghiệm người dùng và chuẩn SEO.',
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
            techStack: [
              {
                title: '.NET',
                description:
                  'Phát triển các dịch vụ tích hợp với các nền tảng thương mại điện tử, cho phép đồng bộ đơn hàng với hệ thống một cách liền mạch. Sử dụng FluentValidation để kiểm tra tính hợp lệ của dữ liệu đầu vào, MediatR để xử lý luồng hoạt động của ứng dụng, và Dapper để tương tác hiệu quả với các thủ tục lưu trữ (stored procedures).'
              },
              {
                title: 'SQL Server',
                description:
                  'Tối ưu hóa các truy vấn báo cáo, xử lý tình trạng deadlock và đưa ra các giải pháp nhằm nâng cao hiệu suất hệ thống trong các thời điểm sử dụng cao điểm. Thiết kế cơ sở dữ liệu.'
              },
              {
                title: 'NextJS',
                description:
                  'Triển khai quản lý trạng thái ứng dụng bằng Redux và Redux Toolkit, phát triển cơ chế refresh token bảo mật cho quá trình xác thực, xây dựng các thành phần giao diện người dùng (UI) theo thiết kế từ designer, đồng thời tích hợp hiệu quả các tính năng mới thông qua việc phân tích tài liệu kỹ thuật.'
              },
              {
                title: 'DevOps',
                description:
                  'Triển khai MongoDB và bộ nhớ đệm Redis, thiết lập GitLab, và quản lý việc triển khai ứng dụng web trên các máy chủ Linux. Cấu hình IIS để lưu trữ các ứng dụng ASP.NET.'
              }
            ],
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
            techStack: [
              { title: '.NET', description: 'Backend development' },
              { title: 'Blazor', description: 'Building user interfaces' }
            ],
            projects: [
              {
                title: 'Aspire LifeStyle',
                description:
                  'An e-commerce website offering premium lifestyle products such as furniture, smart home appliances, decorative items, luxury gifts, and travel accessories. The system supports product management, shopping cart, order tracking, and online payment integration. The interface is optimized for user experience and SEO.',
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
            techStack: [
              {
                title: '.NET',
                description:
                  'Developed services to integrate with e-commerce platforms, enabling seamless order synchronization with the system. Leveraged FluentValidation for input validation, MediatR for handling application behavior, and Dapper for efficient interaction with stored procedures'
              },
              {
                title: 'SQL Server',
                description:
                  'Optimized reporting queries, resolved deadlocks, and provided solutions to enhance system performance during peak usage periods. Design database'
              },
              {
                title: 'NextJS',
                description:
                  'Implemented state management using Redux and Redux Toolkit, developed secure refresh token mechanisms for authentication, and built UI components based on designer specifications while effectively integrating new features by analyzing documentation.'
              },
              {
                title: 'DevOps',
                description:
                  'Deployed MongoDB and Redis Cache, set up GitLab, and managed web application deployments on Linux servers. Configured IIS for hosting ASP.NET applications.'
              }
            ],
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
          techStack={company.techStack} // Pass the company's techStack
          projects={company.projects}
          locale={locale}
        />
      ))}
    </section>
  );
}
