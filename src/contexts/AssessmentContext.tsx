import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface Question {
  id: string;
  type: 'likert' | 'multiple-choice' | 'scenario';
  category: 'psychometric' | 'technical' | 'wiscar';
  subcategory: string;
  question: string;
  options?: string[];
  scenario?: string;
}

export interface Answer {
  questionId: string;
  value: number | string;
  score: number;
}

export interface AssessmentResults {
  psychologicalFit: number;
  technicalReadiness: number;
  wiscarScores: {
    will: number;
    interest: number;
    skill: number;
    cognitiveReadiness: number;
    abilityToLearn: number;
    realWorldAlignment: number;
  };
  confidenceScore: number;
  recommendation: 'Yes' | 'Maybe' | 'No';
  careerAlignment: string[];
  learningPath: string[];
  skillGaps: string[];
  nextSteps: string;
}

interface AssessmentState {
  currentSection: 'intro' | 'psychometric' | 'technical' | 'wiscar' | 'results';
  currentQuestionIndex: number;
  answers: Answer[];
  results: AssessmentResults | null;
  isComplete: boolean;
}

type AssessmentAction = 
  | { type: 'START_ASSESSMENT' }
  | { type: 'NEXT_SECTION'; section: AssessmentState['currentSection'] }
  | { type: 'ANSWER_QUESTION'; answer: Answer }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREVIOUS_QUESTION' }
  | { type: 'COMPLETE_ASSESSMENT'; results: AssessmentResults }
  | { type: 'RESET_ASSESSMENT' };

const initialState: AssessmentState = {
  currentSection: 'intro',
  currentQuestionIndex: 0,
  answers: [],
  results: null,
  isComplete: false,
};

function assessmentReducer(state: AssessmentState, action: AssessmentAction): AssessmentState {
  switch (action.type) {
    case 'START_ASSESSMENT':
      return {
        ...state,
        currentSection: 'psychometric',
        currentQuestionIndex: 0,
      };
    case 'NEXT_SECTION':
      return {
        ...state,
        currentSection: action.section,
        currentQuestionIndex: 0,
      };
    case 'ANSWER_QUESTION':
      const existingAnswerIndex = state.answers.findIndex(a => a.questionId === action.answer.questionId);
      const newAnswers = existingAnswerIndex >= 0 
        ? state.answers.map((a, i) => i === existingAnswerIndex ? action.answer : a)
        : [...state.answers, action.answer];
      return {
        ...state,
        answers: newAnswers,
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case 'PREVIOUS_QUESTION':
      return {
        ...state,
        currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1),
      };
    case 'COMPLETE_ASSESSMENT':
      return {
        ...state,
        results: action.results,
        isComplete: true,
        currentSection: 'results',
      };
    case 'RESET_ASSESSMENT':
      return initialState;
    default:
      return state;
  }
}

const AssessmentContext = createContext<{
  state: AssessmentState;
  dispatch: React.Dispatch<AssessmentAction>;
} | null>(null);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(assessmentReducer, initialState);

  return (
    <AssessmentContext.Provider value={{ state, dispatch }}>
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
}