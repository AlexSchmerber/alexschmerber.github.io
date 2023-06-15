
if(window.innerWidth > 991) {

    const animation = document.getElementById("connect-animation");
    const elem = document.getElementById("connect");
    const socials = document.getElementById("bottom-socials");

    socials.style.opacity = "0"
    elem.style.opacity = "0"
    let triggered = false
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY
        const elementPosition = 2008
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
        let opa = 0;
        clearInterval(id);
        id = setInterval(frame, 5);

        function frame() {
            if (pos === 456) {
                console.log("clear interval")
                clearInterval(id)
            } else if(pos < 530){
                if(opa < 100){
                    opa++;
                    socials.style.opacity = opa + "%"
                    elem.style.opacity = opa + "%"
                }
                pos--;
                elem.style.opacity = opa + "%"
                elem.style.left = pos + "px"
            } else {
                if(opa < 100){
                    opa++;
                    socials.style.opacity = opa + "%"
                    elem.style.opacity = opa + "%"
                }
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
