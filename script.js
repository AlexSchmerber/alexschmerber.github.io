if(window.innerWidth > 991) {


    const animation = document.getElementById("connect-animation");
    const elem = document.getElementById("connect");
    let triggered = false
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY
        const elementPosition = 1480
        console.log("EP" + elementPosition);
        console.log("Scr" + scrolled);

        if (scrolled > elementPosition && triggered === false) {
            slideLeft()
            triggered = true;
        }
    })

    function slideLeft() {
        console.log("mymove called")
        let id = null;
        let pos = 800;
        clearInterval(id);
        id = setInterval(frame, 5);

        function frame() {
            if (pos === 450) {
                console.log("clear interval")
                clearInterval(id)
            } else {
                console.log("position--")
                pos--;
                pos--;
                pos--;
                pos--;
                pos--;
                elem.style.left = pos + "px"
            }
        }
    }
}
// animation.addEventListener("click", function(){
//
// })

// function myMove() {
//
// }
