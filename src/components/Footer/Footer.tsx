
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-xl border-t border-white/10 mt-16 px-6 py-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-linear-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center text-white font-bold">⚖️</div>
            <h3 className="text-lg font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Legal Doc AI</h3>
          </div>
          <p className="text-gray-400 text-sm">
            AI-powered document analysis. Summarize legal docs in seconds.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-1 text-sm">Product</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li><a href="#features" className="hover:text-purple-300">Features</a></li>
            <li><a href="#pricing" className="hover:text-purple-300">Pricing</a></li>
            <li><a href="#security" className="hover:text-purple-300">Security</a></li>
            <li><a href="#faq" className="hover:text-purple-300">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-1 text-sm">Legal</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li><a href="#privacy" className="hover:text-purple-300">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-purple-300">Terms of Service</a></li>
            <li><a href="#cookies" className="hover:text-purple-300">Cookie Policy</a></li>
            <li><a href="#disclaimer" className="hover:text-purple-300">Disclaimer</a></li>
          </ul>
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-4">
          <a href="#github" className="text-gray-400 hover:text-white"><FaGithub size={20} /></a>
          <a href="#linkedin" className="text-gray-400 hover:text-blue-400"><FaLinkedin size={20} /></a>
          <a href="#email" className="text-gray-400 hover:text-pink-400"><FaEnvelope size={20} /></a>
        </div>
        <p className="text-gray-400 text-sm text-center md:text-right">
          &copy; 2024 Legal Doc AI. Made with <FaHeart className="inline text-red-500" /> by Nusrat Jahan Nishat
        </p>
      </div>
    </footer>
  );
};

export default Footer;
