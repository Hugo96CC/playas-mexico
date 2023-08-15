
//DOM


// Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");
console.log("Hola Mundo");

// Recorrelos

links.forEach(function(links){

    // Agregar un evento click a cada uno de ellos 

    links.addEventListener("click",function(ev){
        //Eliminamos el comportamiento por defecto
        ev.preventDefault();

        let content = document.querySelector('.content');

        // Quitarle las clases de animacion que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        // Agregar clases para animar su salidad 
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        //setInterval

        
        setTimeout(function(){

            location.href = "../index.html";

        },600);// 600 milisegundos

        

        return false;

    });
});
