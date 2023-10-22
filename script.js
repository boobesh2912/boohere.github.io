function sendMessage(event) {
    if (event.key === "Enter") {
        let userInput = document.getElementById("user-input").value;
        appendUserMessage(userInput);
        processUserInput(userInput);
        document.getElementById("user-input").value = "";
    }
}

function appendUserMessage(message) {
    let chatLog = document.getElementById("chat-log");
    let userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.innerHTML = message;
    chatLog.appendChild(userDiv);
}

function appendBotMessage(message) {
    let chatLog = document.getElementById("chat-log");
    let botDiv = document.createElement("div");
    botDiv.className = "chat-bot";
    botDiv.innerHTML = message;
    chatLog.appendChild(botDiv);
}

function processUserInput(userInput) {
    // Replace this with your chatbot logic
    // Example: You can send a predefined response
    let botResponse = "I'm just a simple chatbot. I don't understand that.";
    appendBotMessage(botResponse);
}
function translateCode() {
    const inputCode = document.getElementById("code-input").value;
    const targetLanguage = document.getElementById("target-language").value;

    axios.post("/translate", { code: inputCode, language: targetLanguage })
        .then(response => {
            const translatedCode = response.data.translatedCode;
            document.getElementById("translated-code").innerText = translatedCode;
        })
        .catch(error => {
            console.error("Error translating code:", error);
        });
}



