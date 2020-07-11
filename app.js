var sec=0
var msec = 0
var min=0


var secHead = document.getElementById('sec')
var msecHead = document.getElementById('msec')
var minHead = document.getElementById('min')

function timer(){
    msec++
    msecHead.innerHTML = msec
    if(msec>=100)
    {
        sec++
        secHead.innerHTML=sec
        msec=0
    }
    else if(sec>=60)
    {
        min++
        minHead.innerHTML= min
        sec=0
    }
}

function start(){
    interval= setInterval(timer,10)
}

function stop(){
    clearInterval(interval)
}

function reset(){
    min=0
    sec=0
    msec=0
    minHead.innerHTML=min
    secHead.innerHTML=sec
    msecHead.innerHTML=msec
    stop()
}