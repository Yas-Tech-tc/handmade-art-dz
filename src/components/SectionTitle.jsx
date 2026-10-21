function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-night/80">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;