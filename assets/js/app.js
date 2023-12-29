const searchInput = document.querySelector('.search-input');
const cardItems = document.querySelector('.card-items');
const container = document.querySelector('.container');


async function fetchPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?limit=20');
    const data = await response.json();
    console.log(data)
    console.log(response)
    return data
}


async function getPosts(){
    let counter = 0;
    const data = await fetchPosts();
    cardItems.innerHTML = "";
    for (const post of data.slice(0,20)) {
        cardItems.innerHTML +=
        `
        <div class="card-container">
            <div class="img-container">
                <img src="https://picsum.photos/380/200?random=${counter}">
            </div>
            <div class="blog-name">
                <h3 class="h3-name">${post.title}</h3>
            </div>
            <dialog class="dialog">
                <button class="close-btn">
                    <i class="fa-regular fa-circle-xmark fa-2x"></i>
                </button>
                <div class="dialog-img-container">
                    <img src="https://picsum.photos/380/200?random=${counter}">
                </div>
                <h3 class="dialog-title">${post.title}</h3>
                <p class="dialog-body">${post.body}</p>
            </dialog>
            <div class="buttonDiv">
                <button class="see-inside-btn">İçeriği Gör</button>
            </div>
        </div>
        `
        counter++;
    }
    bindShowBtns();
    bindCloseBtns();
}


function bindShowBtns(){
    const showBtns = document.querySelectorAll('.see-inside-btn');
    const dialogs = document.querySelectorAll('dialog');
    const imgContainer = document.querySelectorAll('.img-container');

    for (let i = 0 ; i < showBtns.length ; i++) {
        showBtns[i].addEventListener('click',(e) => {
            e.preventDefault();
            dialogs[i].style.top = `${e.clientY / (container.clientHeight - window.innerHeight) * 100}%`
            console.log("e.clientY:", e.clientY);
            console.log("window.innerHeight:",window.innerHeight)
            console.log((e.clientY/window.innerHeight)*container.clientHeight)
            dialogs[i].showModal();
        })
    }
    for(let i = 0 ; i < imgContainer.length ; i++){
        imgContainer[i].addEventListener('click', () => {
            dialogs[i].showModal();
        })
    }

}

function bindCloseBtns(){
    const closeBtns = document.querySelectorAll('dialog button');
    const dialogs = document.querySelectorAll('dialog');
    for (let i = 0 ; i < closeBtns.length ; i++) {
        closeBtns[i].addEventListener('click',(e) => {
            e.preventDefault();
            dialogs[i].close();
        })
    }
}



getPosts()