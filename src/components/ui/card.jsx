export function Card({ children, className = "" }) {
    return (
      <div className={`bg-gray-700 shadow-md rounded-lg p-4 ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children }) {
    return <div className="p-2">{children}</div>;
  }
  