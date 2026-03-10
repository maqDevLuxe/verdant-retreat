/* ============================================
   SectionHeading — Reusable section title + subtitle
   ============================================ */

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading = ({ label, title, subtitle, light }: Props) => (
  <div className="text-center max-w-2xl mx-auto mb-14">
    {label && (
      <span className={`font-body text-xs tracking-[0.3em] uppercase ${light ? "text-sage-light" : "text-primary"} mb-3 block`}>
        {label}
      </span>
    )}
    <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${light ? "text-cream" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`font-body mt-5 text-base md:text-lg leading-relaxed ${light ? "text-cream/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
    <div className={`section-divider mt-6 ${light ? "!bg-sage-light" : ""}`} />
  </div>
);

export default SectionHeading;
