let min = 0;
let sec = 0;
let ms = 0;

let timer = false;

let temp;
let tl = document.querySelectorAll('#trafficLight');
let sta = document.querySelector('#gameSt');
let res = document.querySelector('#gameReSt');
let tim = document.querySelector('#timmer');

tim.style.display = "none";

let flage = 0;

// ================================for random============================
let ran = Math.floor(Math.random() * (10000 - 5000)) + 5000;

// ========================for restart=========================================

// res.addEventListener('click', () => {
//     if(temp == "green" && flage == 0){
//         flage++;
//         document.getElementById('para').innerHTML = "this is your time: " +"0"+ min + ":" +"0"+ sec + ":"+ ms;
//         return 0;
//     }
//     else{
//         reset();
//         flage=0;
//         setTimeout(function(){ 
//             tl[0].style.background = 'red';
//             tl[1].style.background = 'red';
//         }, 1000);
//         setTimeout(function(){ 
//             tl[2].style.background = 'red';
//             tl[3].style.background = 'red';
//         }, 2000);
//         setTimeout(function(){ 
//             tl[4].style.background = 'red';
//             tl[5].style.background = 'red';
//         }, 3000);
//         setTimeout(function(){ 
//             tl[6].style.background = 'red';
//             tl[7].style.background = 'red';
//         }, 4000);
//         setTimeout(function(){ 
//             tl[8].style.background = 'red';
//             temp = tl[9].style.background = 'red';
            
//             timer = true;
//             stopWatch();
//         }, ran);

    
//     console.log("hello");
// }
// });

// ======================for start===========================================

sta.addEventListener('click', () => {
    if(temp == "green" && flage == 1){
        console.log("i am here");
        document.getElementById('para').innerHTML = "Your Score: " +"0"+ min +" min "+ ":" +" 0"+ sec +" sec " + " : "+ ms +" ms";
        flage=0;
        return 0;
    }
    else{
    reset();
    flage++;
    tl[0].style.background = 'red';
    tl[1].style.background = 'red';
    setTimeout(function(){ 
        tl[2].style.background = 'red';
        tl[3].style.background = 'red';
    }, 1000);
    setTimeout(function(){ 
        tl[4].style.background = 'red';
        tl[5].style.background = 'red';
    }, 2000);
    setTimeout(function(){ 
        tl[6].style.background = 'red';
        tl[7].style.background = 'red';
    }, 3000);
    setTimeout(function(){ 
        tl[8].style.background = 'red';
        temp = tl[9].style.background = 'red';

        timer = true;
        stopWatch();
    }, ran); //random

    
    console.log("hello");
}
        
});




// ======================stop timmer===========================

function stop(s) {
    if(s.keyCode == 32){
    timer = false;
    for(let i=0; i<10; i++)
    temp = tl[i].style.background = "green";


    console.log("this is: " + temp);
    }
    return;
}

// ============================reset timmer=================================

function reset() {
    
    timer = false;
    min = 0; sec = 0; ms = 0;
    document.getElementById('ms').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
}

// ========================for timmer================================

function stopWatch() {
    if (timer == true) {
        ms += 01;
        document.getElementById('ms').innerHTML = ms;
        if (ms == 99) {
            ms = 0;
            sec++;
            document.getElementById('sec').innerHTML = sec;
            if (sec == 60) {
                sec = 0;
                min++;
                document.getElementById('min').innerHTML = min;
            }
        }

        window.addEventListener("keyup", stop);
        setTimeout("stopWatch()", 10.2);
    }
}


// let hide = document.getElementById('kkk');
// hide.style.display = "none";

// let btnStart = document.querySelector('#gameSt');
// let btnReStart = document.querySelector('#gameReSt');
// btnReStart.style.display='none';
// btnStart.addEventListener('click', () => {
//     btnStart.style.display='none';
//     btnReStart.style.display='';
// });