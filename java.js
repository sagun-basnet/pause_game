let min = 0;
let sec = 0;
let ms = 0;

let timer = false;

let temp;
let tl = document.querySelectorAll('#trafficLight');
let sta = document.querySelector('#gameSt');
let res = document.querySelector('#gameReSt');

// res.style.display='none';
// sta.addEventListener('click', () => {
//     sta.style.display='none';
//     res.style.display='';
// });

let flage = 0;

// ========================for restart=========================================

res.addEventListener('click', () => {
    if(temp == "green" && flage == 0){
        flage++;
        document.getElementById('para').innerHTML = "this is your time: " +"0"+ min + ":" +"0"+ sec + ":"+ ms;
        return 0;
    }
    else{
        reset();
        flage=0;
    setTimeout(function () {
        tl[0].style.backgroundColor = "red";
        temp = tl[1].style.backgroundColor = "red";

        
        console.log(temp);
        timer = true;
        stopWatch();
    }, 2000); 

    
    console.log("hello");
}
});

// ======================for start===========================================

sta.addEventListener('click', () => {
    if(temp == "green"){
        document.getElementById('para').innerHTML = "this is your time: " +"0"+ min + ":" +"0"+ sec + ":"+ ms;
        flage++;
        return 0;
    }
    else{
    setTimeout(function () {
        tl[0].style.backgroundColor = "red";
        temp = tl[1].style.backgroundColor = "red";

        
        console.log(temp);
        timer = true;
        stopWatch();
    }, 2000); 

    
    console.log("hello");
}
        
});


// ==========================timer ==============




function stop(s) {
    if(s.keyCode == 32){
    timer = false;
    tl[0].style.backgroundColor = "green";
    temp = tl[1].style.backgroundColor = "green";
    }
    return;
}

function reset() {
    
    timer = false;
    min = 0; sec = 0; ms = 0;
    document.getElementById('ms').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
}

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


let hide = document.getElementById('kkk');
hide.style.display = "none";








