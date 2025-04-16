
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string;
}

export function SkillBadge({ name, className }: SkillBadgeProps) {
  return (
    <div 
      className={cn(
        "inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-300",
        "bg-card text-card-foreground border-2 border-primary/20 dark:border-primary/30",
        "hover:border-primary hover:bg-accent/80 hover:scale-105",
        "shadow-sm dark:shadow-primary/5",
        className
      )}
    >
      {name}
    </div>
  );
}
