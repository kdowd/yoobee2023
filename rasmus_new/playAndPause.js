const img2 = document.getElementById('playButton');
let togglePlayButton = true;
if (img2) {
    img2.addEventListener('click', function()
{
    togglePlayButton = !togglePlayButton;
    if(togglePlayButton)
    {
        img2.src = 'assets\\play.png';
    }
    else
    {
        img2.src = 'assets\\pause.png';
    }
    
})

}


