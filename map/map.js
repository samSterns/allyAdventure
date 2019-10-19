import { getAlly } from '../data/save-ally.js';
import { adventures } from '../data/meta-data.js';
import loadProfile from '../common/load-profile.js';
import createAdventureLink from './create-adventure-link.js';
import createCompletedAdventure from './create-completed-adventure.js';
import hasCompletedAllAdventures from './has-completed-all-adventures.js';
import gameOver from '../common/game-over.js';

loadProfile();

const ally = getAlly();

if (gameOver(ally) || hasCompletedAllAdventures(adventures, ally)) {
    window.location = '/results/index.html';
}

const nav = document.getElementById('adventure-display'); 

for (let i = 0; i < adventures.length; i++) {
    const adventure = adventures[i];
    let adventureDisplay = null; 

    if (ally.completed[adventure.id]) {
        adventureDisplay = createCompletedAdventure(adventure);
    } else {
        adventureDisplay = createAdventureLink(adventure);
    }
    nav.appendChild(adventureDisplay);
}