"use client";

export default function MarqueeBanner() {
  const items = [
    "✦ Premium Quality Fabrics",
    "✦ Free Alterations",
    "✦ Pan India Shipping",
    "✦ 7 Day Easy Returns",
    "✦ Handcrafted with Love",
    "✦ Exclusive Designs",
  ];

  return (
    <div className="bg-beige py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-poppins text-[11px] tracking-[0.25em] uppercase text-charcoal/60 mx-8"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}