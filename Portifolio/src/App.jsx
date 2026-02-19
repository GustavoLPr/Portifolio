import { useState } from "react";
import "./App.css";
// import "./styles/global.css";
import './Styles/global.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "swiper/css/navigation";import Home from "./Pages/Home";
import "typeface-jetbrains-mono";
import { ThemeProvider } from "./context/themeContext";
import ParticlesBackground from "./Components/Particles/ParticlesBackground";
// import { ThemeProvider } from './context/themeContext';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <ParticlesBackground />
      <Home />
    </ThemeProvider>
  );
}

export default App;
