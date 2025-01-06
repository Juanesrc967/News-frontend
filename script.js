

const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

btnHam.addEventListener('click', function(){
    if(btnHam.className !== ""){
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navBar.classList.add("show-nav");
    }
})

btnTimes.addEventListener('click', function(){
    if(btnHam.className !== ""){
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
})

//Seguridad 
// Deshabilitar clic derecho
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Deshabilitar F12 (Herramientas de desarrollo)
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') {
        e.preventDefault();
    }else if (e.ctrlKey && e.shiftKey && e.key === 'I') { 
        e.preventDefault();
    } else if (e.ctrlKey && e.shiftKey && e.key === 'J') { 
        e.preventDefault();
    }else if (e.ctrlKey && e.key === 'U') { 
        e.preventDefault();
    }
});