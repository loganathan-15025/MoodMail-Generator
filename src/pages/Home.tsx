import { useState } from "react";
import MoodInput from "@/components/MoodInput";
import MoodOutput from "@/components/MoodOutput";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const Home = () => {
  const [mood, setMood] = useState("");
  const [subject, setSubject] = useState("");
  const [footer, setFooter] = useState("");
  const [generated, setGenerated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); 

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
    <div
      className={`min-h-screen relative flex items-center justify-center p-6 overflow-hidden ${
        isDarkMode
          ? "bg-[#0f172a]"
          : "bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
        // "min-h-screen bg-gradient-to-br from-purple-800 via-pink-700 to-fuchsia-800 flex items-center justify-center p-6"

        // "w-full max-w-xl backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6"
      }`}
    >
      {isDarkMode && (
        <>
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"></div>
        </>
      )}

      <button
        onClick={() => setIsDarkMode((prev) => !prev)}
        className="absolute top-4 right-4 p-3 rounded-full bg-white/20 hover:bg-white/30 transition"
      >
        {isDarkMode ? (
          <Sun className="text-yellow-300" />
        ) : (
          <Moon className="text-blue-800" />
        )}
      </button>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-xl backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6 relative z-10"
      >
        <h2
          className={`text-3xl font-bold text-center mb-6 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
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
                isDarkMode={isDarkMode}
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
                isDarkMode={isDarkMode}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Home;
