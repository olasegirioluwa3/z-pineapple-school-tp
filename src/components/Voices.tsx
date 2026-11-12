import { useState } from "react";
import { Quote, GraduationCap, Users, Briefcase, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { VOICE_GROUPS, HISTORY, GALLERY } from "../data/content";
import { SmartImage, SectionHeading, Reveal } from "./shared";
import { cn } from "../utils/cn";

const GROUP_ICONS = [GraduationCap, Users, Briefcase, Award];

export function Voices() {
  const [groupIdx, setGroupIdx] = useState(0);
  const [voiceIdx, setVoiceIdx] = useState(0);
  const group = VOICE_GROUPS[groupIdx];
  const voice = group.voices[voiceIdx % group.voices.length];

  const pickGroup = (i: number) => {
    setGroupIdx(i);
    setVoiceIdx(0);
  };

  return (
    <section id="voices" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Voices of the Pineapple Community"
          text="Hear from our pupils, parents, staff and alumni — the people who make Pineapple a wonderful place to learn and grow."
        />

        {/* Group tabs */}
        <Reveal className="mb-10 flex flex-wrap justify-center gap-3">
          {VOICE_GROUPS.map((g, i) => {
            const Icon = GROUP_ICONS[i % GROUP_ICONS.length];
            return (
              <button
                key={g.id}
                onClick={() => pickGroup(i)}
                className={cn(
                  "flex items-center gap-2 border px-5 py-3 text-[12px] font-bold uppercase tracking-[0.14em] transition-all duration-300",
                  i === groupIdx
                    ? "border-pineapple-navy-900 bg-pineapple-navy-900 text-white shadow-lg"
                    : "border-slate-300 bg-white text-slate-600 hover:border-pineapple-gold-500 hover:text-pineapple-navy-900"
                )}
              >
                <Icon size={16} className={i === groupIdx ? "text-pineapple-gold-400" : "text-pineapple-gold-600"} />
                {g.heading}
              </button>
            );
          })}
        </Reveal>

        {/* Active quote card */}
        <Reveal className="mx-auto max-w-4xl">
          <div key={`${groupIdx}-${voiceIdx}`} className="animate-zoom-in relative bg-pineapple-navy-950 px-6 py-10 text-center shadow-[0_30px_70px_-25px_rgba(10,26,60,0.7)] sm:px-14 sm:py-12">
            <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-pineapple-gold-700 via-pineapple-gold-400 to-pineapple-gold-700" />
            <Quote size={40} className="mx-auto rotate-180 text-pineapple-gold-500" />
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.3em] text-pineapple-gold-400">
              {group.eyebrow} · {group.heading}
            </p>
            {voice.title && (
              <h3 className="font-display mt-3 text-xl font-semibold uppercase tracking-wide text-white sm:text-2xl">{voice.title}</h3>
            )}
            <blockquote className="font-display mx-auto mt-4 max-w-3xl text-lg italic leading-relaxed text-white/90 sm:text-[1.35rem] sm:leading-relaxed">
              “{voice.quote}”
            </blockquote>
            <div className="mt-7 flex items-center justify-center gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-pineapple-navy-700 ring-2 ring-pineapple-gold-500 ring-offset-2 ring-offset-pineapple-navy-950">
                <span className="font-display text-xl font-semibold text-pineapple-gold-300">{voice.name.charAt(0)}</span>
                <SmartImage src={voice.image} alt={voice.name} className="absolute inset-0 h-full w-full object-cover object-top" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">{voice.name}</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-pineapple-gold-400">{voice.tag}</p>
              </div>
            </div>
            {/* prev / next */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => setVoiceIdx((v) => (v - 1 + group.voices.length) % group.voices.length)}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition hover:border-pineapple-gold-400 hover:bg-pineapple-gold-500 hover:text-pineapple-navy-950"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs font-semibold tracking-[0.2em] text-white/50">
                {(voiceIdx % group.voices.length) + 1} / {group.voices.length}
              </span>
              <button
                onClick={() => setVoiceIdx((v) => (v + 1) % group.voices.length)}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition hover:border-pineapple-gold-400 hover:bg-pineapple-gold-500 hover:text-pineapple-navy-950"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Avatar switcher */}
        <Reveal delay={1} className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {group.voices.map((v, i) => (
            <button key={v.name + v.tag + i} onClick={() => setVoiceIdx(i)} className="group flex w-20 flex-col items-center gap-2 sm:w-24">
              <span
                className={cn(
                  "relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-pineapple-cream transition-all duration-300 sm:h-20 sm:w-20",
                  i === voiceIdx % group.voices.length
                    ? "ring-[3px] ring-pineapple-gold-500 ring-offset-2 scale-105"
                    : "opacity-60 ring-1 ring-slate-300 group-hover:opacity-100 group-hover:ring-pineapple-gold-400"
                )}
              >
                <span className="font-display text-xl font-semibold text-pineapple-navy-900/30">{v.name.charAt(0)}</span>
                <SmartImage src={v.image} alt={v.name} className="absolute inset-0 h-full w-full object-cover object-top" />
              </span>
              <span className={cn("text-center text-[10px] font-bold uppercase leading-tight tracking-[0.1em]", i === voiceIdx % group.voices.length ? "text-pineapple-navy-900" : "text-slate-500")}>
                {v.tag}
              </span>
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ================= HISTORY TIMELINE ================= */
export function History() {
  return (
    <section id="history" className="bg-pineapple-navy-950 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          dark gold
          eyebrow="Our History"
          title="A Tradition of British Excellence in Nigeria"
          text="From a rented WAAC building in 1957 to one of Nigeria's most respected British international schools."
        />
        <div className="relative">
          <span className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-pineapple-gold-500 via-pineapple-gold-500/40 to-transparent sm:left-1/2" />
          <div className="space-y-10">
            {HISTORY.map((h, i) => (
              <Reveal key={h.year} className={cn("relative flex gap-6 sm:gap-0", i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse")}>
                <span className="relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-pineapple-gold-500/50 bg-pineapple-navy-900 sm:absolute sm:left-1/2 sm:mt-0 sm:-translate-x-1/2">
                  <span className="h-2.5 w-2.5 rotate-45 bg-pineapple-gold-500" />
                </span>
                <div className={cn("flex-1 sm:w-1/2 sm:flex-none", i % 2 === 0 ? "sm:pr-14 sm:text-right" : "sm:pl-14")}>
                  <div className={cn("group border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-pineapple-gold-500/50 sm:p-7", i % 2 === 0 ? "sm:ml-auto" : "")}>
                    <p className="font-display text-3xl font-semibold text-pineapple-gold-400">{h.year}</p>
                    <h3 className="font-display mt-1 text-xl font-semibold text-white">{h.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{h.text}</p>
                  </div>
                </div>
                <div className="hidden flex-1 sm:block" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= LIFE GALLERY MARQUEE ================= */
export function LifeGallery() {
  const rowA = GALLERY.slice(0, 4);
  const rowB = GALLERY.slice(4);
  const Row = ({ items, reverse = false }: { items: typeof GALLERY; reverse?: boolean }) => (
    <div className="flex overflow-hidden">
      {[0, 1].map((dup) => (
        <div
          key={dup}
          aria-hidden={dup === 1}
          className="animate-marquee-slow flex shrink-0 gap-4 pr-4"
          style={reverse ? { animationDirection: "reverse" } : undefined}
        >
          {[...items, ...items].map((g, i) => (
            <figure key={i} className="group relative h-52 w-80 shrink-0 overflow-hidden sm:h-60 sm:w-96">
              <span className="absolute inset-0 flex items-center justify-center bg-pineapple-navy-900">
                <span className="font-display text-2xl italic text-white/20">{g.label}</span>
              </span>
              <SmartImage src={g.image} alt={g.label} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pineapple-navy-950/90 to-transparent px-5 pb-4 pt-10 text-left">
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-pineapple-gold-300">{g.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
  return (
    <section id="life" className="overflow-hidden bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Opportunities Beyond the Classroom"
          title="Life at Pineapple"
          text="Sport, music, drama, service and celebration — every day brings new opportunities to discover talents and make memories."
        />
      </div>
      <div className="space-y-4">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>
    </section>
  );
}
