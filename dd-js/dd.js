// Функция для настройки размера шрифта в зависимости от ширины элемента picture
function responsiveem() {
    let fontsize = $('picture').width() / 100; // Устанавливаем размер шрифта как 1% от ширины picture
    $('.responsiveem').css('font-size', fontsize); // Применяем размер шрифта к элементам с классом responsiveem
    setTimeout(function () {
        $('body').removeClass('pageload'); // Убираем класс pageload через 500 мс
    }, 500);
}
$(document).ready(responsiveem); // Выполняем функцию при загрузке документа
$(window).resize(responsiveem); // Перевыполняем функцию при изменении размера окна

// Функция для отображения, какая страница находится в области видимости
function pages() {
    let windowtop = $(window).scrollTop(); // Получаем текущую позицию прокрутки сверху
    if (windowtop > 0) {
        $('body').addClass('not-top'); // Добавляем класс not-top, если прокрутка не на верхней позиции
    } else {
        $('body').removeClass('not-top'); // Убираем класс not-top, если прокрутка на верхней позиции
    }
    let windowbottom = windowtop + $(window).height() - 100; // Нижняя граница видимой области

    $('body').attr('scrolling', 'true'); // Устанавливаем атрибут scrolling как true

    let scrollTimeout;
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(function () {
            $('page').each(function () {
                let page = $(this);
                let offsetfix = Math.round(($(window).height() - $('#page-0000').outerHeight())); // Расчет корректировки
                let pagebottom = page[0].offsetTop + offsetfix + page.height(); // Нижняя граница текущей страницы
                if (pagebottom < windowbottom) {
                    page.attr('inview', 'no'); // Устанавливаем атрибут inview как no, если страница вне видимости
                } else {
                    page.attr('inview', 'yes'); // Устанавливаем атрибут inview как yes, если страница в видимости
                }
            });
            $('body').attr('scrolling', 'false'); // Устанавливаем scrolling как false
            scrollTimeout = null;
        }, 250); // Задержка для оптимизации производительности
    }
    let id = $('page[inview="yes"]:first').attr('id') || 'page-' + $('body').attr('page'); // Определяем ID первой видимой страницы
    let pageref = id.split(/\-/)[1]; // Извлекаем номер страницы
    setTimeout(function () {
        $('body').attr('page', pageref); // Устанавливаем текущую страницу в атрибут body
    }, 500);
}
$(window).scroll(pages); // Вызываем функцию при прокрутке
$(window).resize(pages); // Вызываем функцию при изменении размера окна
$(document).ready(pages); // Выполняем функцию при загрузке документа

// Функция для настройки верхнего отступа текста
function topmargin() {
    $('text').css('margin-top', Math.round(($(window).height() - $('#page-0000').outerHeight()) - 24)); // Устанавливаем верхний отступ текста
}
$(document).ready(topmargin); // Выполняем функцию при загрузке документа
$(window).resize(topmargin); // Перевыполняем функцию при изменении размера окна
