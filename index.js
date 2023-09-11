
const button = document.getElementById('togglebutton');
const displayContent = document.querySelector('.content-toggle');


button.addEventListener('click', () => {
    displayContent.classList.toggle("content-toggle");
});
const contents = document.querySelectorAll('.content');
contents.forEach(button => button.addEventListener("click", ()=> {
displayContent.classList.add("content-toggle");
}));
