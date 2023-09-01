var count = 0;
var sec = 0;
var min = 0;
var Hr = 0;

function start() {
    setInterval(() => {
        if (count < 360) {
            count = count + 6;
            sec = count / 6;
            if (sec === 60) {
                min = min + 1;
            if (min === 60) {
                Hr = Hr + 1;
                min = min-60;
            if(Hr===24){
                Hr=Hr-24;
            }
            }
        }
          
        }
    
        else {
            count=0;
        }
        document.getElementById('watch').style.backgroundImage = `conic-gradient(transparent 0deg, transparent ${count}deg, azure ${count}deg, azure)`
        document.getElementById('time').innerHTML = ` ${Hr}Hrs: ${min}Min : ${sec} Sec`;
}, 1000)
}
