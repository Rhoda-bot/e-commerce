import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/"  className="navbar-brand sidebar__brand">
         Sidebar
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">
              sjsjjsjsjsj
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                fhgjhjkkll;;''''''''
              </Link>
            </li>
            {/* Add more links here */}
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Sidebar;
