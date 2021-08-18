var angle1=document.querySelector("#angle1")
var angle2=document.querySelector("#angle2")
var angle3=document.querySelector("#angle3")
var btn1=document.querySelector("#btn1")
var disangle=document.querySelector("#disangle")

btn1.addEventListener("click",function clickEventHandler(){
    sum=Number(angle1.value)+Number(angle2.value)+Number(angle3.value)
    console.log(angle3.value,angle2.value,angle1.value,sum)
    if (sum==180){
        disangle.innerText="You got it right!"
    }
    else{
        disangle.innerText="Check your values again!"
    }

})
