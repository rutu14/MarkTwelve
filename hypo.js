var btn3=document.querySelector("#btn3")
var base=document.querySelector("#base")
var height=document.querySelector("#height")
var clear= document.querySelector(".material-icons-outlined")


btn3.addEventListener("click",function clickEventHandler(){
    basecheck = Number( base.value );
    heightcheck = Number ( height.value );
    if( basecheck == "" || basecheck == null || basecheck == 0, heightcheck == "" || heightcheck == null || heightcheck == 0 ) {
        dishypo.innerText = " Enter values to proceed ahead!  ";
    }
    else if ( ( Math.sign( basecheck ) === -1 ) || ( Math.sign( heightcheck ) === -1 ) ) {
        dishypo.innerText = " Enter positive values. ";
    }
    else {
        basesq = Math.pow ( basecheck, 2 );
        heightsq = Math.pow ( heightcheck, 2 );
        sum = basesq + heightsq;
        ans = Math.sqrt ( sum );
        dishypo.innerText = " The length is " + ans.toFixed(2);
    }
})
clear.addEventListener("click",function clickEventHandler(){
    base.value = "";
    height.value = "";
    dishypo.innerText = "";
    
})