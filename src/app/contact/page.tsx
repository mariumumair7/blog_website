import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

      {/* Contact Information */}
      <div className="text-center mb-8">
        <p className="text-lg text-gray-700">Feel free to reach out to us through the links below!</p>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6">
        <Link href="https://www.facebook.com" passHref>
          <div className="text-3xl text-blue-600 hover:text-blue-800 cursor-pointer">
            <FaFacebookF />
          </div>
        </Link>
        <Link href="https://www.linkedin.com" passHref>
          <div className="text-3xl text-blue-700 hover:text-blue-900 cursor-pointer">
            <FaLinkedinIn />
          </div>
        </Link>
        <Link href="https://www.instagram.com" passHref>
          <div className="text-3xl text-pink-600 hover:text-pink-800 cursor-pointer">
            <FaInstagram />
          </div>
        </Link>
        <Link href="https://www.twitter.com" passHref>
          <div className="text-3xl text-blue-400 hover:text-blue-600 cursor-pointer">
            <FaTwitter />
          </div>
        </Link>
        <Link href="mailto:example@example.com" passHref>
          <div className="text-3xl text-gray-800 hover:text-gray-600 cursor-pointer">
            <FaEnvelope />
          </div>
        </Link>
      </div>

      {/* Email */}
      <div className="text-center mt-6">
        <p className="text-lg text-gray-700">
          You can also reach us directly via email: 
          <Link href="mailto:example@example.com" passHref>
            <span className="text-blue-500 hover:text-blue-700 cursor-pointer"> example@example.com</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contact;
