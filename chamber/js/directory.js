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
    data.companies.forEach(companie => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        

        name.innerHTML = `Name: ${companie.name}`;
        address.innerHTML = `Address: ${companie.address}`
        card.append(name);
        card.append(address);
    });
}

getcompanies()