export function Button({ children, onClick, variant = "default", className = "" }) {
  const baseStyle = "px-4 py-2 rounded-lg font-semibold transition-all";
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    ghost: "bg-gray-200 text-gray-700 hover:bg-gray-300",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
  