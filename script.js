document.getElementById("oo").addEventListener("click",function(){
    alert("I LOVE YOU TOO!~ AYIEEEEEEE!~");
});

var Hindi = document.getElementById("hindi");
Hindi.addEventListener("click", function() {
    var randomX = Math.floor(Math.random() * (window.innerWidth - Hindi.offsetWidth));
    var randomY = Math.floor(Math.random() * (window.innerHeight - Hindi.offsetHeight));
    Hindi.style.position = "absolute";
    Hindi.style.left = randomX + "px";
    Hindi.style.top = randomY + "px";
});
