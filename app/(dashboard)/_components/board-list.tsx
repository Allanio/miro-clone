"use client"

import { EmptySearch } from "@/app/(dashboard)/_components/empty-search";
import { EmptyBoards } from "@/app/(dashboard)/_components/empty-boards";
import { EmptyFavourites } from "@/app/(dashboard)/_components/empty-favourites";

interface BoardListProps {
    orgId: string
    query: {
        search?: string
        favourites?: string
    }
}

export const BoardList = ({
                              orgId,
                              query
                          }: BoardListProps) => {
    const data = [] //TODO: Change to API call

    if (!data.length && query.search) {
        return (
            <EmptySearch/>
        )
    }

    if (!data.length && query.favourites) {
        return (
            <EmptyFavourites />
        )
    }

    if (!data.length) {
        return (
            <EmptyBoards />
        )
    }

    return (
        <div>
            {JSON.stringify(query)}
        </div>
    )
}