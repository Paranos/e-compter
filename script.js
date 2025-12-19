const figures = [0,1,2,3,4,5,6,7,8,9];

const cardsContainer = document.getElementById("cards-container");
const choicesContainer = document.getElementById("choices");

let correctNumber = null;

function getRandomFigure() {
    return figures[Math.floor(Math.random() * figures.length)];
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function drawCards(number) {
    cardsContainer.innerHTML = "";

    for (let i = 0; i < number; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        cardsContainer.appendChild(card);
    }
}

function loadNewQuestion() {
    choicesContainer.innerHTML = "";

    correctNumber = getRandomFigure();
    drawCards(correctNumber);

    let options = new Set();
    options.add(correctNumber);

    while (options.size < 4) {
        options.add(getRandomFigure());
    }

    shuffle([...options]).forEach(num => {
        const btn = document.createElement("button");
        btn.textContent = num;

        btn.addEventListener("click", () => {
            if (num === correctNumber) {
                btn.classList.add("correct");
                setTimeout(loadNewQuestion, 800);
            } else {
                btn.classList.add("wrong");
                setTimeout(() => btn.classList.remove("wrong"), 500);
            }
        });

        choicesContainer.appendChild(btn);
    });
}

loadNewQuestion();
