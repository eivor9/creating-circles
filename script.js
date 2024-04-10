const container = document.querySelector(".container");
const generate = document.querySelector(".generate");

function addCircle(){
    let newCircle = document.createElement("div");
    newCircle.className = "circle";
    newCircle.style.left = randomHorizontalPosition();
    newCircle.style.top = randomVerticalPosition();
    newCircle.style.backgroundColor = randomColor();
    container.append(newCircle);
}

function randomHorizontalPosition(){
    let max = 750;
    let position = `${Math.floor(Math.random() * max)}px`;

    return position;
}

function randomVerticalPosition(){
    let max = 400;
    let position = `${Math.floor(Math.random() * max)}px`;

    return position;
}

function randomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgba(${red}, ${green}, ${blue}, 0.7)`;
}

function reset(){
    while(container.firstChild)
        container.firstChild.remove();
}