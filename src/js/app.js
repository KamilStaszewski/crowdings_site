document.addEventListener('DOMContentLoaded', function() {

    function parallax() {
        const parallax = document.querySelector('.parallax');
    
        //przy scrollu przewijam lekko tlo
        window.addEventListener('scroll', function() {
            parallax.style.backgroundPositionY = -(this.scrollY * 0.2) + 'px';
        });
    }


});