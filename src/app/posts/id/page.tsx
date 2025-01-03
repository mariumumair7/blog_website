import { posts } from '../../data/post';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image'; 

const PostDetails = ({ params }: { params: { id: string } }) => {
  const post = posts.find((post) => post.id.toString() === params.id); 

  if (!post) {
    notFound(); 
  }

  return (
    <div className="container mx-auto p-6">
      {/* Post Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{post?.title}</h1>

      {/* Author and Date */}
      <div className="flex justify-center mb-4 text-gray-600 text-sm">
        <p>
          <span className="font-medium">{post?.author}</span> | <span>{post?.date}</span>
        </p>
      </div>

      {/* Post Content */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-lg leading-relaxed text-gray-700 mb-4">{post?.content}</p>

        {/* Optimized Image for post */}
        <Image
          src={`/images/${post?.id}.jpg`}
          alt={post?.title}
          width={800} 
          height={600} 
          className="w-full h-96 object-cover rounded-lg mb-6"
        />

        
        <div className="mt-8 text-center">
          <Link href="/">
            <span className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              Back to Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
