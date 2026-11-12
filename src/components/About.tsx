import { useEffect, useRef, useState } from "react";
import {
  GraduationCap, Trophy, HeartHandshake, MonitorUp, BadgeCheck, Plane, HandHeart, Music,
  ArrowRight, Quote, Check, BedDouble, Bus, ShieldCheck, Sparkles, Award,
} from "lucide-react";
import { WHY_PINEAPPLE, SCHOOLS, RESULTS, LEADERSHIP, G } from "../data/content";
import { SmartImage, SectionHeading, Reveal, GoldButton, OutlineButton } from "./shared";
import { cn } from "../utils/cn";

const ICONS: Record<string, typeof GraduationCap> = {
  graduation: GraduationCap, trophy: Trophy, heart: HeartHandshake, monitor: MonitorUp,
  badge: BadgeCheck, plane: Plane, hands: HandHeart, music: Music,
};

/* ================= WELCOME ================= */
export function Welcome({ onApply }: { onApply: () => void }) {
  return (
    <section id="welcome" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <span className="font-display pointer-events-none absolute -right-8 top-10 hidden select-none text-[11rem] font-bold leading-none text-pineapple-cream xl:block">
        1958
      </span>
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        {/* Portrait */}
        <Reveal className="relative">
          <div className="frame-gold">
            <SmartImage
              src={G("/wp-content/uploads/2026/06/McMahon_result.webp")}
              fallback="https://images.pexels.com/photos/7929453/pexels-photo-7929453.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Richard McMahon, Head of School"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-7 -right-2 bg-pineapple-navy-900 px-7 py-5 shadow-2xl sm:right-8">
            <p className="font-display text-lg font-semibold text-white">Richard McMahon</p>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-pineapple-gold-400">Head of School · Principal</p>
          </div>
          <div className="animate-float absolute -left-3 top-8 hidden bg-pineapple-gold-500 px-5 py-4 shadow-xl sm:block">
            <p className="font-display text-3xl font-bold text-pineapple-navy-950">68+</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pineapple-navy-900">Years of Excellence</p>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-pineapple-gold-500" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-pineapple-gold-600">Principal's Welcome Address</span>
            </div>
            <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-pineapple-navy-900 sm:text-4xl lg:text-[2.75rem]">
              Welcome — and thank you for your interest in Pineapple School
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-600">
              Pineapple School currently offers an outstanding, holistic co-education to students from Nursery to Year Eleven (IGCSE).
              We are a premium, private day and boarding school, established in 1958, delivering the National Curriculum of England
              and the Cambridge (CIE) curriculum.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Our students' academic achievement is exceptional — outperforming all other schools in Lagos, with external examination
              results comparable to the top British independent schools in the UK. We provide modern facilities and a safe learning
              environment where children flourish, supported by dedicated and passionate teachers.
            </p>
            <div className="mt-6 flex items-start gap-4 border-l-[3px] border-pineapple-gold-500 bg-pineapple-cream px-5 py-4">
              <Quote size={26} className="mt-1 shrink-0 text-pineapple-gold-600" />
              <p className="font-display text-[17px] italic leading-relaxed text-pineapple-navy-900">
                “We provide a dynamic learning community which nurtures and inspires every learner to be the best they can be.”
              </p>
            </div>
          </Reveal>
          <Reveal delay={2} className="mt-8 flex flex-wrap gap-4">
            <GoldButton onClick={onApply}>
              Enquire Now <ArrowRight size={16} />
            </GoldButton>
            <OutlineButton href="#history">Our Heritage Since 1958</OutlineButton>
          </Reveal>
          <Reveal delay={3} className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
            {[
              { v: "Nursery – Y11", l: "Age 2½ – 16" },
              { v: "Day & Boarding", l: "Flexible Options" },
              { v: "British + CIE", l: "Curriculum" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-lg font-semibold text-pineapple-navy-900 sm:text-xl">{s.v}</p>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">{s.l}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================= LEADERSHIP ================= */
function initials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("");
}

export function Leadership() {
  return (
    <section id="leadership" className="bg-pineapple-cream py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Management"
          title="Highly Committed, Experienced Professionals"
          text="Pineapple School is endowed with dedicated leaders who form the Senior Executive Team — setting the standard across every classroom."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LEADERSHIP.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <article className="group bg-white shadow-[0_14px_40px_-18px_rgba(10,26,60,0.4)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_-18px_rgba(10,26,60,0.5)]">
                <div className="relative flex aspect-[4/4] items-center justify-center overflow-hidden bg-pineapple-navy-900">
                  <span className="font-display text-6xl font-semibold text-white/15">{initials(m.name)}</span>
                  <SmartImage src={m.image} alt={m.name} className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-pineapple-navy-950/70 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-bold uppercase tracking-[0.24em] text-pineapple-gold-300">Senior Executive Team</span>
                </div>
                <div className="border-t-2 border-pineapple-gold-500 px-5 py-4">
                  <h3 className="font-display text-lg font-semibold text-pineapple-navy-900">{m.name}</h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-pineapple-gold-700">{m.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= WHY CHOOSE PINEAPPLE ================= */
export function WhyPineapple() {
  return (
    <section id="why-pineapple" className="relative bg-pineapple-navy-950 py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #C6A34F 1px, transparent 0)", backgroundSize: "26px 26px" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          dark gold
          eyebrow="Staying Connected with the Pineapple Community"
          title="Why Choose Pineapple?"
          text="Eight good reasons why we believe you should entrust your child's education to us."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_PINEAPPLE.map((w, i) => {
            const Icon = ICONS[w.icon] ?? Sparkles;
            return (
              <Reveal key={w.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <article className="group relative h-full border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-pineapple-gold-500/60 hover:bg-white/[0.07]">
                  <span className="font-display absolute right-5 top-4 text-4xl font-bold text-white/[0.07] transition group-hover:text-pineapple-gold-500/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex h-13 w-13 items-center justify-center bg-pineapple-gold-500/15 p-3.5 text-pineapple-gold-400 transition group-hover:bg-pineapple-gold-500 group-hover:text-pineapple-navy-950">
                    <Icon size={26} />
                  </span>
                  <h3 className="font-display mt-5 text-xl font-semibold text-white">{w.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/65">{w.text}</p>
                  <span className="mt-5 block h-[2px] w-10 bg-pineapple-gold-500 transition-all duration-300 group-hover:w-full" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= PRIMARY / SECONDARY ================= */
export function Schools() {
  return (
    <section id="primary-secondary" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Explore Pineapple"
          title="One School, Two Thriving Phases"
          text="A seamless journey from a child's first steps in Nursery to Cambridge IGCSE success in Year 11."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {SCHOOLS.map((s, i) => (
            <Reveal key={s.title} delay={i as 0 | 1}>
              <article className="group relative overflow-hidden bg-pineapple-navy-950 shadow-[0_30px_60px_-25px_rgba(10,26,60,0.6)]">
                <SmartImage
                  src={s.image}
                  fallback={s.fallback}
                  alt={s.title}
                  className="h-[300px] w-full object-cover opacity-90 transition-transform duration-[1.2s] group-hover:scale-105 sm:h-[340px]"
                />
                <div className="absolute left-0 top-6 bg-pineapple-gold-500 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-pineapple-navy-950">
                  {s.tag}
                </div>
                <div className="relative p-8 sm:p-10">
                  <div className="gold-rule absolute left-0 right-0 top-0 opacity-60" />
                  <h3 className="font-display text-3xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/70">{s.text}</p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-white/85">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-pineapple-gold-500/20">
                          <Check size={12} className="text-pineapple-gold-400" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a href="#admissions" className="mt-7 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.18em] text-pineapple-gold-400 transition hover:gap-3 hover:text-pineapple-gold-300">
                    Admissions Information <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= BOARDING ================= */
export function Boarding({ onApply }: { onApply: () => void }) {
  return (
    <section id="boarding" className="relative overflow-hidden bg-pineapple-navy-900 py-20 lg:py-24">
      <SmartImage
        src={G("/wp-content/uploads/2026/07/new-hostel_result.webp")}
        fallback="https://images.pexels.com/photos/34211750/pexels-photo-34211750.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
        alt="Pineapple boarding house"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-pineapple-navy-950 via-pineapple-navy-950/85 to-pineapple-navy-900/40" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-pineapple-gold-500" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-pineapple-gold-400">Boarding at Pineapple</span>
            </div>
            <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              A Home Away From Home in the Heart of Ikeja
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/75">
              Established in 2006, our residential provision supports families who struggle with the weekly commute.
              With the acquisition of new boarding facilities just five minutes from the main school, over 100 students
              in Years 5–11 are comfortably accommodated in eight terraced houses in a self-contained compound —
              to standards in keeping with internationally accepted practices.
            </p>
          </Reveal>
          <Reveal delay={1} className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: BedDouble, t: "100+ Boarders", d: "Years 5 – 11" },
              { icon: ShieldCheck, t: "Pastoral Care", d: "Resident house staff" },
              { icon: Bus, t: "5 Mins Away", d: "From main campus" },
            ].map((f) => (
              <div key={f.t} className="border border-white/12 bg-white/[0.05] p-5 backdrop-blur">
                <f.icon size={24} className="text-pineapple-gold-400" />
                <p className="font-display mt-3 text-lg font-semibold text-white">{f.t}</p>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/55">{f.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
        <Reveal delay={2}>
          <div className="border border-pineapple-gold-500/40 bg-white/[0.06] p-8 backdrop-blur-md sm:p-10">
            <BedDouble size={34} className="text-pineapple-gold-400" />
            <h3 className="font-display mt-4 text-2xl font-semibold text-white">Boarding Enquiries</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Weekly and full boarding options available. Speak to our team about house life, weekend activities and pastoral support.
            </p>
            <GoldButton onClick={onApply} className="mt-6 w-full">Enquire About Boarding</GoldButton>
            <p className="mt-4 text-center text-xs text-white/50">Or call the school office · Mon–Fri, 7:00am – 4:00pm</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= RESULTS ================= */
function Bar({ value, delay }: { value: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => {
        if (es[0].isIntersecting) {
          setTimeout(() => setW(value), delay);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, delay]);
  return (
    <div ref={ref} className="h-3.5 w-full overflow-hidden rounded-full bg-pineapple-navy-900/10">
      <div
        className="h-full rounded-full bg-gradient-to-r from-pineapple-gold-700 via-pineapple-gold-500 to-pineapple-gold-400 transition-[width] duration-[1600ms] ease-out"
        style={{ width: `${w}%` }}
      />
    </div>
  );
}

export function Results() {
  return (
    <section id="results" className="bg-pineapple-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-pineapple-gold-500" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-pineapple-gold-600">High Academic Standards</span>
            </div>
            <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-pineapple-navy-900 sm:text-4xl">
              Excellent Exam Results, Year After Year
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              An impressive extra-curricular programme, a happy and rewarding environment with impressive facilities —
              and well-rounded, confident, intellectually curious pupils. Our IGCSE outcomes speak for themselves:
            </p>
          </Reveal>
          <div className="mt-8 space-y-6">
            {RESULTS.map((r, i) => (
              <Reveal key={r.grade} delay={i as 0 | 1 | 2}>
                <div className="flex items-end justify-between">
                  <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-pineapple-navy-900">
                    Grades {r.grade} <span className="font-medium normal-case tracking-normal text-slate-500">· {r.note}</span>
                  </p>
                  <p className="font-display text-3xl font-semibold text-pineapple-gold-700">{r.value}%</p>
                </div>
                <div className="mt-2"><Bar value={r.value} delay={i * 200} /></div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={3} className="mt-8">
            <OutlineButton href="#admissions">Join the Class of 2027</OutlineButton>
          </Reveal>
        </div>
        <Reveal delay={1} className="relative">
          <div className={cn("grid grid-cols-2 gap-4")}>
            <SmartImage
              src={G("/wp-content/uploads/2026/06/IMG_1848-1_result-768x512.webp")}
              fallback="https://images.pexels.com/photos/8471839/pexels-photo-8471839.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Science at Pineapple"
              className="mt-10 aspect-[3/4] w-full object-cover shadow-xl"
            />
            <SmartImage
              src={G("/wp-content/uploads/2026/05/IMG_9646_result-scaled.webp")}
              fallback="https://images.pexels.com/photos/11025019/pexels-photo-11025019.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Learning at Pineapple"
              className="aspect-[3/4] w-full object-cover shadow-xl"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 flex w-[92%] -translate-x-1/2 items-center gap-4 bg-pineapple-navy-900 px-6 py-5 shadow-2xl">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pineapple-gold-500">
              <Award size={24} className="text-pineapple-navy-950" />
            </span>
            <p className="text-sm leading-snug text-white/85">
              <strong className="text-white">Top IGCSE outcomes in Lagos</strong> — comparable to leading UK independent schools.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
