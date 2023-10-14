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

async function ask() {
    const question = document.getElementById("question").value;
    const responseElement = document.getElementById("response");
    
    // Clear the previous response
    responseElement.innerText = "Thinking...";
    
    try {
        const response = await fetch("/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `question=${encodeURIComponent(question)}`,
        });
        const data = await response.json();
        responseElement.innerText = data.answer;
    } catch (error) {
        console.error("Error:", error);
        responseElement.innerText = "Sorry, I couldn't understand that. Please try again.";
    }
}
