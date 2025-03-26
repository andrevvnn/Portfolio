import React from 'react';
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-white">ARCHSTUDIO</h2>
            <p className="text-gray-500 mt-2">
              Excellence in architectural design.
            </p>
          </div>
          <div className="flex space-x-6">
            {[TwitterIcon, InstagramIcon, LinkedinIcon, GithubIcon].map((Icon, i) => <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Social media">
                  <Icon size={22} />
                </a>)}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ARCHSTUDIO. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap space-x-8 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookies Settings'].map(item => <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>)}
            </ul>
          </div>
        </div>
      </div>
    </footer>;
}