import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex w-dvw h-dvh bg-slate-400 text-cyan-400 justify-center items-center gap-4 cursor-wait">
      {/* <div className="transition rounded-full   size-5 bg-cyan-600 duration-0"></div> */}
      <Image
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain animate-ping"
        />
    </div>
  );
};

export default Loading;
