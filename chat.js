// ===== Navbar Smooth Scroll =====
document.querySelectorAll("nav .list a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Default jump ko stop karega
        let targetId = link.getAttribute("href");
        let targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// ===== Scroll Text Infinite Loop =====
// let scroll = document.querySelector("i");

// let texts = [
//     "Passionate BCA Student 🧑‍🎓",
//     "Cyber Networks and Cyber Security 🧑‍💻",
//     "Web Dev Learner 🚀",
//     "Database Explorer 📊",
//     "Frontend Developer 🌐"
// ];

// (async () => {
//     let index = 0;
//     while (true) {
//         await new Promise(resolve => setTimeout(() => {
//             scroll.innerText = texts[index];
//             index = (index + 1) % texts.length;
//             resolve();
//         }, 3000));
//     }
// })();

// let scroll = document.querySelector(".scroll");

// let texts = [
//     "Passionate BCA Student 🧑‍🎓",
//     "Cyber Networks and Cyber Security 🧑‍💻",
//     "Web Dev Learner 🚀",
//     "Database Explorer 📊",
//     "Frontend Developer 🌐"
// ];

// (async () => {
//     let index = 0;
//     while (true) {
//         scroll.textContent = texts[index];
//         scroll.style.width = "0"; // reset width
//         scroll.style.animation = "none"; // reset animation

//         // reflow trick
//         scroll.offsetHeight;  

//         // re-apply typing + blinking cursor
//         scroll.style.animation = "sc 4s steps(40) forwards, blink 0.7s step-end infinite";

//         index = (index + 1) % texts.length;
//         await new Promise(resolve => setTimeout(resolve, 4000)); // 4s typing time + delay
//     }
// })();

let scroll = document.querySelector(".scroll");


let texts = [
    "Passionate BCA Student 🧑‍🎓",
    "Cyber Networks and Cyber Security 🧑‍💻",
    "Web Dev Learner 🚀",
    "Database Explorer 📊",
    "Frontend Developer 🌐"
];

let index = 0;

async function typeWriterEffect(text) {
    scroll.innerText = ""; // purana text clear
    for (let i = 0; i < text.length; i++) {
        scroll.innerText += text[i];
        await new Promise(resolve => setTimeout(resolve, 100)); // har char ke beech delay
    }
}

// Infinite Loop
(async () => {
    while (true) {
        await typeWriterEffect(texts[index]);
        await new Promise(resolve => setTimeout(resolve, 2000)); // line complete hone ke baad rukna
        index = (index + 1) % texts.length;
    }
})();

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // default submit ko rok de

    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("type_something").value;

    // mailto link bana do
    let mailtoLink = `mailto:shubhamkevat9255@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage: " + message)}`;

    // redirect to mail client
    window.location.href = mailtoLink;
});

const mode = document.querySelector(".fa-solid");
const body = document.querySelector("body");
iswhite = true;

mode.addEventListener("click", () => {
    if(iswhite){
        body.classList.remove("light");
        body.classList.add("dark");
    }else{
        body.classList.remove("dark");
        body.classList.add("light");
    }
    iswhite = !iswhite;
});
