import React from "react";
import { FaFacebookF, FaGithub, FaLaptop, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-24 pb-40 relative overflow-visible">

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-14">

        <div>
          <h3 className="text-white font-semibold mb-6">Skill Set</h3>
          <ul className="space-y-3 text-sm">
            <li>Java</li>
            <li>Java Script</li>
            <li>React</li>
            <li>Next Js</li>
            <li className="text-gray-400 cursor-pointer">Show more ⌄</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Features</h3>
          <ul className="space-y-3 text-sm">
            <li>Json Web Token</li>
            <li>Multer</li>
            <li>Node Mailer</li>
            <li>Rate Limiting</li>
            <li className="text-gray-400 cursor-pointer">Show more ⌄</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Resources</h3>
          <ul className="space-y-3 text-sm">
            <li>GitHub</li>
            <li>Linkedin</li>
            <li>Hackathons</li>
            <li>Notion</li>
            <li className="text-gray-400 cursor-pointer">Show more ⌄</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Compare</h3>
          <ul className="space-y-3 text-sm">
            <li>Adobe Illustrator</li>
            <li>Affinity Designer</li>
            <li>Canva</li>
            <li>Figma</li>
            <li className="text-gray-400 cursor-pointer">Show more ⌄</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Explore</h3>
          <ul className="space-y-3 text-sm">
            <li>Let's Explore Design</li>
            <li>Vectornator is now Linearity Curve</li>
            <li>Bring motion in house</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Manihar Group</h3>
          <ul className="space-y-3 text-sm">
            <li>About us</li>
            <li>Community</li>
            <li>Career</li>
            <li>Contact Support</li>
            <li className="text-gray-400 cursor-pointer">Show more ⌄</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-14"></div>

      {/* Bottom Info */}
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">

        <p>Copyright © 2026 Atul Singh. All rights reserved</p>

        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms</span>
          <span className="hover:text-white cursor-pointer">Legal</span>
        </div>

        <div className="flex gap-6 text-lg">
          <a href="https://www.linkedin.com/in/atul-kumar-manihar-9b289525a/"><FaLinkedinIn className="cursor-pointer hover:text-white"/></a>
          <a href="https://github.com/AtulSingh7898"><FaGithub className="cursor-pointer hover:text-white"/></a>
          <a href="https://www.instagram.com/just_a_person_z/"><AiFillInstagram className="cursor-pointer hover:text-white"/></a>
          <a href=""><FaXTwitter className="cursor-pointer hover:text-white"/></a>
          <a href=""><FaYoutube className="cursor-pointer hover:text-white"/></a>
          <a href=""><FaLaptop className="cursor-pointer hover:text-white"/></a>
          
        </div>

      </div>

      {/* Huge Brand Text */}
      <div className="absolute bottom-0 left-0 w-full text-center pointer-events-none select-none">
        <h1 className="text-white/10 font-bold leading-none text-[180px] md:text-[240px] lg:text-[320px] tracking-tight">
          Manihar's
        </h1>
      </div>

    </footer>
  );
};

export default Footer;