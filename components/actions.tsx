"use client"

import React from "react";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Link2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";

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
    const {mutate, loading} = useApiMutation(api.board.remove)
    const onCopyLink = () => {
        navigator.clipboard.writeText(
            `${window.location.origin}/board/${id}`
        )
            .then(()=> toast.success("Link copied to clipboard"))
            .catch(()=> toast.error("Failed to copy link"))
    }

    const onDelete = () => {
        mutate({id})
            .then(() => toast.success('Board deleted successfully'))
            .catch(() => toast.error("Failed to delete board"))
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
                    <DropdownMenuItem
                        className="p-3 cursor-pointer"
                        onClick={onDelete}
                    >
                        <Trash2 className="h-4 w-4 mr-2"/>
                        Delete
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}