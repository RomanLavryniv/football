function clickMouse(event){
    ball.style.top = event.pageY + 'px';
    ball.style.left = event.pageX + 'px';
}

function randomInteger(min,max) {
    let rand = min - 0.5 + Math.random() * (max - min) + min;
    return Math.random(rand) * (max - min) + min;
}