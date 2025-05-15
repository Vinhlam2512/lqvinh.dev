import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-gray-800">
      {/* Profile Section */}
      <div className="text-center">
        <Image
          src="/avt.jpg"
          alt="Lâm Quang Vinh"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-4xl font-bold">Lâm Quang Vinh</h1>
        <p className="text-lg mt-2">Lập trình viên Backend .NET</p>
        <p className="text-sm mt-2 max-w-md mx-auto">
          Tôi là một lập trình viên Backend với chuyên môn về .NET Core, SQL
          Server, và Next.js. Tôi đam mê xây dựng các ứng dụng hiệu quả và tối
          ưu hóa hiệu suất hệ thống.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/en/my-cv"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Xem CV của tôi
        </Link>
        <Link
          href="/projects"
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
        >
          Dự án cá nhân
        </Link>
        <Link
          href="/contact"
          className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-600 transition"
        >
          Liên hệ
        </Link>
      </div>
    </div>
  );
};
export default Home;
