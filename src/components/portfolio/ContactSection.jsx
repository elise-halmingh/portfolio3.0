import React from "react";

export function ContactSection() {
  return (
    <div className="mt-7 max-md:max-w-full">
      <div className="flex gap-3 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-7 py-11 mx-auto w-full rounded-3xl bg-softPurple max-md:px-5 max-md:mt-7 max-md:max-w-full">
            <div className="flex flex-wrap gap-3 justify-between max-md:max-w-full">
              <img
                loading="lazy"
                src="/src/assets/star.svg"
                className="object-contain shrink-0 aspect-square w-[52px]"
                alt="Icon 3"
              />
              <img
                loading="lazy"
                src="/src/assets/grayarrow.svg"
                className="object-contain shrink-0 self-start mt-1.5 aspect-[0.96] w-[25px]"
                alt="Icon 4"
              />
            </div>
            <div className="self-start mt-7 text-5xl font-light tracking-tighter text-stone-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Romanticizing <br></br>your digital{" "}
              <span className="font-semibold">space.</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-6 py-5 mx-auto w-full rounded-3xl bg-deepGray text-lightGray max-md:px-5 max-md:mt-7 max-md:max-w-full">
            <div className="flex flex-wrap gap-3 justify-between text-6xl font-extralight tracking-tighter max-md:max-w-full max-md:text-4xl">
              <div className="max-md:max-w-full max-md:text-4xl">
                <span className="text-7xl font-medium text-lightGray">
                  Contact
                </span>{" "}
                <span className="text-7xl text-lightGray">me</span>
              </div>
              <img
                loading="lazy"
                src="/src/assets/purplearrow.svg"
                className="object-contain shrink-0 my-auto aspect-[0.96] w-[25px]"
                alt="Icon 5"
              />
            </div>
            <div className="flex flex-wrap gap-3 justify-between mt-20 text-4xl font-light tracking-tighter max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="/src/assets/purplestar.svg"
                className="object-contain shrink-0 aspect-[0.97] w-[66px]"
                alt="Icon 6"
              />
              <div className="my-auto">got questions?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
