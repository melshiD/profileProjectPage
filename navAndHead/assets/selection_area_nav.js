let rightButton = document.getElementById('right_button');
let leftButton = document.getElementById('left_button');
let imagePanel = document.getElementById('images');

let gaspMoveScreen = (whichSide) => {
    let imagePanelViewBox = imagePanel.getAttribute('viewBox').split(/\s+|,/);
    if(imagePanelViewBox[0] == '0' || 
       imagePanelViewBox[0] == '760' || 
       imagePanelViewBox[0] == '1520')
    {
        console.log(imagePanelViewBox);
        console.log(whichSide);
        if(whichSide == 'right-button-circle'){
            if(imagePanelViewBox[0] == '1520' ) return;
            gsap.to(imagePanel, 1, {attr: {viewBox: "+=760 0 791.93 470.25"}});
            gsap.to("#interface_buttons", 1, {x: '+=760'});
        }
        if(whichSide == 'left-button-circle'){
            if(imagePanelViewBox[0] == '0' ) return;
            gsap.to(imagePanel, 1, {attr: {viewBox: "-=760 0 791.93 470.25"}});
            gsap.to("#interface_buttons", 1, {x: '-=760'});
        }
    }
}

rightButton.addEventListener('click', (e) => {
    let whichSide = e.target.getAttribute('class');
    gaspMoveScreen(whichSide);

});
leftButton.addEventListener('click', (e) => {
    let whichSide = e.target.getAttribute('class');
    gaspMoveScreen(whichSide);
});