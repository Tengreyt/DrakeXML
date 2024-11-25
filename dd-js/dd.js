//sort out picture size
function responsiveem() {
    var fontsize = $('picture').width() / 100;
    $('.responsiveem').css('font-size', fontsize);
    setTimeout(function () {
        $('body').removeClass('pageload');
    }, 500);
}
$(document).ready(responsiveem);
$(window).resize(responsiveem);
// show which picture

function pages() {
    var windowtop = $(window).scrollTop();
    if (windowtop > 0) {
        $('body').addClass('not-top');
    }
    else {
        $('body').removeClass('not-top');
    }
    var windowbottom = windowtop + $(window).height() - 100;

    $('body').attr('scrolling', 'true');

    var scrollTimeout;
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(function () {
            $('page').each(function () {
                var page = $(this);
                var offsetfix = Math.round(($(window).height() - $('#page-0000').outerHeight()));
                var pagebottom = page[0].offsetTop + offsetfix + page.height();
                if (pagebottom < windowbottom) {
                    page.attr('inview', 'no');
                }
                else {
                    page.attr('inview', 'yes');
                }
            });
            $('body').attr('scrolling', 'false');
            scrollTimeout = null;
        }, 250);
    }
    var id = $('page[inview="yes"]:first').attr('id') || 'page-' + $('body').attr('page');
    var pageref = id.split(/\-/)[1];
    setTimeout(function () {
        $('body').attr('page', pageref);
    }, 500);
}
$(window).scroll(pages);
$(window).resize(pages);
$(document).ready(pages);
// top margin amount
function topmargin() {
    $('text').css('margin-top', Math.round(($(window).height() - $('#page-0000').outerHeight()) - 24));
}
$(document).ready(topmargin);
$(window).resize(topmargin);