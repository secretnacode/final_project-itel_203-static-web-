
var iconContainer = document.querySelectorAll('.icons');


iconContainer.forEach(function (icon) {
    icon.addEventListener('click', function () {

        var hide = document.querySelectorAll('.contactsInfo');
        hide.forEach(function (hiding) {
            hiding.style.display = 'none';
        });


        var appear = this.querySelector('.contactsInfo');
        if (appear) {
            appear.style.display = 'block';
        }
    });
});