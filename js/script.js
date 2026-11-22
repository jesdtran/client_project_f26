function toggleQuestions() {
    const button = document.querySelector('#questions > button');
    const content = document.getElementById('questionsContent');

    content.hidden = !content.hidden;

    const isOpen = !content.hidden;
    button.setAttribute('aria-expanded', String(isOpen));
    button.querySelector('span').textContent = isOpen ? '−' : '+';
}

function toggleProcess() {
    const button = document.querySelector('#process > button');
    const content = document.getElementById('processContent');

    content.hidden = !content.hidden;

    const isOpen = !content.hidden;
    button.setAttribute('aria-expanded', String(isOpen));
    button.querySelector('span').textContent = isOpen ? '−' : '+';
}

function togglePreparation() {
    const button = document.querySelector('#preparation > button');
    const content = document.getElementById('preparationContent');

    content.hidden = !content.hidden;

    const isOpen = !content.hidden;
    button.setAttribute('aria-expanded', String(isOpen));
    button.querySelector('span').textContent = isOpen ? '−' : '+';
}

function toggleApproach() {
    const button = document.querySelector('#approach > button');
    const content = document.getElementById('approachContent');

    content.hidden = !content.hidden;

    const isOpen = !content.hidden;
    button.setAttribute('aria-expanded', String(isOpen));
    button.querySelector('span').textContent = isOpen ? '−' : '+';
}

function toggleNarrative() {
    const button = document.querySelector('#narrative > button');
    const content = document.getElementById('narrativeContent');

    content.hidden = !content.hidden;

    const isOpen = !content.hidden;
    button.setAttribute('aria-expanded', String(isOpen));
    button.querySelector('span').textContent = isOpen ? '−' : '+';
}

function toggleStartingFocus() {
    const button = document.querySelector('#starting-focus > button');
    const content = document.getElementById('startingFocusContent');

    content.hidden = !content.hidden;

    const isOpen = !content.hidden;
    button.setAttribute('aria-expanded', String(isOpen));
    button.querySelector('span').textContent = isOpen ? '−' : '+';
}

function toggleDuringFocus() {
    const button = document.querySelector('#during-focus > button');
    const content = document.getElementById('duringFocusContent');

    content.hidden = !content.hidden;

    const isOpen = !content.hidden;
    button.setAttribute('aria-expanded', String(isOpen));
    button.querySelector('span').textContent = isOpen ? '−' : '+';
}

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
