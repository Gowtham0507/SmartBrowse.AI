# AI Browser Extension 🤖

A powerful AI-powered Chrome extension that enhances your browsing experience with intelligent features powered by Google's Gemini AI.

## ✨ Features

### 🎯 Core Features
- **AI Chat Assistant** - Ask questions about any webpage you're viewing
- **Smart Summarization** - Get instant summaries of web pages
- **Safety Checker** - Analyze websites for potential security risks
- **YouTube Video Summarization** - Automatically summarize YouTube videos using transcripts

### ✍️ Text Enhancement Tools (Context Menu)
- **Grammar Correction** - Fix grammar and spelling errors
- **Text Explanation** - Get detailed explanations of complex text
- **Translation** - Translate text to English
- **ELI5 Mode** - Explain concepts in simple terms
- **Tone Adjustment** - Make text professional, casual, or concise

### 🎨 Additional Features
- Real-time grammar checking in text fields
- Beautiful, modern UI with dark mode
- Context menu integration for quick access
- Shadow DOM for style isolation

## 🚀 Installation

### Prerequisites
- Google Chrome browser
- Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ai-browser-extension.git
   cd ai-browser-extension
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the extension**
   ```bash
   npm run build
   ```

4. **Load in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top-right)
   - Click "Load unpacked"
   - Select the `dist` folder from the project

5. **Configure API Key**
   - Click the extension icon in Chrome
   - Enter your Gemini API key in the settings
   - Click "Save & Continue"

## 📖 Usage

### Chat Assistant
1. Click the extension icon
2. Navigate to the "Chat" tab
3. Ask questions about the current webpage

### Summarize Pages
1. Click the extension icon
2. Go to the "Summary" tab
3. Click "Summarize Page"

### YouTube Summarization
1. Open any YouTube video
2. Look for the "🤖 Summarize Video" button below the video
3. Click to get an AI-generated summary

### Context Menu Features
1. Select any text on a webpage
2. Right-click and choose "AI Assistant"
3. Select the desired action (summarize, explain, translate, etc.)

## 🛠️ Development

### Project Structure
```
ai-browser-extension/
├── src/
│   ├── App.jsx              # Main popup component
│   ├── App.css              # Popup styles
│   ├── main.jsx             # Popup entry point
│   ├── background/
│   │   └── index.js         # Background service worker
│   ├── content/
│   │   ├── index.jsx        # Content script entry
│   │   ├── ContextTooltip.jsx  # Tooltip component
│   │   ├── GrammarChecker.js   # Grammar checking
│   │   └── Overlay.jsx      # Page overlay
│   └── utils/
│       ├── ai.js            # AI utility functions
│       ├── storage.js       # Chrome storage utilities
│       └── youtube.js       # YouTube-specific utilities
├── public/
│   └── manifest.json        # Extension manifest
├── dist/                    # Built extension (generated)
└── package.json
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Google Gemini AI** - AI capabilities
- **Lucide React** - Icons
- **Chrome Extension APIs** - Browser integration

## 🔑 API Key Setup

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and paste it in the extension settings

## 🎨 Features in Detail

### AI-Powered Summarization
Uses Gemini AI to analyze and summarize webpage content, providing concise overviews of articles, documentation, and more.

### Safety Analysis
Evaluates websites for potential security risks, phishing attempts, and malicious content using AI-powered analysis.

### YouTube Integration
Automatically fetches video transcripts and generates intelligent summaries, helping you quickly understand video content without watching.

### Grammar Assistance
Real-time grammar checking in text fields with AI-powered suggestions for corrections and improvements.

## 📝 License

MIT License - feel free to use this project for learning and development.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 🐛 Known Issues

- YouTube transcript fetching may fail due to CORS restrictions (fallback to video description)
- Extension requires API key configuration on first use
- Some websites may block content script injection

## 📧 Support

For issues and questions, please open an issue on GitHub.

## 🙏 Acknowledgments

- Powered by [Google Gemini AI](https://deepmind.google/technologies/gemini/)
- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
- Icons from [Lucide](https://lucide.dev/)

---

**Made with ❤️ using AI technology**
