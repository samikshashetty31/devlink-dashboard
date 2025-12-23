import AppSidebar from "@/components/dashboard/AppSidebar";
import TopHeader from "@/components/dashboard/TopHeader";
import { TrendingUp, Flame, Clock, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const trendingTopics = [
  { tag: "React 19", count: "2.4k posts" },
  { tag: "AI Agents", count: "1.8k posts" },
  { tag: "Next.js 15", count: "1.2k posts" },
  { tag: "Tailwind v4", count: "980 posts" },
  { tag: "Rust", count: "756 posts" },
  { tag: "WebGPU", count: "543 posts" },
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <div className="ml-64">
        <TopHeader />
        <main className="p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  Explore
                </h1>
                <p className="text-muted-foreground mt-1">Discover trending resources and topics</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>

            <div className="flex gap-4 mb-8">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground">
                <Flame className="w-4 h-4" />
                Trending
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                <Clock className="w-4 h-4" />
                Latest
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {trendingTopics.map((topic, index) => (
                <div
                  key={topic.tag}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">#{index + 1} Trending</span>
                      <h3 className="text-xl font-semibold text-foreground mt-1">#{topic.tag}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{topic.count}</p>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                      Hot
                    </Badge>
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

export default Explore;
