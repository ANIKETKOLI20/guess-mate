import { useState, useEffect } from "react";
import WordGrid from "./components/WordGrid";
import InputSection from "./components/InputSection";
import GameOver from "./components/GameOver";
import "./app.css";

const WORD_TO_GUESS = "REACT"; 
const MAX_ATTEMPTS = 6;

const App = () => {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameStatus, setGameStatus] = useState("playing");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [shake, setShake] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Apply theme on mount and when changed
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Handle input change
  const handleChange = (e) => {
    if (e.target.value.length <= 5) {
      setCurrentGuess(e.target.value.toUpperCase());
      setErrorMessage("");
    }
  };

  // Validate and process the guess
  const handleSubmit = () => {
    if (currentGuess.length !== 5) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setErrorMessage("Guess must be exactly 5 letters.");
      return;
    }

    if (guesses.some((g) => g.word === currentGuess)) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setErrorMessage("Word already guessed.");
      return;
    }

    // Feedback logic
    const feedback = currentGuess.split("").map((char, index) => {
      if (char === WORD_TO_GUESS[index]) return "correct";
      if (WORD_TO_GUESS.includes(char)) return "present";
      return "absent";
    });

    // Update state
    const newGuesses = [...guesses, { word: currentGuess, feedback }];
    setGuesses(newGuesses);
    setCurrentGuess("");

    // Check game result
    if (currentGuess === WORD_TO_GUESS) {
      setGameStatus("won");
    } else if (newGuesses.length >= MAX_ATTEMPTS) {
      setGameStatus("lost");
    }
  };

  // Restart game
  const restartGame = () => {
    setGuesses([]);
    setCurrentGuess("");
    setGameStatus("playing");
    setErrorMessage("");
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full">
      {/* Dark Mode Toggle */}
      <button
        className="absolute top-4 right-4 border px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white cursor-pointer hover:bg-gray-600"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "Dark Mode 🌙" : "Light Mode 🌞"}
      </button>

      <h1 className="text-4xl font-bold mb-4">GUESS MATE</h1>
      {gameStatus === "playing" && (
        <p className="text-lg font-semibold mb-4">Attempts Left: {MAX_ATTEMPTS - guesses.length}</p>
      )}
      {errorMessage && <p className="text-red-500 font-semibold">{errorMessage}</p>}

      {gameStatus === "playing" ? (
        <>
          <WordGrid guesses={guesses} />
          <InputSection currentGuess={currentGuess} handleChange={handleChange} handleSubmit={handleSubmit} shake={shake} />
        </>
      ) : (
        <GameOver gameStatus={gameStatus} restartGame={restartGame} correctWord={WORD_TO_GUESS} />
      )}
    </div>
  );
};

export default App;
