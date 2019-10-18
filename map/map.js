import { getAlly } from '../data/save-ally.js';
import { adventureArray } from '../data/meta-data.js';
import loadProfile from '../common/load-profile.js';
import createAdventureLink from './create-adventure-link.js';
import createCompletedAdventure from './create-completed-adventure.js';
import hasCompletedAllAdventures from './has-completed-all-adventures.js';
import gameOver from '../common/game-over.js';

loadProfile();

const ally = getAlly();

if (gameOver(ally) || hasCompletedAllAdventures(adventureArray, ally)) {
    window.location = '/results/index.html';
}

const nav = document.getElementById('adventures'); 

for (let i = 0; i < adventureArray.length; i++) {
    const adventure = adventureArray[i];
    let adventureDisplay = null; 

    if (ally.completed[adventure.id]) {
        adventureDisplay = createCompletedAdventure(adventure);
    } else {
        adventureDisplay = createAdventureLink(adventure);
    }
    nav.appendChild(adventureDisplay);
}