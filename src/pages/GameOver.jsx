const GameOver = ({ gameStatus, restartGame, correctWord }) => (
  <div className="flex flex-col items-center gap-4 mt-4">
    <h2 className="text-2xl font-bold">{gameStatus === "won" ? "You Win! 🎉" : "Game Over! ❌"}</h2>

    {/* Show correct word if the player loses */}
    {gameStatus === "lost" && (
      <p className="text-lg text-red-500">The correct word was: <span className="font-bold">{correctWord}</span></p>
    )}

      {/* New Game button */}
    <button onClick={restartGame} className="border px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white cursor-pointer hover:bg-gray-600">
      New Game
    </button>
  </div>
);

export default GameOver;

