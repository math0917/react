import diceBlue01 from './asset/dice-blue-1.svg';
import diceRed01 from './asset/dice-red-1.svg';
import diceBlue02 from './asset/dice-blue-2.svg';
import diceRed02 from './asset/dice-red-2.svg';
import diceBlue03 from './asset/dice-blue-3.svg';
import diceRed03 from './asset/dice-red-3.svg';
import diceBlue04 from './asset/dice-blue-4.svg';
import diceRed04 from './asset/dice-red-4.svg';
import diceBlue05 from './asset/dice-blue-5.svg';
import diceRed05 from './asset/dice-red-5.svg';
import diceBlue06 from './asset/dice-blue-6.svg';
import diceRed06 from './asset/dice-red-6.svg';

const DICE_IMAGES = {
    blue : [diceBlue01,diceBlue02,diceBlue03, diceBlue04,diceBlue05,diceBlue06],
    red : [diceRed01,diceRed02,diceRed03,diceRed04,diceRed05,diceRed06],
};

function Dice({color = "blue", num = 1}){
    const src = DICE_IMAGES[color][num-1]
    const alt = `${color} ${num}`;
    return <img src = {src} alt = {alt} />;
}

export default Dice;