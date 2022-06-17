const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getprophets() {
    let response = await fetch(requestURL);
    if (response.ok) {
    let data = await response.json();
    //console.log(data);
    buildPcards(data);
    } else {
        throw Error(response.statusText);
    }
}

function buildPcards(data){
    data.prophets.forEach(prophet => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let img = document.createElement("img");
        let order = document.createElement("p");
        let fullname = `${prophet.name} ${prophet.lastname}`;
        let birth = document.createElement("p");
        let death = document.createElement("p");

        h2.innerHTML = `${prophet.name} <span class= "navy">${prophet.lastname}</span>`;
        p.innerHTML = `Birth Place: ${prophet.birthplace}`;
        birth.innerHTML = `Born on ${prophet.birthdate}`;
        if (prophet.death !== null) {
            death.innerHTML = `Died on ${prophet.death}`;
        }else {death.innerHTML = 'Lives';}

        img.setAttribute('src', prophet.imageurl);
        img.setAttribute('alt', `Picture of President ${fullname}`);
        img.setAttribute('loading', 'lazy');
        order.innerHTML = `Prophet number: ${prophet.order}`


        card.append(h2);
        card.append(p);
        card.append(birth);
        card.appendChild(order);
        card.append(death);
        card.append(img);
        cards.append(card);
    });
}

getprophets()