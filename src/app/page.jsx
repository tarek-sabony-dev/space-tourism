import Background from "@/components/background";
import NavBar from "@/components/nav-bar";

export default function Home() {
  return (
    <>
      <div>
        <Background imageUrl={"background-images/home-background.png"} className="hidden lg:block " />
        <Background imageUrl={"background-images/home-background-sm.png"} className="block lg:hidden " />
        <NavBar />
      </div>
    </>
  )
}
