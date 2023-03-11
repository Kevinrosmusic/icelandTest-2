// variables - elements
const section_1 = document.getElementById('section-1');
const section_2 = document.getElementById('section-2');
const btn_label = document.getElementById('btn-burger');
const btn_nav = document.getElementById('btn-nav');
const img_container = document.getElementById('img-container');
const icon_container = document.getElementById('iconContainer');
const text_container = document.getElementById('text-container');
const menu_container = document.getElementById('menu-container');
const menu_link = document.getElementsByClassName('menu-link');
let boolean = false;

// functions
btn_label.addEventListener('click', () => {
  boolean = !boolean;
   if (boolean) {
      section_1.classList.remove('d-block');
      section_1.classList.add('d-none');
      section_2.classList.remove('d-none');
      section_2.classList.add('d-block');

      img_container.classList.add('animate__fadeInBottomLeft', 'animate__fast');
      img_container.classList.remove('animate__fadeOutBottomLeft', 'animate__faster');

      icon_container.classList.add('animate__fadeInRight', 'animate__fast');
      icon_container.classList.remove('animate__fadeOutRight', 'animate__faster');

      text_container.classList.add('animate__backInUp', 'animate__fast');
      text_container.classList.remove('animate__backOutDown', 'animate__faster');

      menu_container.classList.add('animate__fadeInUp', 'animate__fast');
      menu_container.classList.remove('animate__fadeOutDown', 'animate__faster');

      addAnimationLink();

    } else {
      
      delay();
      
      img_container.classList.add('animate__fadeOutBottomLeft', 'animate__faster');
      img_container.classList.remove('animate__fadeInBottomLeft', 'animate__fast');

      icon_container.classList.remove('animate__fadeInRight', 'animate__fast');
      icon_container.classList.add('animate__fadeOutRight','animate__faster');

      text_container.classList.remove('animate__backInUp','animate__fast');
      text_container.classList.add('animate__backOutDown', 'animate__faster');

      menu_container.classList.remove('animate__fadeInUp', 'animate__fast');
      menu_container.classList.add('animate__fadeOutDown', 'animate__faster');
   }
});

// This function recognizes the ID of the element through the event parameter. Depending on the ID, the function
// will add styles to the element si it can be moved by the mouse calculating the coordinates from clientX and clientY.

const moveElement = (e) => {
  let move = "";
  let x = "";
  let y = "";
  if (e.target.id === "title") {
    move = document.getElementById("title");
    x = e.clientX * 200 / window.innerWidth - 50;
    y = e.clientY * 100 / window.innerHeight - 50;
  } else if (e.target.id === "logo") {
    move = document.getElementById("logo");
    x = e.clientX * 1500 / window.innerWidth - 50;
    y = e.clientY * 1000 / window.innerHeight - 50;
  }
  move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  move.style.transition = "none";
};

// When the mouse leaves the element, it will restore it's position (translateY and translateX) to it's original location.

const stopElement = (e) => {
  let stop = "";
  if (e.target.id === "title") {
    stop = document.getElementById("title");
  } else if (e.target.id === "logo") {
    stop = document.getElementById("logo");
  }
  setTimeout(() => {
    stop.style.transition = "all ease .2s";
    stop.style.transform = `translateX(${0}px) translateY(${0}px)`;
  }, 300);
};

const delay = () => {
  setTimeout(() => {
    section_1.classList.remove('d-none');
    section_1.classList.add('d-block');
    section_2.classList.remove('d-block');
    section_2.classList.add('d-none');
  }, 300);
}

const addAnimationLink = () => {
  for (let i = 0; i < menu_link.length; i++) {
    const link = menu_link[i];
    i === 0 
      ? link.classList.add('animate__fadeInUp', 'animate__slow') 
      : link.classList.add('animate__fadeInUp', 'animate__slower');
  }
}




