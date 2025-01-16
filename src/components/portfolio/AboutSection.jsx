import React from "react";

export function AboutSection() {
  return (
    <div className="max-md:max-w-full">
      <div className="flex gap-3 max-md:flex-col">
        <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow w-full text-6xl font-semibold tracking-tighter rounded-3xl bg-neutral-700 text-stone-300 max-md:mt-7 max-md:text-2xl">
            <div className="flex relative flex-col px-7 pt-8 pb-72 w-full rounded-none aspect-[0.736] max-md:px-5 max-md:pb-28 max-md:text-2xl">
              <img
                loading="lazy"
                src="/src/assets/elisefoto.png"
                className="object-cover mt-6 absolute inset-0 size-full"
                alt="Profile"
              />
              Elise Halmingh
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[72%] text-softPurple max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start px-14 py-20 mx-auto w-full rounded-3xl bg-stone-300 max-md:px-5 max-md:mt-7 max-md:max-w-full">
            <div className="flex flex-wrap gap-3 justify-between self-stretch max-md:max-w-full">
              <img
                loading="lazy"
                src="/src/assets/3purplestar.svg"
                className="object-contain shrink-0 aspect-[0.95] w-[86px]"
                alt="Icon 1"
              />
              <img
                loading="lazy"
                src="/src/assets/grayarrow.svg"
                className="object-contain shrink-0 self-start aspect-[0.96] w-[25px]"
                alt="Icon 2"
              />
            </div>
            <div className="mt-28 text-6xl font-bold tracking-tighter max-md:mt-10 max-md:text-4xl">
              About <span className="font-light">me</span>
            </div>
            <div className="mt-11 text-4xl font-light tracking-tighter max-w-[70%] max-md:mt-10 max-md:max-w-full">
              I'm a twenty two year old software development student who enjoys
              listening to music and drawing in my free time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
