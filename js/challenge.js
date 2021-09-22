let timer = document.getElementById("counter");

function countUp(){        
        let b = parseInt(timer.innerText);
        return timer.innerText = b+1;
}
let sInt = setInterval(countUp,1000);

function pause(){
    let pause = document.getElementById("pause");
    if(pause.innerText === "pause"){
    pause.addEventListener('click',function(){
        clearInterval(sInt)
        pause.innerText = "resume";
        document.querySelector('#plus').disabled = true;
        document.querySelector('#minus').disabled = true;
        document.querySelector('#heart').disabled = true;
    })}else{
        document.querySelector('#plus').disabled = false;
        document.querySelector('#minus').disabled = false;
        document.querySelector('#heart').disabled = false;
    }
    //console.log(pause);
}

//pause();

function plus(){
    let add = parseInt(document.getElementById("counter").innerText);
    return document.getElementById("counter").innerText = add+1;
}

function minus(){
    let minus = parseInt(document.getElementById("counter").innerText);
    return document.getElementById("counter").innerText = minus-1;
}

document.getElementById('plus').addEventListener('click', plus);
document.getElementById('minus').addEventListener('click', minus);
document.getElementById('heart').addEventListener('click', likeHeart);
document.getElementById('submit').addEventListener('submit', submit);


function likeHeart(){
    let like = parseInt(document.getElementById("counter").innerText);
    let list = document.querySelector('ul.likes');
    //console.log(list);
    let div = document.createElement('div');
    console.log(div)
    div.textContent = `Number ${like} has been liked 1 time`;
    list.appendChild(div)
}
 function submit(){
     let comment = document.querySelector('div#list');
     let div = document.createElement('div');
     comment.appendChild(div)     
}