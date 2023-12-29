const searchInput = document.querySelector('.search-input');
const cards = document.querySelectorAll('.card-container');
const dialog = document.querySelector('dialog');
const showBtn = document.querySelector('.see-inside-btn');
const closeBtn = document.querySelector('dialog button');

showBtn.addEventListener('click',(e) => {
    e.preventDefault();
    dialog.showModal();
})

closeBtn.addEventListener('click',(e) => {
    e.preventDefault();
    dialog.close();
})

searchInput.addEventListener('input',function(){
    console.log(searchInput.value)
})