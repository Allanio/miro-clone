"use client"

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { BoardCard } from "@/app/(dashboard)/_components/board-card";

interface NewBoardButtonProps {
    orgId: string
    disabled?: boolean
}

export const NewBoardButton = ({orgId, disabled}: NewBoardButtonProps) => {
    const {mutate, loading} = useApiMutation(api.board.create)

    const onClick = () => {
        mutate({
            orgId,
            title: "Untitled Board"
        })
            .then((id) => {
                toast.success("Board created successfully")
                // TODO: Redirect to the board/`id`
            })
            .catch((error) => {
                toast.error("Failed to create board")
            })
    }

    return (
        <button
            disabled={loading || disabled}
            onClick={onClick}
            className={cn("col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6 text-white",
                (loading || disabled) && "cursor-not-allowed opacity-75 hover:bg-blue-600"
            )}
        >
            <div className="mt-2">
                <Plus className="w-12 h-12 text-white stroke-1"/>
            </div>
            <p className="mt-2 text-sm font-light">Create Board</p>
        </button>
    );
}