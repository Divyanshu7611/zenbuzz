
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">ZenBuzz Media</h3>
            <p className="text-gray-300 mb-4">
              Transforming digital presence with strategic marketing solutions that drive growth and engagement.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-zenbuzz-lightPurple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-zenbuzz-lightPurple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-zenbuzz-lightPurple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-zenbuzz-lightPurple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Social Media Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Content Creation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">SEO Optimization</a></li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin className="text-zenbuzz-lightPurple" size={20} />
                <span className="text-gray-300">123 Digital Avenue, Web City, IN 560001</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-zenbuzz-lightPurple" size={20} />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-zenbuzz-lightPurple" size={20} />
                <span className="text-gray-300">info@zenbuzzmedia.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ZenBuzz Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
