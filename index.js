var noOfDrums = document.querySelectorAll(".drum").length;


for (var i = 0; i < noOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    function handleClick() {
        var butInnHtml = this.innerHTML;
        makeSound(butInnHtml);
        btnAnime(butInnHtml);
    }

}

document.addEventListener("keypress", keyPress);
function keyPress(eve) {
    makeSound(eve.key);
    btnAnime(eve.key);
}

function makeSound(key) {
    switch (key) {
        case "w":
            var w = new Audio('sounds/tom-1.mp3');
            w.play();
            break;
        case "a":
            var a = new Audio('sounds/tom-2.mp3');
            a.play();
            break;
        case "s":
            var s = new Audio('sounds/tom-3.mp3');
            s.play();
            break;
        case "d":
            var d = new Audio('sounds/tom-4.mp3');
            d.play();
            break;
        case "j":
            var j = new Audio('sounds/snare.mp3');
            j.play();
            break;
        case "k":
            var k = new Audio('sounds/crash.mp3');
            k.play();
            break;
        case "l":
            var l = new Audio('sounds/kick-bass.mp3');
            l.play();
            break;
        default:
            console.log(butInnHtml);
    }
}


function btnAnime(currentKey){
    var activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");
    setTimeout(function (){
        activeBtn.classList.remove("pressed");
    }, 50)
}