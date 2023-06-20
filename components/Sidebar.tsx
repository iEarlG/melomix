"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { AiOutlineHome } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

import Box from "./Box";
import SidebarItems from "./SidebarItems";
import Library from "./Library";

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
            icon: AiOutlineHome
        },
        {
            label: "Search",
            active: pathname === "/search",
            href: "/search",
            icon: BiSearchAlt

        }
    ], [pathname]);
    return ( 
        <div className="flex h-full">
            <div className="h-full w-[300px] md:flex flex-col hidden gap-y-2 bg-[#030303] p-2">
                <Box>
                    <div className="flex flex-col gap-y-4 px-5 py-4">
                        {routes.map((item) => (
                            <SidebarItems
                                key={item.label}
                                {...item}
                            />
                        ))}
                    </div>
                </Box>
                <Box className="h-full overflow-y-auto">
                    <Library />
                </Box>
            </div>
            <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
        </div>
    );
}
 
export default Sidebar;