// button javascript start


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

// button javascript end 
// animation javascript start 

document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM content to be fully loaded
    setTimeout(function() {
        // Hide fullscreen GIF after a certain time (e.g., 5 seconds)
        document.getElementById("fullscreen-container").style.display = "none";
        // Show other content
        document.getElementById("content").style.display = "block";
    }, 5000); // Adjust this time according to your preference
});

// animation javascript end 