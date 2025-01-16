import React from "react";

export function Header() {
  return (
    <div className="flex flex-wrap gap-5 justify-between px-12 py-4 w-full text-5xl font-medium tracking-tighter rounded-3xl bg-softPurple text-stone-900 max-md:px-5 max-md:max-w-full max-md:text-4xl">
      <img
        loading="lazy"
        src="/src/assets/eliselogo.jpg"
        className="object-contain shrink-0 aspect-[0.9] w-[87px]"
        alt="Logo"
      />
      <div className="flex gap-10 self-start mt-5 max-md:text-4xl">
        <div className="basis-auto max-md:text-4xl">about</div>
        <div className="basis-auto max-md:text-4xl">contact</div>
      </div>
    </div>
  );
}
