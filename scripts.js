const container = document.querySelector('.container');

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement('div');
    div.className = "gridPart";
    
    container.appendChild(div);
}


function popup() {
    
}

const popupBtn = document.querySelector('.popupBtn');
popupBtn.addEventListener("click", )