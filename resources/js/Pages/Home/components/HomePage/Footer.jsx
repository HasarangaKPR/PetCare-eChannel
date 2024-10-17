import React from 'react';
//import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
//import FooterImage from '../../assets/HomePage/FooterIcon.svg';

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={FooterImage} alt="PetCare eChannel" className="w-[154px] h-[143px] ml-16" />
        </div>
        <div className="flex space-x-6 mr-16">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-white hover:text-gray-300 text-2xl" />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-gray-300 text-2xl" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-gray-300 text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
