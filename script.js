const changeButton = document.getElementById('changeButton');
const image = document.getElementById('image');
const sadImage = document.getElementById('sadImage');
let isSmiley = true;

changeButton.addEventListener('click', function() {
    if (isSmiley) {
        image.style.display = 'none';
        sadImage.style.display = 'block';
        sadImage.style.width = image.width + 'px'; 
        sadImage.style.height = image.height + 'px'; 
        document.body.style.background = 'linear-gradient(to right, #ff9642, #ff2e63)'; // Gradient color change
    } else {
        image.style.display = 'block';
        sadImage.style.display = 'none';
        document.body.style.background = 'linear-gradient(to bottom, #c94fb3, #8eccfb)'; // Reset gradient color
    }
    isSmiley = !isSmiley;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});