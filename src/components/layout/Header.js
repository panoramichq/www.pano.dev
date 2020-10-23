import React from 'react';
import Button from '../Button';
import NavLink from '../NavLink';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <header
      className="top-0 sticky bg-white zIndex-30"
      data-sal="slide-down"
      data-sal-delay="100"
      data-sal-duration="1000"
    >
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-3 px-8 font-medium">
        <div className="lg:w-1/3">
          <Link to="/">
            <div className="text-2xl hover:text-gray-700 transition duration-200">Pano.dev</div>
          </Link>
        </div>

        <div className="lg:w-1/3 flex mt-4 sm:mt-0 space-x-10 justify-center text-center">
          <NavLink href="/">Product</NavLink>
          <NavLink href="/">Documentation</NavLink>
        </div>

        <div className="lg:w-1/3 block space-x-4 place-items-end text-right">
          <NavLink href="https://platform.panoramichq.com">Log in</NavLink>
          <Button>Sign up for free</Button>
        </div>
      </div>
    </header>
  );
}
