const searchInput = document.querySelector('.search-input');
const cardItems = document.querySelector('.card-items');
const container = document.querySelector('.container');
const paginationUl = document.querySelector('.paginationUl');


async function fetchPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

async function fetchComments(){
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();
    return data;
} 

let currentPage = 1;
let itemsPerPage = 9;

async function pagination(){
    const data = await fetchPosts();
    for(let i = 0 ; i < Math.ceil(data.length/9) ; i++){
        paginationUl.innerHTML += 
        `
        <li id="pagination-${i}" class="paginationLi">${i+1}</li>
        `
    }
    paginationUl.children[0].classList.add('active');
    bindPaginationLi();
}



function bindPaginationLi(){
    const paginationLiElements = document.querySelectorAll('.paginationLi');
    for (const paginationLi of paginationLiElements) {
        paginationLi.addEventListener('click',() => {
            for(let i = 0 ; i < paginationLiElements.length ; i++){
                paginationLiElements[i].classList.remove('active');
            }
            paginationLi.classList.add('active');
            currentPage = Number(paginationLi.innerHTML);
            getPosts();
        })
    }
}



let counter = 0;
async function getPosts(){
    const posts = await fetchPosts();
    const comments = await fetchComments();
    let commentDivCounter = 0;
    cardItems.innerHTML = "";
    for (const post of posts.slice((currentPage-1)*itemsPerPage,(currentPage-1)*itemsPerPage+itemsPerPage)) {
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
                <hr>
                <h2 class="comments-heading">#Comments</h2>
                <div class="comments" id="comment-${commentDivCounter}">

                </div>
            </dialog>
            <div class="buttonDiv">
                <button class="see-inside-btn">İçeriği Gör</button>
            </div>
        </div>
        `
        counter++;
        let commentImageCounter = 0;
        for(const comment of comments){
            const comments = document.querySelector(`#comment-${commentDivCounter}`);
            if(post.id == comment.postId){
                comments.innerHTML += 
                `
                <div class="commentDiv">
                    <div class="user-container">
                        <img class="user-image" src="https://picsum.photos/40/40?random=${commentImageCounter}">
                        <span class="user-email">${comment.email}</span>
                    </div>
                    <div class="comments-container"> 
                        <h3 class="comments-name">${comment.name}</h3>
                        <span class="comments-body">
                        ${comment.body}
                        </span>
                    </div>
                </div>
                `
            }
            commentImageCounter++;
        }
        commentDivCounter++;
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
        imgContainer[i].addEventListener('click', (e) => {
            e.preventDefault();
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
pagination();
getPosts();