"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { IconType } from "react-icons";

interface SidebarItemsProps {
    label: string;
    href: string;
    active?: boolean;
    icon: IconType;
}

const SidebarItems: React.FC<SidebarItemsProps> = ({
    label,
    href,
    active,
    icon: Icon
}) => {
    return ( 
        <Link
            href={href}
            className={twMerge(`flex flex-row h-auto w-full items-center gap-x-4 text-bases font-medium cursor-pointer 
            hover:text-white transition text-neutral-400 py-1`, 
            active ? "text-white" : "")}
        >
            <Icon size={26} />
            <p className="w-full truncate">{label}</p>
        </Link>
    );
}
 
export default SidebarItems;