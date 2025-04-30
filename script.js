const videoInput = document.getElementById('videoInput');
const videoPlayer = document.getElementById('videoPlayer');
videoInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        videoPlayer.src = fileURL;
        videoPlayer.load();
        videoPlayer.play();
        console.log(fileURL);
    }
});
const audioInput = document.getElementById('audioInput');
const audioPlayer = document.getElementById('audioPlayer');
audioInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        audioPlayer.src = fileURL;
        audioPlayer.load();
        audioPlayer.play();
        console.log(fileURL);
    }
});
