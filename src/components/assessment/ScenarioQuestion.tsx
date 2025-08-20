import { Button } from "@/components/ui/button";

interface ScenarioQuestionProps {
  options: string[];
  onAnswer: (value: string, score: number) => void;
  selectedValue?: string;
}

export function ScenarioQuestion({ options, onAnswer, selectedValue }: ScenarioQuestionProps) {
  const getScore = (optionIndex: number) => {
    // Scenario scoring: options are weighted differently based on governance best practices
    const scores = [100, 85, 70, 40]; // Adjust these based on option quality
    return scores[optionIndex] || 50;
  };

  return (
    <div className="space-y-3">
      {options.map((option, index) => (
        <Button
          key={index}
          variant={selectedValue === option ? "default" : "outline"}
          className="w-full justify-start h-auto py-4 px-4 text-left"
          onClick={() => onAnswer(option, getScore(index))}
        >
          <div className="flex items-start justify-between w-full gap-3">
            <span className="text-wrap flex-1">{option}</span>
            <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center flex-shrink-0 mt-0.5">
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