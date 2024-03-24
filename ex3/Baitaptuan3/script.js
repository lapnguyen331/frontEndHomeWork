// var line= $('.content__process-step')
// $('.content__process').on('click',function(){
//     var elem = $(event.target).attr('class');
    
//     if(elem.search('one')){
//         line[1].style.display='none';
//         line[2].style.display='none';

//     }
//     else if(elem.search('two')){
//         line[1].style.display=''
//         line[2].style.display=''
//     }
//     else if(elem.search('three')){
//         line[1].style.display=''
//         line[2].style.display=''
//     }
//     document.querySelector('.content__process-three').style.left='40%';

// });
// console.log(em);
function nextPage() {
    let pageOne = document.querySelector('.content__product');
    let pageTwo = document.querySelector('.content__txt');
    let number2OfPage = document.querySelector('.content__process-number-two');

    pageOne.style.display = 'none';
    pageTwo.style.display = 'block';
    number2OfPage.classList.add('content__process-number--actived');
    number2OfPage.classList.add('separator');
}

function prePage() {
    let pageOne = document.querySelector('.content__product');
    let pageTwo = document.querySelector('.content__txt');
    let number2OfPage = document.querySelector('.content__process-number-two');

    pageOne.style.display = 'flex';
    pageTwo.style.display = 'none';
    number2OfPage.classList.remove('content__process-number--actived');
    number2OfPage.classList.remove('separator');
}