import { useEffect } from "react";
import AppSidebar from "@/components/dashboard/AppSidebar";
import TopHeader from "@/components/dashboard/TopHeader";
import MainFeed from "@/components/dashboard/MainFeed";
import RightPanel from "@/components/dashboard/RightPanel";

const Index = () => {
  useEffect(() => {
    // Enable dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Left Sidebar */}
      <AppSidebar />

      {/* Top Header */}
      <TopHeader />

      {/* Main Content Area */}
      <div className="ml-64 pt-16 flex">
        {/* Center Feed */}
        <div className="flex-1 max-w-2xl">
          <MainFeed />
        </div>

        {/* Right Panel */}
        <div className="hidden xl:block">
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default Index;
