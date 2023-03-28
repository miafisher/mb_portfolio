import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";

// burgermenu
// const btn = document.querySelector(".block button");
// const menu = document.querySelector(".main-menu");
// const menuimg = btn.querySelector("img");

// function toggleMenu() {
//   menu.classList.toggle("shown");
//   const menuShown = menu.classList.contains("shown");

//   if (menuShown) {
//     console.log(menuShown); // se i konsollen
//     menuimg.src = "../svg/luk.svg";
//   } else {
//     console.log(menuShown);
//     menuimg.src = "../svg/burgermenu.svg";
//   }
// }

btn.addEventListener("click", toggleMenu);

animate("body", { opacity: [0, 1] }, { duration: 3 });

scroll(animate(".progress-bar", { scaleX: [0, 1] }));
