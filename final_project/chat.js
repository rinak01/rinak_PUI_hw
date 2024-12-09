let apiKey = null; 
const model = "gpt-4o-mini";
let sendButton;

async function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    if (!apiKey) {
        apiKey = userInput; 
        document.getElementById("user-input").value = "";

        const isValid = await validateApiKey(apiKey);
        if (isValid) {
            displayMessage("API key is valid! Chat with me! :D ", "bot");  
            sendButton.textContent = "Send Message To Jellyfish"; 
        } else {
            displayMessage("Invalid API key. That's not my API key! :( .", "bot");
            apiKey = null; 
        }
        return;
    }

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

async function validateApiKey(key) {
    try {
        const response = await fetch("https://api.openai.com/v1/models", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${key}`
            }
        });
        return response.ok; 
    } catch (error) {
        console.error("Error validating API key:", error);
        return false;
    }
}

function displayMessage(message, sender) {
    const chatMessages = document.getElementById("chat-messages");


    const messageElement = document.createElement("p");
    messageElement.className = sender;
    messageElement.textContent = message;


    chatMessages.appendChild(messageElement);


    chatMessages.scrollTop = chatMessages.scrollHeight;


    manageMobileMessages();
}


function manageMobileMessages() {
    const chatMessages = document.getElementById("chat-messages");
    const messages = chatMessages.querySelectorAll("p");

    if (window.innerWidth <= 768) {

        messages.forEach((msg, index) => {
            if (index !== messages.length - 1) {
                msg.style.display = "none";
            } else {
                msg.style.display = "block";
            }
        });
    } else {

        messages.forEach((msg) => {
            msg.style.display = "block";
        });
    }
}


window.addEventListener("resize", manageMobileMessages);


document.getElementById("user-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) { 
        event.preventDefault(); 
        sendMessage(); 
    }
});

window.onload = function () {
    sendButton = document.querySelector(".chat-input button");
    sendButton.textContent = "Enter API Key"; 
    displayMessage("Please enter your OpenAI API key to start chatting with the jellyfish.", "bot");
};

