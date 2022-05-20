let rightButton = document.getElementById('right_button');
let leftButton = document.getElementById('left_button');
let imagePanel = document.getElementById('images');
let gaspMoveScreen = (whichSide) => {
    let imagePanelViewBox = imagePanel.getAttribute('viewBox').split(/\s+|,/);
    console.log(imagePanelViewBox);
    console.log(whichSide);
    if(whichSide == 'right-button-circle'){
        gsap.to(imagePanel, 1, {attr: {viewBox: "+=760 0 791.93 470.25"}});
        gsap.to("#interface_buttons", 1, {x: '+=760'});
    }
    if(whichSide == 'left-button-circle'){
        gsap.to(imagePanel, 1, {attr: {viewBox: "-=760 0 791.93 470.25"}});
        gsap.to("#interface_buttons", 1, {x: '-=760'});
    }
}

rightButton.addEventListener('click', (e) => {
    let whichSide = e.target.getAttribute('class')
    gaspMoveScreen(whichSide);
});
leftButton.addEventListener('click', (e) => {
    let whichSide = e.target.getAttribute('class')
    gaspMoveScreen(whichSide);
});