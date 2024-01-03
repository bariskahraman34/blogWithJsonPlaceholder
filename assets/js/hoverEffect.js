function bindHoverEffect(){
    const seeInsideBtns = document.querySelectorAll('.see-inside-btn');
    const cardContainer = document.querySelectorAll('.card-container')
    for (let i = 0 ; i < cardContainer.length ; i++) {
        cardContainer[i].addEventListener('mouseover',function(){
            seeInsideBtns[i].parentElement.parentElement.children[1].children[0].style.color = "#ff4567";
            seeInsideBtns[i].parentElement.parentElement.children[1].children[0].style.transition = "color .5s ease-in"
        })
        cardContainer[i].addEventListener('mouseout',function(){
            seeInsideBtns[i].parentElement.parentElement.children[1].children[0].style.color = "";
            seeInsideBtns[i].parentElement.parentElement.children[1].children[0].style.transition = "color 1s ease-in"
        })
    }
}

