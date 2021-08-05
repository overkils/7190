const burgerIcon = document.querySelector(".at-menu__btn");
const burger = document.querySelector(".at-menu");
const burgerList = document.querySelector(".at-menu__list");

burgerIcon.onclick = ()=>  {
    burger.classList.toggle("at-menu-toggle");
    if(burger.classList.contains("at-menu-toggle")) {
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.overflow = "auto";
    }

    window.addEventListener("click",closeburger);
    function closeburger(e){
        const target = e.target;
        if (!target.closest(".at-menu__btn") && target != burgerList) {
            burger.classList.remove("at-menu-toggle");
            document.body.style.overflow = "auto";
            window.removeEventListener("click",closeburger);
        }
    };
};
//<!-- Creating Powered by overkill(Даниил) and Ilyas(Илья) -->


