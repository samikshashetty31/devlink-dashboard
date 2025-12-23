import { Search, Sparkles } from "lucide-react";
import ResourceCard from "./ResourceCard";

const mockResources = [
  {
    id: 1,
    author: { name: "Sarah Chen", username: "sarahdev" },
    title: "Building AI-Powered Apps with Gemini 2.0 - Complete Guide",
    description: "Learn how to integrate Google's latest Gemini 2.0 API into your React applications with practical examples and best practices for production.",
    link: "blog.google/gemini-2-tutorial",
    tags: ["Gemini", "AI", "React"],
    upvotes: 234,
    comments: 45,
    timestamp: "2h ago",
    isUpvoted: true,
  },
  {
    id: 2,
    author: { name: "Alex Rivera", username: "alexr" },
    title: "The Ultimate Firebase Authentication Setup for 2024",
    description: "Comprehensive tutorial covering Firebase Auth with social logins, MFA, and session management. Includes TypeScript examples.",
    link: "dev.to/firebase-auth-guide",
    tags: ["Firebase", "Auth", "TypeScript"],
    upvotes: 189,
    comments: 32,
    timestamp: "4h ago",
  },
  {
    id: 3,
    author: { name: "Marcus Johnson", username: "marcusj" },
    title: "Tailwind CSS 4.0 - What's New and Migration Guide",
    description: "Deep dive into Tailwind CSS 4.0 features including the new engine, improved performance, and step-by-step migration from v3.",
    link: "tailwindcss.com/blog/v4",
    tags: ["Tailwind", "CSS", "Frontend"],
    upvotes: 412,
    comments: 67,
    timestamp: "6h ago",
    isSaved: true,
  },
  {
    id: 4,
    author: { name: "Emma Wilson", username: "emmaw" },
    title: "Next.js 15 Server Actions: A Practical Tutorial",
    description: "Master server actions in Next.js 15 with real-world examples including form handling, data mutations, and error management.",
    link: "nextjs.org/learn/server-actions",
    tags: ["Next.js", "React", "Server"],
    upvotes: 156,
    comments: 28,
    timestamp: "8h ago",
  },
];

const feedTabs = ["All", "Following", "Trending"];

const MainFeed = () => {
  return (
    <main className="flex-1 min-h-screen border-x border-border">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Your Feed</h2>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search resources with AI..."
            className="w-full bg-secondary/50 border border-border rounded-xl pl-12 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 text-primary">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-medium">AI</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1">
          {feedTabs.map((tab, index) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                index === 0
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* Feed Content */}
      <div className="p-4 space-y-4">
        {mockResources.map((resource) => (
          <ResourceCard
            key={resource.id}
            author={resource.author}
            title={resource.title}
            description={resource.description}
            link={resource.link}
            tags={resource.tags}
            upvotes={resource.upvotes}
            comments={resource.comments}
            timestamp={resource.timestamp}
            isUpvoted={resource.isUpvoted}
            isSaved={resource.isSaved}
          />
        ))}
      </div>
    </main>
  );
};

export default MainFeed;
