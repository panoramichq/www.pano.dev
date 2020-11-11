import React from 'react';
import Button from '../Button';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <header className="bg-white z-50 w-full mt-4 top-0 sticky backdrop-blur bg-opacity-75">
      <nav className="container mx-auto flex justify-between py-4 px-8">
        <Link className="text-2xl" activeClassName="text-black" to="/">
          pano<span className="font-light">.dev</span>
        </Link>
        <div className="space-x-8 hidden sm:block">
          <a href="https://docs.pano.dev/" target="_blank" rel="noopener noreferrer">
            Docs
          </a>
          <a href="https://platform.panoramichq.com">Log in</a>
          <Button to="/sign-up">Sign up for free</Button>
        </div>
      </nav>
    </header>
  );
}
