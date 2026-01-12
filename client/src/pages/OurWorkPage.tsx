import React from "react";

export const OurWorkPage = (): JSX.Element => {
  return (
    <div className="bg-[#0b0b1e] min-h-screen w-full flex flex-col items-center py-10 overflow-x-hidden">
      {/* Top Banner Section */}
      <div className="w-full max-w-[1080px] px-4 mb-12">
        <img
          src="/figmaAssets/Zalani Collection NX.png"
          alt="Zalani Collection NX Banner"
          className="w-full h-auto rounded-lg shadow-2xl"
          data-testid="img-banner-top"
        />
      </div>

      {/* Hero Text Section */}
      <div className="flex flex-col items-center text-center max-w-[800px] px-4 mb-16 space-y-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
          Zalani Collection NX
        </h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Driving Zalani Collection NX’s digital presence through social media management and influencer marketing.
        </p>
      </div>

      {/* Influencer Reels Playbook Button/Badge */}
      <div className="mb-12">
        <img
          src="/figmaAssets/Inﬂuencer Reels Playbook.png"
          alt="Influencer Reels Playbook"
          className="h-16 w-auto"
          data-testid="img-playbook-badge"
        />
      </div>

      {/* Main Content Area (Arch/Container) */}
      <div className="relative w-full max-w-[900px] px-4 flex flex-col items-center">
        {/* The Purple/Dark Arch Shape Container */}
        <div className="relative w-full bg-[#1a1a3a] rounded-t-[200px] pt-24 pb-32 flex flex-col items-center shadow-inner border border-white/5">
          {/* Social Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[700px] px-8">
            <img
              src="/figmaAssets/Rectangle.png"
              alt="Social Post 1"
              className="w-full h-auto rounded-md hover-elevate transition-all"
              data-testid="img-post-1"
            />
            <img
              src="/figmaAssets/Rectangle-1.png"
              alt="Social Post 2"
              className="w-full h-auto rounded-md hover-elevate transition-all"
              data-testid="img-post-2"
            />
            <div className="relative">
              <img
                src="/figmaAssets/Rectangle.png"
                alt="Social Post 3"
                className="w-full h-auto rounded-md hover-elevate transition-all opacity-80"
                data-testid="img-post-3"
              />
              {/* Play button overlay if applicable based on the design screenshot */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                   <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Vectors/Logos (simulated) */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60">
             <img src="/figmaAssets/Vector.png" alt="Vector" className="h-6 w-auto" />
             <img src="/figmaAssets/Vector-1.png" alt="Vector" className="h-6 w-auto" />
             <img src="/figmaAssets/Vector-2.png" alt="Vector" className="h-6 w-auto" />
          </div>
        </div>
      </div>
      
      {/* Footer-like text or branding */}
      <div className="mt-16 text-gray-500 text-sm">
        © 2026 Zalani Collection NX. All rights reserved.
      </div>
    </div>
  );
};
