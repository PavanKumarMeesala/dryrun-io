# DryRun.io 🚀

A modern, web-based code editor and execution environment that allows you to write, run, and debug code in multiple programming languages directly in your browser.

![DryRun.io Screenshot](https://via.placeholder.com/800x400/1f2937/ffffff?text=DryRun.io+Screenshot)

## ✨ Features

- **Multi-Language Support**: Write and execute code in C, C++, Python, Java, JavaScript, C#, and PHP
- **Monaco Editor Integration**: Professional code editing experience with syntax highlighting and IntelliSense
- **Real-time Code Execution**: Secure remote code execution via Piston API
- **Interactive UI**: Clean, modern interface with resizable panels
- **Input/Output Management**: Dedicated areas for program input and execution output
- **Progress Tracking**: Visual feedback during code execution
- **Toast Notifications**: User-friendly notifications for execution status
- **Dry Run Capability**: Step-by-step code execution tracing (coming soon)

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Monaco Editor** - VS Code's editor in the browser
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI primitives

### Backend Integration
- **Piston API** - Secure remote code execution service
- **Axios** - HTTP client for API communication

### UI Components
- **Sonner** - Toast notifications
- **Lucide React** - Modern icon library
- **React Resizable Panels** - Flexible layout system

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dryrun-io.git
   cd dryrun-io
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

## 📝 Usage

1. **Select a Programming Language**: Use the language selector dropdown to choose from supported languages
2. **Write Your Code**: Use the Monaco editor to write your program
3. **Provide Input** (Optional): Enter any required input for your program in the input box
4. **Run Code**: Click the "Run" button to execute your code
5. **View Results**: Check the output panel for execution results or error messages
6. **Debug** (Coming Soon): Use the "Debug" button for step-by-step execution

## 🏗️ Project Structure

```
dryrun-io/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── button.jsx
│   │   │   ├── select.jsx
│   │   │   ├── textarea.jsx
│   │   │   └── ...
│   │   ├── dryrun.jsx          # Dry run visualization
│   │   ├── editor.jsx          # Monaco code editor
│   │   ├── inputBox.jsx        # Program input area
│   │   ├── navigationMenu.jsx  # Top navigation
│   │   ├── output.jsx          # Execution output display
│   │   └── selector.jsx        # Language selector
│   ├── backend/
│   │   └── api.js              # Piston API integration
│   ├── lib/
│   │   └── utils.js            # Utility functions
│   ├── App.jsx                 # Main application component
│   ├── constants.js            # Application constants
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── components.json             # shadcn/ui configuration
├── eslint.config.js           # ESLint configuration
├── jsconfig.json              # JavaScript configuration
├── package.json               # Project dependencies
├── tailwind.config.js         # Tailwind CSS configuration
└── vite.config.js             # Vite configuration
```

## 🎯 Supported Languages

| Language   | Version | File Extension |
|------------|---------|----------------|
| C          | 10.2.0  | .c             |
| C++        | 10.2.0  | .cpp           |
| Python     | 3.10.0  | .py            |
| JavaScript | 1.32.3  | .js            |
| Java       | 15.0.2  | .java          |
| C#         | 5.0.201 | .cs            |
| PHP        | 8.2.3   | .php           |

## 🔧 Configuration

### Adding New Languages

1. Update `src/constants.js` with the new language version:
   ```javascript
   export const LANGUAGE_VERSIONS = {
     // existing languages...
     newlang: "1.0.0"
   };
   ```

2. Add a default code snippet:
   ```javascript
   export const CODE_SNIPPETS = {
     // existing snippets...
     newlang: `// Your default code here`
   };
   ```

3. Update the language selector in `src/components/selector.jsx`

### Customizing the Editor

The Monaco editor can be customized in `src/components/editor.jsx`:

```javascript
<Editor
  language={language}
  value={code}
  theme="vs-dark" // Change theme
  options={{
    fontFamily: "Fira Code", // Change font
    fontSize: 16,            // Change font size
    minimap: { enabled: false }, // Disable minimap
    // Add more options...
  }}
/>
```

## 🚧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** (recommended) for code formatting
- **Tailwind CSS** for styling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 Roadmap

- [ ] **Dry Run Visualization** - Step-by-step code execution tracing
- [ ] **Debug Mode** - Interactive debugging capabilities
- [ ] **User Accounts** - Save and manage code snippets
- [ ] **Code Sharing** - Share code snippets with others
- [ ] **Themes** - Multiple editor themes (dark/light mode)
- [ ] **File Upload** - Import code files
- [ ] **Export Options** - Export code and results
- [ ] **Collaborative Editing** - Real-time collaboration
- [ ] **More Languages** - Support for additional programming languages

## 🔒 Security

This application uses the [Piston API](https://github.com/engineer-man/piston) for code execution, which provides:
- Sandboxed execution environment
- Resource limitations
- Secure isolation from the host system
- No persistent storage access

## 🐛 Issues and Support

If you encounter any issues or have questions:
1. Check the [existing issues](https://github.com/yourusername/dryrun-io/issues)
2. Create a new issue with detailed information
3. Include steps to reproduce the problem

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Piston API](https://github.com/engineer-man/piston) for providing secure code execution
- [Monaco Editor](https://github.com/microsoft/monaco-editor) for the excellent code editing experience
- [Radix UI](https://www.radix-ui.com/) for accessible UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

<div align="center">
  Made with ❤️ by [Your Name]
</div>
