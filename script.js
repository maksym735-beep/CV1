const contactForm = document.querySelector('#contact form');
const nameInput = document.getElementById('name');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    const userName = nameInput.value; 

    alert(`Спасибо, ${userName}! Твое сообщение отправлено.`);
    
    contactForm.reset(); 
});

const paragraph = document.querySelector('.hero p');
const text = paragraph.textContent; 

paragraph.textContent = ''; 
paragraph.style.display = 'block'; 

let i = 0;

const timer = setInterval(() => {
    if (i < text.length) {
        paragraph.textContent += text.charAt(i); 
        i++; 
    } else {
        clearInterval(timer); 
    }
}, 100); 

const title = document.querySelector('.hero h1');
title.style.cursor = 'pointer'; 
title.addEventListener('click', () => {
    title.style.color = '#38bdf8';
});

title.addEventListener('mouseenter', () => {
    title.textContent = 'Hire me!';
});

title.addEventListener('mouseleave', () => {
    title.textContent = 'Maksym Lesniak';
});
