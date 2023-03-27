/**
 * Given bubbles in the form of circles. Task is to create a game such that hovering on a bubble pops it, 
 * that is, makes dissappear, and a text saying “pop” appears in it’s place. Once all bubbles have been popped,
 *  make all “pop” texts disappear and display a message saying: “Wow! All bubbles poppedPlayground for grid:
 */

const bubbleElement1 = document.getElementById('1')
// const bubbleElement2 = document.querySelector('#2');
// const bubbleElement3 = document.querySelector('#3');
// const bubbleElement4 = document.querySelector('#4');


function popBubble1(){

    bubbleElement1.style.display = 'none';
}




bubbleElement1.addEventListener('mouseover', popBubble1);
