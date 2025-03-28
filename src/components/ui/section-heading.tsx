
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
            "absolute -bottom-1 h-1 bg-primary",
            centered ? "left-1/4 right-1/4" : "left-0 w-16"
          )}></span>
        </span>
      </h2>
      
      {description && (
        <p className={cn(
          "text-muted-foreground",
          centered && "max-w-xl mx-auto"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
