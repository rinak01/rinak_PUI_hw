
// Chatbot Script
const apiKey = "enter-key-here";
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
    const messageElement = document.createElement("p");
    messageElement.className = sender;
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}