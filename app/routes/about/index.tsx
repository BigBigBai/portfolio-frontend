const AboutPage = () => {
  return (
    <div className='max-w-5xl mx-auto px-6 py-16 bg-gray-900'>
      {/* Intro */}
      <div className='flex flex-col md:flex-row items-center md:items-start gap-10 mb-12'>
        <img
          src='/images/profile.jpeg'
          alt='Profile'
          className='w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md aspect-square'
        />
        <div>
          <h1 className='text-3xl font-bold text-white mb-2'>
            Hey, I'm Yingjian Bai 👋
          </h1>
          <p className='text-gray-300 text-lg'>
            I'm a full-stack engineer with strong experience in Next.js, and
            Java microservices, focused on building high-performance and
            scalable systems.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className='mb-12'>
        <h2 className='text-2xl font-semibold text-white mb-4'>My Mission</h2>
        <p className='text-gray-300 leading-relaxed'>
          I build clean, reliable systems—from interactive web experiences to
          high-performance backends. Passionate about distributed systems, cloud
          architectures, and the craft of writing thoughtful code. Constantly
          learning. Constantly improving.
        </p>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className='text-2xl font-semibold text-white mb-4'>
          🚀 Tech I Use
        </h2>
        <ul className='flex flex-wrap gap-4 text-sm text-gray-300'>
          {[
            'React',
            'Next.js',
            'Vue',
            'Tailwind CSS',
            'Node.js',
            'Laravel',
            'Prisma',
            'MongoDB',
            'PostgreSQL',
            'Appwrite',
            'Docker',
            'Spring Boot',
            'AWS',
            'Git',
          ].map((tech) => (
            <li key={tech} className='bg-gray-700 px-3 py-1 rounded-md'>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
