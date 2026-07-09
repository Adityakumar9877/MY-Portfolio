// ===========================================
// PORTFOLIO SCRIPT - PART 1
// Author: Aditya Kumar Portfolio
// ===========================================


// =============================
// PRELOADER
// =============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});


// =============================
// MOBILE MENU
// =============================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuBtn.classList.toggle("active");

    if(menuBtn.classList.contains("active")){

        menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    }else{

        menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;

    }

});


// Close Menu On Link Click

document.querySelectorAll(".navbar a").forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");

        menuBtn.classList.remove("active");

        menuBtn.innerHTML=`<i class="fa-solid fa-bars"></i>`;

    });

});


// =============================
// TYPING EFFECT
// =============================

const roles = [

"Java Full Stack Developer",

"Spring Boot Developer",

"Frontend Developer",

"React Developer",

"Software Engineer"

];

const typing = document.querySelector(".typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const current = roles[roleIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex+1);

        charIndex++;

        if(charIndex===current.length){

            deleting=true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typing.textContent=current.substring(0,charIndex-1);

        charIndex--;

        if(charIndex===0){

            deleting=false;

            roleIndex++;

            if(roleIndex>=roles.length){

                roleIndex=0;

            }

        }

    }

    setTimeout(typeEffect,deleting?60:100);

}

typeEffect();


// =============================
// STICKY HEADER
// =============================

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";
        header.style.background="rgba(8,17,31,.92)";

    }

    else{

        header.style.boxShadow="none";
        header.style.background="rgba(8,17,31,.75)";

    }

});


// =============================
// CURRENT YEAR AUTO UPDATE
// =============================

const year=document.querySelector("#year");

if(year){

    year.textContent=new Date().getFullYear();

}


// =============================
// CONSOLE MESSAGE
// =============================

console.log("%cPortfolio Loaded Successfully 🚀",
"color:#06b6d4;font-size:18px;font-weight:bold;");

// part 2

// ===========================================
// PORTFOLIO SCRIPT - PART 2
// ===========================================


// =============================
// ACTIVE NAVBAR
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// =============================
// SCROLL REVEAL
// =============================

const revealElements = document.querySelectorAll(
".about-text,.skill,.project-card,.timeline-box,.certificate-box,.contact form");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

revealElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// =============================
// SCROLL TO TOP BUTTON
// =============================

const topBtn = document.createElement("button");

topBtn.id="scrollTopBtn";

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>350){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// =============================
// SCROLL PROGRESS BAR
// =============================

const progressBar=document.createElement("div");

progressBar.id="progressBar";

document.body.appendChild(progressBar);

progressBar.style.position="fixed";
progressBar.style.top="0";
progressBar.style.left="0";
progressBar.style.height="4px";
progressBar.style.width="0%";
progressBar.style.zIndex="99999";
progressBar.style.background="linear-gradient(90deg,#4f46e5,#06b6d4)";

window.addEventListener("scroll",()=>{

    const scrollTop=document.documentElement.scrollTop;

    const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const progress=(scrollTop/scrollHeight)*100;

    progressBar.style.width=progress+"%";

});


// =============================
// SKILL HOVER EFFECT
// =============================

document.querySelectorAll(".skill").forEach(skill=>{

    skill.addEventListener("mouseenter",()=>{

        skill.style.transform="translateY(-10px) scale(1.05)";

    });

    skill.addEventListener("mouseleave",()=>{

        skill.style.transform="translateY(0) scale(1)";

    });

});


// =============================
// PROJECT CARD EFFECT
// =============================

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(6,182,212,.15),
rgba(255,255,255,.05))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.05)";

    });

});


// =============================
// BUTTON RIPPLE EFFECT
// =============================

document.querySelectorAll(".btn,.btn-outline").forEach(btn=>{

btn.addEventListener("click",(e)=>{

const circle=document.createElement("span");

const diameter=Math.max(btn.clientWidth,btn.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=diameter+"px";

circle.style.left=e.clientX-btn.offsetLeft-radius+"px";

circle.style.top=e.clientY-btn.offsetTop-radius+"px";

circle.classList.add("ripple");

const ripple=btn.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

btn.appendChild(circle);

});

});


// =============================
// CONSOLE MESSAGE
// =============================

console.log("Scroll Animation Loaded ✅");

// part 3

// ===========================================
// PORTFOLIO SCRIPT - PART 3 (FINAL)
// ===========================================


// =============================
// DARK / LIGHT MODE
// =============================

const themeBtn = document.createElement("button");
themeBtn.id = "themeToggle";
themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
document.body.appendChild(themeBtn);

let darkMode = localStorage.getItem("theme") || "dark";

function applyTheme() {

    if (darkMode === "light") {

        document.body.classList.add("light-mode");
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        document.body.classList.remove("light-mode");
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

}

applyTheme();

themeBtn.addEventListener("click", () => {

    darkMode = darkMode === "dark" ? "light" : "dark";

    localStorage.setItem("theme", darkMode);

    applyTheme();

});


// =============================
// SMOOTH SCROLL
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// =============================
// CUSTOM CURSOR
// =============================

const cursor = document.createElement("div");
cursor.className = "custom-cursor";

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


// =============================
// BUTTON HOVER CURSOR EFFECT
// =============================

document.querySelectorAll("button,.btn,.btn-outline,a").forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.style.transform = "translate(-50%,-50%) scale(2)";

    });

    item.addEventListener("mouseleave", () => {

        cursor.style.transform = "translate(-50%,-50%) scale(1)";

    });

});


// =============================
// PARALLAX HERO IMAGE
// =============================

const heroImage = document.querySelector(".image-box");

window.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    const x = (window.innerWidth / 2 - e.pageX) / 35;
    const y = (window.innerHeight / 2 - e.pageY) / 35;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});


// =============================
// RANDOM BACKGROUND PARTICLES
// =============================

for (let i = 0; i < 25; i++) {

    const particle = document.createElement("span");

    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 8) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    document.body.appendChild(particle);

}


// =============================
// DISABLE RIGHT CLICK (OPTIONAL)
// =============================

// document.addEventListener("contextmenu",(e)=>{
//     e.preventDefault();
// });


// =============================
// DISABLE DRAG IMAGE
// =============================

document.querySelectorAll("img").forEach(img => {

    img.draggable = false;

});


// =============================
// WELCOME MESSAGE
// =============================

console.log(
"%cWelcome To Aditya Kumar Portfolio 🚀",
"color:#06b6d4;font-size:22px;font-weight:bold;"
);

console.log(
"%cJava Full Stack Developer",
"color:#4f46e5;font-size:16px;"
);


// =============================
// END
// =============================

console.log("Portfolio Ready ✅");