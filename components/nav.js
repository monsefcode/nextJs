/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Logo from '../components/Logo';

const nav = () => {

    const navStyles = {
        nav: 'px-8 py-4 flex justify-between text-white mb-5',
        h1: 'text-3xl font-bold',
        ul: 'flex gap-8 items-center text-gray-400'
    };

    return (
        <nav className={navStyles.nav}>
            <h1 className={navStyles.h1}>
                <a href='/'>
                    LOGO
                </a>
            </h1>
            <ul className={navStyles.ul}>
                <li><a href='#'>Pricing</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Docs</a></li>
                <li><a href='#'>Discord</a></li>
            </ul>
            <button className='rounded-lg text-lg font-semibold bg-[#191919] px-4 py-2 hover:border-white hover:border'>Console</button>
        </nav>
    )
}

export default nav