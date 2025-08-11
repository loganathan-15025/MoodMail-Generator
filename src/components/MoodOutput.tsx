import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Copy, RefreshCcw } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  subject: string;
  footer: string;
  onReset: () => void;
  isDarkMode: boolean; // new prop
};

const MoodOutput = ({ subject, footer, onReset, isDarkMode }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card
        className={
          isDarkMode
            ? "backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl"
            : "bg-white border border-gray-200 shadow-xl rounded-2xl"
        }
      >
        <CardHeader>
          <CardTitle
            className={
              isDarkMode
                ? "text-xl font-semibold text-white"
                : "text-xl font-semibold text-gray-900"
            }
          >
            ✨ Your MoodMail Output
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Subject */}
          <div>
            <label
              className={
                isDarkMode
                  ? "block text-sm font-medium text-gray-300 mb-1"
                  : "block text-sm font-medium text-gray-700 mb-1"
              }
            >
              Subject
            </label>
            <div className="flex gap-2">
              <Input
                value={subject}
                readOnly
                className={
                  isDarkMode
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-900"
                }
              />
              <Button
                size="icon"
                variant="secondary"
                onClick={() => handleCopy(subject)}
              >
                <Copy size={16} />
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div>
            <label
              className={
                isDarkMode
                  ? "block text-sm font-medium text-gray-300 mb-1"
                  : "block text-sm font-medium text-gray-700 mb-1"
              }
            >
              Footer Signature
            </label>
            <div className="flex gap-2">
              <Textarea
                value={footer}
                readOnly
                className={
                  isDarkMode
                    ? "bg-white/20 text-white min-h-[100px]"
                    : "bg-gray-100 text-gray-900 min-h-[100px]"
                }
              />
              <Button
                size="icon"
                variant="secondary"
                onClick={() => handleCopy(footer)}
              >
                <Copy size={16} />
              </Button>
            </div>
          </div>

          {/* Reset Button */}
          <div className="flex gap-3">
            <Button
              variant="destructive"
              className="w-full cursor-pointer p-6 font-bold text-1xl"
              onClick={onReset}
            >
              <RefreshCcw size={16} className="mr-2" />
              Reset
            </Button>
          </div>

          {/* Copy confirmation */}
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-green-400 text-sm text-center"
            >
              ✅ Copied to clipboard
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MoodOutput;
