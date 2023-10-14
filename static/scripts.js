document.getElementById("chat-bar").addEventListener("click", function() {
    // JavaScript to handle chat bar and chat overlay behavior

document.getElementById("chat-bar").addEventListener("click", function() {
    const chatOverlay = document.getElementById("chat-overlay");
    chatOverlay.style.display = "block";
    chatOverlay.style.opacity = 0;
    setTimeout(function() {
        chatOverlay.style.opacity = 1;
    }, 50); // Delay for a smooth fade-in
});

document.getElementById("close-chat").addEventListener("click", function() {
    const chatOverlay = document.getElementById("chat-overlay");
    chatOverlay.style.opacity = 0;
    setTimeout(function() {
        chatOverlay.style.display = "none";
    }, 300); // Delay to match the fade-out duration
});

});
