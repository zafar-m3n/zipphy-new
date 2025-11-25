import React, { useEffect, useMemo, useState } from "react";
import { offersData } from "@/data/data";
import ShinyText from "@/components/animated/ShinyText";
import AnimatedContent from "@/components/animated/AnimatedContent";
import IconComponent from "@/components/ui/Icon";
import GradientText from "@/components/animated/GradientText";
import TextGenerateEffect from "@/components/animated/TextGenerate";

/* =========================
   Accent style maps + utils
   ========================= */
const ACCENT = "#0bf40a"; // neon green

const TIER_ACCENTS = {
  bronze: "bg-gradient-to-br from-[#8a5a2b] via-[#a56b35] to-[#6e451f] text-white",
  silver: "bg-gradient-to-br from-[#d7d7d7] via-[#bfbfbf] to-[#9a9a9a] text-[#111]",
  gold: "bg-gradient-to-br from-[#d4af37] via-[#f2cf62] to-[#b88a00] text-[#111]",
  platinum: "bg-gradient-to-br from-[#b9bcc6] via-[#9aa0b5] to-[#7d84a1] text-white",
};

const formatCurrency = (num) =>
  typeof num === "number" ? `$${num.toLocaleString("en-US", { maximumFractionDigits: 0 })}` : String(num || "");

const daysLeft = (isoDate) => {
  if (!isoDate) return null;
  const end = new Date(isoDate + "T23:59:59");
  const now = new Date();
  const ms = end - now;
  const d = Math.ceil(ms / (1000 * 60 * 60 * 24));
  return d > 0 ? d : 0;
};

/* =========================
   Holiday / Cashback data
   ========================= */
const SPECIAL_OFFER_TIERS = [
  { amount: 5000, accountLabel: "Pro account", botLabel: "Advanced Bot" },
  { amount: 10000, accountLabel: "Pro Plus account", botLabel: "Pro-Level Bot" },
  { amount: 20000, accountLabel: "Premium account", botLabel: "Premium-Level Bot" },
  { amount: 35000, accountLabel: "Premium Plus account", botLabel: "Elite Bot" },
  { amount: 50000, accountLabel: "VIP Elite account", botLabel: "Exclusive Bot" },
];

const CASHBACK_TIERS = [
  { invest: 15000, cashback: "75% Cashback" },
  { invest: 20000, cashback: "100% Cashback" },
  { invest: 30000, cashback: "125% Cashback" },
];

const Offers = () => {
  const [activeTab, setActiveTab] = useState("standard"); // "standard" | "holiday"

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
      {/* ===================== GLOBAL BACKGROUND ===================== */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.16) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full blur-3xl"
          style={{ backgroundColor: ACCENT + "33" }}
        />
        <div className="absolute top-1/3 -right-24 w-[380px] h-[380px] rounded-full blur-3xl bg-[rgba(34,211,238,0.16)]" />
        <div
          className="absolute bottom-0 left-1/3 w-[460px] h-[460px] rounded-full blur-3xl"
          style={{ backgroundColor: ACCENT + "1A" }}
        />
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* ===================== TABS ===================== */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setActiveTab("standard")}
            className={`rounded-full px-4 py-2 text-xs md:text-sm font-medium border transition-all ${
              activeTab === "standard"
                ? "border-[rgba(11,244,10,0.7)] bg-black/60 text-slate-50 shadow-lg shadow-black/50"
                : "border-white/10 bg-black/30 text-slate-300 hover:border-white/30"
            }`}
          >
            Standard Offers
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("holiday")}
            className={`rounded-full px-4 py-2 text-xs md:text-sm font-medium border transition-all ${
              activeTab === "holiday"
                ? "border-[rgba(11,244,10,0.7)] bg-black/60 text-slate-50 shadow-lg shadow-black/50"
                : "border-white/10 bg-black/30 text-slate-300 hover:border-white/30"
            }`}
          >
            Holiday Event & Cashback
          </button>
        </div>

        {/* ===================== TAB CONTENT ===================== */}
        {activeTab === "standard" ? <StandardOffersLayout derived={derived} /> : <HolidayOffersLayout />}
      </div>
    </div>
  );
};

/* =======================================================================
   TAB 1: ORIGINAL / STANDARD OFFERS LAYOUT (offersData)
   ======================================================================= */

const StandardOffersLayout = ({ derived }) => {
  return (
    <div className="space-y-12">
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
  );
};

/* =======================================================================
   TAB 2: HOLIDAY UPGRADE + CASHBACK LAYOUT (your second version)
   ======================================================================= */

const HolidayOffersLayout = () => {
  return (
    <div className="space-y-14 lg:space-y-16">
      {/* ================================================================
          SECTION 1: HOLIDAY UPGRADE EVENT
      ================================================================ */}
      <AnimatedContent
        distance={60}
        direction="horizontal"
        reverse={false}
        config={{ tension: 50, friction: 25 }}
        animateOpacity
      >
        <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-b from-[#050812]/95 via-[#03040a]/95 to-black/90 shadow-[0_25px_80px_rgba(0,0,0,0.75)] ring-1 ring-white/10 backdrop-blur-2xl px-5 py-7 md:px-10 md:py-9 space-y-8">
          {/* TOP STRIP: chip + meta */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center justify-between">
            <GradientText
              showBorder
              className="px-4 py-1.5 text-[11px] md:text-xs"
              colors={[ACCENT, "#22d3ee", ACCENT]}
              animationSpeed={10}
            >
              Thanksgiving & Black Friday · Upgrade Event
            </GradientText>

            <div className="flex flex-wrap items-center gap-3 text-[11px] md:text-xs text-slate-300">
              <span className="inline-flex items-center gap-1">
                <IconComponent icon="mdi:clock-outline" width={14} />
                Until{" "}
                <span className="font-semibold" style={{ color: ACCENT }}>
                  30.11.2025
                </span>
              </span>
              <span className="hidden md:inline-block h-3 w-px bg-slate-600/70" />
              <span className="inline-flex items-center gap-1">
                <IconComponent icon="mdi:account-group" width={14} />
                For active investors
              </span>
            </div>
          </div>

          {/* HERO GRID */}
          <div className="grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] items-start">
            {/* LEFT: heading + one short paragraph + chips */}
            <div className="space-y-4">
              <TextGenerateEffect
                words="Upgrade once. Unlock pro-level bots for free."
                className="text-[1.7rem] md:text-[2.1rem] leading-tight"
                duration={0.4}
                animated
                multiColored
              />

              <p className="text-[13px] md:text-sm text-slate-200/90">
                Choose a tier, upgrade your capital during the holiday window, and receive free activation of the
                matching trading bot.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 mt-3">
                <FeatureChip icon="mdi:robot-excited-outline" title="Automated" text="Bots trade for you." />
                <FeatureChip icon="mdi:lightning-bolt-outline" title="One-time" text="Single upgrade step." />
                <FeatureChip icon="mdi:shield-check-outline" title="Tiered" text="Pick your level." />
              </div>
            </div>

            {/* RIGHT: compact summary card */}
            <aside className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-transparent to-black/40 px-5 py-5 md:px-6 md:py-6 shadow-[0_20px_55px_rgba(0,0,0,0.9)]">
              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[rgba(11,244,10,0.12)] blur-3xl" />
              <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-[rgba(34,211,238,0.16)] blur-3xl" />

              <div className="relative space-y-4">
                <h3 className="text-sm md:text-base font-semibold text-slate-100 flex items-center gap-2">
                  <IconComponent icon="mdi:sparkles" width={18} />
                  Holiday Upgrade Snapshot
                </h3>

                <div className="space-y-3 text-[11px] md:text-xs text-slate-200/90">
                  <SummaryRow icon="mdi:calendar-range" label="Event window" value="Until 30 November 2025" />
                  <SummaryRow
                    icon="mdi:trending-up"
                    label="Mechanism"
                    value="Upgrade to a tier and receive the linked bot for free."
                  />
                </div>

                <div className="pt-3 border-t border-white/10 space-y-2">
                  <p className="text-[11px] md:text-xs text-slate-300">
                    Contact your account manager or reach us directly:
                  </p>
                  <GradientText
                    showBorder
                    className="px-3 py-2 text-[11px] md:text-xs"
                    colors={[ACCENT, "#22d3ee", ACCENT]}
                    animationSpeed={9}
                  >
                    +44 7360 545857
                  </GradientText>
                </div>
              </div>
            </aside>
          </div>

          {/* UPGRADE TIERS */}
          <div className="mt-8 space-y-4">
            <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">
              <h3 className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-slate-300">
                Upgrade tiers & bots
              </h3>

              <p className="text-[11px] md:text-xs text-slate-400 flex items-center gap-2">
                <span className="h-1 w-6 rounded-full bg-[rgba(11,244,10,0.6)]" />
                One tier · One complimentary bot
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {SPECIAL_OFFER_TIERS.map((tier, idx) => (
                <SpecialTierCard key={idx} tier={tier} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* ================================================================
          SECTION 2: CASHBACK OFFER
      ================================================================ */}
      <AnimatedContent
        distance={60}
        direction="horizontal"
        reverse
        config={{ tension: 50, friction: 25 }}
        animateOpacity
      >
        <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-b from-black/90 via-[#020308]/95 to-[#020617]/95 shadow-[0_25px_80px_rgba(0,0,0,0.85)] ring-1 ring-white/10 backdrop-blur-2xl px-5 py-7 md:px-10 md:py-9 space-y-8">
          {/* top chips */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center justify-between">
            <GradientText
              showBorder
              className="px-4 py-1.5 text-[11px] md:text-xs"
              colors={[ACCENT, "#22d3ee", ACCENT]}
              animationSpeed={11}
            >
              Thanksgiving & Black Friday Cashback
            </GradientText>

            <div className="flex flex-wrap items-center gap-2 text-[11px] md:text-xs text-slate-300">
              <span className="inline-flex items-center gap-1">
                <IconComponent icon="mdi:cash-refund" width={14} />
                Cashback on qualifying investments
              </span>
            </div>
          </div>

          {/* header text */}
          <div className="max-w-3xl space-y-3">
            <TextGenerateEffect
              words="Invest once. Earn structured cashback."
              className="text-[1.6rem] md:text-[2rem] leading-tight"
              duration={0.4}
              animated
              multiColored
            />

            <p className="text-[13px] md:text-sm text-slate-200/90">
              Selected investment amounts qualify for a one-time cashback under this holiday program.
            </p>
          </div>

          {/* cashback cards */}
          <div className="mt-3 grid gap-4 md:gap-5 md:grid-cols-3">
            {CASHBACK_TIERS.map((row, idx) => (
              <CashbackCard key={idx} row={row} index={idx} />
            ))}
          </div>

          {/* footer notes */}
          <div className="mt-5 space-y-1 text-[11px] md:text-xs text-slate-400">
            <p>
              <span className="font-semibold">Offer period:</span> until 30 November 2025.
            </p>
            <p>
              <span className="font-semibold">Availability:</span> first 500,000 qualifying customers.
            </p>
            <p>
              Contact your account manager or reach us at{" "}
              <span className="font-semibold text-[rgba(11,244,10,0.9)]">+44 7360 545857</span> for details.
            </p>
          </div>
        </section>
      </AnimatedContent>
    </div>
  );
};

/* =======================================================================
   SHARED SMALL UI SUBCOMPONENTS (for holiday layout)
   ======================================================================= */

const FeatureChip = ({ icon, title, text }) => {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5/10 px-3 py-3 backdrop-blur-md">
      <span
        className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/70"
        style={{ boxShadow: `0 0 0 1px rgba(148,163,184,0.35)` }}
      >
        <IconComponent icon={icon} width={18} />
      </span>
      <div className="space-y-0.5">
        <p className="text-xs font-semibold text-slate-100">{title}</p>
        <p className="text-[11px] text-slate-300/90">{text}</p>
      </div>
    </div>
  );
};

const SummaryRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/70 text-[11px] text-slate-100">
      <IconComponent icon={icon} width={14} />
    </span>
    <div className="space-y-0.5">
      <p className="text-[11px] font-semibold text-slate-300">{label}</p>
      <p className="text-[11px] md:text-xs text-slate-200/90">{value}</p>
    </div>
  </div>
);

/**
 * SPECIAL TIER CARD – Holiday layout
 */
const SpecialTierCard = ({ tier }) => {
  return (
    <div
      className="group flex items-center justify-between gap-4 rounded-3xl
                 px-4 md:px-5 py-4
                 ring-1 ring-white/10
                 bg-transparent
                 transition-all duration-300
                 hover:ring-[rgba(11,244,10,0.9)]
                 hover:bg-white/5/10"
    >
      {/* LEFT: tier & account info */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/70 text-[11px] text-slate-100">
            <IconComponent icon="mdi:arrow-up-thick" width={14} />
          </span>
          <span className="text-[11px] uppercase tracking-[0.16em] text-slate-400">Upgrade Tier</span>
        </div>

        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mt-1">
          <span className="text-lg md:text-xl font-semibold text-slate-50">{formatCurrency(tier.amount)}</span>
          <span className="text-sm text-slate-300">
            &middot; <span className="font-semibold text-slate-100">{tier.accountLabel}</span>
          </span>
        </div>
      </div>

      {/* RIGHT: gradient pill */}
      <div className="flex items-center justify-end flex-1 max-w-[260px]">
        <div
          className="relative flex items-center justify-center gap-2 rounded-full
                     bg-gradient-to-r from-[#050815] via-[#0bf40a33] to-[#0bf40a7a]
                     shadow-[0_12px_35px_rgba(0,0,0,0.9)]
                     overflow-hidden
                     px-3 py-2"
        >
          <span className="flex items-center justify-center shrink-0">
            <IconComponent icon="mdi:gift" width={22} height={22} />
          </span>

          <span className="whitespace-nowrap text-[11px] md:text-xs font-medium text-[#e3ffe9]">
            Free Activation: <span className="font-semibold">{tier.botLabel}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

/**
 * CASHBACK CARD – Holiday layout
 */
const CashbackCard = ({ row, index }) => {
  const accents = [
    { ring: ACCENT, icon: "mdi:cash-multiple" },
    { ring: "#22d3ee", icon: "mdi:chart-bell-curve" },
    { ring: "#a855f7", icon: "mdi:rocket-launch-outline" },
  ];
  const style = accents[index % accents.length];

  return (
    <div
      className="relative flex flex-col gap-4 rounded-3xl px-4 py-4 md:px-5 md:py-5
                 border border-white/10 bg-white/5/10 backdrop-blur-md
                 shadow-[0_18px_45px_rgba(0,0,0,0.85)]
                 overflow-hidden"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-[11px] uppercase tracking-[0.16em] text-slate-400">Invest</span>
          <span className="text-lg md:text-xl font-semibold text-slate-50">{formatCurrency(row.invest)}</span>
        </div>

        <div className="relative h-11 w-11 rounded-full border border-white/20 flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full opacity-80"
            style={{
              background: `conic-gradient(from 140deg, ${style.ring}, transparent, ${style.ring})`,
            }}
          />
          <div className="relative h-[34px] w-[34px] rounded-full bg-black/80 flex items-center justify-center">
            <IconComponent icon={style.icon} width={20} height={20} />
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-[11px] uppercase tracking-[0.14em] text-slate-400">Cashback</p>
        <p className="text-sm md:text-base font-semibold text-[rgba(226,252,233,0.98)]">{row.cashback}</p>
      </div>
    </div>
  );
};

export default Offers;
