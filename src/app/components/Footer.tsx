import { Link } from 'react-router';
import { COMPANY_NAME } from '../constants/company-name';
import appIcon from '../assets/images/vuma-app-icon.png';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-20 border-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <img src={appIcon} alt={COMPANY_NAME.charAt(0).toLocaleUpperCase()} className="rounded-lg" />
              </div>
              <span className="text-white text-xl font-bold">{COMPANY_NAME.toLocaleUpperCase()}</span>
            </div>
            <p className="text-gray-400 text-sm">
              Connect through posts. Share your moments.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Home
              </Link>
              <Link to="/features" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Features
              </Link>
              <Link to="/download" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Download
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white text-sm transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
