/* -----------------------------
   Exportable Colorful word
------------------------------ */
export function ColorfulAutismWord({ className = "", style = {} }) {
  const colors = ["#2563EB", "#F59E0B", "#10B981", "#EF4444", "#A855F7", "#0EA5E9"];
  const letters = ["A", "U", "T", "I", "S", "M"];

  return (
    <span
      aria-label="Autism"
      className={`inline-flex items-baseline gap-[2px] sm:gap-[3px] ${className}`}
      style={{ lineHeight: 1, ...style }}
    >
      {letters.map((ch, i) => (
        <span
          key={i}
          className="font-heading font-extrabold uppercase drop-shadow-sm"
          style={{ color: colors[i], lineHeight: 1 }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}
