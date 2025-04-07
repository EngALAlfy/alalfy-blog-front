/**
 * Container component for consistent layout
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.className - Additional CSS classes
 */
export default function Container({ children, className = "" }) {
  return (
    <div className={`container mx-auto px-4 py-8 ${className}`}>
      {children}
    </div>
  );
}