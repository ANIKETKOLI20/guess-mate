const WordGrid = ({ guesses }) => (
  <div className="grid gap-2">
    {guesses.map(({ word, feedback }, idx) => (
      <div key={idx} className="flex gap-4 mt-3.5">
        {word.split("").map((char, i) => (
          <span 
            key={i} 
            className={`size-12 p-3 text-lg font-bold text-white rounded-md transition-all duration-300 transform scale-95 
              ${feedback[i] === "correct" ? "bg-green-500 animate-bounce" : 
                feedback[i] === "present" ? "bg-yellow-500 animate-bounce" : 
                "bg-gray-500"}`}
          >
            {char}
          </span>
        ))}
      </div>
    ))}
  </div>
);

export default WordGrid;
