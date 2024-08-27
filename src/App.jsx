import './App.css'
import ClassicToggleButton from './components/ClassicToggleButton';
import GoldClicker from './components/GoldClicker';
import ThemeToggleButton from './components/ThemeToggleButton';
import { useState, useEffect } from 'react';
function App() 
{  
  const [theme, setTheme] = useState('light');

  useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);             

    return (
      <> 
        <ClassicToggleButton theme={theme} setTheme={setTheme} />
        <GoldClicker />
        <ThemeToggleButton theme={theme} setTheme={setTheme} />
        
      </>     
    );
}

export default App
