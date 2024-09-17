import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import HelloFromExpress from './components/HelloFromExpress';

import { ThemeProvider } from './contexts/ThemeContext';

function App() 
{  
          

    return (
      <> 
        <ThemeProvider>
          <ToastContainer theme='dark' />
          <HelloFromExpress />
        </ThemeProvider>
      </>     
    );
}

export default App
// Layout -> Header i MainContent (Sidebar, Article(ArticleList))