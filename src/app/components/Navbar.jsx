'use client';

import './Navbar.css';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';

export default function Navbar () {
  const useScrollDown = () => {
    const [scrollDirection, setScrollDirection] = useState ('');

    const toggleScrollDirection = () => {
      let scrollY = window.scrollY;
      if (scrollY > 10) {
        setScrollDirection ('scroll-down');
      } else {
        setScrollDirection ('');
      }
    };

    useEffect (() => {
      window.addEventListener ('scroll', toggleScrollDirection);
      return () => {
        window.removeEventListener ('scroll', toggleScrollDirection);
      };
    });

    return scrollDirection;
  };

  const scrollDown = useScrollDown ();

  return (
    <div className={`navbar ${scrollDown}`}>
      <div className={`navbar-logo`}>
        <Link href="/">
          <Image
            src={'/images/lublio_logo_w.png'}
            width={80}
            height={26}
            alt={'Lublio Logo'}
          />
        </Link>
      </div>
      <ul className={`navbar-menu`}>
        <li>
          <Link href="/learn">Learn</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
