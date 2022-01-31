var drumButtons = document.querySelectorAll(".button").length;

for (var i=0; i<drumButtons; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function()
    {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


document.addEventListener("keypress", function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch(key) {
        case "w":
            var tom1 = new Audio("sound/sounds_tom-1.mp3");
            tom1.play();
            break;

        case "a" :
            var kick = new Audio("sound/sounds_kick-bass.mp3");
            kick.play();
            break;

        case "s" :
                var tom2 = new Audio("sound/sounds_tom-2.mp3");
                tom2.play();
                break;
    
        case "d" :
            var crash = new Audio("sound/sounds_crash.mp3");
            crash.play();
            break;

        case "j" :
            var tom3 = new Audio("sound/sounds_tom-3.mp3");
            tom3.play();
            break;

        case "k" :
            var snare = new Audio("sound/sounds_snare.mp3");
            snare.play();
            break;

        case "l" :
            var tom4 = new Audio("sound/sounds_tom-4.mp3");
            tom4.play();
            break;

            default: console.log(key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("buttonAnimation");

    setTimeout(function() {
        activeButton.classList.remove("buttonAnimation");
    }, 100);

}