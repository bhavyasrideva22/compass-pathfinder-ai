import { Question } from '@/contexts/AssessmentContext';

export const assessmentQuestions: Question[] = [
  // PSYCHOMETRIC SECTION
  {
    id: 'psych_1',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'interest',
    question: 'I enjoy reading and analyzing complex policy documents and legal texts.',
  },
  {
    id: 'psych_2',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'personality',
    question: 'I prefer structured environments with clear rules and procedures.',
  },
  {
    id: 'psych_3',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'interest',
    question: 'I find organizational compliance and regulatory frameworks fascinating.',
  },
  {
    id: 'psych_4',
    type: 'scenario',
    category: 'psychometric',
    subcategory: 'motivation',
    question: 'How would you handle this situation?',
    scenario: 'You discover that your organization has been inadvertently violating a minor compliance regulation for several months. The violation has no immediate impact but could result in fines if discovered.',
    options: [
      'Immediately report it to leadership and recommend corrective action',
      'Research the potential penalties first, then decide on the best approach',
      'Fix the issue quietly without involving others to avoid unnecessary alarm',
      'Wait to see if the issue is discovered before taking action'
    ]
  },
  {
    id: 'psych_5',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'personality',
    question: 'I am naturally detail-oriented and rarely miss important information.',
  },
  {
    id: 'psych_6',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'cognitive',
    question: 'I enjoy solving complex problems that require systematic thinking.',
  },
  {
    id: 'psych_7',
    type: 'multiple-choice',
    category: 'psychometric',
    subcategory: 'motivation',
    question: 'What motivates you most in a work environment?',
    options: [
      'Making a tangible impact on organizational success',
      'Working with clear guidelines and measurable outcomes',
      'Collaborating with diverse teams on strategic initiatives',
      'Continuously learning and developing new expertise'
    ]
  },
  {
    id: 'psych_8',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'personality',
    question: 'I am comfortable being the person who enforces rules and standards.',
  },

  // TECHNICAL SECTION
  {
    id: 'tech_1',
    type: 'multiple-choice',
    category: 'technical',
    subcategory: 'knowledge',
    question: 'Which of the following best describes the primary purpose of governance frameworks?',
    options: [
      'To increase operational efficiency and reduce costs',
      'To provide structure for decision-making and risk management',
      'To improve employee satisfaction and retention',
      'To enhance marketing and customer acquisition efforts'
    ]
  },
  {
    id: 'tech_2',
    type: 'multiple-choice',
    category: 'technical',
    subcategory: 'frameworks',
    question: 'COBIT is primarily used for:',
    options: [
      'Financial reporting and accounting standards',
      'IT governance and management',
      'Human resources compliance',
      'Marketing campaign management'
    ]
  },
  {
    id: 'tech_3',
    type: 'scenario',
    category: 'technical',
    subcategory: 'application',
    question: 'What would be your first step in this scenario?',
    scenario: 'Your organization is implementing a new data governance program. You need to establish data quality standards, access controls, and compliance monitoring. Where would you start?',
    options: [
      'Create a comprehensive data inventory and classification system',
      'Implement technical access controls and security measures',
      'Develop data quality metrics and monitoring processes',
      'Establish a governance committee and policy framework'
    ]
  },
  {
    id: 'tech_4',
    type: 'multiple-choice',
    category: 'technical',
    subcategory: 'knowledge',
    question: 'The Sarbanes-Oxley Act (SOX) primarily focuses on:',
    options: [
      'Environmental compliance and sustainability',
      'Financial reporting accuracy and corporate accountability',
      'Employee privacy and data protection',
      'International trade and commerce regulations'
    ]
  },
  {
    id: 'tech_5',
    type: 'likert',
    category: 'technical',
    subcategory: 'aptitude',
    question: 'I can easily identify patterns and inconsistencies in data and documentation.',
  },
  {
    id: 'tech_6',
    type: 'multiple-choice',
    category: 'technical',
    subcategory: 'frameworks',
    question: 'Which framework is most commonly used for enterprise risk management?',
    options: [
      'ITIL (Information Technology Infrastructure Library)',
      'COSO (Committee of Sponsoring Organizations)',
      'PRINCE2 (Projects in Controlled Environments)',
      'AGILE (Agile Software Development)'
    ]
  },
  {
    id: 'tech_7',
    type: 'scenario',
    category: 'technical',
    subcategory: 'application',
    question: 'How would you approach this compliance challenge?',
    scenario: 'A new regulation requires your organization to implement additional data privacy controls within 6 months. The regulation is complex and affects multiple departments.',
    options: [
      'Form a cross-functional team to assess current state and develop implementation plan',
      'Hire external consultants to handle the entire compliance implementation',
      'Focus on the most critical requirements first and handle others later',
      'Wait for industry guidance and best practices before taking action'
    ]
  },

  // WISCAR SECTION
  // Will (Grit & Persistence)
  {
    id: 'wiscar_will_1',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'will',
    question: 'I have overcome major setbacks by working harder and staying focused on my long-term goals.',
  },
  {
    id: 'wiscar_will_2',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'will',
    question: 'I am willing to invest significant time and effort to master complex governance frameworks.',
  },
  {
    id: 'wiscar_will_3',
    type: 'scenario',
    category: 'wiscar',
    subcategory: 'will',
    question: 'How would you respond to this challenging situation?',
    scenario: 'You are leading a compliance project that has faced multiple delays due to stakeholder resistance and technical challenges. Senior management is questioning the project\'s value.',
    options: [
      'Persist with the original plan and work to overcome obstacles systematically',
      'Adapt the approach based on feedback while maintaining core objectives',
      'Recommend pausing the project until conditions are more favorable',
      'Seek support from external experts to validate the project approach'
    ]
  },

  // Interest
  {
    id: 'wiscar_interest_1',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'interest',
    question: 'I actively seek out information about new regulations and compliance requirements in my spare time.',
  },
  {
    id: 'wiscar_interest_2',
    type: 'multiple-choice',
    category: 'wiscar',
    subcategory: 'interest',
    question: 'Which type of professional development content interests you most?',
    options: [
      'Regulatory updates and compliance best practices',
      'Leadership and management strategies',
      'Technical skills and software training',
      'Industry trends and market analysis'
    ]
  },
  {
    id: 'wiscar_interest_3',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'interest',
    question: 'I find it rewarding to help organizations operate more ethically and transparently.',
  },

  // Skill
  {
    id: 'wiscar_skill_1',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'skill',
    question: 'I have experience creating or reviewing organizational policies and procedures.',
  },
  {
    id: 'wiscar_skill_2',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'skill',
    question: 'I am skilled at communicating complex regulatory requirements to diverse audiences.',
  },
  {
    id: 'wiscar_skill_3',
    type: 'multiple-choice',
    category: 'wiscar',
    subcategory: 'skill',
    question: 'Which of these skills do you feel most confident about?',
    options: [
      'Analyzing and interpreting legal and regulatory documents',
      'Developing and implementing organizational processes',
      'Managing stakeholder relationships and communication',
      'Using data analysis tools to identify compliance risks'
    ]
  },

  // Cognitive Readiness
  {
    id: 'wiscar_cognitive_1',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'cognitive',
    question: 'I excel at breaking down complex problems into manageable components.',
  },
  {
    id: 'wiscar_cognitive_2',
    type: 'scenario',
    category: 'wiscar',
    subcategory: 'cognitive',
    question: 'What is your approach to this analytical challenge?',
    scenario: 'You need to assess whether your organization\'s current data handling practices comply with multiple overlapping regulations (GDPR, CCPA, HIPAA). The regulations have some conflicting requirements.',
    options: [
      'Create a detailed compliance matrix mapping each requirement to current practices',
      'Focus on the most stringent requirements that would satisfy all regulations',
      'Consult with legal experts to interpret the conflicting requirements',
      'Implement a phased approach, addressing one regulation at a time'
    ]
  },

  // Ability to Learn
  {
    id: 'wiscar_learn_1',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'learning',
    question: 'I actively seek feedback and use it to improve my performance.',
  },
  {
    id: 'wiscar_learn_2',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'learning',
    question: 'I enjoy learning about new governance frameworks and best practices.',
  },
  {
    id: 'wiscar_learn_3',
    type: 'multiple-choice',
    category: 'wiscar',
    subcategory: 'learning',
    question: 'How do you prefer to learn about complex new topics?',
    options: [
      'Structured courses and formal training programs',
      'Reading research papers and industry publications',
      'Hands-on experience and practical application',
      'Mentorship and guidance from experienced professionals'
    ]
  },

  // Real-World Alignment
  {
    id: 'wiscar_alignment_1',
    type: 'multiple-choice',
    category: 'wiscar',
    subcategory: 'alignment',
    question: 'Which work environment appeals to you most?',
    options: [
      'Large corporation with established governance processes',
      'Growing company that needs to build governance capabilities',
      'Consulting firm helping multiple organizations with compliance',
      'Government agency or regulatory body'
    ]
  },
  {
    id: 'wiscar_alignment_2',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'alignment',
    question: 'I am motivated by work that contributes to organizational integrity and public trust.',
  },
  {
    id: 'wiscar_alignment_3',
    type: 'scenario',
    category: 'wiscar',
    subcategory: 'alignment',
    question: 'Which aspect of this role would you find most fulfilling?',
    scenario: 'As a Governance Specialist, you would be responsible for developing compliance training, conducting risk assessments, liaising with regulators, and reporting to the board of directors.',
    options: [
      'Developing training programs that improve organizational compliance culture',
      'Conducting thorough risk assessments to protect the organization',
      'Building relationships with regulatory bodies and external stakeholders',
      'Presenting compliance status and recommendations to senior leadership'
    ]
  }
];

export const questionsBySection = {
  psychometric: assessmentQuestions.filter(q => q.category === 'psychometric'),
  technical: assessmentQuestions.filter(q => q.category === 'technical'),
  wiscar: assessmentQuestions.filter(q => q.category === 'wiscar'),
};