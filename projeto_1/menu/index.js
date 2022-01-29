function menuController(){

    const elemento = document.getElementById("menu")
    if (elemento.classList.contains("menu__close")){

        elemento.classList.remove("menu__close")

    } else {
        elemento.classList.add("menu__close")
    }

}