function change_night(){
    let body = document.querySelector('body');
    let clock = document.querySelector('#clock');
    body.style.backgroundColor = "black";
    body.style.color = "white";
    clock.style.backgroundColor = "black";
    clock.style.color = "white";
    clock.style.borderColor = "white";
    let li = document.querySelector('li');
    for(let i = 0; i < li.length; i++){
        li[i].style.color = 'white';
    }
}

function change_day(){
    let body = document.querySelector('body');
    let clock = document.querySelector('#clock');
    body.style.backgroundColor = "white";
    body.style.color = "black";
    clock.style.backgroundColor = "white";
    clock.style.color = "black";
    clock.style.borderColor = "black";
    let li = document.querySelector('li');
    for(let i = 0; i < li.length; i++){
        li[i].style.color = 'black';
    }
}

function change_myStyle(){
    let body = document.querySelector('body');
    let clock = document.querySelector('#clock');
    body.style.backgroundColor = "skyblue";
    body.style.color = "white";
    clock.style.backgroundColor = "skyblue";
    clock.style.color = "white";
    clock.style.borderColor = "white";
}

function startClock() {
    let clock = document.getElementById("clock");
    timeout(clock);
}

function timeout(obj) {
    let current = new Date();
    obj.innerHTML = current.toLocaleTimeString()
    setTimeout("timeout(clock)", 1000); // 1초 후 timeout() 호출
}