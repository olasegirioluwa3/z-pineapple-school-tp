import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck } from "lucide-react";
import { HERO_SLIDES, STATS, ACCREDITATIONS } from "../data/content";
import { SmartImage, Counter, Reveal } from "./shared";
import { cn } from "../utils/cn";

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  const go = useCallback((i: number) => setIndex((i + HERO_SLIDES.length) % HERO_SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setInterval(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), 7000);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [paused]);

  const slide = HERO_SLIDES[index];

  return (
    <section id="home" className="relative overflow-hidden bg-grange-navy-950">
      {/* Slides */}
      <div
        className="relative h-[86vh] min-h-[560px] w-full max-h-[820px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {HERO_SLIDES.map((s, i) => (
          <div
            key={s.title}
            className={cn("absolute inset-0 transition-opacity duration-[1200ms]", i === index ? "opacity-100" : "opacity-0")}
            aria-hidden={i !== index}
          >
            <SmartImage
              src={s.image}
              fallback={s.fallback}
              alt={s.title}
              eager={i === 0}
              className={cn("h-full w-full object-cover", i === index && "animate-kenburns")}
            />
          </div>
        ))}
        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-grange-navy-950/95 via-grange-navy-950/70 to-grange-navy-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-grange-navy-950/90 via-transparent to-grange-navy-950/30" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div key={index} className="max-w-2xl">
              <div className="animate-fade-up flex items-center gap-3" style={{ animationDelay: "0.05s" }}>
                <span className="h-[2px] w-12 bg-grange-gold-500" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-grange-gold-300 sm:text-xs">
                  {slide.eyebrow}
                </span>
              </div>
              <h1
                className="font-display animate-fade-up mt-5 text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.9rem]"
                style={{ animationDelay: "0.15s" }}
              >
                {slide.title}
              </h1>
              <p className="animate-fade-up mt-5 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-base" style={{ animationDelay: "0.28s" }}>
                {slide.subtitle}
              </p>
              <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.4s" }}>
                <a
                  href={slide.primary.href}
                  className="group inline-flex items-center gap-2 bg-grange-gold-500 px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-grange-navy-950 shadow-[0_16px_40px_-12px_rgba(198,163,79,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-grange-gold-400"
                >
                  {slide.primary.label}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={slide.secondary.href}
                  className="inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-grange-gold-400 hover:text-grange-gold-300"
                >
                  {slide.secondary.label}
                </a>
              </div>
              <div className="animate-fade-up mt-8 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60" style={{ animationDelay: "0.5s" }}>
                <ShieldCheck size={16} className="text-grange-gold-400" />
                Council of British International Schools · Fully Accredited
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute bottom-24 right-4 hidden gap-2 sm:flex lg:right-10">
          <button onClick={() => go(index - 1)} aria-label="Previous slide" className="flex h-12 w-12 items-center justify-center border border-white/25 text-white backdrop-blur transition hover:border-grange-gold-400 hover:bg-grange-gold-500 hover:text-grange-navy-950">
            <ChevronLeft size={22} />
          </button>
          <button onClick={() => go(index + 1)} aria-label="Next slide" className="flex h-12 w-12 items-center justify-center border border-white/25 text-white backdrop-blur transition hover:border-grange-gold-400 hover:bg-grange-gold-500 hover:text-grange-navy-950">
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots + progress */}
        <div className="absolute bottom-24 left-4 flex items-center gap-3 sm:left-6 lg:left-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          {HERO_SLIDES.map((s, i) => (
            <button key={s.title} onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`} className="group py-2">
              <span className={cn("hero-dot block h-[3px] rounded-full", i === index ? "w-12 bg-grange-gold-400" : "w-7 bg-white/30 group-hover:bg-white/60")} />
            </button>
          ))}
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 md:flex">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-8 w-px overflow-hidden bg-white/20">
            <span className="block h-3 w-px animate-bounce bg-grange-gold-400" />
          </span>
        </div>
      </div>

      {/* Stats band */}
      <div className="relative z-10 border-t border-white/10 bg-grange-navy-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-white/10 px-4 sm:px-6 lg:grid-cols-4 lg:divide-x">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) as 0 | 1 | 2 | 3} className="px-6 py-7 text-center lg:py-9">
              <p className="font-display text-4xl font-semibold text-white lg:text-[2.6rem]">
                <Counter value={s.value} suffix={s.suffix ?? ""} decimals={s.decimals ?? 0} plain={s.plain} />
              </p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.24em] text-grange-gold-400">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* accreditation marquee */}
      <div className="border-t border-grange-gold-500/20 bg-grange-navy-950 py-4">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            {[...ACCREDITATIONS, ...ACCREDITATIONS].map((a, i) => (
              <span key={i} className="flex items-center gap-3 whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.3em] text-white/50">
                <span className="h-1.5 w-1.5 rotate-45 bg-grange-gold-500" /> {a}
              </span>
            ))}
          </div>
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
            {[...ACCREDITATIONS, ...ACCREDITATIONS].map((a, i) => (
              <span key={i} className="flex items-center gap-3 whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.3em] text-white/50">
                <span className="h-1.5 w-1.5 rotate-45 bg-grange-gold-500" /> {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
