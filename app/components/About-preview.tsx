import { Link } from 'react-router';

const AboutPreview = () => {
  return (
    <section className='mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-gray-50 rounded-lg'>
      <img
        src='/images/profile.jpeg'
        alt='profile'
        className='w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500 shadow-md'
      />
      <div>
        <h2 className='text-2xl font-bold text-gray-900 mb-2'>👋 About Me</h2>
        <p className='text-gray-600 mb-4 max-w-xl'>
          I'm Yingjian - a full-stack engineer with strong experience in
          Next.js, and Java microservices, focused on building high-performance
          and scalable systems.
        </p>
        <Link
          to='/about'
          className='inline-block text-blue-600 hover:underline text-sm font-medium'
        >
          Learn more about me →
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;
