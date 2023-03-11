//IMPORTED VARIABLES
import { section_1, section_2, btn_label, img_container, icon_container, 
  text_container, menu_container, menu_link, logo, title, 
} from  './variables.js';

let boolean = false;

// FUNCTIONS

/* Recognizes the ID of the element through the event parameter. Depending on the ID, the function
 will add styles to the element si it can be moved by the mouse calculating the coordinates from clientX and clientY. */
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
    x = e.clientX * 1000 / window.innerWidth - 50;
    y = e.clientY * 800 / window.innerHeight - 50;
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

// Remove animations when the nav menu opens / closes
const removeAnimations = () => {
  img_container.classList.add('animate__fadeOutBottomLeft', 'animate__faster');
  img_container.classList.remove('animate__fadeInBottomLeft', 'animate__fast');

  icon_container.classList.remove('animate__fadeInRight', 'animate__fast');
  icon_container.classList.add('animate__fadeOutRight','animate__faster');

  text_container.classList.remove('animate__backInUp','animate__fast');
  text_container.classList.add('animate__backOutDown', 'animate__faster');

  menu_container.classList.remove('animate__fadeInUp', 'animate__fast');
  menu_container.classList.add('animate__fadeOutDown', 'animate__faster');

  delayClose();
}

// Add animations when the nav menu opens / closes
const addAnimations = () => {
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
 
  // Add animations to nav menu links   
  addAnimationsToMenu();
}

// Delays nav menu closing so animations effects might be seen
const delayClose = () => {
  setTimeout(() => {
    section_1.classList.remove('d-none');
    section_1.classList.add('d-block');
    section_2.classList.remove('d-block');
    section_2.classList.add('d-none');
  }, 300);
}

// Add animations to nav menu links (functions process)   
const addAnimationsToMenu = () => {
  for (let i = 0; i < menu_link.length; i++) {
    const link = menu_link[i];
    i === 0 
      ? link.classList.add('animate__fadeInUp', 'animate__slow') 
      : link.classList.add('animate__fadeInUp', 'animate__slower');
  }
}

// LISTENERS
btn_label.addEventListener('click', () => {
  boolean = !boolean;
  //Add or remove animations when the nav menu opens / closes
  boolean ? addAnimations() : removeAnimations();
});

title.addEventListener("mousemove", moveElement);
title.addEventListener("mouseout", stopElement);
logo.addEventListener("mousemove", moveElement);
logo.addEventListener("mouseout", stopElement);




