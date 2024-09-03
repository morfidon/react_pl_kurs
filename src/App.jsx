import './App.css'
import ClassicToggleButton from './components/ClassicToggleButton';
import GoldClicker from './components/GoldClicker';
import PWAInstallButton from './components/PWAInstallButton';
import ThemeToggleButton from './components/ThemeToggleButton';
import { ThemeProvider } from './contexts/ThemeContext';

function App() 
{  
          

    return (
      <> 
        <ThemeProvider>
          <PWAInstallButton />
          <ClassicToggleButton />
          <GoldClicker />
          <ThemeToggleButton />
          
          
        </ThemeProvider>
      </>     
    );
}

export default App
// Layout -> Header i MainContent (Sidebar, Article(ArticleList))