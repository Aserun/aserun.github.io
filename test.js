document.addEventListener("DOMContentLoaded", function(){
    var m = document.querySelector("a-marker");
    m.addEventListener("markerFound", (e)=>{console.log("found")});
    m.addEventListener("markerLost", (e)=>{console.log("lost")});
}