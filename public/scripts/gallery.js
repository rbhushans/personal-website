document.addEventListener("DOMContentLoaded", function(){
    const displayedImage = document.querySelector('.displayed-img');
    const thumbBar = document.querySelector('.thumbnails');
    let gallery = ["hoops.jpg", "cherry.jpg", "houses.jpg", "corner.jpg"];
    for(let i = 0; i < gallery.length; i++) {
        const newImage = document.createElement('img');
        newImage.setAttribute('src', `assets/${gallery[i]}`);
        newImage.setAttribute('alt', 'Thumbnail ' + i )
        thumbBar.appendChild(newImage);
        newImage.onclick = function(e) {
            displayedImage.src = e.target.src;
        }
    }
})