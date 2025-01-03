import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

const PostPython = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Understanding Python
      </h1>
      <p className="text-sm text-gray-500 mb-4">
        By <span className="font-semibold">Jane Smith</span>
      </p>

      <Image
        src="/image2.jpeg"
        alt="Python"
        width={400}
        height={300}
        className="rounded-lg shadow-lg"
      />

      <div className="text-lg text-gray-700 leading-relaxed space-y-4 mt-6">
        <p>
          Python is a high-level programming language known for its simple
          syntax and readability. Its versatility makes it a popular choice for
          a wide range of applications, from web development to data science
          and automation.
        </p>
        <p>
          One of Python has greatest strengths is its large standard library,
          which provides tools suited to many tasks, including connecting to
          web servers, reading and modifying files, handling data, and more.
        </p>
        <h2 className="text-2xl font-semibold mt-6">
          Python in Data Science
        </h2>
        <p>
          Python has become a staple in data science due to its powerful
          libraries like NumPy, Pandas, and Matplotlib. These tools enable data
          manipulation, analysis, and visualization, making Python the go-to
          language for data scientists.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Web Development</h2>
        <p>
          Frameworks like Django and Flask make Python an excellent choice for
          developing web applications. Django, for instance, is a high-level
          framework that simplifies the development process, while Flask
          provides a lightweight alternative for building smaller applications.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Why Python is Popular</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Simple and easy-to-read syntax.</li>
          <li>Extensive community support and documentation.</li>
          <li>Rich ecosystem of libraries and frameworks.</li>
          <li>Cross-platform compatibility.</li>
          <li>Ideal for beginners and experts alike.</li>
        </ul>
      </div>
      <div className="mt-8">
        <Link href="/">
          <span className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostPython;
