let links = document.querySelectorAll(".close");
let a = document.querySelectorAll("a");


links.forEach(function(link) {
    link.addEventListener("click", function(ev) {
        ev.preventDefault();
        contenedor.classList.remove('animate__backInDown');
        contenedor.classList.remove('animate__animated');

        contenedor.classList.add('animate__backOutUp');
        contenedor.classList.add('animate__animated');
        
        setTimeout(function(){
            location.href = "/"
        },550);
        return false;
    });
});


a.forEach(function(link) {
    link.addEventListener("click", function(ev) {
        ev.preventDefault();
        let contenedor = document.querySelector('.contenido');

        contenedor.classList.remove('animate__backInDown');
        contenedor.classList.remove('animate__animated');

        contenedor.classList.add('animate__backOutUp');
        contenedor.classList.add('animate__animated');

        let linkHref = link.getAttribute('href');
        
        setTimeout(function(){
            location.href = linkHref;
        }, 550);
        return false;
    });
});












































