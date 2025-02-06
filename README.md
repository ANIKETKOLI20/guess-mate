# Guess Mate

A word-guessing game inspired by Wordle, built using React and Tailwind CSS.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Usage](#usage)
- [Game Rules](#game-rules)
- [Technology Stack](#technology-stack)
- [Folder Structure](#folder-structure)
- [Screenshot](#screenshot)
- [Deployment](#deployment)
- [Link](#link)
- [License](#license)

## Overview
Guess Mate is a word-guessing game where players attempt to guess a five-letter word within a limited number of attempts.

## Features
- 🎨 Light/Dark Mode
- 🎯 Real-time feedback on guesses
- 🔄 Restart game option
- 🎮 Keyboard input support
- ⚡ Animations for incorrect inputs

## Demo
[live demo](https://guess-mate-git-main-aniket-kolis-projects.vercel.app/)

## Usage
1. Enter a 5-letter word.
2. Submit your guess.
3. Receive feedback based on correctness:
   - 🟩 Green: Correct letter in the correct position.
   - 🟨 Yellow: Correct letter in the wrong position.
   - ⬜ Gray: Incorrect letter.
4. Win by guessing the correct word within the allowed attempts!

## Game Rules
- You have **6 attempts** to guess the word.
- Each guess must be exactly **5 letters**.
- Letters turn **green** if correctly placed, **yellow** if misplaced, and **gray** if incorrect.

## Technology Stack
- ⚛️ **React** - Frontend library
- 🎨 **Tailwind CSS** - Styling
- 🗄️ **LocalStorage** - Storing theme preferences

## Folder Structure
```
/guess-mate
│── /src
│   ├── /components
│   │   ├── WordGrid.jsx
│   │   ├── InputSection.jsx
│   │   ├── GameOver.jsx
│   ├── /style
│   │   ├── global.css
│   ├── App.jsx
│   ├── main.jsx
│── index.html
│── package.json
│── README.md
```

## Screenshot


## Link
Deploy : https://guess-mate-git-main-aniket-kolis-projects.vercel.app/
Video Link : https://drive.google.com/file/d/1vSqyUndYRdSl0q14E8uPoAVsWhVisJok/view?usp=sharing
Github : https://github.com/ANIKETKOLI20/guess-mate


## License
This project is open-source and available under the MIT License.
