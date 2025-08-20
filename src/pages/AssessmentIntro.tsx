import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, TrendingUp } from "lucide-react";
import { useAssessment } from "@/contexts/AssessmentContext";

const AssessmentIntro = () => {
  const navigate = useNavigate();
  const { dispatch } = useAssessment();

  const handleStartAssessment = () => {
    dispatch({ type: 'START_ASSESSMENT' });
    navigate('/assessment/questions');
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-white/10 text-white border-white/20">
              🧭 Pathfinder Series
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Should I Become a 
              <span className="bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
                {" "}Governance Specialist?
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Discover if you have the right mindset, skills, and passion for a career in governance, compliance, and organizational oversight.
            </p>
          </div>

          {/* Assessment Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  What You'll Discover
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary-light rounded-full mt-2"></div>
                  <span>Your psychological fit for governance roles</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary-light rounded-full mt-2"></div>
                  <span>Technical readiness and skill gaps</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary-light rounded-full mt-2"></div>
                  <span>WISCAR framework analysis</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary-light rounded-full mt-2"></div>
                  <span>Personalized learning path recommendations</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Assessment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-4">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">25-30 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Questions:</span>
                  <span className="font-semibold">~45 questions</span>
                </div>
                <div className="flex justify-between">
                  <span>Sections:</span>
                  <span className="font-semibold">3 main areas</span>
                </div>
                <div className="flex justify-between">
                  <span>Results:</span>
                  <span className="font-semibold">Immediate feedback</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Career Roles Preview */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm mb-12">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="h-5 w-5" />
                Top Governance Career Roles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Governance Specialist",
                  "Data Governance Analyst", 
                  "Compliance Officer",
                  "IT Governance Consultant",
                  "Corporate Governance Officer",
                  "Risk Manager"
                ].map((role, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3 text-white/80 text-center">
                    {role}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* What is Governance */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm mb-12">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                What is Governance?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              <p className="mb-4">
                Governance involves defining, implementing, and overseeing frameworks and controls that ensure organizational objectives are achieved responsibly, legally, ethically, and effectively.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Policy development and implementation</li>
                    <li>• Regulatory compliance oversight</li>
                    <li>• Risk assessment and management</li>
                    <li>• Stakeholder communication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Essential Skills:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Analytical and detail-oriented thinking</li>
                    <li>• Strong written communication</li>
                    <li>• Knowledge of compliance frameworks</li>
                    <li>• Stakeholder management</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button 
              onClick={handleStartAssessment}
              size="lg"
              className="bg-white text-assessment-bg hover:bg-white/90 font-semibold px-8 py-6 text-lg"
            >
              Start Your Assessment Journey
            </Button>
            <p className="text-white/60 mt-4 text-sm">
              Your responses are confidential and used only for assessment purposes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentIntro;