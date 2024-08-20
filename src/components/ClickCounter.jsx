import { useState } from 'react';
function ClickCounter()
{
    const [counter, setCounter] = useState(0);

    const increaseValue = () =>
    {
        setCounter(counter + 1);
    }
    return (
      <> 
        <h1>Witaj!</h1>
        <p>Kliknięto {counter} razy</p>
        <button onClick={increaseValue}>Kliknij mnie</button>
      </>     
    );    
}

export default ClickCounter