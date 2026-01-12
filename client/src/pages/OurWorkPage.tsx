import React from "react";

export const OurWorkPage = (): JSX.Element => {
  return (
    <div className="bg-[#0b0b1e] w-full flex justify-center">
      {/* 
        Container that mimics the Figma canvas (1080px x 2059px).
        We use relative positioning for the container and absolute for children.
        Scaling is applied to fit the screen while maintaining the design aspect ratio.
      */}
      <div 
        className="relative w-[1080px] h-[2059px] shrink-0 origin-top bg-[#0b0b1e] overflow-hidden"
        style={{
          transform: 'scale(var(--page-scale, 1))',
        }}
      >
        {/* Top Banner (Rectangle from CSS) */}
        <div 
          className="absolute left-0 right-0 top-0 overflow-hidden"
          style={{ bottom: '80.58%' }}
        >
          <img
            src="/figmaAssets/Zalani Collection NX.png"
            className="w-full h-full object-cover"
            alt="Zalani Collection NX"
            data-testid="img-banner"
          />
        </div>

        {/* Main Arch Background (Vector Background) */}
        <div 
          className="absolute"
          style={{ 
            left: '9.07%', 
            right: '8.97%', 
            top: '32.14%', 
            bottom: '4.3%',
            background: '#1A144A',
            borderRadius: '200px 200px 0 0'
          }}
        />

        {/* Zalani Collection NX Text */}
        <div 
          className="absolute flex items-center justify-center text-center"
          style={{ 
            left: '32.4%', 
            right: '30.47%', 
            top: '20.51%', 
            bottom: '77.02%'
          }}
        >
          <span style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '42.18px',
            color: '#FFFFFF' // Changed to white as it's on a dark background in the screenshot
          }}>
            Zalani Collection NX
          </span>
        </div>

        {/* Driving Zalani... Image/Text */}
        <div 
          className="absolute"
          style={{ 
            left: '19%', 
            right: '24.34%', 
            top: '24.23%', 
            bottom: '74.66%' 
          }}
        >
          <img 
            src="/figmaAssets/Driving Zalani Collection NX’s digital presence through social m edia.png" 
            className="w-full h-full object-contain"
            alt="Driving Zalani Collection NX..."
          />
        </div>

        {/* management and influencer marketing... Image/Text */}
        <div 
          className="absolute"
          style={{ 
            left: '31.6%', 
            right: '35.16%', 
            top: '26.24%', 
            bottom: '72.64%' 
          }}
        >
          <img 
            src="/figmaAssets/managem ent and inﬂuencer marketing..png" 
            className="w-full h-full object-contain"
            alt="management and influencer marketing"
          />
        </div>

        {/* Influencer Reels Playbook Badge */}
        <div 
          className="absolute"
          style={{ 
            left: '32.98%', 
            right: '29.89%', 
            top: '30.88%', 
            bottom: '67.18%' 
          }}
        >
          <img 
            src="/figmaAssets/Inﬂuencer Reels Playbook.png" 
            className="w-full h-full object-contain"
            alt="Influencer Reels Playbook"
          />
        </div>

        {/* Social Post Grid Image (Rectangle) */}
        <div 
          className="absolute overflow-hidden"
          style={{ 
            left: '15.38%', 
            right: '15.12%', 
            top: '41.67%', 
            bottom: '37.56%' 
          }}
        >
          <div className="grid grid-cols-3 gap-4 w-full h-full">
            <img 
              src="/figmaAssets/Rectangle.png" 
              className="w-full h-full object-cover rounded-lg"
              alt="Social Post 1"
            />
            <img 
              src="/figmaAssets/Rectangle-1.png" 
              className="w-full h-full object-cover rounded-lg"
              alt="Social Post 2"
            />
            <img 
              src="/figmaAssets/Rectangle.png" 
              className="w-full h-full object-cover rounded-lg"
              alt="Social Post 3"
            />
          </div>
        </div>

        {/* Decorative Vectors (Simulated based on footer positions) */}
        <div 
          className="absolute flex gap-12 justify-center"
          style={{ 
            left: '5.53%', 
            right: '5.53%', 
            top: '71.25%', 
            bottom: '28.69%' 
          }}
        >
           <img src="/figmaAssets/Vector.png" className="h-full object-contain" alt="" />
           <img src="/figmaAssets/Vector-1.png" className="h-full object-contain" alt="" />
           <img src="/figmaAssets/Vector-2.png" className="h-full object-contain" alt="" />
           <img src="/figmaAssets/Vector-3.png" className="h-full object-contain" alt="" />
        </div>
      </div>

      <style jsx>{`
        div {
          --page-scale: 1;
        }
        @media (max-width: 1080px) {
          div {
            --page-scale: ${'calc(100vw / 1080)'};
          }
        }
      `}</style>
    </div>
  );
};
