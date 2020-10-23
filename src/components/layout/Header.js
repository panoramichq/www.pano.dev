import React from 'react';
import Button from '../Button';
import NavLink from '../NavLink';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <header className="top-0 sticky bg-white zIndex-30">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-3 px-8 font-medium">
        <div className="lg:w-1/3">
          <Link className="text-2xl hover:text-gray-700 transition duration-200" to="/">
            Pano.dev
          </Link>
        </div>

        <div className="lg:w-1/3 flex mt-4 sm:mt-0 space-x-10 justify-center text-center">
          <Link className="hover:text-black text-gray-600 transition duration-200" href="/product">
            Product
          </Link>
          <a
            className="hover:text-black text-gray-600 transition duration-200"
            href="https://docs.pano.dev/"
          >
            Documentation
          </a>
        </div>

        <div className="lg:w-1/3 block space-x-4 place-items-end text-right">
          <a
            className="hover:text-black text-gray-600 transition duration-200"
            href="https://platform.panoramichq.com"
          >
            Log in
          </a>
          <Button to="/sign-up">Sign up for free</Button>
        </div>
      </div>
    </header>
  );
}
