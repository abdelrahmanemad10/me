import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = "md", showText = true, className }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8 text-base",
    md: "h-10 w-10 text-xl",
    lg: "h-12 w-12 text-2xl"
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold", sizeClasses[size])}>
        <span className="font-heading">AE</span>
      </div>
      {showText && (
        <span className="font-heading font-bold text-xl hidden sm:block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Abdelrahman Emad
        </span>
      )}
    </div>
  );
}
