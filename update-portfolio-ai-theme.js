// Script to update all portfolio pages with AI theme
const fs = require('fs');
const path = require('path');

const portfolioDir = 'src/Pages-Portfolio';
const files = fs.readdirSync(portfolioDir);

// AI theme replacements
const replacements = [
  // Hero section background
  {
    from: /bg-gradient-to-br from-[\w-]+ via-[\w-]+ to-[\w-]+ overflow-hidden/g,
    to: 'hero-bg overflow-hidden'
  },
  {
    from: /bg-gradient-to-br from-[\w-]+ to-[\w-]+ overflow-hidden/g,
    to: 'hero-bg overflow-hidden'
  },
  // Hero heading
  {
    from: /<h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg">/g,
    to: '<h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg gradient-text-ai neon-text">'
  },
  // Hero text
  {
    from: /text-gray-100 max-w-3xl mx-auto leading-relaxed/g,
    to: 'ai-text-primary max-w-3xl mx-auto leading-relaxed'
  },
  // Main content background
  {
    from: /py-16 bg-gradient-to-br from-gray-50 to-white/g,
    to: 'py-16 ai-section'
  },
  // Section headings
  {
    from: /heading-2 text-gray-900 mb-8 text-center/g,
    to: 'heading-2 ai-heading mb-8 text-center'
  },
  // Card backgrounds
  {
    from: /bg-white p-6 rounded-xl shadow-lg border border-gray-100/g,
    to: 'ai-card-glow p-6 rounded-xl border border-ai-purple/30 hover:scale-105 transition-all duration-500'
  },
  // Card headings
  {
    from: /text-xl font-bold text-gray-900 mb-3/g,
    to: 'text-xl font-bold ai-heading mb-3'
  },
  // Card text
  {
    from: /text-gray-700/g,
    to: 'ai-text-primary'
  },
  // CTA sections
  {
    from: /bg-gradient-to-r from-[\w-]+ to-[\w-]+ rounded-2xl p-8 text-white/g,
    to: 'ai-card-glow rounded-2xl p-8 border border-ai-purple/30 bg-gradient-to-r from-ai-purple/20 to-ai-cyan/20'
  },
  // CTA headings
  {
    from: /text-2xl font-bold mb-4/g,
    to: 'text-2xl font-bold mb-4 ai-heading gradient-text-ai neon-text'
  },
  // CTA text
  {
    from: /text-lg mb-6 opacity-90/g,
    to: 'text-lg mb-6 ai-text-primary'
  },
  // Buttons
  {
    from: /btn-primary bg-white text-[\w-]+ hover:bg-gray-100 inline-flex items-center gap-2/g,
    to: 'btn-primary inline-flex items-center gap-2 min-h-[48px] px-8 py-4 text-lg font-semibold'
  }
];

console.log('Updating portfolio pages with AI theme...');

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(portfolioDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Apply replacements
    replacements.forEach(replacement => {
      content = content.replace(replacement.from, replacement.to);
    });
    
    // Add gradient text spans to key phrases in hero descriptions
    content = content.replace(
      /(AI|machine learning|intelligent|predictive|advanced|personalized|automated)/gi,
      '<span className="gradient-text">$1</span>'
    );
    
    // Update icon colors to AI theme
    content = content.replace(/text-[\w-]+-600 mb-4/g, 'text-ai-purple mb-4 ai-glow');
    content = content.replace(/text-[\w-]+-600 mb-2/g, 'text-ai-purple mb-2 ai-glow');
    
    // Alternate cyan colors for variety
    if (file.includes('chatbot') || file.includes('genomic') || file.includes('remote')) {
      content = content.replace(/text-ai-purple mb-4 ai-glow/g, 'text-ai-cyan mb-4 ai-glow');
      content = content.replace(/border-ai-purple\/30/g, 'border-ai-cyan/30');
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${file}`);
  }
});

console.log('Portfolio pages updated successfully!');