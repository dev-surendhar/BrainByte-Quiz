# 🧠 BrainByte-Quiz

A modern, interactive quiz application built with React and Vite. Test your knowledge with engaging questions and get instant feedback with a beautiful scorecard system.

## ✨ Features

- **Interactive Quiz Interface**: Clean, modern UI with smooth animations
- **Real-time Feedback**: Instant visual feedback for correct/incorrect answers
- **Smart Scoring System**: Track your progress with detailed score analytics
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Beautiful Scorecard**: Comprehensive results display with performance ratings
- **Multiple Questions**: 5 challenging questions covering various topics
- **Reset & Replay**: Start over anytime with the "Play Again" feature

## 🚀 Demo

Experience the quiz live: [BrainByte-Quiz Demo](#) _(Add your deployment link here)_

## 🛠️ Technologies Used

- **React 19.1.0** - Modern UI library
- **Vite 7.0.4** - Fast build tool and dev server
- **JavaScript (ES6+)** - Core programming language
- **CSS3** - Styling with flexbox and modern features
- **Google Fonts (Poppins)** - Clean, readable typography
- **ESLint** - Code quality and consistency

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/dev-surendhar/BrainByte-Quiz.git
   cd BrainByte-Quiz
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🎮 How to Use

1. **Start the Quiz**: Click on any answer option to begin
2. **Answer Questions**: Choose from 4 multiple-choice options
3. **Get Feedback**: See instant color feedback (green=correct, red=wrong)
4. **Navigate**: Click "NEXT" to move to the next question
5. **View Results**: Complete all questions to see your scorecard
6. **Play Again**: Use the "PLAY AGAIN" button to restart

## 📁 Project Structure

```
BrainByte-Quiz/
├── public/
├── src/
│   ├── Components/
│   │   └── Quiz/
│   │       ├── Quiz.jsx      # Main quiz component
│   │       └── Quiz.css      # Quiz styles
│   ├── assets/
│   │   └── data.js           # Quiz questions data
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🎯 Quiz Features

### Question Format

Each question includes:

- Clear, concise question text
- Four multiple-choice options
- Correct answer indication
- Progressive numbering (1 of 5, 2 of 5, etc.)

### Scoring System

- **Perfect (100%)**: "Perfect! 🏆"
- **Excellent (80%+)**: "Excellent! 🌟"
- **Good (60%+)**: "Good Job! 👏"
- **Average (40%+)**: "Not Bad! 👍"
- **Needs Improvement (<40%)**: "Keep Practicing! 💪"

## 🎨 Customization

### Adding New Questions

Edit `src/assets/data.js`:

```javascript
export const data = [
  {
    question: "Your question here?",
    option1: "First option",
    option2: "Second option",
    option3: "Third option",
    option4: "Fourth option",
    ans: 2, // Correct answer (1-4)
  },
  // Add more questions...
];
```

### Styling

- Main styles: `src/Components/Quiz/Quiz.css`
- Global styles: `src/index.css`
- Colors, fonts, and animations can be easily customized

## 🚀 Build & Deploy

1. **Build for production**

   ```bash
   npm run build
   ```

2. **Preview production build**

   ```bash
   npm run preview
   ```

3. **Deploy** to your preferred platform (Vercel, Netlify, GitHub Pages, etc.)

## 📱 Responsive Design

- **Desktop**: Full-width experience with hover effects
- **Tablet**: Optimized layout with touch-friendly buttons
- **Mobile**: Compact design that works on all screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Surendhar** - [@dev-surendhar](https://github.com/dev-surendhar)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the lightning-fast build tool
- Google Fonts for beautiful typography
- The open-source community for inspiration

---

⭐ **Star this repository if you found it helpful!**

🐛 **Found a bug?** [Open an issue](https://github.com/dev-surendhar/BrainByte-Quiz/issues)

💡 **Have suggestions?** [Start a discussion](https://github.com/dev-surendhar/BrainByte-Quiz/discussions)
