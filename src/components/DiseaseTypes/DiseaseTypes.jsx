import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function DiseaseList({ diseaseData = [] }) {
  if (!diseaseData.length) {
    return (
      <div className="w-full py-16 text-center text-gray-500">
        No diseases available.
      </div>
    );
  }

  return (
    <section className="w-full bg-white py-2 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl uppercase    text-primary font-heading text-center mb-8 text-">
          Explore Diseases
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diseaseData.map((disease) => (
            <div
              key={disease.id}
              className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition bg-gradient-to-br from-white via-gray-50 to-blue-50"
            >
              <h2 className="text-lg font-extrabold font-heading text-gray-900 mb-2">
                {disease.name}
              </h2>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {disease.description}
              </p>
              <Link
                to={disease.link || `/disease/${disease.id}`}
                className="inline-flex items-center gap-1 text-primary font-medium hover:underline"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
