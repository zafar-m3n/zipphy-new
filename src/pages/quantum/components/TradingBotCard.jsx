import React from "react";
import ShinyText from "@/components/animated/ShinyText";
import GradientText from "@/components/animated/GradientText";

const TradingBotCard = ({ bot }) => {
  return (
    <div className="relative flex flex-col p-8 rounded-xl bg-opacity-30 bg-[#f2f2f2] border border-[#0bf40a] shadow-xl backdrop-blur-md mb-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0bf40a] to-[#010101] opacity-20 rounded-xl" />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 mb-4">
        <div>
          <div className="flex items-center flex-wrap gap-4">
            <ShinyText
              text={bot.name}
              textColor="#0bf40abb"
              shineColor="#0bf40a"
              className="text-2xl md:text-[2rem] font-bold"
            />

            {/* ===================== EXCLUSIVE OFFER RIBBON (code-only) ===================== */}
            {bot.exclusive && (
              <div className="relative isolate -rotate-1 select-none" role="img" aria-label="Exclusive offer">
                <div className="flex items-start">
                  {/* Megaphone with sound rays (inline SVG) */}
                  <svg className="h-7 w-7 mr-1 drop-shadow" viewBox="0 0 64 64" aria-hidden="true">
                    <defs>
                      <linearGradient id="megaphoneGrad" x1="0" x2="1">
                        <stop offset="0%" stopColor="#ff2d55" />
                        <stop offset="100%" stopColor="#ff0044" />
                      </linearGradient>
                    </defs>
                    {/* cone */}
                    <path d="M8 22 L44 14 L44 50 L8 42 Z" fill="url(#megaphoneGrad)" />
                    {/* mouth ring */}
                    <path d="M44 14 L58 12 L58 52 L44 50 Z" fill="#ff2d55" />
                    {/* handle */}
                    <rect x="18" y="38" width="9" height="16" rx="2" fill="#ffffff" opacity="0.95" />
                    {/* sound rays */}
                    <path
                      d="M60 18 L64 16 M60 32 L66 32 M60 46 L64 48"
                      stroke="#ff2d55"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Stacked ribbons */}
                  <div className="relative ml-1">
                    {/* EXCLUSIVE (top) */}
                    <span className="relative block">
                      <span className="absolute inset-0 -skew-x-12 rounded-md bg-gradient-to-r from-rose-600 via-rose-500 to-pink-500 shadow-[0_10px_24px_rgba(244,63,94,0.35)]" />
                      <span className="relative z-10 px-4 py-1 text-white text-xs sm:text-sm font-black tracking-[0.18em] uppercase drop-shadow-[0_1px_0_rgba(0,0,0,.45)]">
                        Exclusive
                      </span>
                      {/* right tail */}
                      <span className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-rose-700" />
                      {/* subtle bottom layer for depth */}
                      <span className="absolute inset-0 -z-10 translate-y-[4px] -skew-x-12 rounded-md bg-rose-900/60 blur-[0.4px]" />
                    </span>

                    {/* OFFER! (bottom, slightly offset) */}
                    <span className="relative block mt-1 ml-2">
                      <span className="absolute inset-0 -skew-x-12 rounded-md bg-gradient-to-r from-rose-600 via-rose-500 to-pink-500 brightness-110" />
                      <span className="relative z-10 px-4 py-1 text-white text-sm sm:text-base font-extrabold uppercase tracking-wider drop-shadow-[0_1px_0_rgba(0,0,0,.45)]">
                        Offer!
                      </span>
                      <span className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-rose-700" />
                      {/* faint glow */}
                      <span className="pointer-events-none absolute -inset-1 -z-10 rounded-md bg-rose-500/30 blur-lg motion-safe:animate-pulse" />
                    </span>
                  </div>
                </div>
              </div>
            )}
            {/* ============================================================================= */}
          </div>
          <p className="mt-1 text-sm text-white">{bot.level}</p>
        </div>

        <div className="text-3xl font-bold text-white">
          <GradientText
            colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
            animationSpeed={3}
            showBorder={true}
            className="px-4 py-2 !mx-0"
          >
            ${bot.price}
          </GradientText>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[#f2f2f2] text-sm">
        <div>
          <h3 className="font-semibold mb-1">Supported Markets</h3>
          <p className="mb-4">{bot.supportedMarkets.join(", ")}</p>
          <div className="border-t border-[#0bf40a] my-4" />
          <h3 className="font-semibold mb-1">Duration</h3>
          <p>{bot.duration}</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Specifications</h3>
          <ul className="list-disc list-inside space-y-1">
            {bot.specifications.map((spec, i) => (
              <li key={i}>{spec}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Risk Management</h3>
          <p className="mb-4">{bot.riskManagement}</p>
          <div className="border-t border-[#0bf40a] my-4" />
          <h3 className="font-semibold mb-1">Profit Optimization</h3>
          <p>{bot.profitOptimization}</p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Cashback / Bonus</h3>
          <p className="mb-4">{bot.cashbackBonus}</p>
          <div className="border-t border-[#0bf40a] my-4" />
          <h3 className="font-semibold mb-1">ROI</h3>
          <p>{bot.roi}</p>
        </div>
      </div>

      {/* --- Special Note (red, standout, no dismiss) --- */}
      {bot.specialNote && (
        <aside
          role="alert"
          aria-live="polite"
          className="relative mt-6 rounded-xl border border-yellow-500/70 bg-[#2a0b0b]/10 text-yellow-100"
        >
          {/* soft red glow */}
          <div className="pointer-events-none absolute -inset-px -z-10 rounded-xl bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 opacity-30 blur-xl motion-safe:animate-pulse" />
          <div className="relative grid grid-cols-[auto,1fr] gap-3 p-4">
            <div className="flex items-start pt-0.5">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-yellow-300 text-yellow-200 font-extrabold">
                !
              </span>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider font-semibold text-yellow-300/90">Special Note</p>
              <p className="mt-1 leading-relaxed">{bot.specialNote}</p>
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 w-1 rounded-l-xl bg-gradient-to-b from-yellow-500 via-amber-400 to-orange-400" />
        </aside>
      )}
    </div>
  );
};

export default TradingBotCard;
