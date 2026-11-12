import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";

/* ---------- SmartImage: original-site image with graceful fallback ---------- */
export function SmartImage({
  src,
  fallback,
  alt,
  className,
  eager,
}: {
  src: string;
  fallback?: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const [current, setCurrent] = useState(src);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    setCurrent(src);
    setFailed(false);
  }, [src]);
  if (failed && !fallback) return null;
  return (
    <img
      src={current}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      onError={() => {
        if (fallback && current !== fallback) setCurrent(fallback);
        else setFailed(true);
      }}
      className={className}
      draggable={false}
    />
  );
}

/* ---------- Scroll reveal wrapper ---------- */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
  as?: "div" | "section" | "article" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref as never} className={cn("reveal", delay === 1 && "reveal-delay-1", delay === 2 && "reveal-delay-2", delay === 3 && "reveal-delay-3", className)}>
      {children}
    </Tag>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  dark = false,
  gold = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  dark?: boolean;
  gold?: boolean;
}) {
  return (
    <Reveal className={cn("mb-12 max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        <span className="h-px w-10 bg-pineapple-gold-500" />
        <span className={cn("text-xs font-bold uppercase tracking-[0.28em]", gold ? "text-pineapple-gold-400" : "text-pineapple-gold-600")}>
          {eyebrow}
        </span>
        <span className="h-px w-10 bg-pineapple-gold-500" />
      </div>
      <h2 className={cn("font-display mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]", dark ? "text-white" : "text-pineapple-navy-900")}>
        {title}
      </h2>
      {text && <p className={cn("mt-4 text-[15px] leading-relaxed", dark ? "text-white/70" : "text-slate-600")}>{text}</p>}
    </Reveal>
  );
}

/* ---------- Buttons ---------- */
export function GoldButton({ href, children, onClick, className }: { href?: string; children: ReactNode; onClick?: () => void; className?: string }) {
  const cls = cn(
    "group inline-flex items-center justify-center gap-2 bg-pineapple-gold-500 px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-pineapple-navy-950 shadow-[0_10px_30px_-10px_rgba(198,163,79,0.7)] transition-all duration-300 hover:bg-pineapple-gold-400 hover:shadow-[0_14px_36px_-10px_rgba(198,163,79,0.9)] hover:-translate-y-0.5",
    className
  );
  if (href)
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function OutlineButton({ href, children, onClick, light, className }: { href?: string; children: ReactNode; onClick?: () => void; light?: boolean; className?: string }) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 border px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5",
    light
      ? "border-white/40 text-white hover:border-pineapple-gold-400 hover:text-pineapple-gold-300"
      : "border-pineapple-navy-900/30 text-pineapple-navy-900 hover:border-pineapple-navy-900 hover:bg-pineapple-navy-900 hover:text-white",
    className
  );
  if (href)
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

/* ---------- Animated counter ---------- */
export function Counter({ value, decimals = 0, suffix = "", plain = false }: { value: number; decimals?: number; suffix?: string; plain?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(plain ? String(value) : "0");
  useEffect(() => {
    if (plain) {
      setDisplay(String(value));
      return;
    }
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1800;
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay((value * eased).toFixed(decimals));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, decimals, plain]);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ---------- Crest logo (vector recreation) ---------- */
export function Crest({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 72" fill="none" aria-label="Pineapple School crest">
      <path d="M32 2 60 12v24c0 16-11.5 27-28 34C15.5 63 4 52 4 36V12L32 2Z" fill="#0A1A3C" stroke="#C6A34F" strokeWidth="2.5" />
      <path d="M32 8 54 15.5V36c0 12.8-9.2 21.8-22 27.4C19.2 57.8 10 48.8 10 36V15.5L32 8Z" fill="none" stroke="#C6A34F" strokeWidth="1" opacity="0.7" />
      {/* open book */}
      <path d="M18 30c4.5-2.4 9.3-2.8 14-1.2v14.6c-4.7-1.6-9.5-1.2-14 1.2V30Z" fill="#C6A34F" opacity="0.95" />
      <path d="M46 30c-4.5-2.4-9.3-2.8-14-1.2v14.6c4.7-1.6 9.5-1.2 14 1.2V30Z" fill="#E8D29B" />
      <path d="M32 28.8v14.6" stroke="#0A1A3C" strokeWidth="1.4" />
      {/* torch flame */}
      <circle cx="32" cy="20" r="4.4" fill="#C6A34F" />
      <path d="M32 14.5c1.8 2 2.6 3.4 2.6 5.2a2.6 2.6 0 0 1-5.2 0c0-1.8.8-3.2 2.6-5.2Z" fill="#0A1A3C" />
      {/* banner */}
      <path d="M14 50h36l-3 5 3 5H14l3-5-3-5Z" fill="#C6A34F" />
      <text x="32" y="57.4" textAnchor="middle" fontSize="6.4" fontWeight="800" fill="#0A1A3C" fontFamily="Inter, sans-serif" letterSpacing="1.2">
        1958
      </text>
    </svg>
  );
}
