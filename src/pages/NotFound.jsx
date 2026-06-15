import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <SEO
        title="Page Not Found"
        description="The Clikconsult page you are looking for could not be found."
        path="/404"
        noindex
      />
      <div className="text-center">
        <Reveal>
          <p className="font-display text-9xl font-bold text-gradient opacity-30 mb-4">404</p>
          <h1 className="font-display text-3xl font-bold text-white mb-4">Page not found</h1>
          <p className="text-white/40 mb-10 max-w-sm mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary px-8 py-4">
            Back to home <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
