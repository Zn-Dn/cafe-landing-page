let hrDeFuncionamento = document.querySelector(".Horario-de-fucionamento");

function HorarioCafeteria() {

    setInterval(() => {

        let agora = new Date();
        let hora = agora.getHours();

        if (hora > 11 && hora < 16) {

            hrDeFuncionamento.style.backgroundColor = "#667052";

            console.log(hora);

        } else {

           hrDeFuncionamento.style.backgroundColor = "#A34F45";

        }

    }, 3000);
}

HorarioCafeteria();




async function CriaCard(){
let DadosDoJson = await fetch("./js/index.json")
let dados = await DadosDoJson.json()
console.log(dados)


}

CriaCard()


function ativarMenu() {
    const menu = document.querySelector("nav ul");

    menu.classList.toggle("ativo");
}

document.querySelector(".menu").addEventListener("click", ativarMenu);

ativarMenu()




const elementosFooter = document.querySelectorAll(".btnFooter");

elementosFooter.forEach(botao => {

    botao.addEventListener("click", () => {

        const ul = botao.querySelector("ul");

        ul.classList.toggle("mostra");

    });

});