function bemVindo(){
    alert('Seja Bem-Vindo')
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
var time = 1000;

function slideShow(){
    document.getElementById('slide').src = imagens[Index];
    Index++;
    if(Index == imagens.length){Index = 0;}
    setTimeout("slideShow()", time);
}
slideShow();
