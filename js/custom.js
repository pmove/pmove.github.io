$(document).ready(function(){
    $('.mdl-list__item.category').parent().each(function() {
        if ($(this).children().length == 1) {
            $(this).addClass('hide');
        } else {
            $(this).removeClass('hide');
        }
    });
});