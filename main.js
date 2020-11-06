const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");


function openFirst() {
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";
    btn1.style.borderBottom = "3px solid var(--soft-red)";
    btn2.style.borderBottom = "none";
    btn3.style.borderBottom = "none";
    btn1.style.fontWeight = "bold"
    btn2.style.fontWeight = "400";
    btn3.style.fontWeight = "400";
    content1.style.transitionDelay = "0.3s";
    content2.style.transitionDelay = "0s";
    content3.style.transitionDelay = "0s";

    
}
function openSecond() {
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(100%)";
    btn2.style.borderBottom = "3px solid var(--soft-red)";
    btn1.style.borderBottom = "none";
    btn3.style.borderBottom = "none";
    btn2.style.fontWeight = "bold"
    btn1.style.fontWeight = "400";
    btn3.style.fontWeight = "400";
    content1.style.transitionDelay = "0s";
    content2.style.transitionDelay = "0.3s";
    content3.style.transitionDelay = "0s";
    
}
function openThird() {
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(0)";
    btn3.style.borderBottom = "3px solid var(--soft-red)";
    btn2.style.borderBottom = "none";
    btn1.style.borderBottom = "none";
    btn3.style.fontWeight = "bold"
    btn2.style.fontWeight = "400";
    btn1.style.fontWeight = "400";
    content1.style.transitionDelay = "0s";
    content2.style.transitionDelay = "0s";
    content3.style.transitionDelay = "0.3s";
}

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

