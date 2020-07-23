var navElem = document.getElementsByTagName('nav')[0];
var mainElem = document.getElementsByTagName('main')[0];
var navListItems = Array.prototype.slice.call(navElem.getElementsByTagName('li'));
var mainSections = Array.prototype.slice.call(mainElem.getElementsByTagName('section'));

//init
mainSections.forEach(function(y,i){
    y.style.display = (i==0) ? "block" : "none";
    navListItems[0].classList.add('active');
})

//click events
navListItems.forEach(function(x,i){
    x.onclick = function(){
        navListItems.forEach(function(z,k){
            if(navListItems.indexOf(x)==k) { 
                z.classList.add('active')
                myHeader.innerText = "i'm gonna balance out your mood son"
            }
                else{z.classList.remove('active')}
        })
        mainSections.forEach(function(y,j){y.style.display = (navListItems.indexOf(x) == j ? "block" : "none")})
    }
})

function changeImage() {
    var image = document.getElementById('image');
    if(image && image.style) {
        image.style.height = '400px';
        image.style.width = '600px';
    }
    if (document.getElementById("image").src == "https://www.jneomarvin.com/scrapbook/images/1G_PSD.jpg") 
    {
        document.getElementById("image").src = "https://github.com/jessmcmorrow/blog/blob/master/photos/tomBrushing.jpg?raw=true";
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
