import { Star } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from "@/components/ui/button";

interface FooterProps {
    isFavourite: boolean
    title: string
    authorLabel: string
    createdAtLabel: string
    onClick: () => void
    disabled: boolean
}

export const Footer = ({
                           isFavourite,
                           title,
                           authorLabel,
                           createdAtLabel,
                           onClick,
                           disabled
                       }: FooterProps) => {
    return (
        <div className="relative p-3 bg-white">
                <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
                <p className="opacity-0 group:hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate">
                    {authorLabel}, {createdAtLabel}
                </p>
            <button
                disabled={disabled}
                onClick={onClick}
                className={cn(
                    "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600 ",
                    disabled && "cursor-not-allowed opacity-75"
                )} >

                <Star className={cn(
                    "w-5 h-5",
                    isFavourite && "fill-blue-600 text-blue-600"

                )} />
            </button>
        </div>
    );
}