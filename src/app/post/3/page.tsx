import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

const PostJava = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">What is Java?</h1>
      <p className="text-sm text-gray-500 mb-4">
        By <span className="font-semibold">Alice Johnson</span>
      </p>

      <Image
        src="/image3.jpeg" // Replace with the actual image path
        alt="Java"
        width={400}
        height={300}
        className="rounded-lg shadow-lg"
      />

      <div className="text-lg text-gray-700 leading-relaxed space-y-4 mt-6">
        <p>
          Java is one of the most popular programming languages, known for its
          portability across platforms. It follows the principle of write once,
          run anywhere, meaning compiled Java code can run on all platforms
          that support Java without needing recompilation.
        </p>
        <p>
          Created by Sun Microsystems in 1995, Java has since become the
          backbone of enterprise applications. Its reliability, security
          features, and scalability make it a preferred choice for large-scale
          systems like banking, e-commerce, and Android applications.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Platform Independence</h2>
        <p>
          Java platform independence is achieved through the Java Virtual
          Machine (JVM), which allows Java code to run seamlessly on different
          devices and operating systems.
        </p>
        <h2 className="text-2xl font-semibold mt-6">
          Java in Enterprise Applications
        </h2>
        <p>
          Many enterprise applications rely on Java for its robustness and
          scalability. Frameworks like Spring and Hibernate make Java an
          excellent choice for building complex, secure, and scalable systems.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Why Java is Popular</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Highly secure and reliable.</li>
          <li>Platform independence with the JVM.</li>
          <li>Rich ecosystem of frameworks and libraries.</li>
          <li>Excellent performance and scalability.</li>
          <li>Widely used in Android app development.</li>
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

export default PostJava;
