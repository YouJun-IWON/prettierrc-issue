import { Loader2 } from "lucide-react";

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => (
  <Loader2 className={`animate-spin ${className}`} />
);

export default Loader;
