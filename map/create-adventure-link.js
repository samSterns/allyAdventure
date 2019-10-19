function createAdventureLink(adventure) {
    const link = document.createElement('a');
    link.classList.add('adventure-display');

    link.href = '../adventure/index.html?id=' + adventure.id;

    link.style.top = adventure.map.top;
    link.style.left = adventure.map.left;
    link.textContent = adventure.title;

    return link;
}
export default createAdventureLink;