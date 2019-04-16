function typeSubtitle() {
    document.getElementById("typed").classList.remove("custom-cursor");
    document.getElementById("typed-subtitle").classList.remove("hidden");
    var typed = new Typed('#typed-subtitle', {
        strings: ['^700 Software Developer'],
        typeSpeed: 65,
        showCursor: false
    });
}

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 65,
    showCursor: false,
    onComplete: typeSubtitle
});