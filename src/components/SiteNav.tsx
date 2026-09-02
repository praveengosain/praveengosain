import { Link } from "@tanstack/react-router";

const links = [
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-sm font-bold tracking-tighter">
          <span className="text-accent">{"//"}</span> DEV.CORE
        </Link>
        <div className="hidden space-x-8 font-display text-[11px] font-medium uppercase tracking-widest text-muted-foreground md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="size-2 animate-pulse rounded-full bg-accent" />
          <span className="font-display text-[10px] uppercase tracking-tighter text-muted-foreground">
            Status: Available
          </span>
        </div>
      </div>
    </nav>
  );
}
