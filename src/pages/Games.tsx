import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link, useNavigate } from "react-router-dom";
import { gameLevels, getDifficultyColor, getGameTypeIcon, Difficulty } from "@/data/gameData";
import { Lock, Play, Trophy, Clock, Star, LogIn } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

const Games = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [scores, setScores] = useState<Record<number, number>>({});
  const [totalScore, setTotalScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchProgress();
    } else if (!authLoading) {
      setLoading(false);
    }
  }, [user, authLoading]);

  const fetchProgress = async () => {
    if (!user) return;

    try {
      const { data: progressData } = await supabase
        .from("user_progress")
        .select("completed_levels, total_score")
        .eq("user_id", user.id)
        .single();

      if (progressData) {
        setCompletedLevels(progressData.completed_levels || []);
        setTotalScore(progressData.total_score || 0);
      }

      // Fetch individual game scores
      const { data: sessionsData } = await supabase
        .from("game_sessions")
        .select("level_id, score")
        .eq("user_id", user.id)
        .eq("completed", true);

      if (sessionsData) {
        const scoreMap: Record<number, number> = {};
        sessionsData.forEach(session => {
          if (!scoreMap[session.level_id] || session.score > scoreMap[session.level_id]) {
            scoreMap[session.level_id] = session.score;
          }
        });
        setScores(scoreMap);
      }
    } catch (error) {
      console.error("Error fetching progress:", error);
    } finally {
      setLoading(false);
    }
  };

  // Check if all levels of a difficulty are completed
  const isDifficultyComplete = (difficulty: Difficulty) => {
    const levelsOfDifficulty = gameLevels.filter(l => l.difficulty === difficulty);
    return levelsOfDifficulty.every(l => completedLevels.includes(l.id));
  };

  // Unlock logic: all easy levels unlocked first, complete all to unlock medium, etc.
  const isLevelUnlocked = (levelId: number) => {
    const level = gameLevels.find(l => l.id === levelId);
    if (!level) return false;

    if (level.difficulty === "easy") return true;
    if (level.difficulty === "medium") return isDifficultyComplete("easy");
    if (level.difficulty === "hard") return isDifficultyComplete("medium");
    return false;
  };

  const maxScore = gameLevels.reduce((acc, level) => 
    acc + (level.questions.length * level.pointsPerQuestion), 0
  );

  if (authLoading || loading) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </PageLayout>
    );
  }

  if (!user) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-md mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">🎮 Game Arena</CardTitle>
              <CardDescription>
                Sign in to play games and track your progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => navigate("/auth")} className="gap-2">
                <LogIn className="w-4 h-4" />
                Sign In to Play
              </Button>
            </CardContent>
          </Card>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            🎮 Game Arena
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Complete all levels of each difficulty to unlock the next tier!
          </p>

          {/* Progress Overview */}
          <Card className="max-w-md mx-auto mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Overall Progress</span>
                <span className="text-sm font-medium">
                  {completedLevels.length} / {gameLevels.length} Levels
                </span>
              </div>
              <Progress 
                value={(completedLevels.length / gameLevels.length) * 100} 
                className="h-2 mb-4"
              />
              <div className="flex items-center justify-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="font-semibold">{totalScore}</span>
                <span className="text-muted-foreground">/ {maxScore} points</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Difficulty Sections */}
        {(["easy", "medium", "hard"] as Difficulty[]).map((difficulty) => {
          const difficultyLevels = gameLevels.filter((level) => level.difficulty === difficulty);
          const completedInDifficulty = difficultyLevels.filter(l => completedLevels.includes(l.id)).length;
          const allUnlocked = difficulty === "easy" || 
            (difficulty === "medium" && isDifficultyComplete("easy")) ||
            (difficulty === "hard" && isDifficultyComplete("medium"));

          return (
            <div key={difficulty} className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-serif font-semibold capitalize flex items-center gap-2">
                  <Badge variant="outline" className={getDifficultyColor(difficulty)}>
                    {difficulty === "easy" ? "⭐" : difficulty === "medium" ? "⭐⭐" : "⭐⭐⭐"} {difficulty}
                  </Badge>
                </h2>
                <span className="text-sm text-muted-foreground">
                  {completedInDifficulty} / {difficultyLevels.length} completed
                </span>
              </div>

              {!allUnlocked && (
                <Card className="mb-4 border-dashed">
                  <CardContent className="py-4 text-center">
                    <Lock className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Complete all {difficulty === "medium" ? "Easy" : "Medium"} levels to unlock
                    </p>
                  </CardContent>
                </Card>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {difficultyLevels.map((level) => {
                  const unlocked = isLevelUnlocked(level.id);
                  const completed = completedLevels.includes(level.id);
                  const score = scores[level.id] || 0;
                  const maxLevelScore = level.questions.length * level.pointsPerQuestion;

                  return (
                    <Card 
                      key={level.id}
                      className={`relative overflow-hidden transition-all ${
                        unlocked ? "hover-lift cursor-pointer" : "opacity-60"
                      } ${completed ? "border-secondary/50" : ""}`}
                    >
                      {completed && (
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-secondary text-secondary-foreground">
                            ✓ Complete
                          </Badge>
                        </div>
                      )}
                      
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">{getGameTypeIcon(level.type)}</span>
                          <CardTitle className="text-lg">
                            Level {level.id}: {level.title}
                          </CardTitle>
                        </div>
                        <CardDescription>{level.description}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {Math.floor(level.timeLimit / 60)}:{(level.timeLimit % 60).toString().padStart(2, '0')}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {score} / {maxLevelScore}
                          </span>
                        </div>

                        {unlocked ? (
                          <Link to={`/games/${level.id}`}>
                            <Button className="w-full gap-2">
                              <Play className="w-4 h-4" />
                              {completed ? "Play Again" : "Start Level"}
                            </Button>
                          </Link>
                        ) : (
                          <Button disabled className="w-full gap-2">
                            <Lock className="w-4 h-4" />
                            Locked
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Games;
