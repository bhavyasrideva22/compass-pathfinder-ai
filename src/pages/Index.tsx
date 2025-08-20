import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Compass, Target, TrendingUp, Users } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleStartAssessment = () => {
    navigate('/assessment');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20">
            🧭 Pathfinder AI Assessment Series
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Your Perfect
            <span className="bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
              {" "}Career Path
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-powered career assessments that analyze your personality, skills, and aspirations to guide you toward the career where you'll thrive most.
          </p>
          <Button 
            onClick={handleStartAssessment}
            size="lg" 
            className="bg-white text-assessment-bg hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-strong"
          >
            Start Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Featured Assessment */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Assessment</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive career assessment designed to match you with your ideal professional path
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-medium border-0">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Most Popular
                </Badge>
                <Badge variant="outline">25-30 min</Badge>
              </div>
              <CardTitle className="text-2xl mb-2">
                🧭 Should I Become a Governance Specialist?
              </CardTitle>
              <p className="text-muted-foreground text-lg">
                Discover if you have the right mindset, skills, and passion for governance, compliance, and organizational oversight roles.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Psychological Fit</h3>
                  <p className="text-sm text-muted-foreground">Assess your natural alignment with governance work</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-assessment-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-6 w-6 text-assessment-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Technical Readiness</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your current skills and knowledge gaps</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-assessment-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-assessment-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">WISCAR Analysis</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive framework for career readiness</p>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-lg p-6 mb-6">
                <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Your confidence score (0-100%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Best-fit governance career roles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Personalized learning path</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Skill gap analysis and recommendations</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleStartAssessment}
                size="lg" 
                className="w-full font-semibold"
              >
                <Compass className="mr-2 h-5 w-5" />
                Begin Governance Assessment
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered assessment uses proven frameworks to analyze your career fit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-0 shadow-soft">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle className="text-xl">Answer Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete our comprehensive assessment covering psychological fit, technical skills, and career readiness factors.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-soft">
              <CardHeader>
                <div className="w-16 h-16 bg-assessment-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-assessment-accent">2</span>
                </div>
                <CardTitle className="text-xl">AI Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our advanced algorithms analyze your responses using proven career assessment frameworks and industry data.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-soft">
              <CardHeader>
                <div className="w-16 h-16 bg-assessment-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-assessment-secondary">3</span>
                </div>
                <CardTitle className="text-xl">Get Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receive personalized insights, career recommendations, and a detailed learning path to achieve your goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
