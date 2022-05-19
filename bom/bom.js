const input = document.querySelector("input");
const button = document.getElementsByClassName("bt");
const list = document.getElementById("li");

button[0].addEventListener('click', ()=> {

    const myItem = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listbt = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listbt);
    listbt.textContent = "❌";
    list.appendChild(listItem);

    listbt.addEventListener ("click",  () => {
        list.removeChild(listItem);
    });

    input.focus
});