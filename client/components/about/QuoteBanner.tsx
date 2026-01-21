interface QuoteBannerProps {
  text: string;
  variant?: 'purple' | 'rounded';
}

export default function QuoteBanner({ text, variant = 'purple' }: QuoteBannerProps) {
  if (variant === 'rounded') {
    return (
      <section className="w-full px-6 lg:px-14 mb-24 lg:mb-36">
        <div className="max-w-6xl mx-auto h-[204px] rounded-xl bg-nexar-purple relative overflow-hidden flex items-center justify-center">
          {/* Decorative SVG */}
          <svg 
            className="absolute left-2.5 -top-24 w-[644px] h-[416px] opacity-19"
            viewBox="0 0 644 416" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              opacity="0.19" 
              d="M0.10229 0C-2.39771 76.5 40.0023 229.5 229.602 229.5C466.602 229.5 737.602 156 611.102 415.5" 
              stroke="black" 
              strokeWidth="75" 
              strokeLinecap="round"
            />
          </svg>
          
          <p className="relative z-10 text-white font-poppins text-2xl lg:text-[28px] font-normal leading-[146%] text-left max-w-[990px] px-8 lg:px-16">
            {text}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full h-[204px] bg-nexar-purple relative overflow-hidden flex items-center justify-center mb-24 lg:mb-36">
      {/* Decorative SVG */}
      <svg 
        className="absolute left-2.5 -top-24 w-[644px] h-[416px]"
        viewBox="0 0 644 416" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          opacity="0.19" 
          d="M0.10229 0C-2.39771 76.5 40.0023 229.5 229.602 229.5C466.602 229.5 737.602 156 611.102 415.5" 
          stroke="black" 
          strokeWidth="75" 
          strokeLinecap="round"
        />
      </svg>
      
      <p className="relative z-10 text-white font-poppins text-2xl lg:text-[28px] font-normal leading-[146%] text-left max-w-[1161px] px-8 lg:px-16">
        {text}
      </p>
    </section>
  );
}
