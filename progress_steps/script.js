const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circleElems = document.querySelectorAll(".circle");
const ACTIVE_CLASS_NAME = 'active';
let CURRENT_INDEX = 0;
let NUMBER_OF_ACTIVE_STEPS = 1;

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // prepare new index - (always check if last elem -> then reset index)
    prepareCurrentIndex('NEXT');

    NUMBER_OF_ACTIVE_STEPS += 1;

    do_progress();
});

prevBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // prepare new index - (always check if last elem -> then reset index)
    prepareCurrentIndex('PREV');

    NUMBER_OF_ACTIVE_STEPS -= 1;

    do_progress()
});

function do_progress() {
    // remove 'active' from all circles, 
    removeClassNameFromElements(circleElems, ACTIVE_CLASS_NAME);

    // add active to the next circle
    addClassToSpecificElement(circleElems, CURRENT_INDEX, ACTIVE_CLASS_NAME);
    const baseFractionOfProgressWidth = 100 / (circleElems.length - 1) - 1;
    
    progress.style.width = `${ baseFractionOfProgressWidth * (NUMBER_OF_ACTIVE_STEPS - 1)}%`;
}

function prepareCurrentIndex(intent) {
    const lastIndex = circleElems.length - 1;

    if (intent === 'PREV') {
        CURRENT_INDEX--;
    } else if (intent === 'NEXT') {
        CURRENT_INDEX++;
    }

    // disable nextBtn, enable prevBtn
    prevBtn.disabled = CURRENT_INDEX == 0;
    nextBtn.disabled = CURRENT_INDEX == lastIndex;
}

function removeClassNameFromElements(nodeElements, className) {
    if (nodeElements) {

        nodeElements.forEach((element, index) => {
            if (index > CURRENT_INDEX) {
                element.classList.remove(className);
            }

        })
    }
}

function addClassToSpecificElement(nodeElements, index, className) {
    if (nodeElements && nodeElements[index]) {
        nodeElements[index].classList.add(className);
    }
}