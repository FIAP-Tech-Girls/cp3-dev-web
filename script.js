function bemVindo(){
    alert('Seja Bem-Vindo')
}

var imagens=[
    'imagens/kiara.jpg',
    'imagens/mei.jpg',
    'imagens/tom.jpg',
    'imagens/totoro.jpg',
    'imagens/zoca.jpg',
    'imagens/zoe.jpg'
];

function slideShow(){
    document.getElementById('slide').src = imagens[Index];
    Index++;
    if(Index == imagens.length){Index = 0;}
    setTimeout("slideShow()", time);
}
slideShow();
