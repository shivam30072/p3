
let songindex = 0;
let audioelement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songname: "bg music", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "montero", filepath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {songname: "the ringer", filepath: "songs/3.mp3", coverpath: "covers/3.jpg"},
    {songname: "forgot about dre", filepath: "songs/4.mp3", coverpath: "covers/4.jpg"},
    {songname: "kill you", filepath: "songs/5.mp3", coverpath: "covers/5.jpg"},
    {songname: "real slim shady", filepath: "songs/6.mp3", coverpath: "covers/6.jpg"},
    {songname: "rock bottom", filepath: "songs/7.mp3", coverpath: "covers/7.jpg"},
    {songname: "till i collapse", filepath: "songs/8.mp3", coverpath: "covers/8.jpg"}


]

songItem.forEach((element, i) =>{
   element.getElementsByClassName('songname')[0].innerHTML = songs[i].songname;
})
//audioelement.play();

masterPlay.addEventListener('click' ,()=>{
   if(audioelement.paused || audioelement.currentTime<=0){
       audioelement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
       gif.style.opacity = 1;
   }
   else{
    audioelement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
   }
})

audioelement.addEventListener('timeupdate' , ()=>{
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value = progress;
})


myprogressbar.addEventListener('change' ,()=> {
   audioelement.currentTime = myprogressbar.value * audioelement.duration/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
         element.classList.remove('fa-circle-pause');
         element.classList.add('fa-circle-play');
    })
    
    
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
   makeallplays();
     index = parseInt(e.target.id);
     e.target.classList.remove('fa-circle-play');
     e.target.classList.add('fa-circle-pause');
     audioelement.src = `songs/ ${index}.mp3`;
     audioelement.currentTime = 0;
     audioelement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');

    })
})






