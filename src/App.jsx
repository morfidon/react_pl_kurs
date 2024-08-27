import './App.css'
import ClassicToggleButton from './components/ClassicToggleButton';
import GoldClicker from './components/GoldClicker';
import ThemeToggleButton from './components/ThemeToggleButton';
import { ThemeProvider } from './contexts/ThemeContext';

function App() 
{  
          

    return (
      <> 
        <ThemeProvider>
        
          <ClassicToggleButton />
          <GoldClicker />
          <ThemeToggleButton />
          
        </ThemeProvider>
      </>     
    );
}

export default App
// Layout -> Header i MainContent (Sidebar, Article(ArticleList))