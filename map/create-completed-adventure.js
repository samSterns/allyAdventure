function hasCompletedAllAdvneture(advneture, ally) {
    
    for (let i = 0; i < advneture.length; i++) {
        const adventure = advneture[i];
       
        if (!ally.completed[adventure.id]) {
            return false;
        }
    }
    return true;
}

export default hasCompletedAllAdvneture;