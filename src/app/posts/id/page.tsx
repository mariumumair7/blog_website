import { GetServerSideProps } from 'next';
import { posts } from '../../data/post';
import Link from 'next/link';

// Define PostDetails component
const PostDetails = ({ post }: { post: { id: number; title: string; content: string; author: string; date: string } }) => {
  return (
    <div className="container mx-auto p-6">
      {/* Post Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{post.title}</h1>

      {/* Author and Date */}
      <div className="flex justify-center mb-4 text-gray-600 text-sm">
        <p>
          <span className="font-medium">{post.author}</span> | <span>{post.date}</span>
        </p>
      </div>

      {/* Post Content */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          {post.content}
        </p>

        {/* Example image for post */}
        <img src={`/images/${post.id}.jpg`} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-6" />

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <Link href="/">
            <a className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              Back to Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Fetch data using getServerSideProps
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params!; // Extract dynamic parameter (id)
  const post = posts.find((post) => post.id.toString() === id); // Find the post by id

  if (!post) {
    return { notFound: true }; // If post not found, show a 404 error
  }

  return {
    props: { post }, // Return the post data as a prop
  };
};

export default PostDetails;
