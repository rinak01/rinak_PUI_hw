// Chatbot Script
const apiKey = "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";
const model = "gpt-4o-mini";

async function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    displayMessage(userInput, "user");
    document.getElementById("user-input").value = "";

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: model,
                messages: [
                    { role: "system", content: "You're a jellyfish. You are friendly, curious, and playful." },
                    { role: "user", content: userInput }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        const botReply = data.choices[0]?.message?.content || "Sorry, I couldn't process that.";

        displayMessage(botReply, "bot");

    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        displayMessage("An error occurred. Please try again.", "bot");
    }
}

function displayMessage(message, sender) {
    const chatMessages = document.getElementById("chat-messages");

    // Create the new message element
    const messageElement = document.createElement("p");
    messageElement.className = sender;
    messageElement.textContent = message;

    // Append the message to the chat container
    chatMessages.appendChild(messageElement);

    // Scroll to the bottom of the chat
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Manage visibility for small screens
    manageMobileMessages();
}

// Function to manage visibility on small screens
function manageMobileMessages() {
    const chatMessages = document.getElementById("chat-messages");
    const messages = chatMessages.querySelectorAll("p");

    if (window.innerWidth <= 768) {
        // Keep only the last message visible
        messages.forEach((msg, index) => {
            if (index !== messages.length - 1) {
                msg.style.display = "none";
            } else {
                msg.style.display = "block";
            }
        });
    } else {
        // Ensure all messages are visible on larger screens
        messages.forEach((msg) => {
            msg.style.display = "block";
        });
    }
}

// Listen for window resize to dynamically adjust message visibility
window.addEventListener("resize", manageMobileMessages);

// Add event listener for "Enter" key
document.getElementById("user-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) { 
        event.preventDefault(); 
        sendMessage(); 
    }
});
