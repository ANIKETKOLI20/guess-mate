import { useEffect } from "react";

const InputSection = ({ currentGuess, handleChange, handleSubmit, shake }) => {

  // Handle keyboard events 
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleSubmit();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleSubmit]);

  return (
    <div className="flex flex-col items-center gap-4 mt-4">

      {/* Input field with shake animation */} 
      <input 
        type="text" 
        value={currentGuess} 
        onChange={handleChange} 
        maxLength={5} 
        className={`input text-2xl p-3 bg-white border-2 border-gray-400 rounded-lg text-black 
          ${shake ? "animate-shake" : ""}`}
      />

        {/* Submit button */}
      <button onClick={handleSubmit} className="border px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white cursor-pointer hover:bg-gray-600">
        Submit
      </button>
    </div>
  );
};

export default InputSection;
