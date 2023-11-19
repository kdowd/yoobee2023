const img = document.getElementById('playButton');
let togglePlayButton = true;
img.addEventListener('click', function()
{
    togglePlayButton = !togglePlayButton;
    if(togglePlayButton)
    {
        img.src = 'assets\\play.png';
    }
    else
    {
        img.src = 'assets\\pause.png';
    }
    
})


