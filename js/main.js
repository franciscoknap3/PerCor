const nav2 = document.querySelector("#nav2");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", ()=> {
    nav2.classList.add("visible");
})


cerrar.addEventListener("click",()=> {
    nav2.classList.remove("visible");
})