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
          <Button to="https://docs.pano.dev/">Get Started</Button>
        </div>
      </nav>
    </header>
  );
}
