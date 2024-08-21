import { useState } from 'react';
function ClickCounter({incrementBy = 1, initalValue = 0, buttonText = "Kliknij mnie"})
{
  //{incrementBy = 1, initalValue = 0, buttonText = "Kliknij mnie"} = {incrementBy: 5, buttonText: "Powiększ o 5"}
    const [counter, setCounter] = useState(initalValue);

    const increaseValue = () =>
    {
        setCounter(counter + incrementBy);
    }
    return (
      <> 
        <h1>Witaj!</h1>
        <p>Kliknięto {counter} razy</p>
        <button onClick={increaseValue}>{buttonText}</button>
      </>     
    );    
}

export default ClickCounter