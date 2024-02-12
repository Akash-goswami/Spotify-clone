document.addEventListener("DOMContentLoaded", function() {
    var playButtons = document.querySelectorAll(".playButton");
    var audioPlayers = document.querySelectorAll(".audioPlayer");

    playButtons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            var audioPlayer = audioPlayers[index];
            
            // Pause all audio players
            audioPlayers.forEach(function(player) {
                if (player !== audioPlayer) {
                    player.pause();
                }
            });

            // Toggle play/pause for the clicked audio player
            if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
        });
    });
});