function QuantitySelector({ value, onChange, min = 1, max = 10 }) {
  const btn =
    "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-night text-xl hover:bg-night hover:text-cream disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <div className="inline-flex items-center gap-4">
      <button
        className={btn}
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label="Diminuer la quantité"
      >
        -
      </button>
      <span className="w-8 text-center text-lg font-bold" aria-live="polite">
        {value}
      </span>
      <button
        className={btn}
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label="Augmenter la quantité"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;