import { useEffect } from 'react';
import { Coins, Pickaxe, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'
import { scaleOnHover} from './utils/animations.jsx';
import AnimatedValue from './functional/AnimatedValue';
import styles from './GoldClicker.module.css'
import useLocalStorageState from 'use-local-storage-state'

function GoldClicker() 
{
    const [gold, setGold] = useLocalStorageState('gold',{defaultValue:100});
    const [clickPower, setClickPower] = useLocalStorageState('clickPower',{defaultValue:1});
    const [clickUpgradeCost, setClickUpgradeCost] = useLocalStorageState('clickUpgradeCost',{defaultValue:10});
    const [autoClickerCost, setAutoClickerCost] = useLocalStorageState('autoClickerCost',{defaultValue:20});
    const [autoClickers, setAutoClickers] = useLocalStorageState('autoClickers',{defaultValue:0});

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

    return(
        <div className={styles.goldClicker}>
            <h1>Gold Clicker</h1>
            <div className={styles.stats}>
                <p>
                    <Coins /> Gold: <AnimatedValue value={gold} customAnimationProps={{transition: 0.1}} />
                </p>
                <p>
                    <Pickaxe /> Click power: <AnimatedValue value={clickPower} animationType='bounce'/>
                </p>
                <p>
                    <Cpu /> Auto-Clickers: <AnimatedValue value={autoClickers} />
                </p>
            </div>
            <div className={styles.buttons}>
                <motion.button onClick={() => setGold(prevGold => prevGold + clickPower)}
                {...scaleOnHover}
                >
                
                <Coins /> Dig gold</motion.button>
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