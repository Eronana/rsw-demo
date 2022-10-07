import React, { useState } from 'react';
import Container from './container';
import Logo from './logo';
import Link from 'next/link';
export default function Navbar() {
  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Portfolio', href: '/portfolio' },
    { title: 'Services', href: '/services' },
    { title: 'Contact', href: '/contact' },
  ];
  const [menu, setMenu] = useState(false);
  const buttonIcon = menu ? 'close.svg' : 'menu.svg';
  return <Container background>
    <div className='flex justify-between items-center py-5.25 md:py-8'>
      <Logo/>
      <img src={buttonIcon} className='right-0 md:hidden cursor-pointer' onClick={() => setMenu(!menu)}/>
      <div className={`flex ${menu ? 'absolute' : 'hidden' } items-center justify-center top-[92px] left-0 bg-primary md:flex md:static md:w-auto md:h-auto w-full h-full flex-col md:flex-row gap-7.5 text-white font-work-sans text-xl`}>
        {menuItems.map(({title, href}, idx) => <Link href={href}><a
          className={idx === 0 ? 'mt-[-200px] md:mt-auto' : ''}
          key={idx}
          onClick={() => setMenu(false)}
        >{title}
        </a></Link>)}
      </div>
    </div>
  </Container>;
}
