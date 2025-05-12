import Image from 'next/image';

export default function Sidebar() {
  return (
    <aside className="bg-gray-900 text-white p-6 lg:w-1/3">
      <div className="text-center">
        <Image
          src="/avt.jpg"
          width={128}
          height={128}
          className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
          alt="Profile"
        />
        <h1 className="text-2xl font-bold">Lâm Quang Vinh</h1>
        <p className="text-sm">.NET Backend Developer</p>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold border-b border-gray-700 pb-2">
          About Me
        </h2>
        <p className="text-sm mt-2">
          As a .NET Backend Developer, I have honed expertise in .NET Core and
          SQL performance optimization, with a foundation in Next.js...
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold border-b border-gray-700 pb-2">
          Skills
        </h2>
        <ul className="mt-2 space-y-2">
          <li className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
            Problem Solving
          </li>
          <li className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
            Ability to Learn
          </li>
          <li className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
            Tuning SQL
          </li>
          <li className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
            .NET
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold border-b border-gray-700 pb-2">
          Links
        </h2>
        <ul className="mt-2 space-y-2 text-sm">
          <li>
            <a
              href="https://www.linkedin.com/in/lqvinh2512"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/VinhLam2512"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold border-b border-gray-700 pb-2">
          Future Goals
        </h2>
        <p className="text-sm mt-2">
          IELTS 7.0 - 7.5 <br />
          Master of Computer Science at HaNoi University of Science and
          Technology.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold border-b border-gray-700 pb-2">
          Personal Details
        </h2>
        <p className="text-sm mt-2">Date of Birth: 25/12/2001</p>
      </div>
    </aside>
  );
}
