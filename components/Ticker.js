'use client';

const items = [
  'GLP-1 Education',
  'AI Implementation',
  'Healthcare Products',
  'PharmD Expertise',
  'ROOTS Framework',
  'Product Builder',
  'Digital Wellness',
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div key={i} className="ticker-item">
            <span className="ticker-dot" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
