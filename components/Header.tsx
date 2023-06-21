"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { BiChevronLeft, BiChevronRight, BiSearchAlt } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

import Button from "./Button";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const router = useRouter();
    
    const handleLogOut = () => {

    };

    return ( 
        <div className={twMerge(`h-fixed bg-gradient-to-b from-teal-800 p-6`, className)}>
            <div className="w-full flex items-center justify-between mb-4">
                <div className="hidden md:flex items-center gap-x-2">
                    <button 
                        className="flex items-center justify-center rounded-full hover:opacity-75 bg-[#030303] transition"
                        onClick={() => router.back()}
                    >
                        <BiChevronLeft size={28} className="text-white" />
                    </button>
                    <button 
                        className="flex items-center justify-center rounded-full hover:opacity-75 bg-[#030303] transition"
                        onClick={() => router.forward()}
                    >
                        <BiChevronRight size={28} className="text-white" />
                    </button>
                </div>
                <div className="flex items-center md:hidden gap-x-2">
                    <button 
                            className="flex items-center justify-center rounded-full p-2 bg-white hover:opacity-75 transition"
                            onClick={() => {}}
                        >
                            <AiOutlineHome size={20} className="text-[#030303]" />
                        </button>
                    <button 
                            className="flex items-center justify-center rounded-full p-2 bg-white hover:opacity-75 transition"
                            onClick={() => {}}
                        >
                            <BiSearchAlt size={20} className="text-[#030303]" />
                    </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    <>
                        <div>
                            <Button
                                className="bg-transparent text-neutral-300 font-medium"
                                onClick={() => {}}
                            >
                                Sign up
                            </Button>
                        </div>
                        <div>
                            <Button
                                className="bg-white px-6 py-2"
                                onClick={() => {}}
                            >
                                Login
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    );
}
 
export default Header;