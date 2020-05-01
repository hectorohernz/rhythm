window.addEventListener("load", () =>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d4600d",
        "#d3ab60",
        "#607dd3",
        "#a560d3",
        "#60d392"
    ];
    // Sound Begins here 

    pads.forEach((pad, index) => {
        pad.addEventListener("click",function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        })
    })
    // Create a fucntion which creates bubbles
    const createBubbles = (index) => {
        const bubbles = document.createElement("div");
        visual.appendChild(bubbles);
        bubbles.style.backgroundColor = colors[index];
        bubbles.style.animation = "jump 1s ease";
        bubbles.addEventListener("animationend", function() {
            visual.removeChild(bubbles);
        })
    };
})
