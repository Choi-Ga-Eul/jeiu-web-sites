function change_night(){
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
    let a = document.querySelector('a');
    for(let i = 0; i < a.length; i++){
        a[i].style.color = 'white';
    }
}

function change_day(){
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    let a = document.querySelector('a');
    for(let i = 0; i < a.length; i++){
        a[i].style.color = 'black';
    }
}