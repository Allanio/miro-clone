"use client"
import Image from "next/image";
import { toast } from "sonner";
import { useOrganization } from "@clerk/nextjs";

import {api} from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";

export const EmptyBoards = () => {
    const {organization} = useOrganization()
    const {mutate, loading} = useApiMutation(api.board.create)

    const onClick = () => {
        if (!organization) return

        mutate({
            orgId: organization.id,
            title: "Untitled Board"
        })
            .then((id) => {
                toast.success("Board created successfully")
                // Todo: Redirect to the board
            })
            .catch((error) => {
                toast.error("Failed to create board")
            })
    }


    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Image
                src="/create.png"
                alt="Empty Boards"
                width={160}
                height={160}
            />
            <h2 className="mt-6 text-2xl font-semibold text-gray-700">Create your first board</h2>
            <p className="mt-2 text-sm text-gray-500">Start by creating a board to collaborate with your team</p>
            <div className="mt-4">
                <Button disabled={loading} onClick={onClick} size="lg"
                    className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                    Create Board
                </Button>
            </div>
        </div>
    );
}