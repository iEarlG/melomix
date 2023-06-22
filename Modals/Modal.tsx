"use client";

import * as Dialog from "@radix-ui/react-dialog";

import { IoClose } from "react-icons/io5";

interface ModalProps {
    children: React.ReactNode;
    title: string;
    description: string;
    isOpen: boolean;
    onChange: (open: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({
    children,
    title,
    description,
    isOpen,
    onChange,
}) => {
    return ( 
        <Dialog.Root
            open={isOpen}
            defaultOpen={isOpen}
            onOpenChange={onChange}
        >
            <Dialog.Portal

            >
                <Dialog.Overlay 
                    className="fixed inset-0 bg-neutral-900/90 backdrop-blur-sm"
                />
                <Dialog.Content
                    className="fixed w-full h-full max-h-full md:h-auto md:max-h-[85vh] md:w-[90vw] md:max-w-[450px] top-[50%] left-[50%]
                    border p-[25px] rounded-md border-neutral-700 bg-neutral-800 translate-x-[-50%] translate-y-[-50%] focus:outline-none drop-shadow-md"
                >
                    <Dialog.Title
                        className="text-center text-xl font-bold mb-2"
                    >
                        {title}
                    </Dialog.Title>
                    <Dialog.Description
                        className="text-center text-sm mb-5 leading-normal"
                    >
                        {description}
                    </Dialog.Description>

                    <div>
                        {children}
                    </div>

                    <Dialog.Close asChild>
                        <button
                            className="absolute h-[25px] w-[25px] items-center justify-center top-[10px] right-[10px] rounded-full text-neutral-400 hover:text-teal-500 focus:outline-none"
                        >
                            <IoClose />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
 
export default Modal;