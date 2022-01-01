const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('mouseover', () => {
        expandPanel(panel);
    });
})

function expandPanel(panel) {
    console.log(panel);
    removeClassFromElements(panels, 'active');
    panel.classList.add('active');
}

function removeClassFromElements(elements, className) {
    if (elements && elements.length > 0) {
        elements.forEach((element) => {
            element.classList.remove(className);
        })
    } 
}