"use client";

import { EVENT_PATHS } from "@/app/constants";
import { PathText } from "./PathText";

const Paths = () => {
  return (
    <section id="tracks" className="p-4 md:p-8">
      <div className="w-screen">
        {EVENT_PATHS.map((path, i) => {
          return <PathText heading={path.title} key={i} />;
        })}
      </div>
    </section>
  );
};

export default Paths;
