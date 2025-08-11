import MoodInput from "@/components/MoodInput";
import MoodOutput from "@/components/MoodOutput";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [mood, setMood] = useState("");
  const [subject, setSubject] = useState("");
  const [footer, setFooter] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    const moodLower = mood.toLowerCase();

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
    <div className="min-h-screen bg-[#0f172a] relative flex items-center justify-center p-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-xl backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 relative z-10"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          MoodMail Generator
        </h2>

        <AnimatePresence mode="wait">
          {!generated ? (
            <motion.div
              key="input"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <MoodInput
                mood={mood}
                setMood={setMood}
                onGenerate={handleGenerate}
                disabled={generated}
              />
            </motion.div>
          ) : (
            <motion.div
              key="output"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <MoodOutput
                subject={subject}
                footer={footer}
                onReset={handleReset}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Home;
