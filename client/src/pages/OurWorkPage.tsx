import React from "react";
import topBanner from "@assets/Rectangle-1_1768199902013.png";
import zalaniTitle from "@assets/Zalani_Collection_NX_1768200191549.png";
import digitalPresenceText from "@assets/Driving_Zalani_Collection_NX’s_digital_presence_through_social_1768200217260.png";
import influencerMarketingText from "@assets/managem_ent_and_inﬂuencer_marketing._1768200382633.png";
import archBackground from "@assets/Vector_1768200818418.png";
import socialGrid from "@assets/Rectangle_1768200818417.png";

// New images for the specific section
import playbookText from "@assets/Inﬂuencer_Reels_Playbook_1768201013387.png";
import playbookButtonBase from "@assets/Vector-3_1768201013387.png";
import playbookButtonShadow1 from "@assets/Vector-2_1768201013388.png";
import playbookButtonShadow2 from "@assets/Vector-1_1768201013388.png";

export const OurWorkPage = (): JSX.Element => {
  return (
    <div className="bg-white min-h-screen w-full flex justify-center overflow-x-hidden">
      <div 
        className="relative w-[1080px] h-[2059px] shrink-0 origin-top bg-white"
        style={{
          transform: 'scale(var(--page-scale, 1))',
        }}
      >
        {/* Top Banner */}
        <div 
          className="absolute left-0 top-0 w-full"
          style={{ height: '422px' }}
        >
          <img
            src={topBanner}
            className="w-full h-auto object-contain"
            alt="Zalani Collection NX Banner"
            data-testid="img-banner-top"
          />
        </div>

        {/* Zalani Collection NX Title */}
        <div 
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: '480px', width: '380px' }}
        >
          <img
            src={zalaniTitle}
            className="w-full h-auto object-contain"
            alt="Zalani Collection NX"
            data-testid="img-zalani-title"
          />
        </div>

        {/* Subtitle (Driving Zalani...) */}
        <div 
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: '560px', width: '680px' }}
        >
          <img
            src={digitalPresenceText}
            className="w-full h-auto object-contain"
            alt="Driving Zalani Collection NX's digital presence..."
            data-testid="img-digital-presence"
          />
        </div>

        {/* Management and Influencer Marketing (Smaller, closer to subtitle, space below) */}
        <div 
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: '600px', width: '420px' }}
        >
          <img
            src={influencerMarketingText}
            className="w-full h-auto object-contain"
            alt="management and influencer marketing"
            data-testid="img-influencer-marketing"
          />
        </div>

        {/* Arch Background Shape (Pushed down for more space) */}
        <div 
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: '665px', width: '820px' }}
        >
          <img
            src={archBackground}
            className="w-full h-auto object-contain"
            alt="Background Arch"
            data-testid="img-arch-bg"
          />
        </div>

        {/* Stacked Button Section (Pushed down with the arch) */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
          style={{ top: '615px', width: '450px' }}
        >
          {/* Main Button Base with Text */}
          <div className="relative w-full z-30">
            <img
              src={playbookButtonBase}
              className="w-full h-auto object-contain"
              alt="Button Base"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={playbookText}
                className="w-[80%] h-auto object-contain"
                alt="Influencer Reels Playbook"
                data-testid="img-playbook-text"
              />
            </div>
          </div>
          {/* Shadow Layers - Closer stacking with negative margins */}
          <div className="w-full flex flex-col items-center -mt-[105px]">
            <img
              src={playbookButtonShadow1}
              className="w-[98%] h-auto object-contain z-20"
              alt="Button Shadow 1"
            />
            <img
              src={playbookButtonShadow2}
              className="w-[96%] h-auto object-contain z-10 -mt-[105px]"
              alt="Button Shadow 2"
            />
          </div>
        </div>

        {/* Social Posts Grid (Pushed down accordingly) */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 z-10"
          style={{ top: '855px', width: '740px' }}
        >
          <img
            src={socialGrid}
            className="w-full h-auto object-contain shadow-2xl rounded-lg"
            alt="Social Posts Grid"
            data-testid="img-social-grid"
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
