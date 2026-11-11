import { useState } from "react";
import { ShieldCheck, Users, Languages, LifeBuoy } from "lucide-react";
import { TopBar, Navbar, ApplyModal } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Welcome, Leadership, WhyGrange, Schools, Boarding, Results } from "./components/About";
import { Voices, History, LifeGallery } from "./components/Voices";
import { News, Admissions, Faq, Contact, Footer, BackToTop } from "./components/Closing";
import { Reveal } from "./components/shared";

function PastoralStrip() {
  const items = [
    { icon: ShieldCheck, t: "Safeguarding First", d: "Fully trained staff; every child's welfare monitored and nurtured." },
    { icon: Users, t: "Dedicated Tutors", d: "A strong pastoral system where pupils feel confident, capable and valued." },
    { icon: Languages, t: "EAL & Intensive English", d: "Warm welcome for non-native speakers with tailored language support." },
    { icon: LifeBuoy, t: "Learning Support", d: "Individual and small-group provision plus personalised programmes." },
  ];
  return (
    <section id="pastoral" className="border-y border-grange-gold-500/25 bg-grange-navy-950 py-14">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((c, i) => (
          <Reveal key={c.t} delay={(i % 4) as 0 | 1 | 2 | 3} className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-grange-gold-500/40 bg-grange-gold-500/10">
              <c.icon size={22} className="text-grange-gold-400" />
            </span>
            <span>
              <span className="font-display block text-lg font-semibold text-white">{c.t}</span>
              <span className="mt-1 block text-[13px] leading-relaxed text-white/60">{c.d}</span>
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [applyOpen, setApplyOpen] = useState(false);
  const openApply = () => setApplyOpen(true);

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar onApply={openApply} />
      <main>
        <Hero />
        <div id="about">
          <Welcome onApply={openApply} />
        </div>
        <Leadership />
        <WhyGrange />
        <Schools />
        <PastoralStrip />
        <Boarding onApply={openApply} />
        <Results />
        <Voices />
        <History />
        <LifeGallery />
        <News />
        <Admissions onApply={openApply} />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ApplyModal open={applyOpen} onClose={() => setApplyOpen(false)} />
    </div>
  );
}
