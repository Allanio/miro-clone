import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex felx-col items-center justify-center">
      <Image
          src="/logo.svg"
          alt="loading"
          width={120}
          height={120}
          className="animate-pulse duration-700"
      />
    </div>
  );
}

export default Loading;