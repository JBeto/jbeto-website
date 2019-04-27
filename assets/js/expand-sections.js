function toggleAccordions() {
    $(".accordion").removeClass("accordion--collapsed");
}

$('#toggle-accordions').click(function(){ toggleAccordions(); return false; });