import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  TrendingUp, 
  BookOpen, 
  Target,
  ArrowRight,
  RotateCcw
} from "lucide-react";
import { useAssessment } from "@/contexts/AssessmentContext";

const AssessmentResults = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAssessment();

  useEffect(() => {
    if (!state.results || !state.isComplete) {
      navigate('/assessment');
    }
  }, [state.results, state.isComplete, navigate]);

  if (!state.results) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading Results...</h2>
        </div>
      </div>
    );
  }

  const { results } = state;

  const getRecommendationIcon = () => {
    switch (results.recommendation) {
      case 'Yes':
        return <CheckCircle className="h-8 w-8 text-success" />;
      case 'Maybe':
        return <AlertCircle className="h-8 w-8 text-warning" />;
      case 'No':
        return <XCircle className="h-8 w-8 text-destructive" />;
    }
  };

  const getRecommendationColor = () => {
    switch (results.recommendation) {
      case 'Yes':
        return 'bg-success text-success-foreground';
      case 'Maybe':
        return 'bg-warning text-warning-foreground';
      case 'No':
        return 'bg-destructive text-destructive-foreground';
    }
  };

  const handleRetakeAssessment = () => {
    dispatch({ type: 'RESET_ASSESSMENT' });
    navigate('/assessment');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
              🧭 Assessment Complete
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Your Governance Career Assessment Results</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive analysis of your fit for governance specialist roles
            </p>
          </div>

          {/* Main Recommendation Card */}
          <Card className="mb-8 shadow-strong">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center mb-4">
                {getRecommendationIcon()}
              </div>
              <CardTitle className="text-2xl mb-2">
                Should you become a Governance Specialist?
              </CardTitle>
              <Badge className={`text-lg px-6 py-2 ${getRecommendationColor()}`}>
                {results.recommendation}
              </Badge>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <div className="text-sm text-muted-foreground mb-2">Overall Confidence Score</div>
                <div className="text-3xl font-bold mb-2">{results.confidenceScore}%</div>
                <Progress value={results.confidenceScore} className="h-3" />
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {results.nextSteps}
              </p>
            </CardContent>
          </Card>

          {/* Detailed Scores */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Core Assessment Scores */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Core Assessment Scores
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Psychological Fit</span>
                    <span className="font-bold">{results.psychologicalFit}%</span>
                  </div>
                  <Progress value={results.psychologicalFit} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Technical Readiness</span>
                    <span className="font-bold">{results.technicalReadiness}%</span>
                  </div>
                  <Progress value={results.technicalReadiness} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* WISCAR Framework Scores */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  WISCAR Framework
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(results.wiscarScores).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-sm font-bold">{value}%</span>
                    </div>
                    <Progress value={value} className="h-1.5" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Career Alignment & Learning Path */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Career Alignment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Best-Fit Career Roles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {results.careerAlignment.map((career, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                      <Badge variant="outline" className="shrink-0">#{index + 1}</Badge>
                      <span className="font-medium">{career}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Path */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Recommended Learning Path
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {results.learningPath.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skill Gaps */}
          {results.skillGaps.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Areas for Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {results.skillGaps.map((gap, index) => (
                    <div key={index} className="p-4 bg-warning/10 border border-warning/20 rounded-lg text-center">
                      <div className="font-medium text-warning-foreground">{gap}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleRetakeAssessment} variant="outline" size="lg" className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              Retake Assessment
            </Button>
            <Button size="lg" className="flex items-center gap-2" onClick={() => navigate('/')}>
              Explore More Assessments
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResults;