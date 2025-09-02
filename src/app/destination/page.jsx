"use client";

import Background from "@/components/background";
import NavBar from "@/components/nav-bar";
import PlanetModel from "@/components/planet-model";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Destination() {
  const destinations = [
    { name: "moon", description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.", distance: "384,400 km", travelTime: "3 days" },
    { name: "mars", description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!", distance: "225 MIL. km", travelTime: "9 months" },
    { name: "jupiter", description: "A journey to the colossal king of our solar system. Witness the magnificent, swirling Great Red Spot—a storm larger than Earth that has raged for centuries. While a landing isn't possible, you'll experience the breathtaking beauty of its complex cloud bands and numerous moons.", distance: "778 MIL. KM", travelTime: "3 YEARS" },
  ];

  const [selectedName, setSelectedName] = useState(destinations[0].name);
  const selectedDestination = useMemo(() => {
    return destinations.find((d) => d.name === selectedName) ?? destinations[0];
  }, [selectedName, destinations]);


  return (
    <>
      <div className="">
        <Background imageUrl={"background-images/destination-background.png"}/>
        <NavBar />
        <div className="w-full h-full flex-col justify-center items-center gap-2 p-6 md:p-10 lg:p-12" >
          <div className="w-full h-full flex-col justify-center items-center gap-6 " >
            <div className="w-fit h-fit flex justify-center items-center gap-6">
              <div className="text-preset-5 text-white opacity-25">
                01
              </div>
              <div className="text-preset-5 text-white ">
                PICK YOUR DESTINATION
              </div>
            </div>
            <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-8">
              <div className="w-full h-[250px] md:h-[300px] lg:h-[500px] pt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`planet-${selectedName}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <PlanetModel texturePath={`/planets-textures/${selectedDestination.name}.png`}/>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <div className="w-full h-fit flex justify-center items-center md:px-24 lg:p-36">
                  <div className="w-full h-fit flex flex-col justify-center items-start gap-4">
                    <nav className="w-full h-fit ">
                      <ul className="w-full h-fit flex justify-center items-center lg:justify-start gap-8 text-white uppercase">
                        {destinations.map((item) => {
                          const isActive = selectedName === item.name;
                          return (
                            <li key={`desk-${item.name}`} className="relative">
                              <button
                                onClick={() => setSelectedName(item.name)}
                                aria-current={isActive ? "page" : undefined}
                                className={`relative pb-3 md:pb-6 flex items-center gap-2 text-preset-8 ${
                                  isActive ? "text-white" : "text-white/70 hover:text-white"
                                } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-white after:transition-opacity after:duration-200 ${
                                  isActive ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-50"
                                }`}
                              >
                                {item.name.toUpperCase()}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`content-${selectedName}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flex flex-col gap-6"
                      >
                        <div className="w-full h-fit text-preset-2 text-white text-center lg:text-start">
                          {selectedDestination.name.toUpperCase()}
                        </div>
                        <div className="w-full h-fit text-preset-9 text-[#D0D6F9] text-center lg:text-start">
                          {selectedDestination.description}
                        </div>
                        <div className="w-full h-[1px] bg-white/25"/>
                        <div className="w-full h-fit flex flex-col md:flex-row justify-center items-center gap-6">
                          <div className="w-full h-fit flex flex-col justify-center items-center lg:items-start gap-3">
                            <div className="text-preset-7 text-[#D0D6F9] uppercase">
                              AVG. DISTANCE
                            </div>
                            <div className="text-preset-6 text-white uppercase">
                              {selectedDestination.distance}
                            </div>
                          </div>
                          <div className="w-full h-fit flex flex-col justify-center items-center lg:items-start gap-3">
                            <div className="text-preset-7 text-[#D0D6F9] uppercase">
                              Est. travel time
                            </div>
                            <div className="text-preset-6 text-white uppercase">
                              {selectedDestination.travelTime}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
