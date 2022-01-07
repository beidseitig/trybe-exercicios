// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function test (event) {
    event.preventDefault();
}

INPUT_TEXT.addEventListener('keypress', test);
INPUT_CHECKBOX.addEventListener('click', test);
HREF_LINK.addEventListener('click', test);