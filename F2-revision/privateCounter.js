console.log('private counter');

function createCounter(){
    let countA = 0;
    let countB = 0;

    function incrementA(){
        countA += 1;
        countB -= 1;
        console.log('A score is', countA);
        console.log('B score is', countB);
        checkWin();
    }
    function incrementB(){
        countB += 1;
        countA -= 1;
        console.log('A score is', countA);
        console.log('B score is', countB);
        checkWin();
    }
    function checkWin(){
        if(countA >= 10){
            console.log('A wins!');
        }
        else if(countB >= 10){
            console.log('B wins');
        }
    }
    function getA(){
        return countA;
    }
    function getB(){
        return countB;
    }
    return {
        incrementA,
        incrementB,
        getA,
        getB
    }

}

const game = createCounter();
console.log(game);
document.querySelector('#playerA').addEventListener('click', game.incrementA);
document.querySelector('#playerB').addEventListener('click', game.incrementB);