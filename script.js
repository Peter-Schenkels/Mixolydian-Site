function dissapear(self) {
    self.id.style.display = "none";
    self.id.style.display = "block";
}

const checkpoint = 300;

window.addEventListener("scroll", () => {
    opacity = ((window.pageYOffset <= checkpoint) - window.pageYOffset / checkpoint) * (window.pageYOffset <= checkpoint);
    document.querySelector(".front").style.opacity = opacity;
});