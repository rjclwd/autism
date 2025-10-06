import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  HeartHandshake,
  Sparkles,
  Salad,
  ActivitySquare,
  Droplets,
  ShieldPlus,
  Ear,
  Scissors,
  Baby,
  Bone,
  Wind,
  Search,
  ArrowRight,
  HeartPlus,
} from "lucide-react";
import SplitText from "./bits/SplitText/SplitText";

export default function App() {
  const [q, setQ] = useState("");

  const sections = useMemo(
    () => [
      {
        title: "Autism Care",
        path: "/autism",
        desc: "Therapies and support tailored for neurodevelopmental needs.",
        icon: Brain,
      },
      {
        title: "Mens Care",
        path: "/menscare",
        desc: "Holistic solutions for strength, stamina, and vitality.",
        icon: HeartPlus,
      },
      {
        title: "Female Care",
        path: "/femalecare",
        desc: "Hormonal balance, wellness, and long-term care.",
        icon: HeartHandshake,
      },
      {
        title: "Skin Care",
        path: "/skincare",
        desc: "Personalised skin regimes for glow and clarity.",
        icon: Sparkles,
      },
      {
        title: "Digestive Care",
        path: "/digestivecare",
        desc: "Gut health, acidity, constipation, and more.",
        icon: Salad,
      },
      {
        title: "Nervous & Mind Care",
        path: "/nervmindcare",
        desc: "Sleep, anxiety, memory and focus management.",
        icon: ActivitySquare,
      },
      {
        title: "Urology Care",
        path: "/urologycare",
        desc: "Kidney health, UTIs, stones and urinary wellness.",
        icon: Droplets,
      },
      {
        title: "Autoimmune Diseases",
        path: "/autoimmunecare",
        desc: "Support for immunity, inflammation and recovery.",
        icon: ShieldPlus,
      },
      {
        title: "ENT Care",
        path: "/entcare",
        desc: "Nose, throat, ear health and sinus relief.",
        icon: Ear,
      },
      {
        title: "Hair & Beauty Care",
        path: "/hairbeautycare",
        desc: "Healthy hair and confidence-boosting care.",
        icon: Scissors,
      },
      {
        title: "Child Care",
        path: "/childcare",
        desc: "Gentle remedies and daily growth support.",
        icon: Baby,
      },
      {
        title: "Ortho Care",
        path: "/orthocare",
        desc: "Joints, spine, posture, and recovery.",
        icon: Bone,
      },
      {
        title: "Respiratory",
        path: "/respiratorycare",
        desc: "Breath easy—cough, asthma and lung care.",
        icon: Wind,
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return sections;
    return sections.filter(
      s =>
        s.title.toLowerCase().includes(term) ||
        s.desc.toLowerCase().includes(term)
    );
  }, [q, sections]);

  return (
    <div className="min-h-screen bg-bgnd">
      {/* Header / Hero */}
      <header className="max-w-7xl mx-auto px-4 pt-12 pb-6">
        <div className="text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary">
            Explore Care Programs
          </h1>
          <p className="mt-3 text-text-muted max-w-3xl mx-auto">
            Evidence-informed homeopathic care tailored to every need—select a category to begin.
          </p>
        </div>

        {/* Search */}
        <div className="mt-6 max-w-2xl mx-auto relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-text-muted" />
          </div>
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search care: e.g. 'skin', 'child', 'urology'…"
            className="w-full rounded-xl border border-border bg-surface/80 backdrop-blur 
                       focus:outline-none focus:ring-2 focus:ring-primary/40
                       pl-11 pr-4 py-3 text-foreground placeholder:text-text-muted"
          />
        </div>
      </header>

      {/* Grid of sections */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        {filtered.length === 0 ? (
          <div className="mt-8 text-center text-text-muted">
            No matches. Try a different term.
          </div>
        ) : (
          <div className="mt-4 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  to={s.path}
                  key={s.path}
                  className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20
                             hover:from-primary/35 hover:via-accent/25 hover:to-secondary/35 transition"
                >
                  <div className="h-full rounded-2xl bg-surface border border-border">
                    <div className="flex items-start gap-4 p-5">
                      <div
                        className="shrink-0 rounded-xl p-3 bg-overlay border border-border
                                   text-primary group-hover:scale-105 transition-transform"
                        aria-hidden
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-heading text-lg sm:text-xl font-semibold text-foreground">
                          {s.title}
                        </h2>
                        <p className="mt-1 text-sm text-text-muted line-clamp-2">
                          {s.desc}
                        </p>
                        <div className="mt-3 inline-flex items-center text-primary font-semibold">
                          Explore
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-text-light">
            Not sure where to start?
          </p>
          <Link
            to="/autism"
            className="inline-flex items-center justify-center rounded-full mt-3
                       bg-primary text-white px-5 py-3 font-semibold shadow-sm
                       hover:shadow-md hover:-translate-y-0.5 transition"
          >
            View a popular program
          </Link>
        </div>
      </main>
    </div>
  );
}
