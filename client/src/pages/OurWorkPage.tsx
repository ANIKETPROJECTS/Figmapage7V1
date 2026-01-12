export const OurWorkPage = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full bg-[#0A0B1A] flex flex-col items-center py-20 px-4">
      {/* Hero Banner */}
      <div className="w-full max-w-4xl mb-16">
        <img
          src="/figmaAssets/Rectangle.png"
          className="w-full h-auto rounded-lg shadow-2xl"
          alt="Zalani Collection NX Banner"
        />
      </div>

      {/* Description Text */}
      <div className="text-center max-w-2xl mb-12 space-y-2">
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Driving Zalani Collection NX's digital presence through social media
        </p>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          management and influencer marketing.
        </p>
      </div>

      {/* Influencer Reels Playbook Button/Badge */}
      <div className="relative mb-16">
        <div className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
          Influencer Reels Playbook
        </div>
      </div>

      {/* Arched Container with Reels */}
      <div className="relative w-full max-w-3xl aspect-[3/4] bg-[#1A1B2E] rounded-t-[200px] p-8 md:p-12 shadow-inner overflow-hidden">
        <div className="grid grid-cols-3 gap-4 h-full">
          <div className="relative h-full">
            <img 
              src="/figmaAssets/Vector-1.png" 
              className="w-full h-full object-cover rounded-xl"
              alt="Reel 1"
            />
          </div>
          <div className="relative h-full">
            <img 
              src="/figmaAssets/Vector-2.png" 
              className="w-full h-full object-cover rounded-xl"
              alt="Reel 2"
            />
          </div>
          <div className="relative h-full">
            <img 
              src="/figmaAssets/Vector-3.png" 
              className="w-full h-full object-cover rounded-xl"
              alt="Reel 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
