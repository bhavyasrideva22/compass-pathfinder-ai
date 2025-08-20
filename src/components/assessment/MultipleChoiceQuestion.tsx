import { Button } from "@/components/ui/button";

interface MultipleChoiceQuestionProps {
  options: string[];
  onAnswer: (value: string, score: number) => void;
  selectedValue?: string;
}

export function MultipleChoiceQuestion({ options, onAnswer, selectedValue }: MultipleChoiceQuestionProps) {
  const getScore = (optionIndex: number) => {
    // Scoring logic: first option gets highest score, decreasing by 25 points each
    return Math.max(0, 100 - (optionIndex * 25));
  };

  return (
    <div className="space-y-3">
      {options.map((option, index) => (
        <Button
          key={index}
          variant={selectedValue === option ? "default" : "outline"}
          className="w-full justify-start h-auto py-3 px-4 text-left"
          onClick={() => onAnswer(option, getScore(index))}
        >
          <div className="flex items-center justify-between w-full">
            <span className="text-wrap">{option}</span>
            <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center ml-3 flex-shrink-0">
              {selectedValue === option && (
                <div className="w-3 h-3 rounded-full bg-current" />
              )}
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
}