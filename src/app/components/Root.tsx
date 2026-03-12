import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useEffect } from 'react';

export function Root() {
  // Apply dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}