
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string;
}

export function SkillBadge({ name, className }: SkillBadgeProps) {
  const baseClasses = "inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-300";
  
  return (
    <div 
      className={cn(
        baseClasses,
        "bg-card text-card-foreground border border-border/50 hover:border-primary hover:bg-accent/80 hover:scale-105 shadow-sm",
        className
      )}
    >
      {name}
    </div>
  );
}
