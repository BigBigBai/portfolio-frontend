type PostFilterProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

const PostFilter = ({ searchQuery, onSearchChange }: PostFilterProps) => {
  return (
    <div className='mb-6'>
      <input
        type='text'
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder='Search posts...'
        className='w-full px-4 py-2 rounded-lg bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
      />
    </div>
  );
};

export default PostFilter;
