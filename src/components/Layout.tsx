import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}