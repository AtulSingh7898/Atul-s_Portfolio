import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram, Youtube, Github, Music, MessageCircle } from 'lucide-react';

const Footer1 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Demo Content Area */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Linearity Footer Demo</h1>
          <p className="text-gray-600">Scroll down to see the footer</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-5 gap-16 mb-20">
            {/* Use case */}
            <div>
              <h3 className="text-sm font-medium mb-6 text-gray-400">Use case</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Create Content faster</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Improve Collaboration</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Save time using animation</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Stay on Brand</a></li>
              </ul>
              <h3 className="text-sm font-medium mt-8 mb-6 text-gray-400">Work flows</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Animate Sketch files</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Animate Illustrator files</a></li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-sm font-medium mb-6 text-gray-400">Features</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Shape Builder</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Auto Trace</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Pen Tool</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Brush Tool</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">(Move Feature)</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Template Library</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Animation Presets</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-medium mb-6 text-gray-400">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Learning</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">What's news</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Template Hub</a></li>
              </ul>
            </div>

            {/* Compare */}
            <div>
              <h3 className="text-sm font-medium mb-6 text-gray-400">Compare</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Adobe Illustrator</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Affinity Designer</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Sketch</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Inkscape</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Paint for Mac</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Procreate</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Figma</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Canva</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Pixelmator</a></li>
              </ul>
            </div>

            {/* Linearity */}
            <div>
              <h3 className="text-sm font-medium mb-6 text-gray-400">Linearity</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">About us</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Presskit</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Code of Conduct</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Press / Newsroom</a></li>
              </ul>
              
              {/* Awards */}
              <div className="flex gap-4 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center mb-1">
                    <div className="text-xs">★</div>
                  </div>
                  <p className="text-[9px] text-gray-400">Editor's Choice</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center mb-1">
                    <div className="text-xs">4.8★</div>
                  </div>
                  <p className="text-[9px] text-gray-400">2,700+ Reviews</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center mb-1">
                    <div className="text-xs">★</div>
                  </div>
                  <p className="text-[9px] text-gray-400">App of the Day</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex justify-between items-center mb-16">
              {/* Copyright */}
              <p className="text-xs text-gray-500">
                Copyright © 2023 Linearity GmbH. All rights reserved
              </p>

              {/* Links */}
              <div className="flex gap-8">
                <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Cookie Preferences</a>
                <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Use</a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Youtube size={18} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Github size={18} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Music size={18} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Logo */}
            <div className="flex items-center gap-3">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M30 0C30 16.5685 16.5685 30 0 30V40C22.0914 40 40 22.0914 40 0H30Z" fill="white"/>
                <path d="M30 20C30 28.8366 22.8366 36 14 36V46C28.3594 46 40 34.3594 40 20H30Z" fill="white"/>
                <circle cx="30" cy="30" r="10" fill="white"/>
              </svg>
              <span className="text-7xl font-bold tracking-tight">Linearity</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer1;