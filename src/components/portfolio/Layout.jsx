import React from "react";
import { Header } from "./Header";
import { SpotifySection } from "./SpotifySection";
import { MainContent } from "./MainContent";

export function Layout() {
  return (
    <div className="flex overflow-hidden flex-col px-8 py-8 bg-stone-900 h-screen max-md:px-5">
      <Header />
      <div className="mt-7 max-md:mr-1.5 max-md:max-w-full">
        <div className="flex gap-3 max-md:flex-col">
          <SpotifySection />
          <MainContent />
        </div>
      </div>
    </div>
  );
}
