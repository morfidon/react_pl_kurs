import { useState } from 'react';
function GoldClicker() 
{
    const [gold, setGold] = useState(0);
    const [clickPower, setClickPower] = useState(1);
    const [clickUpgradeCost, setClickUpgradeCost] = useState(10);

    const upgradeClickPower = () => {
        if(gold >= clickUpgradeCost)
        {
            setGold(prevGold => prevGold - clickUpgradeCost);
            setClickPower(prevClickPower => prevClickPower * 1);
            setClickUpgradeCost(prevClickUpgradeCost => prevClickUpgradeCost * 2);
        }
    }
    return(
        <div>
            <h1>Gold Clicker</h1>
            <p>Gold: {gold}</p>
            <p>Click power: {clickPower}</p>
            <button onClick={() => setGold(prevGold => prevGold + clickPower)
               
            }>Dig gold</button>
            <button onClick={upgradeClickPower}>Upgrade click power (Cost: {clickUpgradeCost})</button>

        </div>
    );
}

export default GoldClicker