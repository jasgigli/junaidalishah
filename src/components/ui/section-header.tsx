import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string | React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  className,
  children,
}: SectionHeaderProps) {
  return (
    <div className={cn('text-center max-w-3xl mx-auto', className)}>
      {subtitle && (
        <span className="text-sm font-medium text-primary mb-2 inline-block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
