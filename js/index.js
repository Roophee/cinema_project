"use strict"

const trailerSection = document.querySelector('.content__video-trailer'),
    trailerButton = document.querySelector('.content__video-label'),
    videoFrame = document.querySelector('iframe');

const resetVideoSrc = function() {
    videoFrame.attributes.src.nodeValue='';
    videoFrame.attributes.src.nodeValue='https://www.youtube.com/embed/R0Ex4-kZWaI';
}

trailerButton.addEventListener('click',function(e){
    if (!trailerSection.classList.contains('hide')){
        setTimeout(resetVideoSrc, 500);
        }
    trailerSection.classList.toggle('hide');
})
