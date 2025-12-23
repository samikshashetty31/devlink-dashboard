import AppSidebar from "@/components/dashboard/AppSidebar";
import TopHeader from "@/components/dashboard/TopHeader";
import { Sparkles, RefreshCw, ThumbsUp, ThumbsDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const recommendations = [
  {
    title: "Introduction to Vector Databases",
    author: "ML Weekly",
    reason: "Based on your interest in AI and embeddings",
    tags: ["AI", "Database", "Vectors"],
    match: 95,
  },
  {
    title: "Building RAG Applications with LangChain",
    author: "Dev Insights",
    reason: "You saved 3 similar articles this week",
    tags: ["LangChain", "RAG", "LLM"],
    match: 92,
  },
  {
    title: "Tailwind CSS v4 Migration Guide",
    author: "CSS Tricks",
    reason: "Popular among developers you follow",
    tags: ["CSS", "Tailwind", "Frontend"],
    match: 88,
  },
  {
    title: "WebSocket Best Practices in 2024",
    author: "Real-time Dev",
    reason: "Matches your recent search history",
    tags: ["WebSocket", "Real-time", "Backend"],
    match: 85,
  },
];

const AIRecommendations = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <div className="ml-64">
        <TopHeader />
        <main className="p-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-primary" />
                  AI Recommendations
                </h1>
                <p className="text-muted-foreground mt-1">Personalized picks just for you</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-4 mb-8">
              <p className="text-sm text-foreground">
                <Sparkles className="w-4 h-4 inline mr-2 text-primary" />
                Our AI analyzes your reading patterns, saved resources, and interests to curate personalized recommendations.
              </p>
            </div>

            <div className="space-y-4">
              {recommendations.map((rec) => (
                <div
                  key={rec.title}
                  className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{rec.title}</h3>
                        <Badge className="bg-primary/10 text-primary border-0 text-xs">
                          {rec.match}% match
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">by {rec.author}</p>
                      <p className="text-sm text-primary/80 mt-2 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {rec.reason}
                      </p>
                      <div className="flex gap-2 mt-3">
                        {rec.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary">
                        <ThumbsUp className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-destructive">
                        <ThumbsDown className="w-4 h-4" />
                      </button>
                    </div>
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

export default AIRecommendations;
