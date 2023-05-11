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
    'imagens/kiara.png',
    'imagens/mei.png',
    'imagens/tom.png',
    'imagens/totoro.png',
    'imagens/zoca.png',
    'imagens/zoe.png'
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
    let pergunta1 = Number(prompt(`Qual alimento que nunca deve se dar a um cão? \n Escolha uma opção: \n[1] Chocolate \n[2] Banana \n`))
    let pergunta2 = Number(prompt(`Porque o nariz dos cães estão sempre molhados? \n Escolha uma opção: \n[1] Pois o cão lambe \n[2] Pois o cão está gripado \n`))
    let pergunta3 = Number(prompt(`Porque os cães têm bigodes? \n Escolha uma opção: \n[1] Pois bigodes deixam os cães bonitos  \n[2] Pois bigodes funcionam como órgão sensorial \n`))
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



