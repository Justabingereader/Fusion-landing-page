
const button = document.getElementById('togglebutton');
const displayContent = document.querySelector('.content-toggle');


button.addEventListener('click', () => {
    displayContent.classList.toggle("content-toggle");
});