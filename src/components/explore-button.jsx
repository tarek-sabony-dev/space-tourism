import Link from 'next/link';

export default function ExploreButton() {
  return (
    <Link href="/destination" className="group">
      <div className="relative">
        {/* Outer ring with hover effect */}
        <div className="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-500 ease-out scale-100 group-hover:scale-110"></div>
        
        {/* Main button */}
        <div className="relative bg-white rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[274px] lg:h-[274px] flex items-center justify-center cursor-pointer transition-all duration-500 ease-out group-hover:scale-105">
          {/* Inner glow effect */}
          <div className="absolute inset-2 bg-white/5 rounded-full blur-sm group-hover:bg-white/10 transition-all duration-500"></div>
          
          {/* Text */}
          <span className="relative text-preset-4 text-[#0B0D17] tracking-[2px] group-hover:tracking-[6px] transition-all duration-500 ease-out">
            EXPLORE
          </span>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-white/0 rounded-full group-hover:bg-white/5 transition-all duration-500 ease-out"></div>
        </div>
        
        {/* Additional glow effect on hover */}
        <div className="absolute inset-0 bg-white/0 rounded-full blur-2xl group-hover:bg-white/5 transition-all duration-700 ease-out scale-100 group-hover:scale-125"></div>
      </div>
    </Link>
  );
}
