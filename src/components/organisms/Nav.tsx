import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

export const Nav = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <nav className={cn("container mx-auto flex items-center justify-between h-14")}>        
        <a href="#top" className="font-bold tracking-tight story-link">Junaid.sh</a>
        <div className="flex items-center gap-2">
          <a href="#projects" className="hidden md:inline-block story-link px-3 py-2 rounded-md">Projects</a>
          <a href="#timeline" className="hidden md:inline-block story-link px-3 py-2 rounded-md">Timeline</a>
          <a href="#contact" className="hidden md:inline-block story-link px-3 py-2 rounded-md">Contact</a>
<ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
