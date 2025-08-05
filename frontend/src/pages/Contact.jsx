
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import contact from '../assets/contact.jpg';
import NewLetterBox from '../components/NewLetterBox';

function Contact() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center 
    bg-gradient-to-br from-[#0f172a] via-[#0c2025] to-[#141414] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl animate-pulse
         top-10 left-20"></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-ping 
        bottom-10 right-20"></div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white mt-20 mb-12 text-center">
        Get in <span className="text-cyan-400">Touch</span> With Us
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full px-6 gap-12">
        <div className="lg:w-1/2 flex items-center justify-center">
          <img 
            src={contact} 
            alt="Contact" 
            className="lg:w-3/4 w-4/5 rounded-2xl shadow-2xl shadow-black
            transform transition duration-500 hover:scale-105 hover:shadow-cyan-500/40"
          />
        </div>
        <div className="lg:w-1/2 w-full bg-white/10 backdrop-blur-lg border border-white/20 
        rounded-2xl shadow-lg p-8 flex flex-col gap-6 text-white 
        hover:shadow-cyan-500/30 transition duration-500">
          <h3 className="text-2xl font-bold border-b border-cyan-400 pb-2">Our Store</h3>
          <div className="text-sm md:text-base space-y-1">
            <p>12345 Random Station</p>
            <p>Random City, State, India</p>
          </div>
          <div className="text-sm md:text-base space-y-1">
            <p>Tel: +91-9876543210</p>
            <p>Email: admin@onecart.com</p>
          </div>
          <h3 className="text-2xl font-bold border-b border-cyan-400 pb-2">Careers at OneCart</h3>
          <p className="text-sm md:text-base">
            Learn more about our teams and job openings.
          </p>
          <button className="px-6 py-3 mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 
          rounded-lg shadow-md shadow-cyan-600/50 text-white font-semibold
          hover:from-blue-600 hover:to-cyan-500 transition-all duration-500">
            Explore Jobs
          </button>
          <div className="flex gap-5 mt-4 text-2xl">
            <a href="#" className="hover:text-cyan-400 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-cyan-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-cyan-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-cyan-400 transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="w-full mt-16">
        <NewLetterBox />
      </div>
    </div>
  );
}

export default Contact;

