document.addEventListener("DOMContentLoaded", function(){
    const displayedImage = document.querySelector('.displayed-img');
    const thumbBar = document.querySelector('.thumbnails');
    let w = window.innerWidth;
    let gallery = ["hoops.jpg", "cherry.jpg", "houses.jpg", "corner.jpg"];
    for(let i = 0; i < gallery.length; i++) {
        console.log("working")
        const newImage = document.createElement('img');
        //add code checking screen size to select appropriate size
        newImage.setAttribute('src', `assets/${gallery[i]}`);
        newImage.setAttribute('alt', 'Thumbnail ' + i )
        thumbBar.appendChild(newImage);
        newImage.onclick = function(e) {
            let width = window.innerWidth;
            if (width < 7000) displayedImage.src = e.target.src;
            else document.getElementById("big-displayed-img").srcset = e.target.src
        }
    }
})