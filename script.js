let arr = [
    {dp:"https://i.pinimg.com/originals/08/c2/00/08c200e662f2ea9e2153aa9bc4affce6.jpg", story:"https://i.pinimg.com/originals/74/68/2c/74682c565eb8bb7d4b044796b30c7d0e.jpg"},
    {dp:"https://i.pinimg.com/originals/86/44/c4/8644c4aab0d9a622e471af38472263d0.png", story:"https://i.pinimg.com/originals/0d/2a/24/0d2a24567e5e3ff704a5bd3f94dd6d3b.jpg"},
    {dp:"https://i.pinimg.com/originals/11/a7/e3/11a7e38f3855ae3e78f8b8ab737f8c57.jpg", story:"https://i.pinimg.com/originals/73/ff/62/73ff629fd051c2b04981d58d79f18caa.jpg"},
    {dp:"https://i.pinimg.com/originals/b4/b8/49/b4b849992d29b5253da899883eec942e.jpg", story:"https://i.pinimg.com/originals/ba/c4/59/bac459c836132fc2400ac190885a59b3.jpg"},
    {dp:"https://i.pinimg.com/originals/5a/70/c5/5a70c5a940109b5f4c361765a38eaf77.jpg", story:"https://i.pinimg.com/564x/92/6e/97/926e9739569c08bf5952a5ffbf6b9fa8.jpg"}
    
]

let storyline = "";

let storybar = document.querySelector(".storybar");

arr.forEach(function (but,ind) {
    storyline += `<div class="story1">
                <img id="${ind}" src="${but.dp}" alt="">
            </div>`;
})

storybar.innerHTML = storyline;

storybar.addEventListener("click", function (det) {
    document.querySelector(".fullbox").style.display = "block"
    document.querySelector(".fullbox").style.backgroundImage = `url(${arr[det.target.id].story})`
})