"use client";

import Background from "@/components/background";
import NavBar from "@/components/nav-bar";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Technology() {
  const technology = [
    {
      key: "launch-vehicle",
      title: "Launch vehicle",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: "/technology/launch-vehicle.png",
    },
    {
      key: "spaceport",
      title: "Spaceport",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of Earth's rotation for launch.",
      image: "/technology/spaceport.png",
    },
    {
      key: "space-capsule",
      title: "Space capsule",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: "/technology/space-capsule.png",
    },
  ];

  const [selectedKey, setSelectedKey] = useState(technology[0].key);
  const selectedTechnology = useMemo(() => {
    return technology.find((t) => t.key === selectedKey) ?? technology[0];
  }, [selectedKey]);

  return (
    <>
      <div className="fixed inset-0 overflow-auto lg:overflow-hidden">
        <Background imageUrl={"background-images/technology-background.png"} />
        <NavBar />

        <div className="w-full h-full flex flex-col items-center">
          <div className="w-full h-full flex flex-col gap-6 p-6 md:p-10 lg:p-12">
            <div className="w-full h-fit flex justify-center lg:justify-start items-center gap-6">
              <div className="text-preset-5 text-white/25">03</div>
              <div className="text-preset-5 text-white">SPACE LAUNCH 101</div>
            </div>

            <div className="w-full h-full flex flex-col-reverse lg:flex-row items-center gap-8 px-6 md:px-12 ">
              <div className="w-full lg:w-1/2 h-full flex flex-col lg:flex-row items-center gap-6">
                <nav className="w-full lg:w-auto h-fit order-1 lg:order-none "> 
                  <ul className="w-full h-fit flex justify-center lg:justify-start items-center gap-4 lg:flex-col lg:gap-6">
                    {technology.map((item, index) => {
                      const isActive = selectedKey === item.key;
                      return (
                        <li key={`tech-dot-${item.key}`}>
                          <button
                            aria-label={item.title}
                            onClick={() => setSelectedKey(item.key)}
                            className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border border-white/25 text-white text-preset-4 leading-none flex items-center justify-center transition-colors duration-200 cursor-pointer ${
                              isActive
                                ? "bg-white text-black border-white"
                                : "hover:border-white/60"
                            }`}
                          >
                            <div className={`${
                              isActive
                                ? "text-black"
                                : "hover:border-white/60"
                            }`}>
                              {index + 1}
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`tech-text-${selectedKey}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full lg:flex-1 flex flex-col gap-4"
                  >
                    <div className="text-preset-4 text-white/50  text-center lg:text-left uppercase">
                      THE TERMINOLOGY...
                    </div>
                    <div className="text-preset-3 text-white text-center lg:text-left uppercase">
                      {selectedTechnology.title}
                    </div>
                    <div className="text-preset-9 text-[#D0D6F9] text-center lg:text-left">
                      {selectedTechnology.description}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`tech-image-${selectedKey}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full flex justify-center lg:justify-end "
                  >
                    <img
                      src={selectedTechnology.image}
                      alt={selectedTechnology.title}
                      className="block w-full h-auto max-w-[720px] object-cover select-none pointer-events-none"
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
