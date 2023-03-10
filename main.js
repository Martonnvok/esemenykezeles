
window.addEventListener("load", function () {
    const KEPEK = document.querySelectorAll("article");
    let lista=["kep.jpg","kep2.png","kep3.png","kopasz.jpg","eznyoc.gif","thefoodisfood.png","kep.jpg","kep.jpg"]
    
    for (let index = 0; index < lista.length; index++) {
        KEPEK[0].innerHTML += "<div><img src='"+lista[index]+"' alt='1' ></div>";
        
    }
    const kepELEM = document.querySelectorAll("article img");

    let mainkep = document.querySelectorAll("section img");
    let fokep = document.querySelectorAll("section div img");

    for (let index = 0; index < lista.length; index++) {
        kepELEM[index].addEventListener("click", function () {

            fokep[0].src = lista[index];
        })

    }


    const gombElem=document.querySelectorAll("section button");
    for (let index = 0; index < lista.length; index++) {
        gombElem[index].addEventListener("click", function(){
            fokep[0].src+=lista[index];
        })
        
    }

});


