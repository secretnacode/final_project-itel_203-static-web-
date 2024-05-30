//for the range function

var rangeInput = document.getElementById("range");

var rangeValueDisplay = document.getElementById("measureRange");

rangeInput.addEventListener("input", function (){
    rangeValueDisplay.textContent = this.value + "sqm";
});

/*for the nav bar being black when scrolled*/

var navbar = document.getElementById("header");

function changeNavbarColor() {
    if (window.scrollY > 500) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", changeNavbarColor);

/*for smooth scroll function*/

function smoothScroll(event) {
    event.preventDefault();

    var targetId = this.getAttribute("href").substring(1);

    var goToView = document.getElementById(targetId);

    if (goToView) {
        goToView.scrollIntoView({
            behavior: 'smooth'
        });
    }
}   

var aTagLinks = document.querySelectorAll('a[href^="#"]');

aTagLinks.forEach(function (aTagLinks) {
    aTagLinks.addEventListener("click", smoothScroll);
});

/*for site links hide/show function*/

document.querySelectorAll('input[name="groupSiteLinks"]').forEach(function (radio) {
    radio.addEventListener('click', function (event) {

        var checkedRadio = document.querySelector('input[name="groupSiteLinks"]:checked').value;
        var houseInfo = document.querySelectorAll('.SitesInformations');

        houseInfo.forEach(function (details) {
            details.style.top = '0';
        });

        var selectedElement = document.getElementById(checkedRadio + 'Informations');  
        if (selectedElement) {
            selectedElement.style.display = 'flex';
            selectedElement.style.top = '100%';

            selectedElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }
    });
});

