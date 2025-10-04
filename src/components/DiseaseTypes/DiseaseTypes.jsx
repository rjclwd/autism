import React, { useState } from "react";
import { Activity, AlertCircle, Stethoscope } from "lucide-react";

function DiseaseTypes({ diseaseData }) {
  const [activeTab, setActiveTab] = useState(diseaseData?.[0]?.id || "");

  if (!diseaseData || diseaseData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-text-muted">
        <AlertCircle className="w-16 h-16 mb-4 opacity-50" />
        <p className="text-lg">No diseases found</p>
      </div>
    );
  }

  const activeDisease = diseaseData.find((d) => d.id === activeTab);

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="p-3 bg-primary/10 rounded-md">
          <Stethoscope className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-heading font-bold text-text">
            Disease Information
          </h1>
          <p className="text-sm text-text-light">
            Select a disease to view details
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {diseaseData.map((disease) => (
          <button
            key={disease.id}
            onClick={() => setActiveTab(disease.id)}
            className={`px-5 py-2.5 text-sm font-body font-medium rounded-md transition-all duration-200 ${
              activeTab === disease.id
                ? "bg-primary text-white shadow-lg scale-105"
                : "bg-surface text-text border border-border hover:border-primary/30 hover:shadow-md"
            }`}
          >
            {disease.name}
          </button>
        ))}
      </div>

      {/* Content Card */}
      {activeDisease && (
        <div className="bg-surface rounded-lg shadow-lg border border-border overflow-hidden">
          {/* Card Header */}
          <div className="bg-primary/5 p-6 border-b border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-surface rounded-md shadow-[--shadow-sm]">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-heading font-bold text-text mb-2">
                  {activeDisease.name}
                </h2>
                <p className="text-text-light font-body leading-relaxed">
                  {activeDisease.description}
                </p>
              </div>
            </div>
          </div>

          {/* Symptoms Section */}
          {activeDisease.symptoms && activeDisease.symptoms.length > 0 && (
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-heading font-semibold text-text">
                  Common Symptoms
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeDisease.symptoms.map((symptom, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-bgnd rounded-sm hover:bg-overlay transition-colors duration-150"
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-light font-body text-sm">
                      {symptom}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      <div className="mt-6 h-fit flex justify-end">
        <a
          href="https://www.rajeevclinic.com/disease-terms.html"
          target="_blank"
          className="bg-accent px-4 py-2 rounded-md font-bold text-white border-border border-2"
        >
          More diseases ...
        </a>
      </div>
    </div>
  );
}

export default DiseaseTypes;
