import { trocarTema, verifiacarTema } from "../../helpers/tema-helper.js"
 
const botaoTema = document.querySelector(".tema button")

const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})

verifiacarTema(body, botaoTema)