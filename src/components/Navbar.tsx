import { useEffect, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  GraduationCap,
  UserRound,
  CheckCircle2,
} from "lucide-react";
import { NAV_LINKS, CONTACT } from "../data/content";
import { Crest, GoldButton } from "./shared";
import { cn } from "../utils/cn";

const socialIconCls = "h-[14px] w-[14px] fill-current";
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className={socialIconCls} aria-hidden="true"><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.5v7h3Z" /></svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className={socialIconCls} aria-hidden="true"><path d="M12 8.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Zm0-2.1a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm6.8-.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0ZM12 4.2c2.5 0 2.8 0 3.8.1 2.6.1 3.7 1.3 3.8 3.8 0 1 .1 1.3.1 3.9s0 2.8-.1 3.8c-.1 2.5-1.2 3.7-3.8 3.8-1 .1-1.3.1-3.8.1s-2.8 0-3.8-.1c-2.6-.1-3.7-1.3-3.8-3.8 0-1-.1-1.3-.1-3.8s0-2.9.1-3.9c.1-2.5 1.2-3.7 3.8-3.8 1-.1 1.3-.1 3.8-.1Z" /></svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" className={socialIconCls} aria-hidden="true"><path d="M17.8 4h2.7l-5.9 6.8L21.5 20h-5.4l-4.3-5.6L7 20H4.2l6.3-7.3L3.7 4H9.3l3.9 5.1L17.8 4Zm-1 14.3h1.5L8.1 5.5H6.5l10.3 12.8Z" /></svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className={socialIconCls} aria-hidden="true"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 0 0 2 8.2 31.3 31.3 0 0 0 1.6 12 31.3 31.3 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.6 7.9.6 7.9.6s6 0 7.9-.6a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 22.4 12 31.3 31.3 0 0 0 22 8.2ZM10 15V9l5.2 3L10 15Z" /></svg>
);

export function TopBar() {
  return (
    <div className="hidden bg-grange-navy-950 text-[12px] text-white/80 lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} className="text-grange-gold-500" /> {CONTACT.address}
          </span>
          <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-1.5 transition hover:text-grange-gold-300">
            <Mail size={13} className="text-grange-gold-500" /> {CONTACT.email}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={13} className="text-grange-gold-500" /> {CONTACT.hours}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a href="tel:+23412706046" className="inline-flex items-center gap-1.5 font-semibold text-grange-gold-300 transition hover:text-grange-gold-400">
            <Phone size={13} /> {CONTACT.phone}
          </a>
          <span className="h-4 w-px bg-white/15" />
          <a href="#contact" className="inline-flex items-center gap-1.5 transition hover:text-grange-gold-300">
            <UserRound size={13} /> Parent Portal
          </a>
          <span className="h-4 w-px bg-white/15" />
          <div className="flex items-center gap-3 text-white/70">
            <a href="#home" aria-label="Facebook" className="transition hover:text-grange-gold-300"><FacebookIcon /></a>
            <a href="#home" aria-label="Instagram" className="transition hover:text-grange-gold-300"><InstagramIcon /></a>
            <a href="#home" aria-label="X" className="transition hover:text-grange-gold-300"><XIcon /></a>
            <a href="#home" aria-label="YouTube" className="transition hover:text-grange-gold-300"><YoutubeIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navbar({ onApply }: { onApply: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <header className={cn("sticky top-0 z-50 bg-white transition-shadow duration-300", scrolled ? "shadow-[0_10px_40px_-12px_rgba(10,26,60,0.35)]" : "shadow-none")}>
      {/* gold hairline */}
      <div className="h-[3px] w-full bg-gradient-to-r from-grange-gold-700 via-grange-gold-400 to-grange-gold-700" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3">
          <Crest size={50} />
          <span className="leading-tight">
            <span className="font-display block text-[22px] font-semibold tracking-wide text-grange-navy-900 sm:text-2xl">
              GRANGE <span className="font-light">SCHOOL</span>
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.32em] text-grange-gold-600">
              Ikeja · Lagos · Est. 1958
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="group/nav relative">
              <a
                href={link.href}
                className="flex items-center gap-1 px-3 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-grange-navy-900 transition hover:text-grange-gold-600"
              >
                {link.label}
                {link.children && <ChevronDown size={13} className="transition-transform duration-300 group-hover/nav:rotate-180" />}
              </a>
              <span className="absolute inset-x-3 bottom-1 h-[2px] origin-left scale-x-0 bg-grange-gold-500 transition-transform duration-300 group-hover/nav:scale-x-100" />
              {link.children && (
                <div className="nav-dropdown absolute left-0 top-full w-64 border-t-2 border-grange-gold-500 bg-white py-2 shadow-[0_24px_50px_-12px_rgba(10,26,60,0.35)]">
                  {link.children.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="flex items-center justify-between px-5 py-2.5 text-[13.5px] font-medium text-slate-700 transition hover:bg-grange-cream hover:text-grange-navy-900"
                    >
                      {c.label}
                      <ArrowRight size={13} className="text-grange-gold-600 opacity-0 transition group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <GoldButton onClick={onApply} className="!px-6 !py-3">
            <GraduationCap size={17} /> Apply Now
          </GoldButton>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center bg-grange-navy-900 text-white xl:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-50 flex flex-col bg-grange-navy-950/[0.98] backdrop-blur transition-all duration-300 xl:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <Crest size={44} />
            <span className="font-display text-xl font-semibold tracking-wide text-white">GRANGE SCHOOL</span>
          </div>
          <button onClick={() => setOpen(false)} className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white" aria-label="Close menu">
            <X size={22} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-6 pb-8 pt-2">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="border-b border-white/10">
              {link.children ? (
                <>
                  <button
                    onClick={() => setExpanded(expanded === link.label ? null : link.label)}
                    className="flex w-full items-center justify-between py-4 text-left text-[15px] font-semibold uppercase tracking-wider text-white"
                  >
                    {link.label}
                    <ChevronDown size={18} className={cn("text-grange-gold-400 transition-transform", expanded === link.label && "rotate-180")} />
                  </button>
                  <div className={cn("grid transition-all duration-300", expanded === link.label ? "grid-rows-[1fr] pb-3 opacity-100" : "grid-rows-[0fr] opacity-0")}>
                    <div className="overflow-hidden">
                      {link.children.map((c) => (
                        <a key={c.label} href={c.href} onClick={() => setOpen(false)} className="block py-2 pl-4 text-sm text-white/70 transition hover:text-grange-gold-300">
                          — {c.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a href={link.href} onClick={() => setOpen(false)} className="block py-4 text-[15px] font-semibold uppercase tracking-wider text-white">
                  {link.label}
                </a>
              )}
            </div>
          ))}
          <GoldButton onClick={() => { setOpen(false); onApply(); }} className="mt-6 w-full">
            <GraduationCap size={17} /> Apply for Admission
          </GoldButton>
          <div className="mt-6 space-y-2 text-sm text-white/60">
            <p className="flex items-center gap-2"><MapPin size={14} className="text-grange-gold-400" /> {CONTACT.address}</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-grange-gold-400" /> {CONTACT.phone}</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-grange-gold-400" /> {CONTACT.email}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}

/* ---------- Admissions enquiry modal ---------- */
export function ApplyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ parent: "", email: "", phone: "", phase: "Primary School", message: "" });

  useEffect(() => {
    if (open) {
      setSent(false);
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  if (!open) return null;

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-grange-navy-950/80 backdrop-blur-sm" onClick={onClose} />
      <div className="animate-zoom-in relative max-h-[92vh] w-full max-w-lg overflow-y-auto bg-white shadow-2xl">
        <div className="flex items-center justify-between bg-grange-navy-900 px-6 py-5">
          <div className="flex items-center gap-3">
            <Crest size={40} />
            <div>
              <p className="font-display text-lg font-semibold text-white">Admission Enquiry</p>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-grange-gold-400">2026 / 2027 Session</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/60 transition hover:text-white" aria-label="Close">
            <X size={22} />
          </button>
        </div>
        {sent ? (
          <div className="px-8 py-14 text-center">
            <CheckCircle2 size={56} className="mx-auto text-grange-gold-600" />
            <h3 className="font-display mt-4 text-2xl font-semibold text-grange-navy-900">Thank you!</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Your enquiry has been received. Our Admissions Office will contact you shortly at <strong>{form.email || "your email"}</strong>.
            </p>
            <GoldButton onClick={onClose} className="mt-6">Close</GoldButton>
          </div>
        ) : (
          <form
            className="space-y-4 px-6 py-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-[11px] font-bold uppercase tracking-widest text-grange-navy-900">Parent Name *</span>
                <input required value={form.parent} onChange={set("parent")} placeholder="Full name" className="w-full border border-slate-300 bg-grange-cream/60 px-4 py-3 text-sm outline-none transition focus:border-grange-gold-500 focus:bg-white" />
              </label>
              <label className="block">
                <span className="mb-1 block text-[11px] font-bold uppercase tracking-widest text-grange-navy-900">Phone *</span>
                <input required value={form.phone} onChange={set("phone")} placeholder="+234 ..." className="w-full border border-slate-300 bg-grange-cream/60 px-4 py-3 text-sm outline-none transition focus:border-grange-gold-500 focus:bg-white" />
              </label>
            </div>
            <label className="block">
              <span className="mb-1 block text-[11px] font-bold uppercase tracking-widest text-grange-navy-900">Email Address *</span>
              <input required type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className="w-full border border-slate-300 bg-grange-cream/60 px-4 py-3 text-sm outline-none transition focus:border-grange-gold-500 focus:bg-white" />
            </label>
            <label className="block">
              <span className="mb-1 block text-[11px] font-bold uppercase tracking-widest text-grange-navy-900">Phase of Interest</span>
              <select value={form.phase} onChange={set("phase")} className="w-full border border-slate-300 bg-grange-cream/60 px-4 py-3 text-sm outline-none transition focus:border-grange-gold-500 focus:bg-white">
                <option>Nursery & Reception</option>
                <option>Primary School</option>
                <option>Secondary School</option>
                <option>Boarding</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1 block text-[11px] font-bold uppercase tracking-widest text-grange-navy-900">Message</span>
              <textarea value={form.message} onChange={set("message")} rows={3} placeholder="Tell us about your child and preferred start date..." className="w-full resize-none border border-slate-300 bg-grange-cream/60 px-4 py-3 text-sm outline-none transition focus:border-grange-gold-500 focus:bg-white" />
            </label>
            <GoldButton className="w-full">
              Submit Enquiry <ArrowRight size={16} />
            </GoldButton>
            <p className="text-center text-xs text-slate-500">
              Or email us directly at <a href={`mailto:${CONTACT.admissions}`} className="font-semibold text-grange-navy-800 underline">{CONTACT.admissions}</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
