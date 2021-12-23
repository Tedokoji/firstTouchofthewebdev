//main avt click show
const mainavt = document.querySelector("#wallpaper-main-avatar-container");
mainavt.addEventListener("click",e=>{
    const mainavtshow = document.createElement("img");
    mainavtshow.src = "Naoavt.png";
    mainavtshow.style.cssText = "position:absolute;width:70%;height:70%;top:10%;right:15%;bottom:10%;      "
    const backbutton =document.createElement("button");
    backbutton.textContent = "X";
    backbutton.style.cssText = "position:absolute;width:5%;height:5%;top:10%;right:10%;bottom:10%;      " 
    document.body.appendChild(mainavtshow);
    document.body.appendChild(backbutton);
    backbutton.addEventListener("click",e=>{
        document.body.removeChild(backbutton);
        document.body.removeChild(mainavtshow);
    })
})
//wallpaper click show
const wallpaper = document.querySelector("#wallpaper");
wallpaper.addEventListener("click",e=>{
    const wallpp = document.createElement("img");
    wallpp.src = "Nao.jpg";
    wallpp.style.cssText = "position:absolute;width:70%;height:70%;top:10%;right:10%;bottom:10%;      "
    const backbutton =document.createElement("button");
    backbutton.textContent = "X";
    backbutton.style.cssText = "position:absolute;width:5%;height:5%;top:10%;right:10%;bottom:10%;      " 
    document.body.appendChild(wallpp);
    document.body.appendChild(backbutton);
    backbutton.addEventListener("click",e=>{
        document.body.removeChild(backbutton);
        document.body.removeChild(wallpp);
    })
})
