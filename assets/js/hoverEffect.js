function bindHoverEffect(){
    const seeInsideBtns = document.querySelectorAll('.see-inside-btn');
    const imageContainers = document.querySelectorAll('.img-container');
    for (let i = 0 ; i < seeInsideBtns.length ; i++) {
        seeInsideBtns[i].addEventListener('mouseover',function(){
            seeInsideBtns[i].parentElement.parentElement.children[1].children[0].style.color = "#ff4567";
            seeInsideBtns[i].parentElement.parentElement.children[1].children[0].style.transition = "color .3s"
        })
        seeInsideBtns[i].addEventListener('mouseout',function(){
            seeInsideBtns[i].parentElement.parentElement.children[1].children[0].style.color = "";
            seeInsideBtns[i].parentElement.parentElement.children[1].children[0].style.transition = "color 1.5s"
        })
        imageContainers[i].addEventListener('mouseover',function(){
            seeInsideBtns[i].parentElement.parentElement.children[1].children[0].style.color = "#ff4567";
            seeInsideBtns[i].parentElement.parentElement.children[1].children[0].style.transition = "color .3s"
        })
        imageContainers[i].addEventListener('mouseout',function(){
            seeInsideBtns[i].parentElement.parentElement.children[1].children[0].style.color = "";
            seeInsideBtns[i].parentElement.parentElement.children[1].children[0].style.transition = "color 1.5s"
        })
    }
}

