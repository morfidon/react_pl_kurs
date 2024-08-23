import { useState, useEffect } from 'react';
import { Coins, Pickaxe, Cpu } from 'lucide-react'
import AnimatedValue from './functional/AnimatedValue';
import './GoldClicker.css'


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
    //useEffect wywołuje się na starcie
    useEffect(() => {
        const timer = setInterval(() => {
            setGold(prevGold => prevGold + 1 * autoClickers);
        }, 1000);

        return () => clearInterval(timer); //funkcja czyszcząca
    }, [autoClickers]) //wtedy gdy autoClickers się zmienia

    const upgradeClickPower = () => {
        if(gold >= clickUpgradeCost)
        {
            setGold(prevGold => prevGold - clickUpgradeCost);
            setClickPower(prevClickPower => prevClickPower + 1);
            setClickUpgradeCost(prevClickUpgradeCost => prevClickUpgradeCost * 2);
        }
    }
    const customProps =
    {
        initial: {opacity: 0.3, y: -10}, 
        animate: {opacity: 1, y: 0}
    }
    return(
        <div className="gold-clicker">
            <h1>Gold Clicker</h1>
            <div className="stats">
                <p>
                    <Coins /> Gold: <AnimatedValue value={gold} customAnimationProps={customProps} />
                </p>
                <p>
                    <Pickaxe /> Click power: <AnimatedValue value={clickPower} />
                </p>
                <p>
                    <Cpu /> Auto-Clickers: <AnimatedValue value={autoClickers} />
                </p>
            </div>
            <div className="buttons">
                <button onClick={() => setGold(prevGold => prevGold + clickPower)
                
                }><Coins /> Dig gold</button>
                <button onClick={upgradeClickPower} disabled={gold < clickUpgradeCost}>
                <Pickaxe /> Upgrade click power (Cost: {clickUpgradeCost})
                </button>
                <button onClick={buyAutoClicker} disabled={gold < autoClickerCost}>
                <Cpu /> Buy Auto-Clicker (Cost: {autoClickerCost})
                </button>
            </div>
            

        </div>
    );
}

export default GoldClicker