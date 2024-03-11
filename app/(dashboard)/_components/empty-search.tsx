import Image from "next/image";

export const EmptySearch = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Image
                src="/search.png"
                alt="Empty Search"
                width={160}
                height={160}
            />
            <h2 className="mt-6 text-2xl font-semibold text-gray-700">No results found!</h2>
            <p className="mt-2 text-sm text-muted-foreground textg-sm text-gray-500">Try searching for something else</p>
        </div>
    );
}