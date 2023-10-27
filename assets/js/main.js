let cursorB = document.getElementsByClassName("cursorB")[0]
let cursorS = document.getElementsByClassName("cursorS")[0]

let conatiner_cursor = document.getElementsByClassName("cursor")[0]

// --------------------------------------------------------------------------------
const slider_button = document.querySelectorAll(' .slick-arrow')

// ---------------------------------------------------------------------------------



const About_page = document.querySelector('.about-page')

const span_type = document.getElementsByClassName('typed')[0]
const type_list = ["im hamid  ", "im king", "front end"]
let indexChar = 0
let indexArray = 0
let _interval, erinter

const cursor_prime = document.querySelectorAll('.personal-cursor')
const menu_top = document.querySelectorAll('.menu-top>li')

let _document = document
const footer_menu_mobile = document.querySelector('.footer-menu-mobile')

let myScroll
const menu_mobile = document.querySelector('.menu-mobile-main')
const Humburg_icon = document.querySelector('.humborg-icon')
const icon_mobile = document.querySelector('.icon-text-menu')
const nav_menu_mobile = document.querySelector('#menu-container')
const Game_menu = document.querySelectorAll('.game-menu>li')
let flag_menu = false
const Image_game = document.querySelectorAll('.image-game')
_document.addEventListener("mousemove", _move)

function _move(e) {
   x = e.clientX
   y = e.clientY


   cursorB.style.top = y + "px"
   cursorB.style.left = x + "px"

   cursorS.style.top = y + "px"
   cursorS.style.left = x + "px"
}


function _type() {
   if (indexChar <= type_list[indexArray].length) {
      span_type.innerHTML = type_list[indexArray].slice(0, indexChar)
      indexChar++

   } else {
      clearInterval(_interval)
      erinter = setInterval(_eraser, 100)

   }

}

function _eraser() {
   if (indexChar > 1) {
      indexChar--
      span_type.innerHTML = type_list[indexArray].slice(0, indexChar)
   } else {
      clearInterval(erinter)
      indexArray++
      if (indexArray > type_list.length - 1) {
         indexArray = 0
      }
      _interval = setInterval(_type, 50)
   }
}
_interval = setInterval(_type, 50)


const cursor = document.querySelector('.cursor')

cursor_prime.forEach((value) => {
   value.addEventListener('mouseenter', (e) => {
      cursor.style.display = 'none'
      _document.removeEventListener('mousemove', _move)

   })
   value.addEventListener('mouseleave', () => {
      cursor.style.display = 'block'

      _document.addEventListener("mousemove", _move)

   })
})

const sub_menu = document.querySelectorAll('.menu-top>li')


sub_menu.forEach(function test(value) {
   value.addEventListener('mouseenter', function test3() {
      conatiner_cursor.style.display = 'none'
      // if (value.children[value.children.length - 1].tagName == 'NAV') {
      //    value.children[value.children.length - 1].style.cssText = 'opacity:1;  visibility: visible; transform: translateY(0px);'

      //    // value.children[value.children.length-1].style
      // }


   })
   value.addEventListener('mouseleave', function test1() {
      conatiner_cursor.style.display = 'block'
      // if (value.children[value.children.length - 1].tagName == 'NAV') {
      //    value.children[value.children.length - 1].style.cssText = 'opacity:0;  visibility: hidden; transform: translateY(50px);'
      // }


   })
})

slider_button.forEach((value) => {
   value.innerHTML = '<i class=" personal-cursor fa-solid fa-arrow-left"></i>'
   value.innerHTML += value.innerHTML = '<span></span>'
   value.classList.add('animation-circle-button')

})
icon_mobile.addEventListener('click', Mobile_Menu)
Humburg_icon.addEventListener('click', Mobile_Menu)

function Mobile_Menu() {
   flag_menu = !flag_menu


   if (flag_menu) {
      Humburg_icon.children[0].setAttribute('class', 'fa-solid fa-xmark fa-xl') || icon_mobile.children[0].setAttribute('class', 'fa-solid fa-xmark fa-xl')
      menu_mobile.style.cssText = 'opacity:1; visibility: visible;'
      nav_menu_mobile.style.cssText = 'width:90%;opacity:1;'
      setTimeout(() => {
         nav_menu_mobile.style.overflow = 'visible';
      }, 1000);
      footer_menu_mobile.style.transform = 'translateY(0)'
      // menu_mobile.style.cssText='opacity:1; visibility: hidden;'

   } else {
      Humburg_icon.children[0].setAttribute('class', 'fa-solid fa-bars-staggered fa-xl') || icon_mobile.children[0].setAttribute('class', 'fa-solid fa-bars-staggered fa-xl')
      menu_mobile.style.cssText = 'opacity:0; visibility: hidden;'
      nav_menu_mobile.style.cssText = 'width:0;opacity:0;'
      footer_menu_mobile.style.transform = 'translateY(100%)'
   }


}

const a_sub_menu = document.querySelectorAll('#menu-container>nav>ul>li')

a_sub_menu.forEach((value) => {
   if (value.children[value.children.length - 1].tagName == 'NAV') {
      value.addEventListener('click', (e) => dropDown(event, value))
      value.style.height = '30px'
      value.style.width = '100px'
   }
})
let myHeight

function dropDown(event, value) {
   if (_document.documentElement.clientWidth < 1200) {
      myHeight = value.children[value.children.length - 1].clientHeight
      event.preventDefault()
      if (value.clientHeight < value.children[value.children.length - 1].clientHeight) {
         value.style.height = myHeight + 36 + 'px'
         value.style.width = '100%'
      } else {
         value.style.height = '30px'
         value.style.width = '100px'


      }
   }
}
const circle_button = document.querySelectorAll('.animation-circle-button')

circle_button.forEach((value) => {
   value.addEventListener('mouseenter', () => circle_Event_move(event, value))
   value.addEventListener('mouseleave', () => circle_Event_leave(event, value))
})

function circle_Event_move(event, value) {
   let x, y;
   let _circ = value.querySelector('span')
   x = event.offsetX;
   y = event.offsetY;

   _circ.style.top = y + "px";
   _circ.style.left = x + "px";

   setTimeout(() => {
      _circ.style.width = "300%";
      _circ.style.height = "300%";
   }, 50)
   setTimeout(() => {
      _circ.style.top = '0%';
      _circ.style.left = '0%';
   }, 100);
}

function circle_Event_leave(event, value) {
   let x, y;
   let _circ = value.querySelector('span')
   x = event.offsetX;
   y = event.offsetY;

   setTimeout(() => {
      _circ.style.top = y + "px";
      _circ.style.left = x + "px";
   }, 100);
   setTimeout(() => {
      _circ.style.width = "0%";
      _circ.style.height = "0%";
   }, 200);
}
const _Odometer = document.querySelectorAll('.number-odo')
const game_information = document.querySelector('.game-information-container')
const Odometer_Info = document.querySelectorAll('.odometer-info')
const BackToo = document.querySelector('.back-to-top')
let scrollFlag = 0
let afterscrollFlag = 0

_document.addEventListener('scroll', () => {
   myScroll = parseInt(_document.documentElement.scrollTop)
   if (myScroll > About_page.offsetTop - 200) {
      BackToo.style.cssText = 'bottom:120px;transform:rotate(-90deg)'
      if (scrollFlag == 0) {
         scrollFlag = 1
         for (let value of _Odometer) {
            value.innerHTML = value.getAttribute('data-status')
         }
      }
   }
   if (myScroll < 600) {
      BackToo.style.cssText = 'bottom:30px;transform:rotate(0deg) translateY(200%);'

   }

   if (myScroll > game_information.offsetTop - 200 && afterscrollFlag == 0) {
      afterscrollFlag = 1
      for (let value of Odometer_Info) {
         value.innerHTML = value.getAttribute('data-info')
      }

   }
})

let odometer

function Odometer_animation() {
   _Odometer.forEach((value) => {
      odometer = odometer = new Odometer({
         el: document.getElementById(value.getAttribute('id')),
         value: 0,
         format: '(,ddd).dd',
         theme: 'default'
      });
   })
}
Odometer_animation()



let odo_game

function Odometer_animation_game() {
   Odometer_Info.forEach((value) => {
      odo_game = odo_game = new Odometer({
         el: document.getElementById(value.getAttribute('id')),
         value: 0,
         format: '(,ddd).dd',
         theme: 'default'
      });
   })
}
Odometer_animation_game()



const games_container = document.querySelectorAll('.games-container')

Game_menu.forEach((value) => {
   value.addEventListener('click', () => Filter(value))
})

function Filter(value = Game_menu[0]) {
   for (let i of Game_menu) {
      i.style.backgroundColor = '#303141'
   }
   for (let i of games_container) {
      i.parentElement.style.cssText = 'height:0;transform:translateY(100px);opacity:0;'
   }
   value.style.backgroundColor = '#09926A'
   document.getElementById(value.getAttribute('data-name')).style.cssText = 'transform:translateY(0px); opacity:1;'
}
Filter()

Image_game.forEach((value) => {
   value.addEventListener('mouseenter', () => {
      setTimeout(() => {
         value.querySelector('a').style.cssText = 'opacity:1; visibility: visible;'

      }, 100)
   })
   value.addEventListener('mouseleave', () => {
      setTimeout(() => {
         value.querySelector('a').style.cssText = 'opacity:0; visibility: hidden;'


      }, 100)
   })
})

// Skills_Container.forEach((value)=>{
//    value.addEventListener('mouseenter',()=>{
//       value.style.cssText='border-top:1px solid transparent;border-bottom:1px solid transparent;'
//    })
//    value.addEventListener('mouseleave',()=>{
//       value.style.cssText='border-top:1px solid #303141;border-bottom:1px solid #303141;'
//    })
// })

const Circle_Animation = document.querySelectorAll('.circle-animation>span')
let width = 20
Circle_Animation.forEach((value, index) => {
   value.style.cssText = 'width:' + width + 'px;height:' + width + 'px;animation-delay:' + index + 's;'
   width = width + 10
})


const Input_contact = document.querySelectorAll('.input-contact-us')
Input_contact.forEach((value) => {
   value.addEventListener('focus', () => {
      for (let i of Input_contact) {
         i.style.border = '1px solid #4c4d5a'
      }
      value.style.border = '1px solid  #0ef0ad'
   })
   value.addEventListener('blur', () => {
      for (let i of Input_contact) {
         i.style.border = '1px solid #4c4d5a'
      }

   })
})