"use client";

import Background from "@/components/background";
import NavBar from "@/components/nav-bar";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Crew() {
  const crew = [
    {
      key: "douglas-hurley",
      role: "Commander",
      name: "Douglas Hurley",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: "/crew/douglas-hurley.png",
    },
    {
      key: "mark-shuttleworth",
      role: "Mission Specialist",
      name: "Mark Shuttleworth",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind Ubuntu. He became the first South African to travel to space as a space tourist in 2002.",
      image: "/crew/mark-shuttleworth.png",
    },
    {
      key: "victor-glover",
      role: "Pilot",
      name: "Victor Glover",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.",
      image: "/crew/victor-glover.png",
    },
    {
      key: "anousheh-ansari",
      role: "Flight Engineer",
      name: "Anousheh Ansari",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. She was the fourth self-funded space tourist and the first woman to self-fund a trip to the ISS.",
      image: "/crew/anousheh-ansari.png",
    },
  ];

  const [selectedKey, setSelectedKey] = useState(crew[0].key);
  const selectedCrewMember = useMemo(() => {
    return crew.find((m) => m.key === selectedKey) ?? crew[0];
  }, [selectedKey]);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden">
        <Background imageUrl={"background-images/crew-background.png"} />
        <NavBar />
        <div className="w-full h-screen overflow-hidden flex flex-col justify-center items-center">
          <div className="w-full h-full flex flex-col justify-center items-center gap-6 p-6 md:p-10 lg:p-12">
            <div className="w-full h-fit flex justify-center lg:justify-start items-center gap-6">
              <div className="text-preset-5 text-white/25">02</div>
              <div className="text-preset-5 text-white ">MEET YOUR CREW</div>
            </div>
            <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-8 px-6 md:px-12">
              <div className="w-full lg:w-1/2 h-fit flex flex-col justify-center items-center lg:items-start gap-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`crew-text-${selectedKey}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full flex flex-col gap-6"
                  >
                    <div className="w-full h-fit flex flex-col justify-center items-center lg:items-start gap-2">
                      <div className="w-full text-preset-4 text-white/50 text-center lg:text-start uppercase">
                        {selectedCrewMember.role}
                      </div>
                      <div className="w-full text-preset-3 text-white text-center lg:text-start uppercase">
                        {selectedCrewMember.name}
                      </div>
                    </div>
                    <div className="w-full text-preset-9 text-[#D0D6F9] text-center lg:text-start">
                      {selectedCrewMember.bio}
                    </div>
                  </motion.div>
                </AnimatePresence>
                <nav className="w-full h-fit mt-2 lg:mt-12">
                  <ul className="w-full h-fit flex justify-center lg:justify-start items-center gap-3">
                    {crew.map((member) => {
                      const isActive = selectedKey === member.key;
                      return (
                        <li key={`crew-dot-${member.key}`}>
                          <button
                            aria-label={member.name}
                            onClick={() => setSelectedKey(member.key)}
                            className={`rounded-full transition-opacity duration-200 w-[10px] h-[10px] lg:w-[14px] lg:h-[14px] ${
                              isActive ? "bg-white opacity-100" : "bg-white opacity-40 hover:opacity-70"
                            }`}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`crew-image-${selectedKey}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full max-w-[520px] lg:max-w-[560px]"
                  >
                    <div className="relative w-full flex justify-center lg:justify-end items-end">
                      <img
                        src={selectedCrewMember.image}
                        alt={selectedCrewMember.name}
                        className="block select-none pointer-events-none w-auto"
                        style={{ maxHeight: "1024px" }}
                      />
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 md:h-36 lg:hidden bg-gradient-to-b from-transparent to-[#0B0D17]"
                        aria-hidden="true"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
