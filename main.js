// タイピングエフェクト
const typingElement = document.getElementById("typing");
const text = "Welcome to My Portfolio!";
let index = 0;

function type() {
    if (index < text.length) {
        typingElement.textContent += text[index];
        index++;
        setTimeout(type, 100);
    }
}

type();　

const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

if (typingElement) {
    type();
} else {
    console.error("タイピング要素が見つかりませんでした");
}