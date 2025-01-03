
import { posts } from '../../data/post';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface PostDetailsProps {
  params: {
    id: string;
  };
}

const PostDetails = ({ params }: PostDetailsProps) => {
  const post = posts.find((post) => post.id.toString() === params.id);

  if (!post) {
    notFound(); // Trigger a 404 page if post is not found
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{post?.title}</h1>
      <div className="flex justify-center mb-4 text-gray-600 text-sm">
        <p>
          <span className="font-medium">{post?.author}</span> | <span>{post?.date}</span>
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-lg leading-relaxed text-gray-700 mb-4">{post?.content}</p>
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

// Static Params Generation for Dynamic Route
export async function generateStaticParams() {
  const paths = posts.map((post) => ({
    id: post.id.toString(),
  }));
  return paths;
}

export default PostDetails;
