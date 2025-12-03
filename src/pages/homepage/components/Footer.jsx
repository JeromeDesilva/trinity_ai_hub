import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const footerLinks = {
    platform: [
      { label: "Cluster Explorer", path: "/trinity-cluster-explorer" },
      { label: "Solutions", path: "/solutions-architecture" },
      { label: "Digital Products", path: "/digital-products-suite" },
      { label: "Success Stories", path: "/success-stories" }
    ],
    learning: [
      { label: "Trinity Academy", path: "/trinity-academy" },
      { label: "AI Courses", path: "/trinity-academy" },
      { label: "Certifications", path: "/trinity-academy" },
      { label: "Resources", path: "/trinity-academy" }
    ],
    company: [
      { label: "About Us", path: "/homepage" },
      { label: "Partnership Portal", path: "/partnership-portal" },
      { label: "Careers", path: "/homepage" },
      { label: "Contact", path: "/homepage" }
    ],
    legal: [
      { label: "Privacy Policy", path: "/homepage" },
      { label: "Terms of Service", path: "/homepage" },
      { label: "Security", path: "/homepage" },
      { label: "Compliance", path: "/homepage" }
    ]
  };

  const socialLinks = [
    { icon: "Linkedin", url: "#", label: "LinkedIn" },
    { icon: "Twitter", url: "#", label: "Twitter" },
    { icon: "Facebook", url: "#", label: "Facebook" },
    { icon: "Instagram", url: "#", label: "Instagram" },
    { icon: "Youtube", url: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/homepage" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 flex items-center justify-center">
                <Icon name="Sparkles" size={24} color="white" />
              </div>
              <span className="text-2xl font-bold text-white">Trinity AI Hub</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering businesses with intelligent automation, creative innovation, and scalable digital solutions. Your trusted partner in AI-driven transformation.
            </p>
            <div className="flex gap-4">
              {socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social?.url}
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-all duration-300"
                  aria-label={social?.label}
                >
                  <Icon name={social?.icon} size={20} color="white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Platform</h3>
            <ul className="space-y-3">
              {footerLinks?.platform?.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link?.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Learning</h3>
            <ul className="space-y-3">
              {footerLinks?.learning?.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link?.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks?.company?.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link?.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks?.legal?.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link?.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date()?.getFullYear()} Trinity Creative Services. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} color="#10B981" />
                <span className="text-sm text-gray-400">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Lock" size={16} color="#10B981" />
                <span className="text-sm text-gray-400">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;