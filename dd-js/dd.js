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



class musicPlayer {
  constructor() {
    this.play = this.play.bind(this);
    this.playBtn = document.getElementById('play');
    this.playBtn.addEventListener('click', this.play);
    this.controlPanel = document.getElementById('control-panel');
    this.infoBar = document.getElementById('info');
  }

  play() {
    const controlPanelObj = this.controlPanel;
    const infoBarObj = this.infoBar;
    
    if (!controlPanelObj.classList.contains('active')) {
      controlPanelObj.classList.add('active');
    } else {
      controlPanelObj.classList.remove('active');
    }
    
    if (!infoBarObj.classList.contains('active')) {
      infoBarObj.classList.add('active');
    } else {
      infoBarObj.classList.remove('active');
    }
  }
}

const newMusicPlayer = new musicPlayer();

const audio = document.getElementById('audioPlayer');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progressBar = document.querySelector('.progress-bar .bar');

// Установка начальной громкости (5%)
audio.volume = 0.05; // Установите значение от 0.0 до 1.0

// Функция для воспроизведения/паузы музыки
playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().catch(error => {
      console.error('Ошибка при воспроизведении:', error);
    });
    playButton.classList.add('active');
  } else {
    audio.pause();
    playButton.classList.remove('active');
  }
});

// Обновление прогресс-бара
audio.addEventListener('timeupdate', () => {
  const percentage = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = percentage + '%';
});

// Функция для предыдущей песни (можно добавить логику)
prevButton.addEventListener('click', () => {
  // Логика для перехода к предыдущей песне
  //  Потом напиши = ) 
});

// Функция для следующей песни (можно добавить логику)
nextButton.addEventListener('click', () => {
  // Логика для перехода к следующей песне
  //  Потом напиши = )  
});

// Автозапуск аудио через 5 секунд
window.addEventListener('load', () => {
  setTimeout(() => {
    audio.play().catch(error => {
      console.error('Ошибка при автозапуске:', error);
    });
  }, 5000); // Запуск аудио через 5 секунд
});


 // Получаем элементы
 const playsButton = document.querySelector('button');
 const modal = document.getElementById('modal');
 const closeModal = document.getElementById('closeModal');
 const audioPlayers = document.getElementById('audioPlayers');



 // Открытие модального окна и запуск аудио
 playsButton.addEventListener('click', () => {
   modal.style.display = 'flex';
   audioPlayers.play();
 });

 // Закрытие модального окна
 closeModal.addEventListener('click', () => {
   modal.style.display = 'none';
   audioPlayers.pause();
   audioPlayers.currentTime = 0;
 });

 // Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    audioPlayers.pause();
    audioPlayers.currentTime = 0;
  }
});




  

// ======================================================================
// document.addEventListener('DOMContentLoaded', () => {
//     let mousePos = { x: -1, y: -1 };
  
//     // Функция для получения случайного числа в заданном диапазоне
//     function getRandomInt(min, max) {
//       return Math.round(Math.random() * (max - min)) + min;
//     }
  
//     // Обработчик движения мыши
//     window.addEventListener('mousemove', (e) => {
//       mousePos.x = e.pageX;
//       mousePos.y = e.pageY;
//     });
  
//     // Обработчик ухода мыши за пределы окна
//     window.addEventListener('mouseleave', () => {
//       mousePos.x = -1;
//       mousePos.y = -1;
//     });
  
//     // Интервал для создания элементов
//     setInterval(() => {
//       if (mousePos.x > 0 && mousePos.y > 0) {
//         const range = 15;
  
//         // Генерация стиля элемента
//         const color = `background: rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)});`;
//         const sizeInt = getRandomInt(10, 30);
//         const size = `height: ${sizeInt}px; width: ${sizeInt}px;`;
//         const left = `left: ${getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range)}px;`;
//         const top = `top: ${getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range)}px;`;
  
//         const style = `${left} ${top} ${color} ${size}`;
  
//         // Создание и добавление элемента в DOM
//         const ball = document.createElement('div');
//         ball.className = 'ball';
//         ball.style.cssText = style;
  
//         document.getElementById('wrap').appendChild(ball);
  
//         // Удаление элемента после завершения анимации
//         ball.addEventListener('animationend', () => {
//           ball.remove();
//         });
//       }
//     }, 1);
//   });
  
