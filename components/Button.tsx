"use client";

import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    children,
    disabled,
    className,
    type="button",
    ...props
}, ref) => {
    return (
        <button
            type={type}
            className={twMerge(`w-full rounded-full bg-teal-500 border border-transparent px-3 py-3 
            disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-75 text-black font-bold transition`,
            className)}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
});

Button.displayName = "Button"
 
export default Button;