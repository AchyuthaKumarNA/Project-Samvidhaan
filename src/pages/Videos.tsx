import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  thumbnail: string;
  youtubeId: string;
}

const videos: VideoItem[] = [
  {
    id: "1",
    title: "Introduction to Indian Constitution",
    description: "Learn the basics of India's Constitution, its history, and why it matters to every citizen.",
    category: "Basics",
    duration: "10:23",
    thumbnail: "https://img.youtube.com/vi/GQnFWMNFzqM/maxresdefault.jpg",
    youtubeId: "GQnFWMNFzqM"
  },
  {
    id: "2",
    title: "Fundamental Rights Explained",
    description: "A comprehensive guide to the 6 fundamental rights guaranteed by the Constitution.",
    category: "Rights",
    duration: "15:45",
    thumbnail: "https://img.youtube.com/vi/AIJYslJt8xo/maxresdefault.jpg",
    youtubeId: "AIJYslJt8xo"
  },
  {
    id: "3",
    title: "The Preamble - Heart of Constitution",
    description: "Understanding the Preamble and its significance in defining India's values.",
    category: "Basics",
    duration: "8:30",
    thumbnail: "https://img.youtube.com/vi/R1cQ3_2VhxY/maxresdefault.jpg",
    youtubeId: "R1cQ3_2VhxY"
  },
  {
    id: "4",
    title: "Women's Rights Under Constitution",
    description: "Know your rights as a woman - constitutional provisions and landmark cases.",
    category: "Women's Rights",
    duration: "12:15",
    thumbnail: "https://img.youtube.com/vi/8ELkknEReuM/maxresdefault.jpg",
    youtubeId: "8ELkknEReuM"
  },
  {
    id: "5",
    title: "Right to Life - Article 21",
    description: "The most important fundamental right and its expansive interpretation by courts.",
    category: "Rights",
    duration: "11:00",
    thumbnail: "https://img.youtube.com/vi/oSuPJ2AMWKA/maxresdefault.jpg",
    youtubeId: "oSuPJ2AMWKA"
  },
  {
    id: "6",
    title: "Landmark Supreme Court Cases",
    description: "Historic judgments that shaped constitutional law in India.",
    category: "Case Studies",
    duration: "18:30",
    thumbnail: "https://img.youtube.com/vi/Fw7yWHICEcc/maxresdefault.jpg",
    youtubeId: "Fw7yWHICEcc"
  }
];

const categories = ["All", "Basics", "Rights", "Women's Rights", "Case Studies"];

const Videos = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Basics":
        return "bg-accent/10 text-accent";
      case "Rights":
        return "bg-green-india/10 text-green-india";
      case "Women's Rights":
        return "bg-destructive/10 text-destructive";
      case "Case Studies":
        return "bg-gold/10 text-gold";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            🎬 Video Learning
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch engaging videos about the Constitution, your rights, and landmark cases.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover-lift group">
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/640x360/1a1a2e/ffffff?text=Video';
                  }}
                />
                <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="gap-2 shadow-lg">
                      <Play className="w-5 h-5" />
                      Watch Now
                    </Button>
                  </a>
                </div>
                <Badge className="absolute top-2 right-2 bg-background/80 text-foreground">
                  {video.duration}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className={getCategoryColor(video.category)}>
                    {video.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg line-clamp-2">{video.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-2">{video.description}</CardDescription>
                <a
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-3"
                >
                  Watch on YouTube
                  <ExternalLink className="w-3 h-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Videos;
