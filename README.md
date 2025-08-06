# 🕹️ Tic Tac Toe Game

A simple and fun **Tic Tac Toe (X/O)** game built using **HTML, CSS, and JavaScript**. Two players can take turns to play in the browser — complete with win detection and draw conditions!

---

## 🚀 Features

- 3x3 interactive game board
- Alternating turns for "X" and "O"
- Win detection with winner display
- Draw detection when the board is full
- Reset functionality to play again
- Fully responsive design

---

## 📁 Project Structure
📦 tic-tac-toe/
├── index.html # Main HTML file
├── style.css # CSS styling
├── script.js # Game logic
└── README.md # Project documentation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Chandan636125/Tic-Tac-Toe.git
2. **Open the game**

   Open index.html in your browser.

   Or use Live Server in VSCode for auto-reloading.

## 🧠 How It Works
- JavaScript tracks each player's turn using a turnX boolean.

- After each move, it checks for a winner by comparing the board combinations.

- If no winner and all boxes are filled, it's declared a draw.

- The result is shown using a message box, and a reset button lets you restart.
