const container = document.querySelector('.container');
let squares = 16;

function gridMaker(squares) {
    container.innerHTML = '';
    for (let i = 0; i < squares ** 2; i++) {
        const div = document.createElement('div');
        div.className = "gridPart";
        div.style.width = (960 / squares) + 'px';
        div.style.height = (960 / squares) + 'px';
        div.style.filter = "brightness(99%)"
        
        container.appendChild(div);
        div.addEventListener('mouseover', turnBlack);
    }
}

function popup() {
    let squares = prompt("How many squares do you want?");
    if (squares > 100) {
        squares = prompt("Try again, less than 100 please");
    }
    gridMaker(squares)
}

function turnBlack() {
    this.className = "gridSelected";
    this.style.backgroundColor = getRandomColor()
    let brightness = (this.style.filter).substring(11,13);
    brightness -= 10;
    this.style.filter = `brightness(${brightness}%)`;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


const popupBtn = document.querySelector('.popupBtn');
popupBtn.addEventListener("click", popup);

gridMaker(16);