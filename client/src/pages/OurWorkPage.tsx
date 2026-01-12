import React from "react";

export const OurWorkPage = (): JSX.Element => {
  return (
    <div className="bg-[#0b0b1e] min-h-screen w-full relative overflow-x-hidden flex flex-col items-center">
      {/* Container to mimic the 1080px wide Figma canvas */}
      <div className="w-[1080px] h-[1970px] relative shrink-0 scale-[0.3] sm:scale-[0.5] md:scale-[0.8] lg:scale-100 origin-top">
        
        {/* Background / Arch Shape (Vector-9 seems to be the main arch background) */}
        <img 
          src="/figmaAssets/Vector-9.png" 
          className="absolute top-[600px] left-1/2 -translate-x-1/2 w-[800px] h-auto z-0"
          alt=""
        />

        {/* Top Banner */}
        <img
          src="/figmaAssets/Zalani Collection NX.png"
          className="absolute top-0 left-0 w-[1080px] h-auto z-10"
          alt="Banner"
          data-testid="img-banner"
        />

        {/* Main Text Content */}
        <div className="absolute top-[520px] left-0 w-full flex flex-col items-center z-20">
           <img 
             src="/figmaAssets/Driving Zalani Collection NX’s digital presence through social m edia.png"
             className="h-[24px] mb-2"
             alt="Driving Zalani Collection NX..."
           />
           <img 
             src="/figmaAssets/managem ent and inﬂuencer marketing..png"
             className="h-[20px]"
             alt="management and influencer marketing"
           />
        </div>

        {/* Influencer Reels Playbook Badge */}
        <img
          src="/figmaAssets/Inﬂuencer Reels Playbook.png"
          className="absolute top-[680px] left-1/2 -translate-x-1/2 w-[400px] h-auto z-30"
          alt="Playbook Badge"
          data-testid="img-playbook"
        />

        {/* Social Posts Grid (Absolute positions based on visual) */}
        <div className="absolute top-[850px] left-1/2 -translate-x-1/2 w-[700px] grid grid-cols-3 gap-4 z-40">
           <img
             src="/figmaAssets/Rectangle.png"
             className="w-full h-auto rounded-lg shadow-lg"
             alt="Post 1"
           />
           <img
             src="/figmaAssets/Rectangle-1.png"
             className="w-full h-auto rounded-lg shadow-lg"
             alt="Post 2"
           />
           <img
             src="/figmaAssets/Rectangle.png"
             className="w-full h-auto rounded-lg shadow-lg"
             alt="Post 3"
           />
        </div>

        {/* Decorative Vectors (bottom section) */}
        <div className="absolute bottom-[200px] left-0 w-full flex justify-center gap-12 z-20">
           <img src="/figmaAssets/Vector.png" className="h-8" alt="" />
           <img src="/figmaAssets/Vector-1.png" className="h-8" alt="" />
           <img src="/figmaAssets/Vector-2.png" className="h-8" alt="" />
           <img src="/figmaAssets/Vector-3.png" className="h-8" alt="" />
           <img src="/figmaAssets/Vector-4.png" className="h-8" alt="" />
        </div>

      </div>
    </div>
  );
};
