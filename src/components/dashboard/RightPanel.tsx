import { Sparkles, TrendingUp, Users, ExternalLink } from "lucide-react";

const aiRecommendations = [
  {
    title: "Zustand vs Redux Toolkit Comparison",
    reason: "Based on your React interests",
    link: "blog.logrocket.com/zustand",
  },
  {
    title: "Edge Functions with Supabase",
    reason: "Popular in your network",
    link: "supabase.com/edge-functions",
  },
  {
    title: "Building with Claude AI API",
    reason: "Trending in AI category",
    link: "docs.anthropic.com/claude",
  },
];

const trendingTags = [
  { name: "React", count: "2.3K" },
  { name: "Gemini", count: "1.8K" },
  { name: "TypeScript", count: "1.5K" },
  { name: "Tailwind", count: "1.2K" },
  { name: "Next.js", count: "980" },
  { name: "Firebase", count: "756" },
  { name: "AI", count: "654" },
  { name: "Supabase", count: "543" },
];

const suggestedUsers = [
  { name: "Theo Browne", username: "t3dotgg", followers: "125K" },
  { name: "Kent C. Dodds", username: "kentcdodds", followers: "98K" },
  { name: "Tanner Linsley", username: "tannerlinsley", followers: "45K" },
];

const RightPanel = () => {
  return (
    <aside className="w-80 h-screen sticky top-0 overflow-y-auto p-4 space-y-4">
      {/* AI Recommendations */}
      <section className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <h3 className="font-bold text-card-foreground">AI Picks for You</h3>
        </div>
        <div className="space-y-3">
          {aiRecommendations.map((rec, index) => (
            <div
              key={index}
              className="group p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-2">
                <ExternalLink className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors">
                    {rec.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{rec.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Tags */}
      <section className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <h3 className="font-bold text-card-foreground">Trending Topics</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {trendingTags.map((tag) => (
            <button
              key={tag.name}
              className="px-3 py-1.5 bg-secondary hover:bg-primary/10 hover:text-primary rounded-full text-xs font-medium text-muted-foreground transition-colors flex items-center gap-1.5"
            >
              #{tag.name}
              <span className="text-[10px] opacity-70">{tag.count}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Who to Follow */}
      <section className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Users className="w-4 h-4 text-primary" />
          </div>
          <h3 className="font-bold text-card-foreground">Who to Follow</h3>
        </div>
        <div className="space-y-3">
          {suggestedUsers.map((user) => (
            <div
              key={user.username}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-muted-foreground">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">{user.name}</p>
                  <p className="text-xs text-muted-foreground">@{user.username}</p>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full transition-colors">
                Follow
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-xs text-muted-foreground px-2 py-4">
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <span className="hover:underline cursor-pointer">About</span>
          <span className="hover:underline cursor-pointer">Terms</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
          <span className="hover:underline cursor-pointer">Help</span>
        </div>
        <p className="mt-2">© 2024 DevLink AI Hub</p>
      </footer>
    </aside>
  );
};

export default RightPanel;
