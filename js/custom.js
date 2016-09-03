$(document).ready(function(){
    $('.mdl-list__item.category').parent().each(function() {
        console.log($(this).children());
    });
});