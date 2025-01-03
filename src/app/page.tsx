'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { posts } from '../app/data/post';

const Home = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  // Handle comment submit
  const handleCommentSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment(''); // Reset the comment input field
    }
  };

  // Handle input change in the comment box
  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Programming Languages</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.content.slice(0, 150)}...</p>
            <Link href={`/post/${post.id}`} className="text-blue-500 hover:text-blue-700 mt-2 inline-block">
              Read More
            </Link>
          </div>
        ))}
      </div>

      {/* Comment Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <textarea
            className="w-full p-4 border rounded-lg shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Add your comment..."
            value={newComment}
            onChange={handleCommentChange}
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Submit Comment
          </button>
        </form>

        <div>
          {comments.length === 0 ? (
            <p className="text-gray-600">No comments yet. Be the first to comment!</p>
          ) : (
            <div>
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg mb-4"
                >
                  <p className="text-gray-700">{comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
