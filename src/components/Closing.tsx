import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUp, CalendarDays, MapPin, Mail, Phone, Clock, ChevronDown,
  FileText, ClipboardCheck, Users, PartyPopper, CheckCircle2, Send, Newspaper,
} from "lucide-react";
import { NEWS, FAQS, CONTACT, G } from "../data/content";
import { SmartImage, SectionHeading, Reveal, GoldButton } from "./shared";
import { Crest } from "./shared";
import { cn } from "../utils/cn";

/* ================= NEWS ================= */
export function News() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="news" className="bg-pineapple-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="School News & Events"
          title="Latest from the Pineapple Community"
          text="Celebrations, achievements and everyday moments across the Primary and Secondary schools."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((n, i) => (
            <Reveal key={n.title} delay={(i % 3) as 0 | 1 | 2}>
              <article
                className="group flex h-full cursor-pointer flex-col bg-white shadow-[0_14px_40px_-20px_rgba(10,26,60,0.45)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_55px_-20px_rgba(10,26,60,0.55)]"
                onClick={() => setActive(i)}
              >
                <div className="relative h-56 overflow-hidden bg-pineapple-navy-900">
                  <span className="absolute inset-0 flex items-center justify-center">
                    <Newspaper size={34} className="text-white/15" />
                  </span>
                  <SmartImage src={n.image} alt={n.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-108" />
                  <span className="absolute left-4 top-4 bg-pineapple-gold-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-pineapple-navy-950">
                    {n.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    <CalendarDays size={13} className="text-pineapple-gold-600" /> {n.date}
                  </p>
                  <h3 className="font-display mt-2 text-[1.35rem] font-semibold leading-snug text-pineapple-navy-900 transition group-hover:text-pineapple-gold-700">
                    {n.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">{n.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-pineapple-navy-900">
                    Read Story <ArrowRight size={14} className="text-pineapple-gold-600 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* News reader modal */}
      {active !== null && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-pineapple-navy-950/85 backdrop-blur-sm" onClick={() => setActive(null)} />
          <div className="animate-zoom-in relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white shadow-2xl">
            <div className="relative h-64 bg-pineapple-navy-900 sm:h-80">
              <SmartImage src={NEWS[active].image} alt={NEWS[active].title} className="h-full w-full object-cover" />
              <button onClick={() => setActive(null)} className="absolute right-4 top-4 bg-pineapple-navy-950/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur transition hover:bg-pineapple-gold-500 hover:text-pineapple-navy-950">
                Close ✕
              </button>
            </div>
            <div className="p-7 sm:p-9">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-pineapple-gold-700">
                <span className="bg-pineapple-gold-500 px-2.5 py-1 text-pineapple-navy-950">{NEWS[active].category}</span>
                <CalendarDays size={13} /> {NEWS[active].date}
              </p>
              <h3 className="font-display mt-3 text-3xl font-semibold text-pineapple-navy-900">{NEWS[active].title}</h3>
              <p className="mt-4 leading-relaxed text-slate-600">{NEWS[active].text}</p>
              <p className="mt-3 leading-relaxed text-slate-600">
                At Pineapple School, every achievement — big or small — is celebrated as part of our culture of continuous
                improvement. We are proud of our pupils, grateful to our parents, and inspired daily by our dedicated staff.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ================= ADMISSIONS ================= */
const STEPS = [
  { icon: FileText, t: "1 · Enquire & Apply", d: "Complete the application form with birth certificate, immunisation records, school reports and a recent passport photograph." },
  { icon: ClipboardCheck, t: "2 · Placement Assessment", d: "All applicants complete placement tests in English and Mathematics (play-based for Reception, with a parent interview)." },
  { icon: Users, t: "3 · Family Meeting", d: "Meet our team, tour the school in GRA Ikeja and experience a day in the life of a Pineapple pupil." },
  { icon: PartyPopper, t: "4 · Offer & Start", d: "Successful families receive an offer — new pupils usually start on Mondays, before the Lent mid-term break." },
];

export function Admissions({ onApply }: { onApply: () => void }) {
  return (
    <section id="admissions" className="relative overflow-hidden bg-pineapple-navy-950 py-20 lg:py-28">
      <SmartImage
        src={G("/wp-content/uploads/2026/03/web2.jpg")}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          dark gold
          eyebrow="Admissions Open · 2026/2027"
          title="Begin Your Pineapple Journey"
          text="Four simple steps to joining one of Nigeria's most respected British international schools. New students usually start on Mondays."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.t} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="group relative h-full border border-white/10 bg-white/[0.05] p-7 backdrop-blur transition hover:border-pineapple-gold-500/60">
                <span className="inline-flex h-12 w-12 items-center justify-center bg-pineapple-gold-500 text-pineapple-navy-950">
                  <s.icon size={22} />
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold text-white">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex flex-col items-center gap-5 rounded-sm border border-pineapple-gold-500/30 bg-pineapple-gold-500/[0.08] px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-2xl font-semibold text-white">Applications are considered on an individual basis.</p>
            <p className="mt-1 text-sm text-white/65">For all admission enquiries, contact the Admissions Office — we would love to hear from you.</p>
          </div>
          <GoldButton onClick={onApply} className="shrink-0">
            Start Application <ArrowRight size={16} />
          </GoldButton>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= FAQ ================= */
export function Faq() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section id="faqs" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-pineapple-gold-500" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-pineapple-gold-600">FAQ</span>
            </div>
            <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-pineapple-navy-900 sm:text-4xl">Curious About Pineapple?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Answers to some of the most common questions about Pineapple School. For further enquiries, please contact the Admissions Office.
            </p>
          </Reveal>
          <Reveal delay={1} className="mt-8 space-y-3">
            {[
              "The teachers really want to help you",
              "Happy atmosphere",
              "Great school trips",
              "It's cool to do well here",
            ].map((t) => (
              <p key={t} className="flex items-center gap-3 bg-pineapple-cream px-5 py-3.5 text-sm font-semibold text-pineapple-navy-900">
                <CheckCircle2 size={17} className="shrink-0 text-pineapple-gold-600" /> {t}
              </p>
            ))}
            <p className="pt-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">— What students like about Pineapple</p>
          </Reveal>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={0}>
                <div className={cn("border transition", isOpen ? "border-pineapple-gold-500 bg-pineapple-gold-50/50" : "border-slate-200 bg-white hover:border-pineapple-gold-400")}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6">
                    <span className="font-display text-[16px] font-semibold text-pineapple-navy-900 sm:text-[17px]">{f.q}</span>
                    <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center transition-all duration-300", isOpen ? "rotate-180 bg-pineapple-navy-900 text-pineapple-gold-400" : "bg-pineapple-cream text-pineapple-navy-900")}>
                      <ChevronDown size={17} />
                    </span>
                  </button>
                  <div className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= CONTACT + NEWSLETTER ================= */
export function Contact() {
  const [sent, setSent] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  return (
    <>
      <section id="contact" className="bg-pineapple-navy-900 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-pineapple-gold-500" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-pineapple-gold-400">Visit Us</span>
              </div>
              <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">Come & Experience Pineapple</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                We warmly welcome you to visit the school to learn more about us. Book a tour or send us a message.
              </p>
            </Reveal>
            <Reveal delay={1} className="mt-8 space-y-4">
              {[
                { icon: MapPin, t: "School Address", d: CONTACT.address },
                { icon: Phone, t: "Telephone", d: CONTACT.phone },
                { icon: Mail, t: "Email", d: `${CONTACT.email} · ${CONTACT.admissions}` },
                { icon: Clock, t: "School Hours", d: "Drop-off 7:00am · Day 7:40am – 3:15pm (Primary & Secondary)" },
              ].map((c) => (
                <div key={c.t} className="flex items-start gap-4 border border-white/10 bg-white/[0.04] p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-pineapple-gold-500 text-pineapple-navy-950">
                    <c.icon size={20} />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-pineapple-gold-400">{c.t}</span>
                    <span className="mt-1 block text-[15px] font-medium text-white">{c.d}</span>
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal delay={2}>
            <div className="bg-white p-7 shadow-2xl sm:p-9">
              {sent ? (
                <div className="py-16 text-center">
                  <CheckCircle2 size={56} className="mx-auto text-pineapple-gold-600" />
                  <h3 className="font-display mt-4 text-2xl font-semibold text-pineapple-navy-900">Message Sent</h3>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-slate-600">Thank you for contacting Pineapple School. A member of our team will respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                  <h3 className="font-display text-2xl font-semibold text-pineapple-navy-900">Book a School Tour</h3>
                  <div className="gold-rule" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input required placeholder="Full name *" className="border border-slate-300 bg-pineapple-cream/60 px-4 py-3 text-sm outline-none transition focus:border-pineapple-gold-500 focus:bg-white" />
                    <input required type="email" placeholder="Email address *" className="border border-slate-300 bg-pineapple-cream/60 px-4 py-3 text-sm outline-none transition focus:border-pineapple-gold-500 focus:bg-white" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input placeholder="Phone number" className="border border-slate-300 bg-pineapple-cream/60 px-4 py-3 text-sm outline-none transition focus:border-pineapple-gold-500 focus:bg-white" />
                    <select className="border border-slate-300 bg-pineapple-cream/60 px-4 py-3 text-sm outline-none transition focus:border-pineapple-gold-500 focus:bg-white">
                      <option>Primary School Tour</option>
                      <option>Secondary School Tour</option>
                      <option>Boarding Tour</option>
                    </select>
                  </div>
                  <textarea required rows={4} placeholder="Your message *" className="w-full resize-none border border-slate-300 bg-pineapple-cream/60 px-4 py-3 text-sm outline-none transition focus:border-pineapple-gold-500 focus:bg-white" />
                  <GoldButton className="w-full">Send Message <Send size={15} /></GoldButton>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-white/10 bg-pineapple-navy-950 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">Sign up for our newsletter</h3>
            <p className="mt-1 text-sm text-white/60">Enter your email below to receive updates from Pineapple School.</p>
          </div>
          {subscribed ? (
            <p className="flex items-center gap-2 bg-pineapple-gold-500/15 px-6 py-4 text-sm font-semibold text-pineapple-gold-300">
              <CheckCircle2 size={18} /> Thank you — you're on the list!
            </p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="flex w-full max-w-md gap-2">
              <input required type="email" placeholder="Your email address" className="w-full border border-white/20 bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-pineapple-gold-500" />
              <button className="shrink-0 bg-pineapple-gold-500 px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.16em] text-pineapple-navy-950 transition hover:bg-pineapple-gold-400">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

/* ================= FOOTER ================= */
export function Footer() {
  return (
    <footer className="bg-[#040b1c] pb-8 pt-16 text-white/65">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Crest size={48} />
              <span>
                <span className="font-display block text-xl font-semibold tracking-wide text-white">PINEAPPLE SCHOOL</span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-pineapple-gold-500">Est. 1958 · Ikeja GRA</span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed">
              A premium British international day & boarding school delivering the National Curriculum of England and
              Cambridge curriculum — with a culture of continuous improvement.
            </p>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em] text-pineapple-gold-500">COBIS · CIS · IAPS Accredited</p>
          </div>
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[0.24em] text-white">Quick Links</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                ["Welcome Address", "#welcome"], ["Our History", "#history"], ["Why Choose Pineapple", "#why-pineapple"],
                ["Exam Results", "#results"], ["Boarding", "#boarding"], ["News & Events", "#news"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition hover:text-pineapple-gold-300">› {label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[0.24em] text-white">Our Schools</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                ["Nursery & Reception", "#primary-secondary"], ["Primary School", "#primary-secondary"],
                ["Secondary School", "#primary-secondary"], ["Key Stage 4 · IGCSE", "#results"],
                ["Pastoral & Well-being", "#welcome"], ["Admissions", "#admissions"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition hover:text-pineapple-gold-300">› {label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[0.24em] text-white">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex gap-2.5"><MapPin size={16} className="mt-0.5 shrink-0 text-pineapple-gold-500" /> {CONTACT.address}</li>
              <li className="flex gap-2.5"><Phone size={16} className="mt-0.5 shrink-0 text-pineapple-gold-500" /> {CONTACT.phone}</li>
              <li className="flex gap-2.5"><Mail size={16} className="mt-0.5 shrink-0 text-pineapple-gold-500" /> {CONTACT.email}</li>
              <li className="flex gap-2.5"><Clock size={16} className="mt-0.5 shrink-0 text-pineapple-gold-500" /> {CONTACT.hours}</li>
            </ul>
          </div>
        </div>
        <div className="gold-rule mt-12 opacity-40" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Pineapple School, Ikeja GRA Lagos. All rights reserved.</p>
          <p className="font-display italic text-white/40">“A culture of continuous improvement.”</p>
          <div className="flex gap-5">
            <a href="#home" className="transition hover:text-pineapple-gold-300">Privacy Policy</a>
            <a href="#home" className="transition hover:text-pineapple-gold-300">Safeguarding</a>
            <a href="#faqs" className="transition hover:text-pineapple-gold-300">FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================= BACK TO TOP ================= */
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center bg-pineapple-navy-900 text-pineapple-gold-400 shadow-2xl ring-1 ring-pineapple-gold-500/50 transition-all duration-300 hover:bg-pineapple-gold-500 hover:text-pineapple-navy-950",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ArrowUp size={20} />
    </button>
  );
}
