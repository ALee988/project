

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

   
    navbarShrink();

    
    document.addEventListener('scroll', navbarShrink);

  
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };
    /**function open() {
        document.getElementById("navbarResponsive").style.width="250px";
    }
    function close() {
        document.getElementById("navbarResponsive").style.width="0px";
    }*/

   
    
    

});
