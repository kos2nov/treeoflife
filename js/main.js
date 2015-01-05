var toggleSection = function(sel, element) {
    var el_id = element.substr(1);
    $(sel).each(function () {
        console.log($(this).attr('id'), el_id);
        $(this).attr('id') === el_id ? $(this).show() : $(this).hide();
    });
};

var bindMenu = function(menu) {
    $(menu).each(function () {
        $(this).click(function () {
            toggleSection(sel, $(this).attr('href'));
        })
    });
};

var bindAboutMenu = function(menu) {
    $(menu + " a").each(function () {
        $(this).click(function () {
            $(menu).hide();
            toggleSection(sel, $(this).attr('href'));
        })
    });
};

