const styles = {
  primary: "bg-terracotta text-white hover:bg-terracotta-dark",
  outline: "border-2 border-night text-night hover:bg-night hover:text-cream",
};

function Button({ children, variant = "primary", className = "", ...props }) {
  return (
    <button
      className={`inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full px-6 text-base font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;