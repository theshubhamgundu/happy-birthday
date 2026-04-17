import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();
  const utm = `utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  )}`;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1">{children}</main>

      <footer className="bg-card border-t border-border py-8 text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <span className="text-accent text-base">♥</span>
          <span>
            © {year}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?${utm}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors duration-200 font-medium"
            >
              caffeine.ai
            </a>
          </span>
          <span className="text-accent text-base">♥</span>
        </div>
      </footer>
    </div>
  );
}
