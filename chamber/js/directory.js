function togglemenu() {
    document.getElementById("primarynav").classList.toggle("open");
    document.getElementById("hamburgerbtn").classList.toggle("open");
    
}

const x = document.getElementById("hamburgerbtn");
x.onclick = togglemenu;

let c = (" Last modified: " + document.lastModified);
document.getElementById("lastmod").textContent = c;
document.getElementById("lastmod2").textContent = c;


const requestURL = 'https://enriqueterronesnava.github.io/wdd230/chamber/js/data.json';
const cards = document.querySelector('.cards');

async function getcompanies() {
    let response = await fetch(requestURL);
    if (response.ok) {
    let data = await response.json();
    console.log(data);
    buildPcards(data);
    } else {
        throw Error(response.statusText);
    }
}

function buildPcards(data){
    data.comp.forEach(companie => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let phone = document.createElement("p");
        let web = document.createElement("a");
        let img = document.createElement("img");
        let membership = document.createElement("p");

        name.innerHTML = companie.name;
        address.innerHTML = `Address: ${companie.address}`;
        phone.innerHTML = `Phone number: ${companie.phone}`;
        web.innerHTML = "Web page";
        img.setAttribute('src', companie.imageURL);
        img.setAttribute('alt', 'company logo');
        img.setAttribute('loading', 'lazy');
        membership.innerHTML = `Membership Lvl: ${companie.membership}`;

        cards.append(card);
        card.append(name);
        card.append(address);
        card.append(phone);
        card.append(web);
        card.append(img);
        card.append(membership);
    });
}

getcompanies()