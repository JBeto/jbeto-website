function typeSubtitle() {
    // Remove custom cursor so it looks like that line is no longer typing
    document.getElementById("typed").classList.remove("custom-cursor");
    // Next line begins typing
    document.getElementById("typed-subtitle").classList.remove("is-invisible");
    var typed = new Typed('#typed-subtitle', {
        strings: ['^700 Software Developer'],
        typeSpeed: 90,
        showCursor: false
    });
}

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 65,
    showCursor: false,
    onComplete: typeSubtitle
});