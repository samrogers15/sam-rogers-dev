import Link from "next/link";
import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

const Navigation = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="sticky top-0 z-20 py-2 bg-white sm:w-screen md:w-screen lg:w-screen xl:w-screen 2xl:w-screen md:py-4 md:mb-4 dark:bg-black">
      <button
        className="inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
        onClick={handleClick}
      />
      <div className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
        <Link href="/">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            Sam Rogers Developer
          </a>
        </Link>
        <Link href="/">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            Home
          </a>
        </Link>
        <Link href="/skills">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            Skills
          </a>
        </Link>
        <Link href="/work">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            Recent Work
          </a>
        </Link>
        <Link href="/blog">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            Blog
          </a>
        </Link>
        <Link href="/about">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            About Me
          </a>
        </Link>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navigation;
