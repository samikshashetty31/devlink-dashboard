import AppSidebar from "@/components/dashboard/AppSidebar";
import TopHeader from "@/components/dashboard/TopHeader";
import { Library, Bookmark, FolderOpen, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const savedResources = [
  { title: "Building AI-Powered Apps with Gemini", author: "Sarah Chen", savedAt: "2 hours ago", tags: ["AI", "Gemini"] },
  { title: "React Server Components Deep Dive", author: "Alex Rivera", savedAt: "1 day ago", tags: ["React", "RSC"] },
  { title: "Modern CSS Techniques 2024", author: "Emma Wilson", savedAt: "3 days ago", tags: ["CSS", "Frontend"] },
];

const MyLibrary = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <div className="ml-64">
        <TopHeader />
        <main className="p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <Library className="w-8 h-8 text-primary" />
                My Library
              </h1>
              <p className="text-muted-foreground mt-1">Your saved resources and collections</p>
            </div>

            <Tabs defaultValue="saved" className="w-full">
              <TabsList className="bg-secondary mb-6">
                <TabsTrigger value="saved" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Saved
                </TabsTrigger>
                <TabsTrigger value="collections" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <FolderOpen className="w-4 h-4 mr-2" />
                  Collections
                </TabsTrigger>
                <TabsTrigger value="history" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  History
                </TabsTrigger>
              </TabsList>

              <TabsContent value="saved" className="space-y-4">
                {savedResources.map((resource) => (
                  <div
                    key={resource.title}
                    className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">by {resource.author}</p>
                        <div className="flex gap-2 mt-3">
                          {resource.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{resource.savedAt}</span>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="collections">
                <div className="text-center py-12 text-muted-foreground">
                  <FolderOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No collections yet. Start organizing your resources!</p>
                </div>
              </TabsContent>

              <TabsContent value="history">
                <div className="text-center py-12 text-muted-foreground">
                  <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Your reading history will appear here.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyLibrary;
