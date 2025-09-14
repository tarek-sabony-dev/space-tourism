import Background from "@/components/background";
import NavBar from "@/components/nav-bar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="h-screen overflow-hidden lg:overflow-hidden">
        <Background imageUrl={"background-images/home-background.png"} className="hidden lg:block" />
        <Background imageUrl={"background-images/home-background-sm.png"} className="block lg:hidden" />
        <NavBar />
        
        <div className="w-full h-screen flex flex-col items-center justify-center gap-8 p-10">
          {/* 404 Number */}
          <div className="text-preset-1 text-white text-center">
            404
          </div>
          
          {/* Error Message */}
          <div className="text-preset-3 text-white text-center">
            PAGE NOT FOUND
          </div>
          
          {/* Description */}
          <div className="text-preset-9 text-[#D0D6F9] text-center max-w-md">
            Looks like this page has drifted off into the void of space. Don't worry, we'll help you navigate back to familiar territory.
          </div>
          
          {/* Navigation Options */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link 
              href="/"
              className="text-preset-8 text-white hover:text-[#D0D6F9] transition-colors duration-200 border border-white/20 hover:border-white/40 px-6 py-3 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10"
            >
              RETURN HOME
            </Link>
            <Link 
              href="/destination"
              className="text-preset-8 text-white hover:text-[#D0D6F9] transition-colors duration-200 border border-white/20 hover:border-white/40 px-6 py-3 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10"
            >
              EXPLORE DESTINATIONS
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
