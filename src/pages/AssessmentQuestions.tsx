import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useAssessment } from "@/contexts/AssessmentContext";
import { questionsBySection } from "@/data/assessmentQuestions";
import { LikertQuestion } from "@/components/assessment/LikertQuestion";
import { MultipleChoiceQuestion } from "@/components/assessment/MultipleChoiceQuestion";
import { ScenarioQuestion } from "@/components/assessment/ScenarioQuestion";
import { calculateResults } from "@/utils/assessmentScoring";

const AssessmentQuestions = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAssessment();
  const [currentAnswer, setCurrentAnswer] = useState<string | number>('');

  const sections = ['psychometric', 'technical', 'wiscar'] as const;
  const sectionNames = {
    psychometric: 'Psychological Fit',
    technical: 'Technical Readiness', 
    wiscar: 'WISCAR Framework'
  };

  const currentSectionQuestions = questionsBySection[state.currentSection as keyof typeof questionsBySection] || [];
  const currentQuestion = currentSectionQuestions[state.currentQuestionIndex];
  
  const currentSectionIndex = sections.indexOf(state.currentSection as any);
  const totalQuestions = Object.values(questionsBySection).flat().length;
  const answeredQuestions = state.answers.length;
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  useEffect(() => {
    if (state.currentSection === 'intro' || state.currentSection === 'results') {
      navigate('/assessment');
    }
  }, [state.currentSection, navigate]);

  useEffect(() => {
    // Load existing answer if available
    const existingAnswer = state.answers.find(a => a.questionId === currentQuestion?.id);
    if (existingAnswer) {
      setCurrentAnswer(existingAnswer.value);
    } else {
      setCurrentAnswer('');
    }
  }, [currentQuestion?.id, state.answers]);

  const handleAnswer = (value: string | number, score: number) => {
    if (!currentQuestion) return;
    
    setCurrentAnswer(value);
    dispatch({
      type: 'ANSWER_QUESTION',
      answer: {
        questionId: currentQuestion.id,
        value,
        score
      }
    });
  };

  const handleNext = () => {
    if (!currentQuestion || currentAnswer === '') return;

    const isLastQuestionInSection = state.currentQuestionIndex === currentSectionQuestions.length - 1;
    const isLastSection = currentSectionIndex === sections.length - 1;

    if (isLastQuestionInSection) {
      if (isLastSection) {
        // Complete assessment
        const results = calculateResults(state.answers);
        dispatch({ type: 'COMPLETE_ASSESSMENT', results });
        navigate('/assessment/results');
      } else {
        // Move to next section
        const nextSection = sections[currentSectionIndex + 1];
        dispatch({ type: 'NEXT_SECTION', section: nextSection });
      }
    } else {
      // Next question in current section
      dispatch({ type: 'NEXT_QUESTION' });
    }
  };

  const handlePrevious = () => {
    if (state.currentQuestionIndex > 0) {
      dispatch({ type: 'PREVIOUS_QUESTION' });
    } else if (currentSectionIndex > 0) {
      // Go to previous section
      const prevSection = sections[currentSectionIndex - 1];
      const prevSectionQuestions = questionsBySection[prevSection];
      dispatch({ type: 'NEXT_SECTION', section: prevSection });
      // Set to last question of previous section
      setTimeout(() => {
        for (let i = 0; i < prevSectionQuestions.length - 1; i++) {
          dispatch({ type: 'NEXT_QUESTION' });
        }
      }, 0);
    }
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading Assessment...</h2>
        </div>
      </div>
    );
  }

  const isFirstQuestion = currentSectionIndex === 0 && state.currentQuestionIndex === 0;
  const canProceed = currentAnswer !== '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {sectionNames[state.currentSection as keyof typeof sectionNames]}
              </Badge>
              <div className="text-sm text-muted-foreground">
                Question {state.currentQuestionIndex + 1} of {currentSectionQuestions.length}
              </div>
            </div>
            <Progress value={progressPercentage} className="h-2 mb-2" />
            <div className="text-xs text-muted-foreground text-center">
              Overall Progress: {answeredQuestions} of {totalQuestions} questions answered
            </div>
          </div>

          {/* Question Card */}
          <Card className="mb-8 shadow-medium">
            <CardHeader>
              <CardTitle className="text-xl leading-relaxed">
                {currentQuestion.question}
              </CardTitle>
              {currentQuestion.scenario && (
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground font-medium mb-2">Scenario:</p>
                  <p className="text-sm">{currentQuestion.scenario}</p>
                </div>
              )}
            </CardHeader>
            <CardContent>
              {currentQuestion.type === 'likert' && (
                <LikertQuestion
                  onAnswer={handleAnswer}
                  selectedValue={currentAnswer as number}
                />
              )}
              {currentQuestion.type === 'multiple-choice' && (
                <MultipleChoiceQuestion
                  options={currentQuestion.options || []}
                  onAnswer={handleAnswer}
                  selectedValue={currentAnswer as string}
                />
              )}
              {currentQuestion.type === 'scenario' && (
                <ScenarioQuestion
                  options={currentQuestion.options || []}
                  onAnswer={handleAnswer}
                  selectedValue={currentAnswer as string}
                />
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={isFirstQuestion}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className="flex items-center gap-2"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentQuestions;