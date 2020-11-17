document.querySelector("#black").classList.add("color", "selected");

//Gera cores aleatórias
let randomColor1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
let randomColor2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
let randomColor3 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);}); //https://stackoverflow.com/questions/5092808/how-do-i-randomly-generate-html-hex-color-codes-using-javascript



// //função para limpar os pixels
function limpar() {
    const botao = document.querySelector("#clear-board");
    const tabela = document.querySelectorAll(".pixel");
    botao.addEventListener("click", changeColor);
    function changeColor() {
        for (let i = 0; i < tabela.length; i++) {
            tabela[i].style.backgroundColor = "white";
        }
    }
}
limpar();

//selecionando os ids das cores
const black = document.querySelector("#black");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");
const yellow = document.querySelector("#yellow");

//Função para sombrear cada cor a ser selecionada
function dayMouseOver() {
    black.addEventListener("mouseover", function (event) {
        event.target.style.boxShadow = "0px 5px 15px grey";
        event.target.style.cursor = "pointer";
        event.target.style.transition = "0.2s";
    });
    blue.addEventListener("mouseover", function (event) {
        event.target.style.boxShadow = "0px 5px 15px grey";
        event.target.style.cursor = "pointer";
        event.target.style.transition = "0.2s";
    });

    green.addEventListener("mouseover", function (event) {
        event.target.style.boxShadow = "0px 5px 15px grey";
        event.target.style.cursor = "pointer";
        event.target.style.transition = "0.2s";
    });
    yellow.addEventListener("mouseover", function (event) {
        event.target.style.boxShadow = "0px 5px 15px grey";
        event.target.style.cursor = "pointer";
        event.target.style.transition = "0.2s";
    });
}
dayMouseOver();

function dayMouseOut() {
    black.addEventListener("mouseout", function (event) {
        event.target.style.boxShadow = "";
    });
    blue.addEventListener("mouseout", function (event) {
        event.target.style.boxShadow = "";
    });
    green.addEventListener("mouseout", function (event) {
        event.target.style.boxShadow = "";
    });
    yellow.addEventListener("mouseout", function (event) {
        event.target.style.boxShadow = "";
    });
}
dayMouseOut();

//seleciona a cor desejada e adiciona a classe selected
function mouseClick() {
    black.addEventListener("click", function (event) {
        cor = 1;
        black.className = "color selected";
        blue.className = "color";
        green.className = "color";
        yellow.className = "color";
    });
    blue.addEventListener("click", function (event) {
        cor = 2;
        blue.className = "color selected";
        black.className = "color";
        green.className = "color";
        yellow.className = "color";
    });
    green.addEventListener("click", function (event) {
        cor = 3;
        green.className = "color selected";
        black.className = "color";
        blue.className = "color";
        yellow.className = "color";
    });
    yellow.addEventListener("click", function (event) {
        cor = 4;
        yellow.className = "color selected";
        black.className = "color";
        blue.className = "color";
        green.className = "color";
    });
}
mouseClick();

//função para receber cor aleatória
function corAleatoria (){    
    blue.style.backgroundColor = randomColor1; 
    green.style.backgroundColor = randomColor2; 
    yellow.style.backgroundColor = randomColor3; 
} corAleatoria();

let pickCor2 = document.querySelector("#blue").style.backgroundColor
let pickCor3 = document.querySelector("#green").style.backgroundColor
let pickCor4 = document.querySelector("#yellow").style.backgroundColor

//Ao clicar em uma das cores a variável "cor" recebe um numero que será verificado na função abaixo
function setColor() {
    const pixels = document.querySelectorAll(".pixel");    
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener("click", function (event) {
            if (black.className === 'color selected') {
                event.target.style.backgroundColor = 'black';
            } else if (blue.className === 'color selected') {
                event.target.style.backgroundColor = pickCor2;
            } else if (green.className === 'color selected') {
                event.target.style.backgroundColor = pickCor3;
            } else if (yellow.className === 'color selected') {
                event.target.style.backgroundColor = pickCor4;
            }
        });
    }
}
setColor();

// let inputValue = document.querySelector("input").value;
// let pixelBoardy = document.querySelector("#pixel-board")

// function setaQtdPixels() {

//     var tbodyRef = document.getElementById('pixel-board').getElementsByTagName('tbody')[0];

//     // Insert a row at the end of table
//     var newRow = tbodyRef.insertRow(tbodyRef.rows.length);
//     // Insert a cell at the end of the row    
//     var newCell = newRow.insertCell();
//     // Append a text node to the cell
//     var newText = document.createTextNode('new row');
//     newCell.appendChild(newText);
// //   if (inputValue === 0) {
// //     alert("Invalid");
// //   } else {
// //     pixelBoardy.appendChild("<tr><td><td></tr>");
// //   }
// } setaQtdPixels();




