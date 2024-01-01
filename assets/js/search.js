const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input',function(){
    const searchTerm = searchInput.value.toLowerCase();
    return searchData(searchTerm);
})

function searchData(searchTerm){
    const items = document.querySelectorAll('.h3-name');
    const cardContainer = document.querySelectorAll('.card-container');
    for (let i = 0 ; i < cardContainer.length ; i++) {
        const title = items[i].innerText.toLowerCase();
        
        if(title.includes(searchTerm)){
            cardContainer[i].style.display = "block";
        }else{
            cardContainer[i].style.display = "none";
        }
    }
}