import React, { useEffect, useMemo } from "react";
import { offersData } from "@/data/data";
import ShinyText from "@/components/animated/ShinyText";
import AnimatedContent from "@/components/animated/AnimatedContent";
import IconComponent from "@/components/ui/Icon";
import GradientText from "@/components/animated/GradientText";

/* =========================
   Accent style maps + utils
   ========================= */
const ACCENT = "#0bf40a"; // your neon green

const TIER_ACCENTS = {
  bronze: "bg-gradient-to-br from-[#8a5a2b] via-[#a56b35] to-[#6e451f] text-white",
  silver: "bg-gradient-to-br from-[#d7d7d7] via-[#bfbfbf] to-[#9a9a9a] text-[#111]",
  gold: "bg-gradient-to-br from-[#d4af37] via-[#f2cf62] to-[#b88a00] text-[#111]",
  platinum: "bg-gradient-to-br from-[#b9bcc6] via-[#9aa0b5] to-[#7d84a1] text-white",
};

const formatCurrency = (num) =>
  typeof num === "number" ? `$ ${num.toLocaleString("en-US", { maximumFractionDigits: 0 })}` : String(num || "");

const daysLeft = (isoDate) => {
  if (!isoDate) return null;
  const end = new Date(isoDate + "T23:59:59");
  const now = new Date();
  const ms = end - now;
  const d = Math.ceil(ms / (1000 * 60 * 60 * 24));
  return d > 0 ? d : 0;
};

const Offers = () => {
  useEffect(() => {
    document.title = "Zipphy | Offers";
  }, []);

  const derived = useMemo(
    () =>
      offersData.map((offer) => ({
        ...offer,
        remainingDays: daysLeft(offer.validUntil),
      })),
    []
  );

  return (
    <div className="relative">
      {/* Decorative background (hero-less): subtle grid + glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.18) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full blur-3xl"
          style={{ backgroundColor: ACCENT + "33" }}
        />
        <div className="absolute top-1/3 -right-20 w-[380px] h-[380px] rounded-full blur-3xl bg-cyan-500/20" />
        <div
          className="absolute bottom-0 left-1/3 w-[460px] h-[460px] rounded-full blur-3xl"
          style={{ backgroundColor: ACCENT + "1A" }}
        />
      </div>

      <div className="container mx-auto px-4 py-8 space-y-12">
        {derived.map((offer, index) => (
          <React.Fragment key={offer.id}>
            {/* ===================== HEADER CARD ===================== */}
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={index % 2 === 0}
              config={{ tension: 50, friction: 25 }}
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.1}
            >
              <div className="relative overflow-hidden rounded-3xl p-6 md:p-10 shadow-xl shadow-black/30 ring-1 ring-white/10 bg-gradient-to-b from-[#0a0f18]/70 to-[#0a0d14]/70 backdrop-blur-md">
                {/* ===== Desktop floating TAG (top-right) ===== */}
                {offer.ribbon && (
                  <div className="hidden md:flex absolute top-6 right-6">
                    <div
                      className="flex items-center gap-2 rounded-full px-4 py-1.5 bg-black/60 backdrop-blur-md ring-1 ring-white/10 shadow-lg shadow-black/40 border border-transparent"
                      style={{
                        borderColor: ACCENT + "44",
                        boxShadow: `0 0 15px ${ACCENT}33`,
                      }}
                    >
                      <IconComponent icon="mdi:offer" width={18} style={{ color: ACCENT }} />
                      <span className="text-xs md:text-sm font-semibold text-white/90">{offer.ribbon.labelPrefix}</span>
                      <span className="text-xs md:text-sm font-extrabold" style={{ color: ACCENT }}>
                        {offer.ribbon.dateLabel}
                      </span>
                    </div>
                  </div>
                )}

                {/* ===== Desktop floating DAYS-LEFT (bottom-right) ===== */}
                {offer.remainingDays !== null && (
                  <div className="hidden md:block absolute bottom-6 right-6">
                    <GradientText
                      showBorder
                      className="px-4 py-2 text-xs md:text-sm"
                      colors={[ACCENT, "#22d3ee", ACCENT]}
                      animationSpeed={9}
                    >
                      {offer.remainingDays > 0 ? `${offer.remainingDays} days left` : "Ends today"}
                    </GradientText>
                  </div>
                )}

                {/* Title + Intro */}
                <div className="max-w-4xl">
                  <ShinyText
                    text={offer.title}
                    textColor={ACCENT + "bb"}
                    shineColor={ACCENT}
                    className="text-2xl md:text-[2rem] font-bold leading-tight"
                  />

                  {/* ===== Mobile inline chips under title ===== */}
                  <div className="mt-3 flex flex-wrap gap-2 md:hidden">
                    {offer.ribbon && (
                      <div
                        className="flex items-center gap-2 rounded-full px-3 py-1 bg-black/60 backdrop-blur-md ring-1 ring-white/10 shadow-md border border-transparent"
                        style={{
                          borderColor: ACCENT + "44",
                          boxShadow: `0 0 10px ${ACCENT}22`,
                        }}
                      >
                        <IconComponent icon="mdi:offer" width={16} style={{ color: ACCENT }} />
                        <span className="text-[11px] font-semibold text-white/90">{offer.ribbon.labelPrefix}</span>
                        <span className="text-[11px] font-extrabold" style={{ color: ACCENT }}>
                          {offer.ribbon.dateLabel}
                        </span>
                      </div>
                    )}

                    {offer.remainingDays !== null && (
                      <GradientText
                        showBorder
                        className="px-3 py-1 text-[11px]"
                        colors={[ACCENT, "#22d3ee", ACCENT]}
                        animationSpeed={9}
                      >
                        {offer.remainingDays > 0 ? `${offer.remainingDays} days left` : "Ends today"}
                      </GradientText>
                    )}
                  </div>

                  {offer.intro?.map((p, i) => (
                    <p key={i} className="mt-4 text-sm md:text-base text-justify text-slate-200/90">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Accent underline */}
                <div
                  className="mt-6 h-px w-full"
                  style={{
                    background: "linear-gradient(90deg, transparent, " + ACCENT + ", transparent)",
                  }}
                />
              </div>
            </AnimatedContent>

            {/* ===================== TIERS (TICKETS) ===================== */}
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={index % 2 !== 0}
              config={{ tension: 50, friction: 25 }}
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.1}
            >
              <div className="rounded-3xl p-5 md:p-6 shadow-xl shadow-black/30 ring-1 ring-white/10 bg-black/60 backdrop-blur-sm">
                <div className="mb-5">
                  <h3 className="text-lg md:text-xl font-bold" style={{ color: ACCENT }}>
                    Loan Tiers
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300">
                    Each loan tier is tailored to suit different trading needs and account levels.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {offer.tiers?.map((tier, tIdx) => (
                    <div
                      key={`${tier.name}-${tIdx}`}
                      className={`relative rounded-2xl p-5 md:p-6 shadow-md shadow-black/40 ring-1 ring-white/5 transition-transform duration-200 hover:-translate-y-0.5 ${
                        TIER_ACCENTS[tier.accent] || "bg-[#111] text-white"
                      }`}
                      style={{
                        clipPath:
                          "polygon(0% 10px, 10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px))",
                        boxShadow: "0 12px 24px rgba(0,0,0,.35)",
                      }}
                    >
                      {/* perforation dots */}
                      <div
                        className="absolute inset-y-3 left-0 w-[10px] bg-repeat-y opacity-40"
                        style={{
                          backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                          color: "rgba(255,255,255,.45)",
                          backgroundSize: "8px 10px",
                          backgroundPosition: "center",
                        }}
                      />
                      <div
                        className="absolute inset-y-3 right-0 w-[10px] bg-repeat-y opacity-40"
                        style={{
                          backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                          color: "rgba(255,255,255,.45)",
                          backgroundSize: "8px 10px",
                          backgroundPosition: "center",
                        }}
                      />

                      <div className="flex items-center justify-between gap-3">
                        <div className="text-base md:text-lg font-semibold tracking-wide">{tier.name}</div>
                        <div className="flex items-center gap-2 text-2xl md:text-3xl font-extrabold tracking-wide">
                          {formatCurrency(tier.amount)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedContent>

            {/* ===================== CONTACT PANEL ===================== */}
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={index % 2 === 0}
              config={{ tension: 50, friction: 25 }}
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.1}
            >
              <div className="rounded-3xl p-5 md:p-6 shadow-xl shadow-black/30 ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
                <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: ACCENT }}>
                  Contact your Account Manager :
                </h3>
                <ul className="space-y-3">
                  {offer.contactPoints?.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm md:text-base text-slate-200/90">
                      <span
                        className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5"
                        style={{ boxShadow: `0 0 0 1px ${ACCENT}55`, color: ACCENT }}
                      >
                        <IconComponent icon="mdi:check" width={14} />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContent>

            {/* ===================== KEY NOTES ===================== */}
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={index % 2 !== 0}
              config={{ tension: 50, friction: 25 }}
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.1}
            >
              <div className="rounded-3xl p-5 md:p-6 shadow-xl shadow-black/30 ring-1 ring-white/10 bg-gradient-to-b from-[#0b1220]/80 to-[#0b0f17]/80 backdrop-blur-md">
                <h4 className="text-base md:text-lg font-bold mb-3" style={{ color: ACCENT }}>
                  Key Notes:
                </h4>
                <ol className="space-y-3">
                  {offer.keyNotes?.map((note, nIdx) => (
                    <li key={nIdx} className="flex items-start gap-3 text-sm md:text-base text-slate-200/90">
                      <span
                        className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/5 font-semibold"
                        style={{ boxShadow: `0 0 0 1px ${ACCENT}55`, color: ACCENT }}
                      >
                        {nIdx + 1}
                      </span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </AnimatedContent>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Offers;
