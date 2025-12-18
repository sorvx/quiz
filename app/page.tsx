"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

type QA = { number: number; question: string; answer: string };

const qaList: QA[] = [
  { number: 1, question: "What is Artificial Intelligence?", answer: "Technology that enables machines to mimic human intelligence." },
  { number: 2, question: "What algorithm is used to group similar data in Machine Learning?", answer: "K-Means clustering." },
  { number: 3, question: "Name one example of AI used in daily life.", answer: "Voice assistant." },
  { number: 4, question: "What component of a robot is responsible for movement?", answer: "Actuator." },
  { number: 5, question: "What does HTTPS provide that HTTP does not?", answer: "Secure encrypted communication." },
  { number: 6, question: "What is the Linux command to list files in a directory?", answer: "ls" },
  { number: 7, question: "What is phishing in cybersecurity?", answer: "A method of stealing information by tricking users." },
  { number: 8, question: "What device assigns IP addresses automatically in a network?", answer: "DHCP server." },
  { number: 9, question: "What does HTML stand for?", answer: "HyperText Markup Language." },
  { number: 10, question: "What JavaScript feature allows a webpage to respond to user actions?", answer: "Event handling." },
  { number: 11, question: "What is a responsive website?", answer: "A website that adapts to different screen sizes." },
  { number: 12, question: "What CSS property controls the layout using rows and columns?", answer: "CSS Grid." },
  { number: 13, question: "What is backend development mainly responsible for?", answer: "Server-side logic and data handling." },
  { number: 14, question: "What does API stand for?", answer: "Application Programming Interface." },
  { number: 15, question: "What type of database uses tables with rows and columns?", answer: "Relational database." },
  { number: 16, question: "Which programming language is commonly used in game engines for performance?", answer: "C++." },
  { number: 17, question: "What game engine uses C# as its main scripting language?", answer: "Unity." },
  { number: 18, question: "What is authentication in software systems?", answer: "The process of verifying user identity." },
  { number: 19, question: "What is the brain of a computer called?", answer: "CPU." },
  { number: 20, question: "What does RAM stand for?", answer: "Random Access Memory." },
  { number: 21, question: "What type of memory is volatile?", answer: "RAM." },
  { number: 22, question: "What hardware component stores data permanently?", answer: "Hard disk." },
  { number: 23, question: "What is a microcontroller?", answer: "A small computer on a single integrated circuit." },
  { number: 24, question: "What sensor is commonly used in robots to measure distance?", answer: "Ultrasonic sensor." },
  { number: 25, question: "What is Machine Learning?", answer: "A technique where machines learn patterns from data." },
  { number: 26, question: "What term describes data used to evaluate an ML model?", answer: "Test data." },
  { number: 27, question: "What is malware?", answer: "Software designed to damage or exploit systems." },
  { number: 28, question: "What Linux command is used to delete a file?", answer: "rm" },
  { number: 29, question: "What protocol is used to securely transfer files?", answer: "SFTP." },
  { number: 30, question: "What device forwards data packets between networks?", answer: "Router." },
  { number: 31, question: "What frontend framework is component-based and uses JSX?", answer: "React." },
  { number: 32, question: "What HTML element is used to link an external CSS file?", answer: "<link>." },
  { number: 33, question: "What is the main role of a server?", answer: "To provide services or resources to clients." },
  { number: 34, question: "What backend concept ensures only authorized users access resources?", answer: "Authorization." },
  { number: 35, question: "What hardware component converts AC power to DC power?", answer: "Power Supply Unit." },
  { number: 36, question: "What input device is used to control the pointer on a screen?", answer: "Mouse." },
  { number: 37, question: "What is overfitting in Machine Learning?", answer: "When a model learns training data too well and performs poorly on new data." },
  { number: 38, question: "What Linux command shows the current working directory?", answer: "pwd" },
  { number: 39, question: "What networking model has seven layers?", answer: "OSI model." },
  { number: 40, question: "What does GPU primarily handle?", answer: "Graphics processing." },
];

export default function Home() {
  const [input, setInput] = useState("");
  const [active, setActive] = useState<QA | null>(qaList[0]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [answered, setAnswered] = useState<Set<number>>(new Set());

  const isValid = useMemo(() => {
    const num = Number(input);
    return Number.isInteger(num) && num >= 1 && num <= 40;
  }, [input]);

  const handleSelect = (num: number) => {
    if (answered.has(num)) return;
    const pick = qaList.find((q) => q.number === num) ?? null;
    setActive(pick);
    setShowAnswer(false);
    setShowQuestion(false);
    setInput(String(num));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      handleSelect(Number(input));
    }
  };

  return (
    <main>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="card"
        style={{ padding: "28px 24px", position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 30% 20%, rgba(139,92,246,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.18), transparent 35%)",
            filter: "blur(40px)",
            opacity: 0.8,
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <header style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <p className="badge" aria-live="polite">
              🎯 School Quiz • 40 questions • Jump by number
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
              <div>
                <h1 style={{ margin: 0, fontSize: 34, letterSpacing: -0.02 }}>Quiz Navigator</h1>
                <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
                  Type any number 1-40 or tap a button to jump instantly. Reveal answers when ready.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="button"
                onClick={() => {
                  setInput("");
                  setActive(qaList[0]);
                  setShowAnswer(false);
                }}
              >
                Reset
              </motion.button>
            </div>
          </header>

          <form onSubmit={handleSubmit} style={{ marginTop: 22, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 220px" }}>
              <input
                className="input"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter question number (1 - 40)"
                value={input}
                onChange={(e) => setInput(e.target.value.replace(/[^0-9]/g, ""))}
              />
            </div>
            <motion.button
              type="submit"
              className="button"
              disabled={!isValid || answered.has(Number(input))}
              style={{
                opacity: !isValid || answered.has(Number(input)) ? 0.5 : 1,
                cursor: !isValid || answered.has(Number(input)) ? "not-allowed" : "pointer",
              }}
              whileHover={!isValid || answered.has(Number(input)) ? undefined : { scale: 1.02 }}
              whileTap={!isValid || answered.has(Number(input)) ? undefined : { scale: 0.98 }}
            >
              Go to question
            </motion.button>
          </form>

          <div className="quick-grid" aria-label="Quick jump buttons">
            {qaList.map((qa) => (
              <motion.button
                key={qa.number}
                className="quick-btn"
                onClick={() => handleSelect(qa.number)}
                disabled={answered.has(qa.number)}
                style={
                  answered.has(qa.number)
                    ? { opacity: 0.4, cursor: "not-allowed", borderStyle: "dashed" }
                    : undefined
                }
                whileHover={answered.has(qa.number) ? undefined : { y: -3 }}
                whileTap={answered.has(qa.number) ? undefined : { scale: 0.97 }}
                aria-label={`Jump to question ${qa.number}`}
              >
                {qa.number}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {active && (
              <motion.section
                key={active.number}
                className="card question-card"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                aria-live="polite"
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <h2 style={{ margin: 0 }}>Question {active.number}</h2>
                  <span className="badge">Reveal question and answer when ready</span>
                </div>
                <motion.button
                  className="button"
                  style={{ marginTop: 14 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowQuestion((prev) => !prev)}
                >
                  {showQuestion ? "Hide question" : "Show question"}
                </motion.button>
                <AnimatePresence>
                  {showQuestion && (
                    <motion.p
                      style={{ margin: "12px 0 0", fontSize: 18, lineHeight: 1.5 }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      {active.question}
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  className="button"
                  style={{ marginTop: 18 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    setShowAnswer((s: boolean) => {
                      const next = !s;
                      if (next && active) {
                        setAnswered((prev) => {
                          const updated = new Set(prev);
                          updated.add(active.number);
                          return updated;
                        });
                      }
                      return next;
                    })
                  }
                >
                  {showAnswer ? "Hide answer" : "Show answer"}
                </motion.button>

                <AnimatePresence>
                  {showAnswer && (
                    <motion.div
                      className="answer-box"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      {active.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </main>
  );
}
