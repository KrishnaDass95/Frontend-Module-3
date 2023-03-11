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
    setTimeout(()=>{
        let raceTimes = {
            redTime : randomIntInterval(10, 15),
            blueTime : randomIntInterval(10, 15),
            greenTime : randomIntInterval(10, 15),
            yellowTime : randomIntInterval(10, 15)
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
        console.log(scores);
        // find out the two least times and add it to scores obj
    }, 3000)
}
function LongJump(){

}





// final function call
openingCeremony(Race100M);