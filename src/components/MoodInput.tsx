import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  mood: string;
  setMood: (val: string) => void;
  onGenerate: () => void;
  disabled?: boolean;
  isDarkMode: boolean; // new prop
};

const MoodInput = ({
  mood,
  setMood,
  onGenerate,
  disabled,
  isDarkMode,
}: Props) => {
  return (
    <div className="space-y-5">
      <Input
        placeholder="💭 How are you feeling today? (Happy, Sad, Angry...)"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        disabled={disabled}
        className={
          isDarkMode
            ? "bg-white/20 border-white/30 text-white placeholder:text-white/60 text-lg py-6"
            : "bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 text-lg py-6"
        }
      />
      <Button
        className={
          isDarkMode
            ? "w-full text-lg py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-90 transition-opacity cursor-pointer"
            : "w-full text-lg py-6 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 cursor-pointer"
          // "w-full text-lg py-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:opacity-90 transition-opacity cursor-pointer"

          
        }
        onClick={onGenerate}
        disabled={disabled}
      >
        Generate Email Template
      </Button>
    </div>
  );
};

export default MoodInput;
