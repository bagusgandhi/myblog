import { useState } from 'react';
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Moon from './ui/icons/moon';
import Sun from './ui/icons/sun';
import Menu from './ui/icons/menu';

export default function Navbar(){
    const { theme, setTheme } = useTheme()
    const [open, setOpen] = useState(false);

    const menu = [
        {
            title: 'About',
            link: '/about'
        },
        {
            title: 'Posts',
            link: '/posts'
        },
        {
            title: 'Portfolio',
            link: '/tag/portfolio'
        },
        {
            title: 'Contact Me!',
            link: '/contact'
        },
    ];

    const themeModeHandler = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const themeMenuHandler = () => {
        setOpen(!open);

    }

    return (
        <>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between py-6 lg:py-10'>
                    <Link href="/">
                        <a className='flex items-center'>
                            {/* <span className='rounded-full p-4 bg-yellow'></span> */}
                            <p className='font-body text-2xl font-bold dark:text-white lg:block'>Gandhi.</p>
                        </a>
                    </Link>
                    
                    {/* web menu */}
                    <div className='lg:block'>
                        <ul className='flex items-center'>
                            {menu.map((m, i) => (
                                <li key={i}  className='hidden lg:block group relative mr-6 mb-1'>
                                    <Link href={m.link}>
                                        <a className='relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-secondary dark:text-white dark:group-hover:text-yellow' 
                                        >{m.title}</a>
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={themeModeHandler}
                                    className="p-2 text-white bg-black rounded-full dark:bg-white dark:text-black"
                                >{theme === 'light' ? <Moon /> : <Sun />}</button>
                            </li>
                            <li className='lg:hidden'>
                                <button
                                    className='p-2 ml-2'
                                    onClick={themeMenuHandler}
                                >
                                    <Menu />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* mobile menu */}
                <div className={`${open ? 'block' : 'hidden'} rounded-xl bg-black dark:bg-white mb-8 p-2`}>
                    <ul>
                        {menu.map((m, i) => (
                            <li key={i}  className='py-2 px-4'>
                                <Link href={m.link}>
                                    <a className='font-medium text-white dark:text-black'>{m.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}