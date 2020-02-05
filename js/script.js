// document - это весь сайт
// console.log(typeof document);
// document.querySelector() - подключение к определенному селектору

// console.log(document.querySelector('.s'));

const sec = document.querySelector('.s'), /* Секундная стрелка */
      min = document.querySelector('.m'), /* Минутная стрелка */
      hour = document.querySelector('.h'), /* Часовая стрелка */
      minNumber = document.querySelector('.minutes'), /* Подключение к числовым минутам */
      hourNumber = document.querySelector('.hours'); 

function clock() {

/* 

      new Date() - берёт время, которое сейчас на устройстве
      getSeconds() - это метод, который берёт секунды
      getMinutes() - это метод, который берёт минуты
      getHours() - это метод, который берёт часы

*/

      let time = new Date(),
          second = time.getSeconds() * 6,
          minutes = time.getMinutes() * 6,
          hours = time.getHours() * 30;
        //   console.log(sec);
          sec.style = `transform: rotate(${second}deg)`;
          min.style = `transform: rotate(${minutes}deg)`;
          hour.style = `transform: rotate(${hours}deg)`;
        //   Рекурсия - это когда функция вызывает саму себя
        // setTimeout() - функция, которая делает задержку вызова
        
        minNumber.innerHTML = time.getMinutes();
        hourNumber.innerHTML = time.getHours();
        


        setTimeout(() => clock(), 1000)
}
clock();

const link = document.querySelectorAll('.tabsItem'), /* Подключение ко всем пунктам Меню табов */
      tabs = document.querySelectorAll('.tabsContentItem'); /* Подключение ко всем табам */


for(let i = 0; i < link.length; i++) {
    console.log(link[i]);
    link[i].addEventListener('click', function(e) {
        e.preventDefault();
        // console.log('click');
        for(let ix = 0; ix < link.length; ix++) {
            link[ix].classList.remove('active');
            tabs[ix].classList.remove('active');
        }
        // console.log(this);
        tabsNew(this, tabs[i]);
    })
    // addEventListener - метод HTML элемента, который делает проверку на какие-то события
}
function tabsNew(links, tabs) {
    links.classList.add('active');
    tabs.classList.add('active');
}


// console.log(link);



// let i = 0;
// function rek() {
//     console.log(i);
//     if(i < 100) {
//         i++
//         rek();
//     }
// }
// rek();




