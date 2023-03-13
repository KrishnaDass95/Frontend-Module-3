// utility functions
function randomIntInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// callback functions
function openingCeremony(callback){
    // callback == Race100M
    setTimeout(()=>{
        console.log('Let the games Begin');
    }, 1000);
    let scores = {
        red: 0,
        blue: 0,
        green: 0,
        yellow: 0
    };
    callback(scores, LongJump);
}

function Race100M(scores, callback){
    // callback == LongJump
    setTimeout(()=>{
        let raceTimes = {
            red : randomIntInterval(10, 15),
            blue : randomIntInterval(10, 15),
            green : randomIntInterval(10, 15),
            yellow : randomIntInterval(10, 15)
        }

        let fastestTime = Number.MAX_SAFE_INTEGER;
        let secondFastestTime = Number.MAX_SAFE_INTEGER;
        let fastestKey = ''; // we can update the key
        let secondFastestKey = '';

        let raceTimeKeys = Object.keys(raceTimes);
        raceTimeKeys.forEach(function(time){
            if(raceTimes[time] < fastestTime){
                secondFastestTime = fastestTime;
                secondFastestKey = fastestKey;
                fastestTime = raceTimes[time];
                fastestKey = time;
            }
            else if(raceTimes[time] < secondFastestTime){
                secondFastestTime = raceTimes[time];
                secondFastestKey = time;
            }
        });

        scores[fastestKey] = 50;
        scores[secondFastestKey] = 25;
        console.log("scores after 100M", scores);
        // find out the two least times and add it to scores obj
        callback(scores, HighJump);
    }, 3000)
    

}
function LongJump(scores, callback){
    // callback == HighJump
    setTimeout(()=>{
        let longJumpWinner = Math.floor(Math.random() * 4);
        // console.log('longJump', longJumpWinner);
        if(longJumpWinner == 0){
            scores['red'] += 150;
        }
        else if(longJumpWinner == 1){
            scores['blue'] += 150;
        }
        else if(longJumpWinner == 2){
            scores['green'] += 150;
        }
        else{
            scores['yellow'] += 150;
        }
        console.log("scores after long jump", scores);
        callback(scores, AwardCeremony);
    }, 2000);
    
}

function HighJump(scores, callback){
    // callback == AwardCeremony
    let highJumpWinnerPrompt = prompt('What color secured the highest jump?');
    let winner = highJumpWinnerPrompt.toLowerCase();
    if(winner == 'red'){
        scores['red'] += 100;
    }
    else if(winner == 'blue'){
        scores['blue'] += 100;
    }
    else if(winner == 'green'){
        scores['green'] += 100;
    }
    else if(winner == 'yellow'){
        scores['yellow'] += 100;
    }
    else if(winner == null || winner == ''){
        console.log('Event was cancelled');
    }
    console.log('scores after high jump', scores);
    callback(scores)
}
function AwardCeremony(scores){
    const sorted = Object.entries(scores).sort((a,b) => b[1] - a[1]);
    // console.log(sorted);
    console.log(`${sorted[0][0]} came first with ${sorted[0][1]} score`);
    console.log(`${sorted[1][0]} came second with ${sorted[1][1]} score`);
    console.log(`${sorted[2][0]} came third with ${sorted[2][1]} score`);

}


// final function call
openingCeremony(Race100M);