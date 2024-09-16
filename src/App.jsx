import './App.css'
import HelloFromExpress from './components/HelloFromExpress';

import { ThemeProvider } from './contexts/ThemeContext';

function App() 
{  
          

    return (
      <> 
        <ThemeProvider>
          <HelloFromExpress />
        </ThemeProvider>
      </>     
    );
}

export default App
// Layout -> Header i MainContent (Sidebar, Article(ArticleList))