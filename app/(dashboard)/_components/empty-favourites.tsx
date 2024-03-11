import Image from "next/image";

export const EmptyFavourites = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Image
                src="/empty-favourite.png"
                alt="Empty Favourites"
                width={160}
                height={160}
            />
            <h2 className="mt-6 text-2xl font-semibold text-gray-700">No favourite boards!</h2>
            <p className="mt-2 text-sm text-gray-500">Try adding a board to your favourites</p>
        </div>
    );
}