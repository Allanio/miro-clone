"use client"

import { EmptyOrg } from "@/app/(dashboard)/_components/empty-org";
import { BoardList } from "@/app/(dashboard)/_components/board-list";
import { useOrganization } from "@clerk/nextjs";

// import { EmptyBoards } from "@/app/(dashboard)/_components/empty-boards";

interface DashboardPageProps {
    searchParams: {
        search?: string,
        favourites?: string
    }
}

const DashboardPage = ({searchParams}: DashboardPageProps) => {
    const {organization} = useOrganization()

    return (
        <div className="flex-1 h-[calc(100%-80px)] p-6">
            {!organization ? (
                <EmptyOrg/>
            ) : (
                <BoardList
                    orgId={organization.id}
                    query={searchParams} />
            )}
        </div>
    );
}

export default DashboardPage;
