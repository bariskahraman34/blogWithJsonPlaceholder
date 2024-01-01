const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input',function(){
    const searchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm);
})