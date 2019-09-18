function changeImage() {
    var image = document.getElementById('image');
    if(image && image.style) {
        image.style.height = '400px';
        image.style.width = '600px';
    }
    if (document.getElementById("image").src == "https://www.jneomarvin.com/scrapbook/images/1G_PSD.jpg") 
    {
        document.getElementById("image").src = "https://github.com/jessmcmorrow/blog/blob/master/tomBrushing.jpg?raw=true";
    }
    else 
    {
        document.getElementById("image").src = "https://www.jneomarvin.com/scrapbook/images/1G_PSD.jpg";
    }
    
}

function changeGitImage() {

    if (document.getElementById("gitImage").src == "https://github.com/jessmcmorrow/blog/blob/master/pinkTerminal.png?raw=true")
    {
        document.getElementById("gitImage").src == "https://github.com/jessmcmorrow/blog/blob/master/keithAlexander.png?raw=true";

    }
    else 
    {
        document.getElementById("gitImage").src == "https://github.com/jessmcmorrow/blog/blob/master/pinkTerminal.png?raw=true";
    }
}

