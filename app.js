var angle1=document.querySelector("#angle1")
var angle2=document.querySelector("#angle2")
var angle3=document.querySelector("#angle3")
var btn1=document.querySelector("#btn1")
var disangle=document.querySelector("#disangle")
var clear= document.querySelector(".material-icons-outlined")

btn1.addEventListener("click",function clickEventHandler(){
    
    an1 = angle1.value;
    an2 = angle2.value;
    an3 = angle3.value;
    sum = Number ( an1 ) + Number ( an2 ) + Number ( an3);

    if (an1 == "" || an1 == null || an1 == 0, an2 == "" || an2 == null || an2 == 0, an3 == "" || an3 == null || an3 == 0 ) {
        disangle.innerHTML=" Enter values to proceed ahead!  ";
    }
    else if (( Math.sign( an1 ) === -1 ) || ( Math.sign( an2 ) === -1 ) || ( Math.sign( an3 ) === -1 )){
        disangle.innerHTML=" Enter positive values. ";
    }
    else if ( sum == 180 ) { 
        disangle.innerText = " You got it right! ";
    }
    else {
        disangle.innerText = " Check your values again! ";
    }

})

clear.addEventListener("click",function clickEventHandler(){
    angle1.value = "";
    angle2.value = "";
    angle3.value = "";
    disangle.innerText = "";
    
})
