import React from "react";

export const OurWorkPage = (): JSX.Element => {
  return (
    <div className="bg-[#0b0b1e] min-h-screen w-full flex justify-center overflow-x-hidden">
      <div 
        className="relative w-[1080px] h-[2059px] shrink-0 origin-top bg-[#0b0b1e]"
        style={{
          transform: 'scale(var(--page-scale, 1))',
        }}
      >
        {/* First Image: Top Banner */}
        <div 
          className="absolute left-0 top-0 w-full"
          style={{ height: '400px' }} // Height estimated from reference image, usually ~20% of 2059px
        >
          <img
            src="/attached_assets/Rectangle-1_1768199902013.png"
            className="w-full h-auto object-contain"
            alt="Zalani Collection NX Banner"
            data-testid="img-banner-top"
          />
        </div>
      </div>

      <style>{`
        div {
          --page-scale: 1;
        }
        @media (max-width: 1080px) {
          div {
            --page-scale: calc(100vw / 1080);
          }
        }
      `}</style>
    </div>
  );
};
