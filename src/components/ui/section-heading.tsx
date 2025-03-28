
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ 
  title, 
  description,
  className,
  centered = false
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12",
      centered && "text-center",
      className
    )}>
      <h2 className={cn(
        "text-3xl font-heading font-bold mb-4 relative inline-block",
      )}>
        <span className="relative z-10">
          {title}
          <span className={cn(
            "absolute -bottom-1 h-1.5 bg-primary/80",
            centered ? "left-1/4 right-1/4" : "left-0 w-20"
          )}></span>
        </span>
      </h2>
      
      {description && (
        <p className={cn(
          "text-muted-foreground text-lg mt-4",
          centered && "max-w-2xl mx-auto"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
