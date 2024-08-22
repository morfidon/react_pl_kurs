import { useState } from 'react';
function GoldClicker() 
{
    const [gold, setGold] = useState(100);
    const [clickPower, setClickPower] = useState(1);
    const [clickUpgradeCost, setClickUpgradeCost] = useState(10);
    const [autoClickerCost, setAutoClickerCost] = useState(20);
    const [autoClickers, setAutoClickers] = useState(0);

    const buyAutoClicker = () => {
        if(gold >= autoClickerCost)
        {
            setGold(prevGold => prevGold - autoClickerCost);
            setAutoClickers(prevAutoClickers => prevAutoClickers + 1);
            setAutoClickerCost(prevAutoClickerCost => prevAutoClickerCost * 3);
        }
    }

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
            <p>Auto-Clickers: {autoClickers}</p>
            <button onClick={() => setGold(prevGold => prevGold + clickPower)
               
            }>Dig gold</button>
            <button onClick={upgradeClickPower}>Upgrade click power (Cost: {clickUpgradeCost})</button>
            <button onClick={buyAutoClicker}>Buy Auto-Clicker (Cost: {autoClickerCost})</button>
            

        </div>
    );
}

export default GoldClicker