//Song-list

const form = document.getElementById("add-btn");
const list = document.getElementsByClassName("selected-songs");
const input = document.getElementById("song-input");

eventListeners();

function eventListeners() {
    form.addEventListener("submit" , addNewSong);

    list[0].addEventListener("click" , deleteSong);
}

function addNewSong(e){
    if(input.value === "" || input.value === " " || input.value === "  "){
        
    }

    else{
        const li = document.createElement("li");
        li.className = "selected-song";
        li.appendChild(document.createTextNode(input.value));
    
        const a = document.createElement("a");
        a.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
        a.setAttribute("href","#");
        li.appendChild(a);
    
        list[0].appendChild(li);
    
        input.value = ""
    }
   
    e.preventDefault();

}

function deleteSong(e){
    if(e.target.className === "fa-solid fa-circle-minus"){
        e.target.parentElement.parentElement.remove();
    }

    e.preventDefault();
}

//Modal

const openModal = document.getElementById("open-modal");
const modal = document.querySelector(".modal");
const closeModal = document.getElementById("close-modal");

closeModal.addEventListener("click" , () => {
    modal.style.display = "none";
});

openModal.addEventListener("click" , () => {
    modal.style.display = "flex";
});

//Slider

const song = document.querySelectorAll(".listening-song");

const numberOfImg = song.length;
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
let index = 0;

function slideRight(){
    if (index == 1) {index = -2}
    index = index + 1;
    gsap.to(".listening-song" , 0.6 ,{x: `${-index*100}%`})
}

rightArrow.addEventListener("click" , slideRight);

function slideLeft(){
    if (index == -1) {index = 2}
    index = index - 1;
    gsap.to(".listening-song" , 0.6 ,{x: `${-index*100}%`})
}

leftArrow.addEventListener("click", slideLeft);


