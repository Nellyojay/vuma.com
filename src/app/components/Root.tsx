import { Outlet, useLocation } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useEffect } from 'react';

export function Root() {
  const location = useLocation();
  // Apply dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {location.pathname === '/reset-password' ? null : (
        <Navbar />
      )}
      <Outlet />
      {location.pathname === '/reset-password' ? null : (
        <Footer />
      )}
    </div>
  );
}