songindex=0;

let audioelement=new Audio('1.mp3');
let masterplay1= document.getElementById("masterplay");
let myprogress =document.getElementById("myprogress")
let song=[
    {
    songName:"salame",filepath:"songs/1.mp3",coverpath: "covers/1.jpg"
},
{
    songName:"salame",filepath:"songs/1.mp3",coverpath: "covers/1.jpg"
},
{
    songName:"salame",filepath:"songs/1.mp3",coverpath: "covers/1.jpg"
},
{
    songName:"salame",filepath:"songs/1.mp3",coverpath: "covers/1.jpg"
},
{
    songName:"salame",filepath:"songs/1.mp3",coverpath: "covers/1.jpg"
},
{
    songName:"salame",filepath:"songs/1.mp3",coverpath: "covers/1.jpg"
}
]

masterplay1.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play()
    }
})
myid.addEventListener('timeupdate',()=>{
    console.log("timeupdate")


})