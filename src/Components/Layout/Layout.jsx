
import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Header /> {/* Header always at top */}

      <main className="flex-1">
        {children}
         {/* Page content */}
      </main>

      <Footer /> {/* Footer always at bottom */}
    </div>
  );
}
