import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white pt-16 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-red bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex text-white hover:text-white/90 items-center gap-2 px-6 py-3 bg-primary rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
