const audio = new Audio("/sounds/Mina områden.mp3");

function togglePlay() 
{
    if (audio.paused) 
    {
        audio.play();
    } else 
    {
        audio.pause();
    }
}

if (document.querySelector(".waveformContainer"))
{
    const waveform = document.querySelector(".waveformContainer");
    setInterval(() => {
        if (!audio.paused) {
            waveform.scroll(waveform.scrollLeft + 1, 0);
        }
    }, 50);
}

const thumbnails = [
    "Abba.jpg",
    "All I Want.jpg",
    "Bangarang.jpg",
    "Brave.jpg",
    "Buzzards.jpg",
    "Cluster.jpg",
    "Crisis Vision.jpg",
    "fastaf.jpg",
    "fngelv.jpg",
    "Killer Bee.jpg",
    "Lifeline.webp",
    "Party Girls.jpg",
    "Round Table Reinforcements 1.jpg",
    "Show Me.webp",
    "Skin.jpg",
    "songIMG.png",
    "Virtual Self.webp",
    "Void.webp",
    "Hov1.png"
]

document.querySelectorAll(".albumImage").forEach(element => {
    const index = Math.floor(Math.random() * thumbnails.length);
    element.src = "/Album Art/" + thumbnails[index];
});

const nameDesc = [
    "Abba",
    "TRAAZH CAAN",
    "Lord Athelstan",
    "TRA$HBOY",
    "Twenty One Pilots",
    "God",
    "Satan",
    "Raz?",
    "MandoMan",
    "Daft Punk",
    "Falling out Boys",
    "DON'T KNOW HOW BUT THEY FOUND US",
    "Creamy man",
    "The Pie Of Cream",
    "Is that you dad?",
    "You forgot the milk",
    "The Nine Circles of Hell",
    "Aldis?",
    "Whoa Big Man"
]

document.querySelectorAll(".artistName").forEach(element => {
    const index = Math.floor(Math.random() * nameDesc.length);
    element.innerText = nameDesc[index];
});

const songName = [
    "Iphone",
    "Boof Pack",
    "Jesus Juice",
    "Traazh Caan's Trash",
    "World Spinny",
    "God",
    "Satan",
    "Son",
    "I HAVE A DREAM",
    "Is it a plane?",
    "Is it a bird?",
    "No it's superman!",
    "Juicy Beats",
    "Pile of cream",
    "Saucy sauce",
    "White gooey stuff",
    "Taco bells grilled stuffed nacho taco",
    "Walmart shoes",
    "Spinny spin man"
]

document.querySelectorAll(".nameOfSong").forEach(element => {
    const index = Math.floor(Math.random() * songName.length);
    element.innerText = songName[index];
});

function randomTimestamp() {
    let seconds = Math.floor(Math.random() * 120 + 60);
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    if (seconds < 10) seconds = "0" + seconds;
    return minutes + ":" + seconds;
}

document.querySelectorAll(".timeStamp").forEach(element => {
    element.innerText = randomTimestamp();
});

const playAndLikes = [
    "Abba.jpg",
    "All I Want.jpg",
    "Bangarang.jpg",
    "Brave.jpg",
    "Buzzards.jpg",
    "Cluster.jpg",
    "Crisis Vision.jpg",
    "fastaf.jpg",
    "fngelv.jpg",
    "Killer Bee.jpg",
    "Lifeline.webp",
    "Party Girls.jpg",
    "Round Table Reinforcements 1.jpg",
    "Show me.webp",
    "Skin.jpg",
    "songIMG.png",
    "Virtual Self.webp",
    "Void.webp"
]

document.querySelectorAll(".LikeThePlays").forEach(element => {
    const index = Math.floor(Math.random() * playAndLikes.length);
    element.src = "/Album Art/" + playAndLikes[index];
});

function randomFollowers() {
    let seconds = Math.floor(Math.random() * 12);
    return seconds + " Followers";
}

document.querySelectorAll(".followers").forEach(element => {
    element.innerText = randomFollowers();
});

function randomPlays() {
    let songPlays = Math.floor(Math.random() * 120 + 100);
    return songPlays;
}

document.querySelectorAll(".amountOfPlays").forEach(element => {
    element.innerText = randomPlays();
});

const whoIsIt = [
    "Artist",
    "Album",
    "Single",
    "Song"
]

document.querySelectorAll(".madeByWho").forEach(element => {
    const index = Math.floor(Math.random() * whoIsIt.length);
    element.innerText = whoIsIt[index] + " - " + nameDesc[index] ;
});

function toggleSelect(element) {
    if (element.classList.contains("selected")) {
        element.classList.remove("selected");
    } else {
        element.classList.add("selected");
    }
}

function toggleText(element) {
    if (element.innerText == "Follow") {
        element.innerText = ("Following");
    } else {
        element.innerText = ("Follow");
    }
}

const releaseYear = [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023"
]

document.querySelectorAll(".yearOfRelease").forEach(element => {
    const index = Math.floor(Math.random() * releaseYear.length);
    element.innerText = releaseYear[index] + " - Album";
});

const img = document.getElementById('musicPlayerButton');

let toggleMusicPlayButton = true;
img.addEventListener('click', function()
{
    toggleMusicPlayButton = !toggleMusicPlayButton;
    if(toggleMusicPlayButton)
    {
        img.src = 'assets\\playOrange.png';
    }
    else
    {
        img.src = 'assets\\pause.png';
    }
    console.log("toggleplay");
    
})