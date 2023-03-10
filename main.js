
window.addEventListener("load",function(){
    const KEPEK = document.querySelectorAll("article");
    KEPEK[0].innerHTML = "<div><img src='kep.jpg' alt='1' ><img src='kep2.png' alt='1' ><img src='kep3.png' alt='1' ><img src='kopasz.jpg' alt='1' ><img src='eznyoc.gif' alt='1' ><img src='kep.jpg' alt='1' ><img src='kep.jpg' alt='1' ><img src='kep.jpg' alt='1' ></div>";

    const kepELEM=document.querySelectorAll("article img");
    const kep=document.querySelectorAll("article div img");

    let mainkep = document.querySelectorAll("section  img");
    let fokep = document.querySelectorAll("section div img");
    

    kepELEM[0].addEventListener("click", function(){
        fokep[0].src="kep.jpg";
        mainkep[0].src="kep3.png";
    })
    kepELEM[1].addEventListener("click", function(){
        fokep[1].src="kep.jpg";
        mainkep[0].src="kep2.png";
    })
    
    
    
});


