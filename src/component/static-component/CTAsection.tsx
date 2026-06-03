type CTASectionProps = {
  title: string;
  description: string;
  primaryBtnText: string;
  secondaryBtnText: string;
};

export default function CTASection({
  title,
  description,
  primaryBtnText,
  secondaryBtnText,
}: CTASectionProps) {
  return (
    <section className="px-6 pb-12 lg:pb-24">
      <div
        className="
          max-w-7xl
          mx-auto
          rounded-[40px]
          bg-linear-to-r
          from-[#0F2B46]
          via-[#163A5C]
          to-[#1E4D7B]
          px-10
          py-24
          text-center
          text-white
          relative
          overflow-hidden
        "
      >
        {/* BLUR EFFECT */}
        <div className="absolute top-0 right-0 h-96 w-96 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-6xl font-black leading-tight">
            {title}
          </h2>

          <p className="text-lg text-blue-100 leading-relaxed mt-8 max-w-3xl mx-auto">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 mt-12">
            <button
              className="
                h-14
                px-8
                rounded-2xl
                bg-white
                text-[#0F2B46]
                font-black
                hover:scale-[1.02]
                transition-all
                duration-200
              "
            >
              {primaryBtnText}
            </button>

            <button
              className="
                h-14
                px-8
                rounded-2xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-md
                text-white
                font-black
                hover:bg-white/20
                transition-all
                duration-200
              "
            >
              {secondaryBtnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}