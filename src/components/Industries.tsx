import React from "react";

const industries = [
  { name: "HealthTech", image: "/image/pages_img/healthtechai.jpg" },
  { name: "EdTech", image: "/image/pages_img/EdTechAI.avif" },
  { name: "FinTech", image: "/image/pages_img/fintech.jpg" },
  { name: "GreenTech", image: "/image/pages_img/greentech.jpg" },
  { name: "Retail", image: "/image/pages_img/retail.jpg" },
  { name: "AI Diagnostics", image:"/image/pages_img/Diagnostics.jpg" },
  { name: "E-Commerce", image: "/image/pages_img/E-Commerce.jpg" },
  { name: "HIPAA Compliance", image: "/image/pages_img/HIPAA.avif" },
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
            My Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Industries
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            I specialize in Artificial Intelligence (AI) and Machine Learning (ML), with deep expertise in a variety of ML frameworks and technologies. I apply these skills across multiple industries to develop intelligent, data-driven solutions.
          </p>
        </div>
        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {industries.map((industry) => {
            const isHealthTech = industry.name === "HealthTech";
            const hasImage = !!industry.image;
            const cardContent = hasImage ? (
              <div className="relative group w-full h-56 flex items-center justify-center">
                <img
                  src={industry.image!}
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover border border-gray-200 bg-gray-50 z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                <span className="relative z-20 text-xl font-semibold text-white drop-shadow-xl text-center group-hover:opacity-0 transition-opacity">{industry.name}</span>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-30">
                  <span className="text-white text-lg font-bold drop-shadow">{industry.name}</span>
                </div>
              </div>
            ) : (
              <div className="relative group flex flex-col items-center justify-center w-full h-56">
                <span className="text-5xl mb-4 w-full text-center">❓</span>
                <span className="text-xl font-semibold text-gray-800 w-full text-center group-hover:opacity-0 transition-opacity">{industry.name}</span>
                {/* Hover overlay for no image */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-30">
                  <span className="text-white text-lg font-bold drop-shadow">{industry.name}</span>
                </div>
              </div>
            );
            return isHealthTech ? (
              <a
                key={industry.name}
                href="/HealthTechAI"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl group flex flex-col items-center justify-center bg-white shadow border border-gray-100 text-center cursor-pointer p-0"
                style={{ minHeight: '14rem' }}
              >
                {cardContent}
              </a>
            ) : industry.name === "EdTech" ? (
              <a
                key={industry.name}
                href="/EdTechAI"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl group flex flex-col items-center justify-center bg-white shadow border border-gray-100 text-center cursor-pointer p-0"
                style={{ minHeight: '14rem' }}
              >
                {cardContent}
              </a>
            ) : industry.name === "FinTech" ? (
              <a
                key={industry.name}
                href="/FinTechAI"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl group flex flex-col items-center justify-center bg-white shadow border border-gray-100 text-center cursor-pointer p-0"
                style={{ minHeight: '14rem' }}
              >
                {cardContent}
              </a>
            ) : industry.name === "GreenTech" ? (
              <a
                key={industry.name}
                href="/GreenTechAI"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl group flex flex-col items-center justify-center bg-white shadow border border-gray-100 text-center cursor-pointer p-0"
                style={{ minHeight: '14rem' }}
              >
                {cardContent}
              </a>
            ) : (
              <div
                key={industry.name}
                className="glass-effect rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl group flex flex-col items-center justify-center bg-white shadow border border-gray-100 text-center p-0"
                style={{ minHeight: '14rem' }}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
