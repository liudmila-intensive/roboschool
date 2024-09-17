const burger = document.querySelector(".burger");
const navMenuList = document.querySelector(".nav-menu__list");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenuList.classList.toggle("active");
});
document.querySelectorAll(".nav-menu-item__about a").forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove("active");
    navMenuList.classList.remove("active");
  });
});

let prevScrollPos = window.scrollY;
window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  if(prevScrollPos > currentScrollPos) {
    document.querySelector('#header').style.top = '0';
  } else {
    document.querySelector('#header').style.top = '-90px';
  }
  prevScrollPos = currentScrollPos;
}

/*document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  burger.classList.remove("active");
  navMenuList.classList.remove("active");
}))*/

function callPhone(phone) {
  window.location.href = 'tel:' + phone;
}


/*
document.querySelector("#link-1").scrollIntoView({
  behavior: 'smooth'
});
document.querySelector("#link-2").scrollIntoView({
  behavior: 'smooth'
});
document.querySelector("#link-3").scrollIntoView({
  behavior: 'smooth'
});
*/
const menuItems = document.querySelectorAll(".nav-menu-item__about a");
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth"});
  });
});

/*document.querySelector("#link-4").scrollIntoView({
  behavior: 'smooth'
});*/

/*const link = document.querySelector("#link-4");
link.addEventListener('click', function(event) {
  event.preventDefault(); // Отменяем переход по ссылке
  const targetElement = document.querySelector(link.getAttribute('href'));
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
});*/

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });

  const moreDetailsLinks = document.querySelectorAll('.more__details');
  const popUpContainers = document.querySelectorAll('.pop-up');

  moreDetailsLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      popUpContainers[index].classList.add('open');
    });
  });

  const closePopUp = document.querySelectorAll('.pop-up__close');
  closePopUp.forEach((close) => {
    close.addEventListener('click', () => {
      close.closest('.pop-up').classList.remove('open');
    });
  });
  
 

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

for(let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', (event) => {
    
    let tabsCurrent = event.target.parentElement.children;
    for (let j = 0; j < tabsCurrent.length; j++) {
      tabsCurrent[j].classList.remove('tab-active');
    }

    event.target.classList.add('tab-active');

    let contentsCurrent = event.target.parentElement.nextElementSibling.children;
    for (let k = 0; k < contentsCurrent.length; k++) {
      console.log(contentsCurrent[k]);
      contentsCurrent[k].classList.remove('content-active');
    }

    contents[i].classList.add('content-active');
  });
}


let form = document.querySelector('.registration');
let inputs = document.querySelectorAll('.input');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  removeValidation();
  checkInputsPresence();
});

let generateError = function(text) {
  let error = document.createElement('div');
  error.className = 'error';
  error.style.color = 'red';
  error.innerHTML = text;
  return error;
}

let removeValidation = function() {
  let errors = form.querySelectorAll('.error');

  for(let i = 0; i < errors.length; i++) {
      errors[i].remove();
  }
}

let checkInputsPresence = function() {
  let isValid = true;
  for(let i = 0; i < inputs.length; i++) {
      if(!inputs[i].value) {

        inputs[i].style.backgroundColor = '#f1adaf';

          let error = generateError('Поле не заполнено!');
          form[i].parentElement.insertBefore(error, inputs[i]);

          setTimeout(function() {
            error.remove();
          }, 1000);

          inputs[i].addEventListener('input', function(){
            if(inputs[i].value){
              inputs[i].style.backgroundColor = '';
              error.remove();
            }
          });
          isValid = false;
      }
  }
  if(isValid) {
    alert('Заявка отправлена!');
    clearForm();
  }
}
let clearForm = function() {
  form.reset();
}
