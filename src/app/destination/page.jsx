import Background from "@/components/background";
import NavBar from "@/components/nav-bar";
import PlanetModel from "@/components/planet-model";

export default function Destination() {
  return (
    <>
      <div>
        <Background imageUrl={"background-images/destination-background.png"}/>
        <NavBar />
        {/* <div>
          <div className="w-full h-[500px] ">
            <PlanetModel texturePath="/planets-textures/moon.png" />
          </div>
        </div> */}
      </div>
    </>
  )
}
