const wrapper = document.querySelector('main')
const play = document.getElementById('play')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const audio = document.querySelector('audio')
const progressContainer = document.querySelector('.progress-container')
const progress= document.querySelector('.progress')
const tittle= document.querySelector('h2')
const cover = document.querySelector('img')


// songs tittle 

const songs = ['Welcome','Witness','Work','Yo']

// keeping track of the song

let songIndex = 0 

//load song into dom
loadSong(songs[songIndex])


// functions
// Update song details: tittle, song and image

function loadSong(song){
    tittle.innerText = song
    audio.src= `songs/${song}.mp3`
    cover.src=`img/${song}.jpeg`
}

function playSong(){
    wrapper.classList.add('play')
    audio.play()
}
function pauseSong(){
    wrapper.classList.remove('play')
    audio.pause()
}
// Event Listner 

play.addEventListener("click",(isPlaying) => {
    isPlaying = wrapper.classList.contains("play")

    if(!isPlaying){
        playSong()
    } else {
        pauseSong()
    }
})