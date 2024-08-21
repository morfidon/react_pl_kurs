import { useState } from 'react';
function GoldClicker() 
{
    const [gold, setGold] = useState(0);
    return(
        <div>
            <h1>Gold Clicker</h1>
            <p>Gold: {gold}</p>
            <button onClick={() => setGold(gold + 1)}>Dig gold</button>

        </div>
    );
}

export default GoldClicker