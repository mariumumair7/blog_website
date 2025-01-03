import "../globals.css";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Programming Blog. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  