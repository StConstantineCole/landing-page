const menuClose = document.getElementById('menuClose');
const menuOpen = document.getElementById('menuOpen');
const navItems = document.getElementById('navItems');


function openmenu() {
        if (navItems.style.display != 'block') {
            navItems.style.display = 'block';
    }
}

function closemenu() {
    if (navItems.style.display != 'none') {
        navItems.style.display = 'none'
    }
}



menuOpen.addEventListener('click', openmenu);
menuClose.addEventListener('click', closemenu);

window.onresize = function(){ location.reload(); }
