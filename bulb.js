const btn=document.querySelector(".btn");
var img=document.querySelector(".image");

var state="light";

btn.addEventListener("click",()=>{
    if(state=="light")
    {
        state="dark";
        img.src="on.png";
        sound.play();
    }
    else{
        state="light";
        img.src="off.png";
    }
});