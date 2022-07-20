function toggleHamburger() {
    let navbar = document.querySelector(".navbar");
    let ham = document.querySelector(".ham");

    navbar.classList.toggle("showNav");//toggle - если класс есть-удалитжесли класса нет-добавит
    ham.classList.toggle("showClose");
}