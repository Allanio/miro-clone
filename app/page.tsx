import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-4 ">
            <h1>Authenticated User!</h1>
            <div>
                <UserButton/>
            </div>
        </div>
    );
}
