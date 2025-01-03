import React from "react";
import Image from "next/image";
import Link from "next/link"; 

const PostCpp = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">The Power of C++</h1>
      <p className="text-sm text-gray-500 mb-4">
        By <span className="font-semibold">Robert Lee</span>
      </p>

      <Image
        src="/image4.png" 
        alt="C++"
        width={400}
        height={300}
        className="rounded-lg shadow-lg"
      />

      <div className="text-lg text-gray-700 leading-relaxed space-y-4 mt-6">
        <p>
          C++ is a powerful, high-performance programming language that has been
          a cornerstone of software development since its creation. Known for its
          efficiency and flexibility, C++ is widely used for system programming,
          game development, and applications requiring fast processing.
        </p>
        <p>
          Originally developed by Bjarne Stroustrup in 1985 as an extension of
          the C programming language, C++ introduced the concept of object-oriented
          programming (OOP) to enhance code organization and reusability.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Key Features of C++</h2>
        <p>
          C++ offers a blend of low-level and high-level programming capabilities,
          making it suitable for a wide range of applications. Its features
          include manual memory management, strong type-checking, and support for
          object-oriented, procedural, and generic programming.
        </p>
        <h2 className="text-2xl font-semibold mt-6">C++ in Game Development</h2>
        <p>
          C++ is the language of choice for game developers because of its
          unparalleled performance and control over hardware. Popular game engines
          like Unreal Engine use C++ to power their frameworks.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Why Developers Choose C++</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Excellent performance and speed.</li>
          <li>Supports object-oriented programming for better code structure.</li>
          <li>Cross-platform compatibility.</li>
          <li>Widely used for system programming and embedded systems.</li>
          <li>Large ecosystem of libraries and tools.</li>
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

export default PostCpp;
