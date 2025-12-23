import { Home, Compass, Library, Bell, Sparkles, Settings, Plus, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Home", icon: Home, active: true },
  { title: "Explore", icon: Compass, active: false },
  { title: "My Library", icon: Library, active: false },
  { title: "Notifications", icon: Bell, active: false },
  { title: "AI Recommendations", icon: Sparkles, active: false },
  { title: "Settings", icon: Settings, active: false },
];

const AppSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-sidebar-background border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-sidebar-foreground">DevLink</h1>
            <span className="text-xs text-primary font-medium">AI Hub</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.title}>
              <button
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  item.active
                    ? "bg-primary/10 text-primary"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.title}
                {item.title === "Notifications" && (
                  <span className="ml-auto bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                    3
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Share Resource Button */}
        <button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
          <Plus className="w-5 h-5" />
          Share Resource
        </button>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-sidebar-accent transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <User className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">Developer</p>
            <p className="text-xs text-muted-foreground truncate">@dev_user</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;
