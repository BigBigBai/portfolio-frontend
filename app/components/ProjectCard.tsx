import type { Project } from '~/types';
import { Link } from 'react-router';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/projects/${project.documentId}`}
      className='block transform transition duration-300 hover:scale-[1.02]'
    >
      <div className='bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition duration-300'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-40 object-cover'
        />
        <div className='p-5'>
          <h3 className='text-xl font-semibold text-blue-600 mb-1'>
            {project.title}
          </h3>
          <p className='text-sm text-gray-600 mb-2'>{project.description}</p>
          <div className='flex justify-between items-center text-sm text-gray-500'>
            <span>{project.category}</span>
            {/* <span>{new Date(project.date).toLocaleDateString()}</span> */}
            <span>{project.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
