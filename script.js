const accordionContainer = document.querySelector('.accordion');
const allAccordionTriggers = accordionContainer.querySelectorAll('.accordion-trigger');
const allAccordionPanels = accordionContainer.querySelectorAll('.accordion-panel');
function showElement(button, panel) {
    for (let index = 0; index < allAccordionTriggers.length; index++) {
        if (button !== allAccordionTriggers[index]) {
            allAccordionTriggers[index].setAttribute('aria-expanded', 'false');
            allAccordionPanels[index].hidden = true;
        }
    }
    if (panel.hidden === true) {
        panel.hidden = false;
        button.setAttribute('aria-expanded', 'true');
    }
    else {
        panel.hidden = true;
        button.setAttribute('aria-expanded', 'false');
    }
}
function handleClicks(event) {
    const button = event.target.closest('.accordion-trigger');
    if (!button) {
        return;
    }
    const controlledAccordionPanel = document.getElementById(button.getAttribute('aria-controls'));
    showElement(button, controlledAccordionPanel);
}
accordionContainer.addEventListener('click', handleClicks)