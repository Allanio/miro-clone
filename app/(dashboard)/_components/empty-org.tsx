import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs"

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogTrigger,
    DialogContent
} from "@/components/ui/dialog";
import { Damion } from "next/dist/compiled/@next/font/dist/google";

export const EmptyOrg = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Image
                src="/create.png"
                alt="Empty Organisation"
                width={160}
                height={160}
            />
            <h2 className="mt-2 text-2xl font-semibold text-gray-700">Welcome to Mira</h2>
            <p className="mt-2 text-sm text-gray-500">Create an organisation to get started</p>
            <div className="mt-6">
                <Dialog>
                    <DialogTrigger asChild>
                        <button
                            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                            Create Organisation
                        </button>
                    </DialogTrigger>
                    <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                        <CreateOrganization />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}