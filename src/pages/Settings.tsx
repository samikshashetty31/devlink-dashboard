import AppSidebar from "@/components/dashboard/AppSidebar";
import TopHeader from "@/components/dashboard/TopHeader";
import { Settings as SettingsIcon, User, Bell, Palette, Shield, Database } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const settingsSections = [
  {
    title: "Profile",
    icon: User,
    description: "Manage your profile information and preferences",
  },
  {
    title: "Notifications",
    icon: Bell,
    description: "Configure how you receive notifications",
  },
  {
    title: "Appearance",
    icon: Palette,
    description: "Customize the look and feel of the app",
  },
  {
    title: "Privacy & Security",
    icon: Shield,
    description: "Control your privacy and security settings",
  },
  {
    title: "Data & Storage",
    icon: Database,
    description: "Manage your data and storage preferences",
  },
];

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <div className="ml-64">
        <TopHeader />
        <main className="p-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <SettingsIcon className="w-8 h-8 text-primary" />
                Settings
              </h1>
              <p className="text-muted-foreground mt-1">Manage your account and preferences</p>
            </div>

            <div className="space-y-4">
              {settingsSections.map((section) => (
                <div
                  key={section.title}
                  className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                      <p className="text-sm text-muted-foreground">{section.description}</p>
                    </div>
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-card border border-border rounded-xl p-5">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-medium">Dark Mode</p>
                    <p className="text-sm text-muted-foreground">Use dark theme across the app</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-medium">AI Recommendations</p>
                    <p className="text-sm text-muted-foreground">Show personalized suggestions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
