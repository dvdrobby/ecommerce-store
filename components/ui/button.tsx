import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = 'button',
    ...props
}, ref) => {
    return(
        <button className={cn(
            `
            w-auto
            rounded-full
            bg-black
            border-transparent
            px-5
            py-3
            text-white
            font-semibold
            hover:opacity-75
            disabled:cursor-not-allowed
            disabled:opacity-50
            transition
            `, 
            className
        )}>
            {children}
        </button>
    )
});


export default Button;