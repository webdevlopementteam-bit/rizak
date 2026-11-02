export default function Marquee({ items, className = "", separator = "·", reverse = false }) {
  // Four copies cover wide monitors; the -50% keyframe then shifts by exactly two, so the loop is seamless
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className={`relative flex overflow-hidden select-none ${className}`}>
      <div
        className="flex shrink-0 animate-marquee items-center whitespace-nowrap will-change-transform"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center" aria-hidden={i >= items.length}>
            <span className="px-6">{item}</span>
            <span className="opacity-30">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
