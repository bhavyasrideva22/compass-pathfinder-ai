import { Answer, AssessmentResults } from '@/contexts/AssessmentContext';

export function calculateResults(answers: Answer[]): AssessmentResults {
  // Group answers by category and subcategory
  const psychAnswers = answers.filter(a => a.questionId.startsWith('psych_'));
  const techAnswers = answers.filter(a => a.questionId.startsWith('tech_'));
  const wiscarAnswers = answers.filter(a => a.questionId.startsWith('wiscar_'));

  // Calculate psychological fit (average of psychometric scores)
  const psychologicalFit = psychAnswers.length > 0 
    ? Math.round(psychAnswers.reduce((sum, a) => sum + a.score, 0) / psychAnswers.length)
    : 0;

  // Calculate technical readiness (average of technical scores)
  const technicalReadiness = techAnswers.length > 0
    ? Math.round(techAnswers.reduce((sum, a) => sum + a.score, 0) / techAnswers.length)
    : 0;

  // Calculate WISCAR scores
  const getWiscarScore = (subcategory: string) => {
    const relevantAnswers = wiscarAnswers.filter(a => a.questionId.includes(subcategory));
    return relevantAnswers.length > 0
      ? Math.round(relevantAnswers.reduce((sum, a) => sum + a.score, 0) / relevantAnswers.length)
      : 0;
  };

  const wiscarScores = {
    will: getWiscarScore('will'),
    interest: getWiscarScore('interest'),
    skill: getWiscarScore('skill'),
    cognitiveReadiness: getWiscarScore('cognitive'),
    abilityToLearn: getWiscarScore('learn'),
    realWorldAlignment: getWiscarScore('alignment'),
  };

  // Calculate overall confidence score
  const wiscarAverage = Object.values(wiscarScores).reduce((sum, score) => sum + score, 0) / 6;
  const confidenceScore = Math.round((psychologicalFit + technicalReadiness + wiscarAverage) / 3);

  // Determine recommendation
  let recommendation: 'Yes' | 'Maybe' | 'No';
  if (confidenceScore >= 75 && psychologicalFit >= 70 && technicalReadiness >= 60) {
    recommendation = 'Yes';
  } else if (confidenceScore >= 60 || (psychologicalFit >= 70 && wiscarAverage >= 65)) {
    recommendation = 'Maybe';
  } else {
    recommendation = 'No';
  }

  // Generate career alignment suggestions
  const careerAlignment = [];
  if (psychologicalFit >= 70) {
    careerAlignment.push('Governance Specialist');
  }
  if (technicalReadiness >= 70) {
    careerAlignment.push('Data Governance Analyst');
  }
  if (wiscarScores.interest >= 75) {
    careerAlignment.push('Compliance Officer');
  }
  if (wiscarScores.skill >= 70) {
    careerAlignment.push('IT Governance Consultant');
  }
  if (wiscarScores.realWorldAlignment >= 75) {
    careerAlignment.push('Corporate Governance Officer');
  }
  if (careerAlignment.length === 0) {
    careerAlignment.push('Risk Manager', 'Business Analyst');
  }

  // Generate learning path
  const learningPath = [];
  if (technicalReadiness < 60) {
    learningPath.push('Intro to Governance Frameworks');
  }
  if (wiscarScores.skill < 60) {
    learningPath.push('Policy Development and Implementation');
  }
  learningPath.push('COBIT Basics', 'Compliance Management');

  // Identify skill gaps
  const skillGaps = [];
  if (technicalReadiness < 70) {
    skillGaps.push('Governance framework knowledge');
  }
  if (wiscarScores.skill < 70) {
    skillGaps.push('Policy writing and communication');
  }
  if (wiscarScores.cognitiveReadiness < 70) {
    skillGaps.push('Analytical and problem-solving skills');
  }

  // Generate next steps
  let nextSteps = '';
  if (recommendation === 'Yes') {
    nextSteps = 'Start with foundational governance courses and consider entry-level positions or internships in compliance or risk management.';
  } else if (recommendation === 'Maybe') {
    nextSteps = 'Gain more experience through projects or courses in your weaker areas, and consider informational interviews with governance professionals.';
  } else {
    nextSteps = 'Consider adjacent careers like project management or business analysis, which share some skills with governance roles.';
  }

  return {
    psychologicalFit,
    technicalReadiness,
    wiscarScores,
    confidenceScore,
    recommendation,
    careerAlignment: careerAlignment.slice(0, 3), // Top 3 suggestions
    learningPath: learningPath.slice(0, 4), // Top 4 learning items
    skillGaps: skillGaps.slice(0, 3), // Top 3 skill gaps
    nextSteps,
  };
}