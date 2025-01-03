import React from 'react';
import Image from 'next/image';
import Link from 'next/link';  // Import Link for navigation

const Post1 = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Introduction To Javascript</h1>
      <p className="text-sm text-gray-500 mb-4">
        By <span className="font-semibold">John Doe</span>
      </p>

      <Image
        src="/image1.png"
        alt="JavaScript"
        width={400}
        height={300}
        className="rounded-lg shadow-lg"
      />
      <div className="text-lg text-gray-700 leading-relaxed space-y-4">
        <p>
          JavaScript is one of the most popular programming languages in the world, and for good
          reason. It's a versatile, high-level language used to create dynamic and interactive
          elements in websites. Whether you're creating a website that responds to user input,
          building complex animations, or creating a fully interactive web application, JavaScript
          is often the tool of choice.
        </p>
        <p>
          JavaScript was created by Netscape in 1995 and quickly became a cornerstone of web
          development. It is primarily known for its use in web browsers, but with modern
          advancements, it can now also be used for both front-end and back-end development.
          JavaScript enables developers to add interactive features such as forms, buttons, dynamic
          content updates, and complex animations on websites.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Front-End vs. Back-End JavaScript</h2>
        <p>
          JavaScript can be used for both front-end and back-end development. On the front-end, it
          interacts with the Document Object Model (DOM) to update page content dynamically, while
          on the back-end, JavaScript, via Node.js, powers server-side applications.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Asynchronous Programming in JavaScript</h2>
        <p>
          JavaScript has built-in support for asynchronous programming, allowing non-blocking
          operations like fetching data or making network requests, which is crucial for
          performance in modern applications.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Why JavaScript is Popular</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Runs on all modern browsers without needing plugins.</li>
          <li>Has a vast ecosystem of libraries and frameworks.</li>
          <li>Easy to learn and use.</li>
          <li>Enables dynamic and interactive web pages.</li>
        </ul>
      </div>
      <div className="mt-8">
        {/* Replace <a> with <Link> for navigation */}
        <Link href="/">
          <span className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Post1;
