const searchInput = document.querySelector('.search-input');
const cardItems = document.querySelector('.card-items');
const container = document.querySelector('.container');
const paginationUl = document.querySelector('.paginationUl')


async function fetchPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data
}

let currentPage = 1;
let itemsPerPage = 9;

async function pagination(){
    const data = await fetchPosts();
    paginationUl.innerHTML += 
    `
    <button id="prevBtn"> 
        <i class="fa-solid fa-chevron-left"></i> 
    </button>
    `
    for(let i = 0 ; i < Math.ceil(data.length/9) ; i++){
        paginationUl.innerHTML += 
        `
        <li id="pagination-${i}" class="paginationLi">${i+1}</li>
        `
    }
    paginationUl.innerHTML += `<button id="nextBtn"><i class="fa-solid fa-chevron-right"></i></button>`

    paginationUl.children[1].classList.add('active');
    bindPaginationLi();
}

function bindPaginationLi(){
    const paginationLiElements = document.querySelectorAll('.paginationLi');
    for (const paginationLi of paginationLiElements) {
        paginationLi.addEventListener('click',() => {
            const removeActive = document.querySelectorAll('.paginationLi');
            for(let i = 0 ; i < removeActive.length ; i++){
                removeActive[i].classList.remove('active');
            }
            paginationLi.classList.add('active');
            currentPage = Number(paginationLi.innerHTML);
            getPosts();
        })
    }
}
let counter = 0;
async function getPosts(){
    const data = await fetchPosts();
    cardItems.innerHTML = "";
    for (const post of data.slice((currentPage-1)*itemsPerPage,(currentPage-1)*itemsPerPage+itemsPerPage)) {
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
pagination()
getPosts()