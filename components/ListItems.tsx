"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { FaPlay } from "react-icons/fa";

interface ListItemsProps {
    image: string;
    name: string;
    href: string;
};

const ListItems: React.FC<ListItemsProps> = ({
    image,
    name,
    href
}) => {
    const router = useRouter();

    const onClick = () => {
        router.push(href);
    }

    return ( 
        <button
            className="relative flex items-center group rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 pr-4 transition"
            onClick={onClick}
        >
            <div className="min-h-[64px] min-w-[64px] relative">
                <Image 
                    src={image}
                    alt="image"
                    className="object-cover"
                    fill
                />
            </div>
            <p className="font-medium truncate py-5">
                {name}
            </p>
            <div className="absolute flex items-center justify-center transition opacity-0 rounded-full bg-teal-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
                <FaPlay className="text-black" />
            </div>
        </button>
    );
}
 
export default ListItems;