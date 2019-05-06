var m = document.querySelector("a-marker");
m.addEventListener("markerFound", (e)=>{
    var url = 'https://www.geogebra.org/m/myJTXcm5';
    if(window.open(url, '_blank'))
    {

    }else{

        window.location.href = url;
    }
    console.log("found")});
m.addEventListener("markerLost", (e)=>{console.log("lost")});