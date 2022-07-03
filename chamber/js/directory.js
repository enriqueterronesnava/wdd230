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
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let web = document.createElement("a");
        let img = document.createElement("img");
        let membership = document.createElement("p");

        name.innerHTML = companie.name;
        address.innerHTML = companie.address;
        phone.innerHTML = companie.phone;
        web.innerHTML = "Web page";
        web.setAttribute('href',companie.websiteURL)
        img.setAttribute('src', companie.imageURL);
        img.setAttribute('alt', 'company logo');
        img.setAttribute('loading', 'lazy');
        membership.innerHTML = `Membership Lvl: ${companie.membership}`;

        cards.append(card);
        card.append(img);
        card.append(name);
        card.append(address);
        card.append(phone);
        card.append(web);
        card.append(membership);
    });
}

getcompanies()

const gridbutton = document.querySelector("#gridy");
const listbutton = document.querySelector("#listy");
const display = document.querySelector(".griddd");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("gridy");
	display.classList.remove("listy");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("listy");
	display.classList.remove("gridy");
}