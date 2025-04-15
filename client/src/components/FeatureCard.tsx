import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  skills: string;
  isPrimary: boolean;
}

export default function FeatureCard({ title, description, icon, skills, isPrimary }: FeatureCardProps) {
  const color = isPrimary ? "primary" : "secondary";
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "relative rounded-xl p-6 h-full flex flex-col",
        "bg-card/80 backdrop-blur-md border border-white/5",
        isPrimary ? "shadow-[0_0_15px_rgba(0,98,255,0.2)]" : "shadow-[0_0_15px_rgba(255,85,0,0.2)]"
      )}
    >
      <div className="mb-6 relative">
        <div className="w-full h-40 rounded-lg overflow-hidden bg-background flex items-center justify-center">
          <motion.i
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className={cn(
              `fas fa-${icon} text-5xl`,
              isPrimary ? 
                "text-primary filter drop-shadow-[0_0_8px_rgba(0,98,255,0.6)]" : 
                "text-secondary filter drop-shadow-[0_0_8px_rgba(255,85,0,0.6)]"
            )}
          />
        </div>
      </div>
      <h3 className={cn(
        "text-xl font-heading font-semibold mb-2 text-foreground transition-colors",
        isPrimary ? "group-hover:text-primary" : "group-hover:text-secondary"
      )}>
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 text-sm flex-grow">{description}</p>
      <div className="flex items-center justify-between">
        <span className={cn(
          "text-xs",
          isPrimary ? "text-primary/80" : "text-secondary/80"
        )}>
          {skills}
        </span>
        <i className={cn(
          `fas fa-${icon}`,
          isPrimary ? 
            "text-primary filter drop-shadow-[0_0_8px_rgba(0,98,255,0.6)]" : 
            "text-secondary filter drop-shadow-[0_0_8px_rgba(255,85,0,0.6)]"
        )}></i>
      </div>
    </motion.div>
  );
}
