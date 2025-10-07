import React from "react";

/* -----------------------------------
   DATA (exactly as per posters)
----------------------------------- */
const internationalPlans = [
  {
    months: "3 MONTHS",
    tier1: { fee: 100 },   // Video + Text
    tier2: { fee: 50 },    // Text only
  },
  {
    months: "6 MONTHS",
    tier1: { fee: 150 },
    tier2: { fee: 75 },
  },
  {
    months: "12 MONTHS",
    tier1: { fee: 250 },
    tier2: { fee: 125 },
  },
];

const indiaPlans = [
  { label: "30 DAYS", fee: 600 },
  { label: "90 DAYS", fee: 1250 },
  { label: "180 DAYS", fee: 2150 },
  { label: "365 DAYS", fee: 3500 },
];

const intlServices = {
  tier1: [
    "Consultation by Video Call once in a month",
    "Consultation by Telephone, WhatsApp, E-mail",
  ],
  tier2: ["Consultation by Telephone, WhatsApp, E-mail"],
};

/* -----------------------------------
   Small helpers
----------------------------------- */
const CheckIcon = () => (
  <svg
    className="w-5 h-5 mr-2 mt-1 text-secondary flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

/* -----------------------------------
   INDIA: Simple plans (no tiers)
----------------------------------- */
function IndiaFeeSimple({ plans }) {
  return (
    <section
      id="india"
      aria-labelledby="india-title"
      className="rounded-xl overflow-hidden shadow-2xl border border-border bg-surface mb-10"
    >
      <header className="bg-primary text-white p-4 sm:p-6 text-center">
        <div className="p-4 rounded-lg bg-highlight">
          <h2
            id="india-title"
            className="text-xl sm:text-3xl font-heading font-extrabold tracking-tight"
          >
            ONLINE & OFFLINE FEE STRUCTURE (INDIA)
          </h2>
        </div>
      </header>

      {/* Grid Cards */}
      <div className="p-5 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p) => (
            <div
              key={p.label}
              className="rounded-lg border border-border bg-white shadow-sm overflow-hidden"
            >
              <div className="bg-accent/10 p-2 text-center border-b border-border">
                <span className="text-sm font-semibold text-text">{p.label}</span>
              </div>
              <div className="px-4 py-3">
                <div className="text-3xl font-heading font-extrabold text-primary text-center">
                  ₹{p.fee.toLocaleString("en-IN")}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* note */}
        <p className="mt-4 text-xs text-center text-text-muted">
          * Charges for medicine and shipping are not included in any consultation fee and will be charged separately.
        </p>
      </div>
    </section>
  );
}

/* -----------------------------------
   INTERNATIONAL: Tier table + mobile cards
----------------------------------- */
function InternationalFeeTable({ plans }) {
  return (
    <section
      id="international"
      aria-labelledby="intl-title"
      className="rounded-xl overflow-hidden shadow-2xl border border-border bg-surface"
    >
      <header className="bg-primary text-white p-4 sm:p-6 text-center">
        <div className="p-4 rounded-lg bg-highlight">
          <h2
            id="intl-title"
            className="text-xl sm:text-3xl font-heading font-extrabold tracking-tight"
          >
            INTERNATIONAL FEE STRUCTURES
          </h2>
          <p className="mt-2 text-sm opacity-90">
            Fees shown in USD.
          </p>
        </div>
      </header>

      {/* Desktop Table */}
      <div className="hidden md:block bg-surface p-6">
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-white font-heading font-bold text-lg">
                <th className="bg-primary p-4 text-left w-1/4 border-r border-primary/40">
                  Service Tier / Details
                </th>
                {plans.map((col) => (
                  <th
                    key={col.months}
                    className="bg-primary p-4 text-center border-l border-primary/40"
                  >
                    {col.months}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {/* Tier 1 */}
              <tr className="text-white font-heading font-extrabold text-xl border-b-2 border-dashed border-border">
                <th className="bg-highlight p-4 text-left">Tier 1 Fee</th>
                {plans.map((col) => (
                  <td key={col.months + "-t1"} className="bg-highlight p-4 text-center">
                    ${col.tier1.fee}
                  </td>
                ))}
              </tr>
              <tr className="font-body text-text border-b border-border">
                <th className="p-4 bg-surface text-left">Video Consultation</th>
                {plans.map((col) => (
                  <td key={col.months + "-v"} className="p-4 text-center bg-surface text-text-light">
                    {intlServices.tier1[0]}
                  </td>
                ))}
              </tr>
              <tr className="font-body text-text border-b-4 border-border">
                <th className="p-4 bg-surface text-left">Text/Audio Consultation</th>
                {plans.map((col) => (
                  <td key={col.months + "-msg"} className="p-4 text-center bg-surface text-text-light">
                    {intlServices.tier1[1]}
                  </td>
                ))}
              </tr>

              {/* Tier 2 */}
              <tr className="text-white font-heading font-extrabold text-lg border-b-2 border-dashed border-border">
                <th className="bg-primary p-4 text-left">Tier 2 Fee</th>
                {plans.map((col) => (
                  <td key={col.months + "-t2"} className="bg-primary p-4 text-center">
                    ${col.tier2.fee}
                  </td>
                ))}
              </tr>
              <tr className="font-body text-text">
                <th className="p-4 bg-surface text-left">Text/Audio Consultation</th>
                {plans.map((col) => (
                  <td key={col.months + "-msg2"} className="p-4 text-center bg-surface text-text-light">
                    {intlServices.tier2[0]}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-center text-text-muted">
          * Charges for medicine and shipping are not included with any consultation fee and will be charged separately.
        </p>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden p-4 bg-surface">
        <h3 className="text-center text-lg font-heading font-bold text-text mb-3">
          Tier 1 (Video + Text)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {plans.map((d) => (
            <div key={d.months} className="rounded-xl overflow-hidden shadow-lg border border-border">
              <div className="bg-primary text-white text-center py-2 font-semibold">
                {d.months}
              </div>
              <div className="bg-highlight text-white text-center py-4 text-2xl font-extrabold">
                Fee ${d.tier1.fee}
              </div>
              <div className="p-4 bg-white">
                {intlServices.tier1.map((s, i) => (
                  <div key={i} className="flex items-start mb-2">
                    <CheckIcon />
                    <p className="text-text-light text-sm">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-center text-lg font-heading font-bold text-text mb-3">
          Tier 2 (Text/Audio only)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {plans.map((d) => (
            <div key={d.months + "-t2"} className="rounded-xl overflow-hidden shadow-lg border border-border">
              <div className="bg-primary text-white text-center py-2 font-semibold">
                {d.months}
              </div>
              <div className="bg-highlight text-white text-center py-4 text-2xl font-extrabold">
                Fee ${d.tier2.fee}
              </div>
              <div className="p-4 bg-white">
                {intlServices.tier2.map((s, i) => (
                  <div key={i} className="flex items-start mb-2">
                    <CheckIcon />
                    <p className="text-text-light text-sm">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-center text-text-muted">
          * Charges for medicine and shipping are not included with any consultation fee and will be charged separately.
        </p>
      </div>
    </section>
  );
}

/* -----------------------------------
   PAGE (no tabs, accessible)
----------------------------------- */
export default function FeePage() {
  return (
    <main className="min-h-fit p-4 sm:p-8 bg-bgnd">
      <div className="max-w-7xl mx-auto">
        {/* skip links */}
        <nav className="flex items-center justify-center gap-3 text-xs text-text-muted mb-4">
          <a href="#india" className="hover:underline">Skip to India Fees</a>
          <span aria-hidden>•</span>
          <a href="#international" className="hover:underline">Skip to International Fees</a>
        </nav>

        <IndiaFeeSimple plans={indiaPlans} />
        <InternationalFeeTable plans={internationalPlans} />
      </div>
    </main>
  );
}
