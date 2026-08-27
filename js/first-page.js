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


///////////////////////////////////////////////////////////////////////


const iconePolegar = document.querySelectorAll('.produto__avaliacao i');

iconePolegar.forEach(icone => {
    icone.addEventListener('click', () => {
        icone.classList.toggle('ativo'); // .toggle ativa se estiver desativado, e vice-versa
    });
});

///////////////////////////////////////////////////////////////////////////
function ativarMenu() {
    const menu = document.querySelector("nav ul");

    menu.classList.toggle("ativo");
}

document.querySelector(".menu").addEventListener("click", ativarMenu);

ativarMenu()


/////////////////////////////////////////////////////////////////////////////////

const elementosFooter = document.querySelectorAll(".btnFooter");

elementosFooter.forEach(botao => {

    botao.addEventListener("click", () => {

        const ul = botao.querySelector("ul");

        ul.classList.toggle("mostra");

    });

});



//////////////////////////////////////
//formulario para whatsapp



function FormularioParaWhatsapp() {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let number = document.querySelector("#number").value;
    let motivo = document.querySelector("#motivo").value;

    let Myphone = "+557781199685";

    let mensagem = 
        `*Nome:* ${name}
*Email:* ${email}
*Telefone:* ${number}
*Mensagem:* ${motivo}`;

    let url = `https://api.whatsapp.com/send?phone=${Myphone}&text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}