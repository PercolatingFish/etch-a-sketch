const container = document.querySelector('.container');
let squares = 16;

function gridMaker(squares) {
    for (let i = 0; i < squares ** 2; i++) {
        const div = document.createElement('div');
        div.className = "gridPart";
        div.style.width = (960 / squares) + 'px';
        div.style.height = (960 / squares) + 'px';
        
        container.appendChild(div);
    }
}

// send the user a popup asking for number of squares per side for the new grid

function popup() {
    let squares = prompt("How many squares do you want?");
    gridMaker(squares)
}

// generate a new grid in the same total space

const popupBtn = document.querySelector('.popupBtn');
popupBtn.addEventListener("click", popup);

gridMaker(16);