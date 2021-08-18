var btn3=document.querySelector("#btn3")
var base=document.querySelector("#base")
var height=document.querySelector("#height")
ans=[];score=0
rightans=["no","no","no","yes","no","yes","no","no","no","yes","no","no","no","yes","no","no"]
btn3.addEventListener("click",function clickEventHandler(){
    basesq=Math.pow(base.value,2)
    heightsq=Math.pow(height.value,2)
    sum=basesq+heightsq
    s=Math.sqrt(sum)
    dishypo.innerText="The length is "+s

})