import React from "react";

export function TechStack() {
  return (
    <div className="px-7 py-6 mt-7 rounded-3xl bg-softPurple max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10">
            <div className="self-start text-4xl font-medium tracking-tighter text-lightGray">
              I usually work with
            </div>
            <div className="flex gap-5 justify-between mt-9">
              <img
                loading="lazy"
                src="/src/assets/React.png"
                className="object-contain shrink-0 self-start w-20 aspect-[1.14]"
                alt="Tech 1"
              />
              <img
                loading="lazy"
                src="/src/assets/tailwind.png"
                className="object-contain shrink-0 my-auto aspect-[1.63] w-[60px]"
                alt="Tech 2"
              />
              <img
                loading="lazy"
                src="/src/assets/CSS.png"
                className="object-contain shrink-0 aspect-[0.77] w-[61px]"
                alt="Tech 3"
              />
              
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="/src/assets/Laravel.png"
            className="object-contain shrink-0 mt-20 aspect-[0.96] w-[67px] max-md:mt-10"
            alt="Tech 4"
          />
        </div>
      </div>
    </div>
  );
}
