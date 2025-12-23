import AppSidebar from "@/components/dashboard/AppSidebar";
import TopHeader from "@/components/dashboard/TopHeader";
import { Bell, Heart, MessageCircle, UserPlus, Star } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "like",
    icon: Heart,
    message: "Sarah Chen liked your resource",
    detail: "Building with Firebase Auth",
    time: "5 min ago",
    unread: true,
  },
  {
    id: 2,
    type: "comment",
    icon: MessageCircle,
    message: "Alex Rivera commented on your post",
    detail: '"Great breakdown of the concepts!"',
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    type: "follow",
    icon: UserPlus,
    message: "Emma Wilson started following you",
    detail: null,
    time: "3 hours ago",
    unread: true,
  },
  {
    id: 4,
    type: "feature",
    icon: Star,
    message: "Your resource was featured!",
    detail: "React Hooks Best Practices",
    time: "1 day ago",
    unread: false,
  },
];

const Notifications = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <div className="ml-64">
        <TopHeader />
        <main className="p-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                  <Bell className="w-8 h-8 text-primary" />
                  Notifications
                </h1>
                <p className="text-muted-foreground mt-1">Stay updated with your activity</p>
              </div>
              <button className="text-sm text-primary hover:underline">Mark all as read</button>
            </div>

            <div className="space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`bg-card border rounded-xl p-4 transition-colors cursor-pointer ${
                    notification.unread ? "border-primary/30 bg-primary/5" : "border-border"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-full ${notification.unread ? "bg-primary/20" : "bg-secondary"}`}>
                      <notification.icon className={`w-5 h-5 ${notification.unread ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground font-medium">{notification.message}</p>
                      {notification.detail && (
                        <p className="text-sm text-muted-foreground mt-1 truncate">{notification.detail}</p>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{notification.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Notifications;
