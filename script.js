
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
    document.getElementById("downloadCv").addEventListener("click", function(event) {
        event.preventDefault();
        const fileUrl = this.href;
        window.open(fileUrl, "_blank");
    });
});