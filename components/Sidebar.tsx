"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome, HiSearch } from "react-icons/hi";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            label: "Home",
            active: pathname !== "/search",
            href: "/",
            icon: HiHome
        },
        {
            label: "Search",
            active: pathname === "/search",
            href: "/search",
            icon: HiSearch

        }
    ], [pathname]);
    return ( 
        <div className="flex h-full">
            <div className="h-full w-[300px] md:flex flex-col hidden gap-y-2 bg-black p-2">

            </div>
        </div>
    );
}
 
export default Sidebar;