function togglemenu() {
    document.getElementById("primarynav").classList.toggle("open");
    document.getElementById("hamburgerbtn").classList.toggle("open");
    
}

const x = document.getElementById("hamburgerbtn");
x.onclick = togglemenu;

let c = (" Last modified: " + document.lastModified);
document.getElementById("lastmod").textContent = c;
document.getElementById("lastmod2").textContent = c;

const timedisplay = document.querySelector(".timedisplay");

localStorage.setItem("newdate", Date.now());
let olddate = Number(localStorage.getItem("olddate"));
let newdate = Number(localStorage.newdate);
if (olddate == 0) {
    olddate = newdate;
}
let timepassed = newdate - olddate;
if (timepassed !==0) {
    timedisplay.textContent = "Last visit since: " + Math.round(timepassed/8.64e+7) +" "+"days";}
    else{timedisplay.textContent = `This is your first visit!`;};

localStorage.setItem("olddate", newdate);

