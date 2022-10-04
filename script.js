let tb=document.getElementsByClassName('taskbar')[0]
let sm=document.getElementsByClassName('start')[0]
tb.addEventListener('click',()=>{
    if(sm.style.bottom=="50px"){
        sm.style.bottom="-650px"
    }
    else{
        sm.style.bottom="50px"
    }
})