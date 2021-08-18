const cardsData = [
    { id: 1, 'label': 1 },
    { id: 2, 'label': 2 },
    { id: 3, 'label': 3 },
    { id: 4, 'label': 4 },
    { id: 5, 'label': 5 },
    { id: 6, 'label': 6 },
    { id: 7, 'label': 7 },
    { id: 8, 'label': 8 },
    { id: 9, 'label': 9 }
];

const creatCardElement = (data) => {
    const card = document.createElement("div");
    card.classList.add('card-item');
    card.classList.add('card-' + data.id);
    card.appendChild(document.createTextNode(data.label));
    document.getElementById('cards-container').appendChild(card);
}

const renderCards = () => {
    document.getElementById('cards-container').innerHTML = '';
    cardsData.forEach(cardData => {
        creatCardElement(cardData);
    });
}

const sortCards = () => {
    cardsData.sort(function (x, y) {
        return x.label - y.label;
    })
    renderCards();
}

const shuffleCards = () => {
    cardsData.sort(() => Math.random() - 0.5);
    renderCards();
}

(function () {
    sortCards();
})()