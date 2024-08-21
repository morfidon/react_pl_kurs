import './App.css'
import ClickCounter from './components/ClickCounter';

function App() 
{           

    return (
      <> 
        <ClickCounter incrementBy={5} buttonText='Powiększ o 5'/> 
        <ClickCounter initalValue={10} /> 
        <ClickCounter /> 
      </>     
    );
}

export default App
