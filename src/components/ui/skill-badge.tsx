
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string;
}

export function SkillBadge({ name, className }: SkillBadgeProps) {
  const baseClasses = "inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded-md transition-all duration-200";
  
  return (
    <div 
      className={cn(
        baseClasses,
        "bg-card text-card-foreground border border-border/50 hover:border-primary/50 hover:bg-accent/50",
        className
      )}
    >
      {name}
    </div>
  );
}
