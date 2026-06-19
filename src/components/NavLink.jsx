import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname();
    const isActive =href === pathname;
    return (
        <div>
            <Link href={href} className={`${isActive ? "font-bold border-b-2 border-b-cyan-600 text-purple-600" : ""}`}>{children}</Link>
        </div>
    );
};

export default NavLink;