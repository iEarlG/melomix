"use client";


import { LuLibrary } from "react-icons/lu";
import { HiOutlinePlusSm } from "react-icons/hi";

const Library = () => {
    const onClick = () => {

    };

    return ( 
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <LuLibrary size={23} className="text-neutral-400" />
                    <p className="text-neutral-400 font-medium text-base">Your Library</p>
                </div>
                <HiOutlinePlusSm 
                    size={20}
                    onClick={onClick} 
                    className="text-neutral-400 cursor-pointer hover:text-white transition"
                />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">
                List of Songs
            </div>
        </div>
    );
}
 
export default Library;