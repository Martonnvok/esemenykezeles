
window.addEventListener("load", function () {
    const KEPEK = document.querySelectorAll("article");
    let lista = ["kep.jpg", "kep2.png", "kep3.png", "kopasz.jpg", "eznyoc.gif", "thefoodisfood.png", "laza.png", "thanospofa.png"]

    for (let index = 0; index < lista.length; index++) {
        KEPEK[0].innerHTML += "<div><img src='" + lista[index] + "' alt='1' ></div>";

    }
    const KEPELEM = document.querySelectorAll("article img");

    let mainkep = document.querySelectorAll("section img");
    let fokep = document.querySelectorAll("section div img");

    for (let index = 0; index < lista.length; index++) {
        KEPELEM[index].addEventListener("click", function () {

            fokep[0].src = lista[index];
        })

    }


    const BALELEM = document.querySelectorAll(".bal");
    const JOBBELEM = document.querySelectorAll(".jobb");
    let aktElem = 0;
    JOBBELEM[0].addEventListener("click", function () {
        aktElem++;
        fokep[0].src = lista[aktElem];
        console.log(aktElem)
        if (aktElem > 6) {
            aktElem = 0;
        }
    })

    BALELEM[0].addEventListener("click", function () {
        aktElem--;
        fokep[0].src = lista[aktElem];

        if (aktElem < lista.length) {
            aktElem = lista.length;
        }
    })



});


