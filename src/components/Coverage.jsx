import React from "react";

import brazil from "../assets/flags/brazil.png";
import canada from "../assets/flags/canada.png";
import colombia from "../assets/flags/colombia.png";
import france from "../assets/flags/france.png";
import germany from "../assets/flags/germany.png";
import japan from "../assets/flags/japan.png";
import mexico from "../assets/flags/mexico.png";
import UAE from "../assets/flags/UAE.png";
import UK from "../assets/flags/UK.png";
// import worldMap from "../assets/worldmap.jpeg";


export default function Coverage() {
  const countries = [
    { name: "France", flag: france },
    { name: "Germany", flag: germany },
    { name: "Mexico", flag: mexico },
    { name: "Japan", flag: japan },
    { name: "Brazil", flag: brazil },
    { name: "150+ more", flag: null}, // no image
    { name: "Canada", flag: canada },
    { name: "UK", flag: UK },
    { name: "Colombia", flag: colombia },
    { name: "UAE", flag: UAE },
  ];

  const rotations = ["-rotate-10", "rotate-5", "-rotate-10", "rotate-5", "-rotate-10", "rotate-5"];

  return (
    <section className="text-center  ">
      <div className="bg-[url('/worldmap.jpeg')] bg-center bg-cover px-6 py-16"> 
        <p className="inline-block border border-white bg-white px-4 py-2 rounded-full text-s font-medium text-gray-800 mb-4 -mt-3">The world is your oyster.</p>
        <h2 className="text-6xl font-extralight font-serif mb-5 mt-5 ">
          Our coverage? <br /> Glad you asked.
        </h2>
        <p className="text-gray-600 mb-8">
          Experience premium 5G coverage across the US, <br /> and 150+ countries.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {countries.map((c, i) => (
          <React.Fragment key={i}>
            <span
              className={`flex items-center gap-2 px-3 py-1 bg-white border rounded-full shadow text-sm whitespace-nowrap transform ${rotations[i % rotations.length]}`}
            >
              {c.flag && (
                <img
                  src={c.flag}
                  alt={c.name}
                  className="w-5 h-5 rounded-full object-cover"
                />
              )}
              {c.name}
            </span>

            {c.name === "150+ more" && <div className="w-full" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}