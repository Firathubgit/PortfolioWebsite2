import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
          {/* Pin the content to the top-left */}
          <div className="absolute top-0 left-0 p-4">
            <h1 className="text-4xl font-bold mb-2">Hi, I'm Firat Kayaaojfeojfwen</h1>
            <p className="text-lg mb-4">
              A passionate programmer specializing in web development, game development, and software engineering.
            </p>
            <div className="space-x-4">
              <a
                href="#projects"
                className="px-4 py-2 bg-white text-blue-600 rounded-lg shadow-md hover:bg-gray-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-4 py-2 bg-transparent border border-white rounded-lg hover:bg-white hover:text-blue-600"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
