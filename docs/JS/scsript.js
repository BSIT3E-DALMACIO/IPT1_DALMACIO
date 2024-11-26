document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
    });
});

document.querySelectorAll('.image-container').forEach(imageContainer => {
    imageContainer.addEventListener('click', () => {
        const newImage = prompt("Enter the URL of the new image:");
        if (newImage) {
            const imgElement = imageContainer.querySelector('img');
            imgElement.src = newImage;
        }
    });
});
