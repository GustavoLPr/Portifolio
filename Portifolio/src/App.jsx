import { useState } from 'react'
import './App.css'
import './styles/global.css'
import Home from './Pages/Home'
import 'typeface-jetbrains-mono';
import { ThemeProvider } from './context/themeContext';
// import { ThemeProvider } from './context/themeContext';


function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
    <Home/>
    </ThemeProvider>
  )
}

export default App
