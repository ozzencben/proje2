const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        const images = gallery.querySelectorAll("img");
        images.forEach(img => {
            if (img === event.target) {
                img.classList.add("expandImage");
                img.classList.remove("shrinkingImage");
            } else {
                img.classList.add("shrinkingImage");
                img.classList.remove("expandImage");
            }
        });
    }
});
