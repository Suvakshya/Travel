import App from "./app.js";

 
function render() {

    let page = document.getElementById('root').getAttribute('page-name');
    document.getElementById("root").innerHTML = App(page);


   
    let menu = document.querySelector("#menu-btn")
    let navbar = document.querySelector(".navbar")


    menu.onclick = () => {
        menu.classList.toggle("fa-times")
        navbar.classList.toggle("active")
    }


    window.onscroll = () => {
        menu.classList.remove("fa-times")
        navbar.classList.remove("active")
    }
   
}

render();