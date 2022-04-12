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
    play.querySelector("span.fa-solid").classList.remove("fa-play")
    play.querySelector("span.fa-solid").classList.add("fa-pause")
    audio.play()
}
function pauseSong(){
    wrapper.classList.remove('play')
    play.querySelector("span.fa-solid").classList.add("fa-play")
    play.querySelector("span.fa-solid").classList.remove("fa-pause")
    audio.pause()
}

function prevSong(){
songIndex--

// if(songIndex < 0){
//     songIndex = songs.length-1 
// }
songIndex < 0? songIndex = songs.length-1 : null

loadSong(songs[songIndex])
playSong()
}

function nextSong(){
    songIndex++

// if(songIndex > songs.length-1){
//     songIndex = 0 
// }
songIndex > songs.length-1? songIndex = 0 : null

loadSong(songs[songIndex])
playSong()
}

function updateProgress(e) {
    // const currentTime = e.srcElement
    // const duration = e.srcElement

    const {currentTime,duration}= e.srcElement
    const progressPercent = (currentTime/duration)*100
    progress.style.width = `${progressPercent}%`

}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
   const duration = audio.duration
   audio.currentTime = (clickX/width) * duration
}
// Event Listner 

play.addEventListener("click",(isPlaying) => {
    isPlaying = wrapper.classList.contains("play")

    !isPlaying ? playSong() : pauseSong()

    // if(!isPlaying){
    //     playSong()
    // } else {
    //     pauseSong()
    // }
})

// change Song
prev.addEventListener("click",prevSong)
next.addEventListener("click",nextSong)

// Audio Progress

audio.addEventListener("timeupdate",updateProgress)

// progress on click
progressContainer.addEventListener("click",setProgress)

audio.addEventListener("ended",nextSong)
