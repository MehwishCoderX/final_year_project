import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHome, FaBookOpen, FaInfoCircle } from 'react-icons/fa';

export default function Footer() {
 
  const menuItems = [
    { title: 'Home', path: '/', icon: <FaHome size={16}/> },
    { title: 'About', path: '/about', icon: <FaInfoCircle size={16} /> },
    { title: 'Blog', path: '/blog', icon: <FaBookOpen size={16}/> },
  ];

  return (
    <footer className="bg-blue-950 text-white py-10 px-5 md:px-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.path} className="_iconfooter block mb-2  text-sm md:text-base hover:text-gray-300 flex items-center space-x-2">
              {item.icon}
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex space-x-4">
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
