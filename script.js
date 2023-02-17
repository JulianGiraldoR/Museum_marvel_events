//evento click sobre la imagen del capitan america
var button = document.getElementById('capAmerica')
button.addEventListener("click",clicked);

function clicked(){
    alert('HOLA SOY EL CAP')
    };

//evento mousemove sobre la imagen de hulk
var image = document.getElementById('imgHulk')
image.addEventListener("mousemove",mouseMove)

function mouseMove(){
    alert('GRR SOY HULK PORQUE ESTAR TOCANDOME')
    };

//evento doble click sobre la imagen de thor
var image = document.getElementById('imgThor')
image.addEventListener("dblclick",dbclicked)

function dbclicked(){
    alert('SOY THOR DIOS DEL TRUENO HIJO DE ODIN!!')
    };


//evento arrastrar sobre la imagen de ironman
var image = document.getElementById('imgIronman')
image.addEventListener("drag",dragged)

function dragged(){
    alert('EYY TU!!! ADONDE CREES QUE ME LLEVAS SOY IRONMAN, GENIO, MILLONARIO, FILANTROPO, PLAYBOY Y ACABAS DE BLOQUEAR EL NAVEGADOR')
    }; 

//evento mouseout sobre la imagen de wolverine
var image = document.getElementById('imgWolverine')
image.addEventListener("mouseout",mouseout)

function mouseout(){
    alert('EYY TU!!! ADONDE CREES QUE VAS CON ESE RATON...VUELVE ACA!!')
    };

// multi evento spiderman

var button = document.getElementById('spiderman')
button.addEventListener("click",clicked2);

function clicked2(){
    alert('HOLA SOY EL TU AMIGO DEL BECINDARIO SPIDERMAN')
    };


var image = document.getElementById('imgSpiderman')
image.addEventListener("mouseout",mouseout2)

function mouseout2(){
    alert('OYE NO TE VAYAS')
    };

var image = document.getElementById('imgSpiderman')
image.addEventListener("mouseover",mouseover)
    
function mouseover(){
    alert('!!!EYYY REGRESASTE!!!')
    };

var image = document.getElementById('imgSpiderman')
image.addEventListener("dragenter",dragged2)  

function dragged2(){
    alert('!!!EYYY A DONDE ME LLEVAS ACABAS DE BLOQUEAR EL NAVEGADOR!!!')
    };









