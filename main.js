window.addEventListener("load", function () {


    const tomb = ["eznyoc.gif", "eznyoc.gif", "<div><img src='eznyoc.gif' alt='' ></div>", "<div><img src='eznyoc.gif' alt='' ></div>", "<div><img src='eznyoc.gif' alt='' ></div>", "<div><img src='eznyoc.gif' alt='' ></div>", "<div><img src='eznyoc.gif' alt='' ></div>", "<div><img src='eznyoc.gif' alt='' ></div>"];
    for (let index = 0; index < tomb.length; index++) {
        ARTICLEELEM[0].innerHTML = "<div><img src=''"+tomb[index]+"alt='kep'></div>";
        const iraski = tomb[index];
        tomb[index].addEventListener('click', function(){
            console.log();
        });
    }
    console.log(iraski);




});
