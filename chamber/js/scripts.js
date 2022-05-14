function togglemenu() {
    document.getElementById("primarynav").classList.toggle("open");
    document.getElementById("hamburgerbtn").classList.toggle("open");
    
}

const x = document.getElementById("hamburgerbtn");
x.onclick = togglemenu;

let c = (" Last modified: " + document.lastModified);
document.getElementById("lastmod").textContent = c
document.getElementById("lastmod2").textContent = c