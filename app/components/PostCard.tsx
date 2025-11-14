import { Link } from 'react-router';
import type { Post } from '~/types';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <article
      key={post.slug}
      className='bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition'
    >
      <h3 className='text-2xl font-semibold text-blue-600'>{post.title}</h3>
      <p className='text-sm text-gray-500 mb-2'>
        {new Date(post.date).toLocaleDateString()}
      </p>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className='w-full h-48 object-cover rounded mb-4'
        />
      )}
      <p className='text-gray-600 mb-4'>{post.excerpt}</p>
      <Link
        to={`/blog/${post.slug}`}
        className='text-blue-600 hover:underline text-sm font-medium'
      >
        Read More →
      </Link>
    </article>
  );
};

export default PostCard;
