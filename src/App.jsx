import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import HelloFromExpress from './components/HelloFromExpress';

import { ThemeProvider } from './contexts/ThemeContext';
import TaskList from './components/TaskList';

function App() 
{  
          

    return (
      <> 
        <ThemeProvider>
          <TaskList />
        </ThemeProvider>
      </>     
    );
}

export default App
// Layout -> Header i MainContent (Sidebar, Article(ArticleList))