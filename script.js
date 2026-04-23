const contactForm = document.querySelector('#contact form');
const nameInput = document.getElementById('name');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    const userName = nameInput.value; 

    alert(`Спасибо, ${userName}! Твое сообщение отправлено.`);
    
    contactForm.reset(); 
});

const paragraph = document.querySelector('.hero p');
const text = paragraph.textContent; // 1. Сохраняем весь текст ("Junior Frontend...") в переменную

paragraph.textContent = ''; // 2. Очищаем абзац, чтобы он стал пустым
paragraph.style.display = 'block'; // 3. Делаем его видимым (ты скрыл его в HTML, теперь возвращаем)

let i = 0; // 4. Создаем счетчик букв, начинаем с нулевой (первой) буквы

const timer = setInterval(() => {
    if (i < text.length) {
        paragraph.textContent += text.charAt(i); // 5. Берем букву под номером 'i' и добавляем в абзац
        i++; // 6. Увеличиваем счетчик на 1 для следующего шага
    } else {
        clearInterval(timer); // 7. Если буквы закончились, останавливаем таймер
    }
}, 100); // 8. Таймер срабатывает каждые 100 миллисекунд

const title = document.querySelector('.hero h1');
title.style.cursor = 'pointer'; // Делаем курсор в виде "руки", чтобы показать кликабельность
title.addEventListener('click', () => {
    title.style.color = '#38bdf8';
});

title.addEventListener('mouseenter', () => {
    title.textContent = 'Hire me!';
});

title.addEventListener('mouseleave', () => {
    title.textContent = 'Maksym Lesniak';
});
