
function showHide(ul, btn) {
    if(ul.style.display == 'block') {
        ul.style.display = 'none'
        btn.innerText = 'Show job description'
        
    }else{
        
        ul.style.display = 'block';
        btn.innerText = 'Hide job description'
    }
}

function work1() {
    let btn1 = document.querySelector('.btn1');
    let ul1 = document.querySelector('.ul1');

showHide(ul1, btn1);
}

function work2() {
    let btn2 = document.querySelector('.btn2');
    let ul2 = document.querySelector('.ul2');

showHide(ul2, btn2);
}

function work3() {
    let btn3 = document.querySelector('.btn3');
    let ul3 = document.querySelector('.ul3');

showHide(ul3, btn3);
}

function work4() {
    let btn4 = document.querySelector('.btn4');
    let ul4 = document.querySelector('.ul4');

showHide(ul4, btn4);
}