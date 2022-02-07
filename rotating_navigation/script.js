const circleContainer = document.getElementById("circleContainer");
const closeBtn = document.getElementById("close");
const openBtn = document.getElementById("open");
const className = 'show-nav';

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('close class');

    if (circleContainer.classList.contains(className)) {
        circleContainer.classList.remove(className);
    }
})

openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('add class');
    circleContainer.classList.add(className);
})
