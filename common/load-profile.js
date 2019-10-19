import { getAlly } from '../data/save-ally.js';
import gameOver from './game-over.js';
function loadProfile() {
    const wp = document.getElementById('wp');
    const sc = document.getElementById('sc');
    const ally = getAlly();

    sc.textContent = ally.sc;
    
    if (gameOver(ally)) {
        wp.textContent = 'Better Try Again, my friend';
    }
    else {
        wp.textContent = ally.wp;
    }
}
export default loadProfile; 