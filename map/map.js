import { getAlly } from '../data/api.js';
import adventure from '../data/meta-data.js';
import loadProfile from '../common/load-profile.js';
import createAdventureLink from './create-adventure-link.js';
import createCompletedAdventure from './create-completed-adventure.js';
import hasCompletedAllAdventures from './has-completed-all-adventures.js';
import gameOver from '../common/game-over.js';

loadProfile();

const ally = getAlly();

if (gameOver(ally) || hasCompletedAllAdventures(adventure, ally)) {
    window.location = '../results';
}

const nav = document.getElementById('adventures'); 

for (let i = 0; i < adventure.length; i++) {
    const adventure = adventure[i];
    let adventureDisplay = null; 

    if (ally.completed[adventure.id]) {
        adventureDisplay = createCompletedAdventure(adventure);
    } else {
        adventureDisplay = createAdventureLink(adventure);
    }
    nav.appendChild(adventureDisplay);
}