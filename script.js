let rubrik = document.querySelector("h1");
rubrik.textContent="Cool To-do Lista";

let ul = document.querySelector(".tom");
ul.appendChild(li);

function click_method(){
    console.log("someone pressed the button");
    let li_ny = document.createElement("li");
    let input = document.querySelector("#input_text");
    li_ny.textContent=input.value;
    ul.appendChild(li_ny);
}