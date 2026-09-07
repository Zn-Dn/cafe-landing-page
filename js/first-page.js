let menu = document.querySelector(".menu");
let nav = document.querySelector("nav div");

function ativarMenu() {
    nav.classList.toggle("ativo");
}
menu.addEventListener("click", () => {
    ativarMenu();

});


// horario de fucionamento

let hrDeFuncionamento = document.querySelector(".Horario-de-fucionamento");

function HorarioCafeteria() {

    setInterval(() => {

        const agora = new Date();
        const hora = agora.getHours();
        const hoje = new Date()

        if (hoje.getDay() === 0) {

            hrDeFuncionamento.style.backgroundColor = "#A34F45";
            hrDeFuncionamento.textContent = "Fechado";

        } else if (hora >= 11 && hora < 16) {

            hrDeFuncionamento.style.backgroundColor = "#667052";
            hrDeFuncionamento.textContent = "Aberto";

        } else {

            hrDeFuncionamento.style.backgroundColor = "#A34F45";
            hrDeFuncionamento.textContent = "Fechado";

        }

    }, 3000);
}

HorarioCafeteria();


///////////////////////////////////////////////////////////////////////


const iconePolegar = document.querySelectorAll('.produto_avaliacao i');

iconePolegar.forEach(icone => {
    icone.addEventListener('click', () => {
        icone.classList.toggle('ativo');
    });
});


const elementosFooter = document.querySelectorAll(".btnFooter");

elementosFooter.forEach(botao => {

    botao.addEventListener("click", () => {

        const ul = botao.querySelector("ul");

        ul.classList.toggle("mostra");

    });

});

const carrossel = document.querySelector(".carrossel");
const janela = document.querySelector(".janelacarrossel");
const cards = document.querySelectorAll(".produtoCafe");

const esquerda = document.querySelector(".esquerda");
const direita = document.querySelector(".direita");

let posicaoAtual = 0;

function getPasso() {
    const largura = cards[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(carrossel).gap) || 0;
    return largura + gap;
}

direita.addEventListener("click", () => {
    const passo = getPasso();
    const limite = carrossel.scrollWidth - janela.clientWidth;

    posicaoAtual = Math.min(posicaoAtual + passo, limite);

    carrossel.style.transform = `translateX(-${posicaoAtual}px)`;
});

esquerda.addEventListener("click", () => {
    const passo = getPasso();

    posicaoAtual = Math.max(posicaoAtual - passo, 0);

    carrossel.style.transform = `translateX(-${posicaoAtual}px)`;
});
//////////////////////////////////////
// mostra descricao completa





//formulario para whatsapp

function FormularioParaWhatsapp() {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let number = document.querySelector("#number").value;
    let motivo = document.querySelector("#motivo").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    if (
        name === "" | email === "" | number === "" | motivo === "") {

        return
    }
    else {
        if (!emailRegex.test(email)) {
            return;
        }

else if (!telefoneRegex.test(number)) {
    return;
}
    }

    let Myphone = "+557781199685";

    let mensagem =
        `*Nome:* ${name}
*Email:* ${email}
*Telefone:* ${number}
*Mensagem:* ${motivo}`;

    let url = `https://api.whatsapp.com/send?phone=${Myphone}&text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}