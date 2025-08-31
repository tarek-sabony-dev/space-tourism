import Background from "@/components/background";
import NavBar from "@/components/nav-bar";
import ExploreButton from "@/components/explore-button";

export default function Home() {
  return (
    <>
      <div className=" ">
        <Background imageUrl={"background-images/home-background.png"} className="hidden lg:block " />
        <Background imageUrl={"background-images/home-background-sm.png"} className="block lg:hidden " />
        <NavBar />
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-12 p-10 md:px-10 md:py-32 lg:p-48 ">
          <div className="w-full h-full flex flex-col items-center justify-between gap-6 ">
            <div className="w-full h-fit text-preset-6 text-center lg:text-start text-[#D0D6F9] ">
              SO, YOU WANT TO TRAVEL TO
            </div>
            <div className="w-full h-fit text-preset-1 text-center lg:text-start text-white ">
              SPACE
            </div>
            <div className="w-full h-fit text-preset-9 text-center lg:text-start text-[#D0D6F9] ">
              Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
            </div>
          </div>
          <div className="w-full h-full flex justify-center lg:justify-end items-center">
            <ExploreButton />
          </div>
        </div>
      </div>
    </>
  )
}
