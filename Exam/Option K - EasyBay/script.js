var warningBox = document.querySelector('.warning');
var changeImgSrc = document.querySelector('#changingSrc')




function accepted(){
    warningBox.remove();
}


function cartButton(){
    alert('Your Cart is empty!');
}

function differentImg(){
    changeImgSrc.src = "images/assets/succulents-2.jpg";
}
function differentImg2(){
    changeImgSrc.src = "images/assets/succulents-1.jpg";
}
function shadow(elm){
    elm.classList.add('shadow');
}
function shadowremove(elm){
    elm.classList.remove('shadow')
}