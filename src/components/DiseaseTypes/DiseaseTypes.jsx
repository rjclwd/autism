import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  AlertCircle,
  Stethoscope,
  Pill,
  Info,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  HeartPulse,
  Brain,
  ClipboardList,
  Beaker,
  FileText,
  CheckCircle2,
  XCircle,
} from "lucide-react";

/**
 * DiseaseTypesWhiteboard (Compact Media)
 * --------------------------------------------
 * Full-bleed whiteboard canvas
 * + sticky tabs
 * + compact, centered media card (max-w-5xl, h-56→h-80)
 * + balanced 1/2/3-column responsive card grid
 */

export default function DiseaseTypesWhiteboard({ diseaseData = [] }) {
  const [activeTab, setActiveTab] = useState(diseaseData?.[0]?.id || "");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!activeTab && diseaseData.length) setActiveTab(diseaseData[0].id);
  }, [diseaseData, activeTab]);

  if (!diseaseData || diseaseData.length === 0) {
    return (
      <section className="relative w-full overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col items-center justify-center text-text-muted">
          <AlertCircle className="w-14 h-14 mb-3 opacity-60" />
          <p className="text-lg font-medium">No diseases found</p>
          <p className="text-sm mt-1">Please check back later.</p>
        </div>
      </section>
    );
  }

  const active = diseaseData.find((d) => d.id === activeTab) || diseaseData[0];

  // Keyboard navigation between tabs
  useEffect(() => {
    const onKey = (e) => {
      if (!["ArrowLeft", "ArrowRight"].includes(e.key) || !diseaseData.length) return;
      const idx = diseaseData.findIndex((d) => d.id === active.id);
      if (idx < 0) return;
      if (e.key === "ArrowLeft") {
        const prev = (idx - 1 + diseaseData.length) % diseaseData.length;
        setActiveTab(diseaseData[prev].id);
        ensureVisible(prev);
      } else if (e.key === "ArrowRight") {
        const next = (idx + 1) % diseaseData.length;
        setActiveTab(diseaseData[next].id);
        ensureVisible(next);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [diseaseData, active]);

  const ensureVisible = (index) => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    const btn = scroller.querySelectorAll("button[data-tab]")[index];
    if (btn) btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed whiteboard canvas */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw]">
        {/* Whiteboard background (soft grid) */}
        <div
          className="relative"
          style={{
            background:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0) 0 0 / 20px 20px, linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0))",
            backdropFilter: "saturate(120%)",
          }}
        >
          {/* Sticky Tabs */}
          <div className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-border">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center gap-2 py-2">
                <div className="p-2 rounded-lg bg-primary/10 border border-border">
                  <Stethoscope className="w-5 h-5 text-primary" />
                </div>
                <h1 className="text-base sm:text-lg font-heading font-semibold">
                  Disease Explorer
                </h1>
                <span className="ml-auto flex items-center gap-1 text-xs text-text-muted">
                  <Sparkles className="w-4 h-4 text-accent" />
                  Use ← / → to switch
                </span>
              </div>

              <div className="relative">
                <ScrollButton dir="left" targetRef={scrollRef} />
                <div
                  ref={scrollRef}
                  className="no-scrollbar relative flex overflow-x-auto gap-2 pb-3"
                  role="tablist"
                  aria-label="Disease categories"
                >
                  {diseaseData.map((d, i) => {
                    const selected = activeTab === d.id;
                    return (
                      <button
                        key={d.id}
                        data-tab
                        role="tab"
                        aria-selected={selected ? "true" : "false"}
                        onClick={() => {
                          setActiveTab(d.id);
                          ensureVisible(i);
                        }}
                        className={`whitespace-nowrap px-4 py-2 text-sm rounded-full border transition-all duration-200
                          ${
                            selected
                              ? "bg-primary text-white border-primary shadow-md"
                              : "bg-white text-text border-border hover:border-primary/40 hover:shadow-sm"
                          }`}
                      >
                        {d.name}
                      </button>
                    );
                  })}
                </div>
                <ScrollButton dir="right" targetRef={scrollRef} />
              </div>
            </div>
          </div>

          {/* ✅ Compact Media (centered, normal size) */}
          

          {/* Whiteboard Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "_grid"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="max-w-7xl mx-auto px-4 py-8"
            >
              {/* Overview chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {active.stats?.prevalence && (
                  <Chip icon={<HeartPulse className="w-3.5 h-3.5" />}>
                    {active.stats.prevalence}
                  </Chip>
                )}
                {active.stats?.ageOfOnset && (
                  <Chip icon={<Info className="w-3.5 h-3.5" />}>
                    Onset: {active.stats.ageOfOnset}
                  </Chip>
                )}
                {active.stats?.genderRatio && (
                  <Chip icon={<Info className="w-3.5 h-3.5" />}>
                    M:F {active.stats.genderRatio}
                  </Chip>
                )}
                {active.stats?.coMorbidities && (
                  <Chip icon={<ClipboardList className="w-3.5 h-3.5" />}>
                    {active.stats.coMorbidities}
                  </Chip>
                )}
              </div>

              {/* Grid (1 → 2 → 3 cols) */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Overview (wide) */}
                {active.description && (
                  <WBCard title="Overview" icon={<Info className="w-5 h-5 text-primary" />} span={2}>
                    <p className="text-sm text-text-light leading-relaxed">{active.description}</p>
                  </WBCard>
                )}

                {/* Red Flags (full-width) */}
                {active.redFlags?.length ? (
                  <WBCard
                    title="When to seek urgent medical help"
                    icon={<AlertCircle className="w-5 h-5 text-rose-600" />}
                    tone="danger"
                    span={3}
                  >
                    <ul className="list-disc pl-5 space-y-1">
                      {active.redFlags.map((rf, idx) => (
                        <li key={idx} className="text-sm text-rose-800">{rf}</li>
                      ))}
                    </ul>
                  </WBCard>
                ) : null}

                {/* Symptoms */}
                {active.symptoms?.length ? (
                  <WBCard title="Common Symptoms" icon={<AlertCircle className="w-5 h-5 text-accent" />}>
                    <ul className="space-y-2">
                      {active.symptoms.map((s, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 rounded-lg border border-border bg-bgnd px-3 py-2 hover:bg-overlay transition"
                        >
                          <span className="mt-1 inline-block w-2 h-2 rounded-full bg-secondary" />
                          <span className="text-sm text-text-light">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </WBCard>
                ) : null}

                {/* Causes */}
                {active.causes?.length ? (
                  <WBCard title="Possible Causes" icon={<Info className="w-5 h-5 text-primary" />}>
                    <ul className="space-y-2">
                      {active.causes.map((c, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-text-light bg-bgnd rounded-lg border border-border px-3 py-2 hover:bg-overlay transition"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </WBCard>
                ) : null}

                {/* Diagnosis */}
                {active.diagnosis?.length ? (
                  <WBCard title="Diagnosis & Evaluation" icon={<Beaker className="w-5 h-5 text-secondary" />}>
                    <ul className="space-y-2">
                      {active.diagnosis.map((d, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-text-light bg-bgnd rounded-lg border border-border px-3 py-2 hover:bg-overlay transition"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </WBCard>
                ) : null}

                {/* Therapies */}
                {active.therapies?.length ? (
                  <WBCard title="Therapies & Interventions" icon={<Pill className="w-5 h-5 text-emerald-600" />}>
                    <div className="flex flex-wrap gap-2">
                      {active.therapies.map((t, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </WBCard>
                ) : null}

                {/* Treatments */}
                {active.treatments?.length ? (
                  <WBCard title="Care Plan & Treatments" icon={<FileText className="w-5 h-5 text-indigo-600" />}>
                    <ul className="space-y-2">
                      {active.treatments.map((t, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-text-light bg-bgnd rounded-lg border border-border px-3 py-2 hover:bg-overlay transition"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </WBCard>
                ) : null}

                {/* Do & Don't */}
                {(active.doDonts?.do?.length || active.doDonts?.dont?.length) && (
                  <WBCard title="Do & Don’t" icon={<ClipboardList className="w-5 h-5 text-amber-600" />}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Do */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-emerald-700">Do</h4>
                        <div className="flex flex-wrap gap-2">
                          {active.doDonts?.do?.map((item, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Don't */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-rose-700">Don’t</h4>
                        <div className="flex flex-wrap gap-2">
                          {active.doDonts?.dont?.map((item, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-full bg-rose-50 text-rose-700 border border-rose-200"
                            >
                              <XCircle className="w-3.5 h-3.5" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </WBCard>
                )}

                {/* Tips */}
                {active.tips?.length ? (
                  <WBCard title="Self-care Tips" icon={<Sparkles className="w-5 h-5 text-yellow-500" />}>
                    <ul className="list-disc pl-5 space-y-1">
                      {active.tips.map((t, idx) => (
                        <li key={idx} className="text-sm text-text-light">{t}</li>
                      ))}
                    </ul>
                  </WBCard>
                ) : null}

                {/* Care Path (full-width) */}
                {active.carePath?.length ? (
                  <WBCard title="Suggested Care Path" icon={<Stethoscope className="w-5 h-5 text-primary" />} span={3}>
                    <ol className="relative border-s border-border/70 pl-5 space-y-4">
                      {active.carePath.map((step, idx) => (
                        <li key={idx} className="ms-3">
                          <span className="absolute -start-2.5 mt-1 h-2.5 w-2.5 rounded-full bg-primary"></span>
                          <p className="text-sm text-text font-semibold">{step.title}</p>
                          <p className="text-sm text-text-light">{step.desc}</p>
                        </li>
                      ))}
                    </ol>
                  </WBCard>
                ) : null}

                {/* FAQ (full-width) */}
                {active.faq?.length ? (
                  <WBCard title="FAQs" icon={<Info className="w-5 h-5 text-blue-600" />} span={3}>
                    <div className="divide-y divide-border rounded-xl border border-border">
                      {active.faq.map((f, idx) => (
                        <details key={idx} className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between p-3 sm:p-4">
                            <span className="text-sm font-semibold text-text">{f.q}</span>
                            <span className="ml-3 text-text-muted group-open:rotate-180 transition">▾</span>
                          </summary>
                          <div className="px-3 sm:px-4 pb-4 text-sm text-text-light">
                            {f.a}
                          </div>
                        </details>
                      ))}
                    </div>
                  </WBCard>
                ) : null}

                {/* Resources (full-width) */}
                {active.resources?.length ? (
                  <WBCard title="Helpful Resources" icon={<ExternalLink className="w-5 h-5 text-indigo-500" />} span={3}>
                    <div className="flex flex-wrap gap-2">
                      {active.resources.map((r, idx) => (
                        <a
                          key={idx}
                          href={r.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-white text-text px-4 py-2 text-xs sm:text-sm border border-border hover:border-primary/40 hover:shadow-sm transition"
                        >
                          {r.label} <ExternalLink className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </WBCard>
                ) : null}
              </div>

              {/* Actions */}
              <div className="max-w-7xl mx-auto px-4 pb-10 flex flex-wrap gap-3">
                <a
                  href="https://www.rajeevclinic.com/appointment"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-5 py-2.5 text-sm font-semibold shadow hover:shadow-md active:scale-[0.98] transition"
                >
                  Book Appointment
                </a>
                <a
                  href={active.learnMoreUrl || "https://www.rajeevclinic.com/disease-terms.html"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-text px-5 py-2.5 text-sm font-semibold border border-border hover:border-primary/40 hover:shadow-sm active:scale-[0.98] transition"
                >
                  Learn more <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small subcomponents ---------- */

function WBCard({ title, icon, children, tone = "default", span = 1 }) {
  const toneMap = {
    default: "bg-white border-border",
    danger: "bg-rose-50 border-rose-200",
  };
  const spanMap = {
    1: "col-span-1",
    2: "md:col-span-2",
    3: "xl:col-span-3",
  };
  return (
    <div className={`rounded-2xl border ${toneMap[tone]} ${spanMap[span]} shadow-sm`}>
      <div className="p-5 border-b border-border/70 bg-white/70">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-base font-heading font-semibold text-text">{title}</h3>
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function Chip({ icon, children }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-600/60 text-white backdrop-blur border border-white/10">
      {icon}
      {children}
    </span>
  );
}

function ScrollButton({ dir = "left", targetRef }) {
  const isLeft = dir === "left";
  const Icon = isLeft ? ChevronLeft : ChevronRight;

  const onClick = () => {
    const el = targetRef.current;
    if (!el) return;
    const delta = isLeft ? -280 : 280;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isLeft ? "Scroll tabs left" : "Scroll tabs right"}
      className={`hidden sm:flex absolute -top-10 ${isLeft ? "left-0" : "right-0"} z-10 p-1.5 rounded-full bg-white/90 border border-border shadow`}
    >
      <Icon className="w-5 h-5 text-text" />
    </button>
  );
}
