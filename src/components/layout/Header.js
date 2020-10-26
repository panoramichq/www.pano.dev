import React from 'react';
import Button from '../Button';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <header className="top-0 sticky my-4 bg-white zIndex-30">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-3 px-8 font-medium">
        <div className="lg:w-1/3">
          <Link className="text-2xl" activeClassName="text-black" to="/">
            pano<span className="text-blue-500">.</span>dev
          </Link>
        </div>

        <nav className="lg:w-1/3 flex mt-4 sm:mt-0 space-x-10 justify-center text-center">
          {/* 
         <Link activeClassName="text-black" to="/product">
            Product
          </Link>
          */}
          <a href="https://docs.pano.dev/" target="_blank" rel="noopener noreferrer">
            Documentation
          </a>
        </nav>

        <div className="lg:w-1/3 block space-x-8 place-items-end text-right">
          <a href="https://platform.panoramichq.com">Log In</a>
          <Button to="/sign-up">Sign Up Now. Free Forever</Button>
        </div>
      </div>
    </header>
  );
}
