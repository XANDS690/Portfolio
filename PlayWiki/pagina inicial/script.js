var btn = document.querySelector('#hiden');
var container = document.querySelector('#SegMenu');

btn.addEventListener('click', function(){

    if(container.style.display == 'block'){
        container.style.display = 'none';
    

    }else {
        container.style.display = 'block';
    }

})


var btn2 = document.querySelector('#acao');
var container2 = document.querySelector('.SegAcao');

btn2.addEventListener('click', function(){

    if(container2.style.display == 'block'){
        container2.style.display = 'none';
    

    }else {
        container2.style.display = 'block';
    }

})

var btn3 = document.querySelector('#CorrVo');
var container3 = document.querySelector('.SegCor');

btn3.addEventListener('click', function(){

    if(container3.style.display == 'block'){
        container3.style.display = 'none';
    

    }else {
        container3.style.display = 'block';
    }

})

var btn4 = document.querySelector('#rit');
var container4 = document.querySelector('.SegRit');

btn4.addEventListener('click', function(){

    if(container4.style.display == 'block'){
        container4.style.display = 'none';
    

    }else {
        container4.style.display = 'block';
    }

})




