const change = document.querySelector('button');
const color = document.querySelector('p');
const body = document.body;

change.addEventListener('click', changeBG);

function changeBG(){
    const red = getRandomRGB();
    const green = getRandomRGB();
    const blue = getRandomRGB();

    // const RGB = `rgb(${red}, ${green}, ${blue})`; // Way one
    const RGB = "rgb("+ red + "," + green + ", " + blue + ")"; // Second way

    body.style.background = RGB;
    color.innerText = RGB;
}

function getRandomRGB(){
    return Math.floor(Math.random()*256);
}