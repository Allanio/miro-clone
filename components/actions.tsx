"use client"

import React from "react";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Link2 } from "lucide-react";
import { toast } from "sonner";

interface ActionsProps {
    children: React.ReactNode
    side?: DropdownMenuContentProps["side"]
    sideOffset?: DropdownMenuContentProps["sideOffset"]
    id: string
    title: string
}
export const Actions = ({
                            children,
                            side,
                            sideOffset,
                            id,
                            title
                        }: ActionsProps) => {
    const onCopyLink = () => {
        navigator.clipboard.writeText(
            `${window.location.origin}/board/${id}`
        )
            .then(()=> toast.success("Link copied to clipboard"))
            .catch(()=> toast.error("Failed to copy link"))
    }

    return (
        <div className="absolute z-50 top-1 right-1">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    {children}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    onClick={event => event.stopPropagation()}
                    side={side}
                    sideOffset={sideOffset}
                    className="w-60"
                >
                    <DropdownMenuItem
                        className="p-3 cursor-pointer"
                        onClick={onCopyLink}
                    >
                        <Link2 className="h-4 w-4 mr-2"/>
                        Copy board link
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}