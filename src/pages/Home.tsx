import MoodInput from "@/components/MoodInput";
import MoodOutput from "@/components/MoodOutput";
import { useState } from "react";
const Home = () => {
  const [mood, setMood] = useState("");
  const [subject, setSubject] = useState("");
  const [footer, setFooter] = useState("");
  const [generated, setGenerated] = useState(false);
  const handleGenerate = () => {
    const moodLower = mood.toLowerCase();
    console.log(moodLower);

    if (moodLower.includes("happy")) {
      setSubject("I'm feeling great!");
      setFooter("Wishing you a wonderful day!");
    } else if (moodLower.includes("sad")) {
      setSubject("I'm feeling down.");
      setFooter("Hope things get better soon.");
    } else if (moodLower.includes("angry")) {
      setSubject("I'm feeling angry.");
      setFooter("I need to cool down.");
    } else {
      setSubject("I'm feeling neutral.");
      setFooter("Just another day.");
    }

    setGenerated(true);
  };

  const handleReset = () => {
    setMood("");
    setSubject("");
    setFooter("");
    setGenerated(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 rounded-lg shadow-lg bg-white space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">MoodMail Generator</h2>
      {!generated ? (
        <MoodInput
          mood={mood}
          setMood={setMood}
          onGenerate={handleGenerate}
          disabled={generated}
        />
      ) : (
        <MoodOutput
          subject={subject}
          footer={footer}
          onReset={handleReset}
        />
      )}
    </div>
  );
};

export default Home;
