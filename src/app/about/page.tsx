import Image from "next/image";

const AboutProgrammingLanguages = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-semibold mb-8 text-center">About Programming Languages</h1>

      <div className="space-y-12">
        {/* JavaScript Section */}
        <section className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/image1.png"
              alt="JavaScript"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 pl-6">
            <h2 className="text-3xl font-semibold mb-4">JavaScript</h2>
            <p className="text-lg text-gray-700 mb-4">
              JavaScript is one of the most popular programming languages in the world. It is a high-level,
              interpreted language that allows developers to build dynamic and interactive websites. JavaScript
              can run on both the client and server side and is a key part of modern web development.
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Used for building interactive web pages</li>
              <li>Works well with HTML and CSS</li>
              <li>Can be used on the server side via Node.js</li>
            </ul>
          </div>
        </section>

        {/* Python Section */}
        <section className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/image2.jpeg"
              alt="Python"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 pl-6">
            <h2 className="text-3xl font-semibold mb-4">Python</h2>
            <p className="text-lg text-gray-700 mb-4">
              Python is a versatile, high-level programming language. It is known for its simplicity and readability,
              making it a great choice for beginners. Python is used in a variety of fields, including web development,
              data science, artificial intelligence, and automation.
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Great for beginners</li>
              <li>Used for data science, machine learning, web development, and more</li>
              <li>Has an extensive standard library</li>
            </ul>
          </div>
        </section>

        {/* Java Section */}
        <section className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/image3.jpeg"
              alt="Java"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 pl-6">
            <h2 className="text-3xl font-semibold mb-4">Java</h2>
            <p className="text-lg text-gray-700 mb-4">
              Java is one of the most popular programming languages, known for its platform independence. It is used in
              a wide range of applications, from web apps to Android apps and enterprise-level solutions.
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Platform-independent (Write once, run anywhere)</li>
              <li>Popular for Android development</li>
              <li>Used in enterprise-level applications</li>
            </ul>
          </div>
        </section>

        {/* C++ Section */}
        <section className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/image4.png"
              alt="C++"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 pl-6">
            <h2 className="text-3xl font-semibold mb-4">C++</h2>
            <p className="text-lg text-gray-700 mb-4">
              C++ is a powerful programming language used for system software, game development, and applications
              that require high-performance computing. It provides low-level memory manipulation and is widely
              used in embedded systems and real-time applications.
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Great for system programming</li>
              <li>Used in game development</li>
              <li>Offers low-level memory manipulation</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutProgrammingLanguages;
