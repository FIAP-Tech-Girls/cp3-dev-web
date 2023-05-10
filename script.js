function bemVindo(){
    alert('Seja Bem-Vindo')
}

function trocar(cor){
    document.body.style.background = cor
}

function validar(){
    let nome = document.getElementById("nome").value 
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value
    let mensagem = document.getElementById("mensagem").value

    if(nome == "" || email == "" || telefone == "" || mensagem == ""){
        alert("Por favor, preencha todos os campos!")
    }
    else{
        alert("Mensagem enviada!")
    }
}

var imagens=[
    'imagens/kiara.jpg',
    'imagens/mei.jpg',
    'imagens/tom.jpg',
    'imagens/totoro.jpg',
    'imagens/zoca.jpg',
    'imagens/zoe.jpg'
];

var Index = 0;
var time = 2000;

function slideShow(){
    document.getElementById('slide').src = imagens[Index];
    Index++;
    if(Index == imagens.length){Index = 0;}
    setTimeout("slideShow()", time);
}
slideShow();

function quiz(){
    let pergunta1 = Number(prompt(`Qual o jeito correto de armazenar as garrafas de vinhos? \n Escolha uma opção: \n[1] Na horizontal \n[2] Na vertical \n`))
    let pergunta2 = Number(prompt(`O que é a safra de um vinho? \n Escolha uma opção: \n[1] O ano em que as uvas foram colhidas \n[2] O ano em que o vinho foi feito \n`))
    let pergunta3 = Number(prompt(`Qual tipo de vinho harmoniza com carne vermelha? \n Escolha uma opção: \n[1] Vinho branco \n[2] Vinho tinto \n`))
    let msg = document.getElementById('msgQuiz')


    if (pergunta1 == 1) {
        msg.innerHTML += `<p><strong>1- CORRETO</strong></p>`
    } else if (pergunta1 == 2) {
        msg.innerHTML += `<p><strong>1- INCORRETO</strong></p>`
    } else {
        msg.innerHTML += `<p><strong>OPÇÃO INVÁLIDA</strong></p>`
    }

    if (pergunta2 == 1) {
        msg.innerHTML += `<p><strong>2- CORRETO</strong></p>`
    } else if (pergunta2 == 2) {
        msg.innerHTML += `<p><strong>2- INCORRETO</strong></p>`
    } else {
        msg.innerHTML += `<p><strong>OPÇÃO INVÁLIDA</strong></p>`
    }

    if (pergunta3 == 2) {
        msg.innerHTML += `<p><strong>3- CORRETO</strong></p>`
    } else if (pergunta3 == 1) {
        msg.innerHTML += `<p><strong>3- INCORRETO</strong></p>`
    } else {
        msg.innerHTML += `<p><strong>OPÇÃO INVÁLIDA</strong></p>`
    }
}



