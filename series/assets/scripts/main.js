let links = document.querySelectorAll(".close");
let a = document.querySelectorAll("a");

//animacion de salida de una serie en especifico
links.forEach(function(link) {
    link.addEventListener("click", function(ev) {
        ev.preventDefault();
        //quitar las animaciones
        contenedor.classList.remove('animate__backInDown');
        contenedor.classList.remove('animate__animated');

        //agregar esta animacion
        contenedor.classList.add('animate__backOutUp');
        contenedor.classList.add('animate__animated');
        
        //dar un tiempo para que salga de la pagina 
        setTimeout(function(){
            location.href = "/"
        },550);
        return false;
    });
});

//animacion de entrar a una serie
a.forEach(function(link) {
    link.addEventListener("click", function(ev) {
        ev.preventDefault();
        let contenedor = document.querySelector('.contenido');

        //quitar las animaciones
        contenedor.classList.remove('animate__backInDown');
        contenedor.classList.remove('animate__animated');

        //agregar esta animacion
        contenedor.classList.add('animate__backOutUp');
        contenedor.classList.add('animate__animated');

        //obtener el link de la pagina a ingresar
        let linkHref = link.getAttribute('href');
        
        //dar un tiempo para que salga de la pagina 
        setTimeout(function(){
            location.href = linkHref;
        }, 550);
        return false;
    });
});












































