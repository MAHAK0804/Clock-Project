var count = 0;
var time = 0;
var count2 = 0;

function start() {
    setInterval(() => {
        if (count < 360) {
            count = count + 6;
            time = count / 6;
            if (time === 60) {
                count2 = count2 + 1;
            }
            if (count2 === 24) {
                count2 =count2-24;
            }
        }
    
        else {
            count=0;
        }
        document.getElementById('watch').style.backgroundImage = `conic-gradient(transparent 0deg, transparent ${count}deg, azure ${count}deg, azure)`
        document.getElementById('time').innerHTML = `${count2}Min : ${time} Sec`;
}, 1000)
}
