function downloadCV() {
    var link = document.createElement('a');
    link.href = 'resume.pdf'; // Replace with the actual file path or URL
    link.download = 'resume.pdf'; // Specify the desired file name
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}