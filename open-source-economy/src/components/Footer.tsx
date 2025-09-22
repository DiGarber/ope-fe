import { Link } from "react-router-dom";
import { containerStyles, textStyles } from "../styles/components";
import { Github, Twitter, Linkedin, Mail, Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Mission", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    solutions: [
      { name: "Security Analysis", href: "/solutions" },
      { name: "Risk Assessment", href: "/solutions" },
      { name: "Vulnerability Alerts", href: "/solutions" },
      { name: "Support Services", href: "/solutions" },
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Security Reports", href: "/reports" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Security Policy", href: "/security" },
    ],
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: <Github className="w-5 h-5" />,
      ariaLabel: "Follow us on GitHub",
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: <Twitter className="w-5 h-5" />,
      ariaLabel: "Follow us on Twitter",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <Linkedin className="w-5 h-5" />,
      ariaLabel: "Connect with us on LinkedIn",
    },
    {
      name: "Email",
      href: "mailto:contact@opensourceeconomy.com",
      icon: <Mail className="w-5 h-5" />,
      ariaLabel: "Send us an email",
    },
  ];

  return (
    <footer
      className="bg-dark-300 border-t border-gray-800 mt-auto"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className={containerStyles.base}>
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-accent-pink to-accent-purple rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Open Source</h2>
                  <p className="text-sm text-gray-300 -mt-1">Economy</p>
                </div>
              </div>

              <p className={`${textStyles.body} mb-6 max-w-md`}>
                Protecting your organization from open source security risks
                through comprehensive analysis, real-time alerts, and strategic
                partnerships.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-pink transition-colors duration-200 p-2 rounded-lg hover:bg-dark-200 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-opacity-50"
                    aria-label={social.ariaLabel}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3" role="list">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-opacity-50 rounded-md"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Solutions
              </h3>
              <ul className="space-y-3" role="list">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-opacity-50 rounded-md"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Resources
              </h3>
              <ul className="space-y-3" role="list">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-opacity-50 rounded-md"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} Open Source Economy. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {footerLinks.legal.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-opacity-50 rounded-md"
                  >
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="text-gray-600 mx-3">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Security Badge */}
        <div className="text-center py-4 border-t border-gray-700">
          <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
            <Shield className="w-4 h-4 text-accent-pink" aria-hidden="true" />
            <span>
              Securing the open source ecosystem, one dependency at a time
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
