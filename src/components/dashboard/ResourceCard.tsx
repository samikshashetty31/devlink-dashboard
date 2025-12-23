import { ArrowUp, MessageCircle, Bookmark, Share2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResourceCardProps {
  author: {
    name: string;
    username: string;
    avatar?: string;
  };
  title: string;
  description: string;
  link: string;
  tags: string[];
  upvotes: number;
  comments: number;
  timestamp: string;
  isUpvoted?: boolean;
  isSaved?: boolean;
}

const ResourceCard = ({
  author,
  title,
  description,
  link,
  tags,
  upvotes,
  comments,
  timestamp,
  isUpvoted = false,
  isSaved = false,
}: ResourceCardProps) => {
  return (
    <article className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
      {/* Author Info */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-muted-foreground">
          {author.avatar || author.name.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-card-foreground text-sm">{author.name}</span>
            <span className="text-muted-foreground text-sm">@{author.username}</span>
          </div>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
      </div>

      {/* Content */}
      <h3 className="font-bold text-card-foreground mb-2 leading-tight">{title}</h3>
      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>

      {/* Link Preview */}
      <div className="bg-secondary/50 border border-border rounded-lg p-3 mb-3 flex items-center gap-3 hover:bg-secondary transition-colors cursor-pointer">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <ExternalLink className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-card-foreground truncate">{link}</p>
          <p className="text-xs text-muted-foreground">Click to open resource</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full hover:bg-primary/20 transition-colors cursor-pointer"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 pt-3 border-t border-border">
        <button
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
            isUpvoted
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:text-primary hover:bg-primary/10"
          )}
        >
          <ArrowUp className="w-4 h-4" />
          {upvotes}
        </button>
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-card-foreground hover:bg-secondary transition-colors">
          <MessageCircle className="w-4 h-4" />
          {comments}
        </button>
        <button
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
            isSaved
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:text-primary hover:bg-primary/10"
          )}
        >
          <Bookmark className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-card-foreground hover:bg-secondary transition-colors ml-auto">
          <Share2 className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};

export default ResourceCard;
