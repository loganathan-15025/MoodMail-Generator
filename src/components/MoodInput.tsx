import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  mood: string;
  setMood: (val: string) => void;
  onGenerate: () => void;
  disabled?: boolean;
};

const MoodInput = ({ mood, setMood, onGenerate, disabled }: Props) => {
  return (
    <div className="space-y-5">
      <Input
        placeholder="💭 How are you feeling today? (Happy, Sad, Angry...)"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        disabled={disabled}
        className="bg-white/20 border-white/30 text-white placeholder:text-white/60 text-lg py-6"
      />
      <Button
        className="w-full text-lg py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-90 transition-opacity cursor-pointer"
        onClick={onGenerate}
        disabled={disabled}
      >
        Generate Email Template
      </Button>
    </div>
  );
};

export default MoodInput;
