import { Bell, Moon, Sun, Search, User } from "lucide-react";
import { useState } from "react";

const TopHeader = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-border z-20 flex items-center justify-between px-6">
      {/* Mobile Search */}
      <div className="lg:hidden">
        <button className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Spacer for desktop */}
      <div className="hidden lg:block" />

      {/* Right Actions */}
      <div className="flex items-center gap-2">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Notifications */}
        <button className="relative p-2.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
        </button>

        {/* User Menu */}
        <button className="flex items-center gap-2 p-1.5 pr-3 rounded-lg hover:bg-secondary transition-colors">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <User className="w-4 h-4 text-muted-foreground" />
          </div>
          <span className="hidden sm:block text-sm font-medium text-foreground">Developer</span>
        </button>
      </div>
    </header>
  );
};

export default TopHeader;
