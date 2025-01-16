import React from "react";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";

export function MainContent() {
  return (
    <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-7 max-md:max-w-full">
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
}
