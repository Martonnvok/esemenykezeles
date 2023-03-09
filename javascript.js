window.addEventListener("load", function () {



    const ARTICLEELEM = document.querySelectorAll("article");
    ARTICLEELEM[0].innerHTML = "<div><img src='eznyoc.gif' alt='' ></div>";
    const DIVELEM = document.querySelectorAll("article div");
    ARTICLEELEM[0].innerHTML += "<button>OK</button>";
    const ButtonELEM = document.querySelectorAll("article button");

    ButtonELEM[0].addEventListener("click", function () {
        DIVELEM[0].classList.add("formazas")
        const KEPELEM = document.querySelectorAll("article div img");
        KEPELEM[0].src="kep2.png"
    })

    KEPELEM[0].addEventListener("mouseover", function (event) {
        event.target.style.border="5px solid red"
    })

    KEPELEM[0].addEventListener("mouseout", function (event) {
        event.target.style.border="0px solid red"
    })
});

