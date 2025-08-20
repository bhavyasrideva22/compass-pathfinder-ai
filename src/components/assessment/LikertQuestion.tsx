import { Button } from "@/components/ui/button";

interface LikertQuestionProps {
  onAnswer: (value: number, score: number) => void;
  selectedValue?: number;
}

const likertOptions = [
  { value: 1, label: 'Strongly Disagree', score: 0 },
  { value: 2, label: 'Disagree', score: 25 },
  { value: 3, label: 'Neutral', score: 50 },
  { value: 4, label: 'Agree', score: 75 },
  { value: 5, label: 'Strongly Agree', score: 100 },
];

export function LikertQuestion({ onAnswer, selectedValue }: LikertQuestionProps) {
  return (
    <div className="space-y-3">
      {likertOptions.map((option) => (
        <Button
          key={option.value}
          variant={selectedValue === option.value ? "default" : "outline"}
          className="w-full justify-start h-auto py-3 px-4"
          onClick={() => onAnswer(option.value, option.score)}
        >
          <div className="flex items-center justify-between w-full">
            <span>{option.label}</span>
            <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
              {selectedValue === option.value && (
                <div className="w-3 h-3 rounded-full bg-current" />
              )}
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
}