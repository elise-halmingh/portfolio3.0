import React from "react";
import { TechStack } from "./TechStack";

export function SpotifySection() {
  return (
    <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-7 max-md:max-w-full">
        {/* Spotify Playlist Card */}
        <div className="flex shrink-0 rounded-3xl bg-zinc-500 h-[642px] max-md:max-w-full">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/1LpC6OxaF3LOegJJeMUeri?utm_source=generator"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
            className="w-full h-full rounded-3xl"
          ></iframe>
        </div>
        {/* Tech Stack Section */}
        <TechStack />
      </div>
    </div>
  );
}
