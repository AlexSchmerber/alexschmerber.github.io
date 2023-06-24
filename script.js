
if(window.innerWidth < 991){
    window.onresize = function(){
        if(window.innerWidth > 991){
            location.reload();
        }
    }
}

if(window.innerWidth > 991) {

    const animation = document.getElementById("connect-animation");
    const connect = document.getElementById("connect");
    const lets = document.getElementById("lets");
    const socials = document.getElementById("bottom-socials");

    // socials.style.opacity = "0"
    animation.style.opacity = "0"
    let triggered = false
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY
        const elementPosition = 2100
        console.log("EP" + elementPosition);
        console.log("Scr" + scrolled);

        if (scrolled > elementPosition && triggered === false) {
            slideLeft()
            slideRight()
            triggered = true;
        }
    })

    function slideRight() {
        console.log("mymove called")
        let id = null;
        let rightPos = 342;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
            if (rightPos === 0) {
                console.log("clear interval")
                clearInterval(id)
            } else {
                rightPos--;
                rightPos--;
                lets.style.right = rightPos + "px"
            }
        }
    }


    function slideLeft() {
        console.log("mymove called")
        let id = null;
        let rightPos = 800;
        let opa = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
            if (rightPos === 456) {
                console.log("clear interval")
                clearInterval(id)
            } else {
                if(opa < 100){
                    opa++;
                    // socials.style.opacity = opa + "%"
                    animation.style.opacity = opa + "%"
                }
                rightPos--;
                rightPos--;
                connect.style.left = rightPos + "px"
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
