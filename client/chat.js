// Define a variable to store the chat log element
const chatLog = document.getElementById('chat-log');

// Define a function to add a message to the chat log
function addMessageToLog(message, isBot) {
    const messageClass = isBot ? 'bot-message' : 'user-message';
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', messageClass);
    messageElement.textContent = message;
    chatLog.appendChild(messageElement);
}
addMessageToLog("Welcome to our chatbot! How can I help you today?", true);
addMessageToLog("I'm here to answer any questions you have about the college and its programs.", true);
addMessageToLog("Feel free to ask me anything!", true);

// Define a function to handle user input
function handleUserInput() {
    const userInput = document.getElementById('chat-input').value;
    addMessageToLog(userInput, false);
    document.getElementById('chat-input').value = '';
    // Call a function to process the user input and generate a bot response
    const botResponse = generateBotResponse(userInput);
    // Add the bot response to the chat log
    addMessageToLog(botResponse, true);
}

// Define a function to generate a bot response based on user input
function generateBotResponse(userInput) {
    // Convert the user input to lowercase for easier processing
    const input = userInput.toLowerCase();

    // Define some responses for the chatbot, including emojis
    const responses = {
        'hello': `Hi there! ${emojis.happy}`,
        'how are you?': `I'm doing well, thank you. ${emojis.heart}`,
        'what programs does the college offer?': `The college offers a variety of programs in fields such as business, technology, health sciences, and liberal arts. You can find more information on the college's website. ${emojis.thumbsUp}`,
        'what is the tuition fee?': `The tuition fee varies depending on the program and whether you are an international or domestic student. You can find more information on the college's website. ${emojis.heart}`,
        'how do i apply to the college?': `You can apply to the college online through the college's website. ${emojis.thumbsUp}`,
        'thank you': `You're welcome! ${emojis.happy}`,
        'goodbye': `Goodbye! Thank you for visiting our website. ${emojis.heart}`,
        'what placements are available?': `The college offers a range of placements in different fields. You can find more information on the college's website or speak to one of our career advisors. ${emojis.thumbsUp}`,
        'are there any internships available?': `Yes, the college offers internships in various fields. You can find more information on the college's website or speak to one of our career advisors. ${emojis.thumbsUp}`,
        'how can you help me?': `I'm here to answer any questions you have about the college and its programs. Feel free to ask me anything! ${emojis.smile}`,
        '': `I'm sorry, I didn't catch that. How can I help you? ${emojis.sad}`
    };

    // Look up the appropriate response based on the user input
    const response = responses[input] || `I'm sorry, I don't understand. ${emojis.sad}`;

    // Return the response
    return response;
}

const emojis = {
    happy: '\u{1F600}',
    sad: '\u{1F622}',
    heart: '\u{2764}',
    thumbsUp: '\u{1F44D}',
    thumbsDown: '\u{1F44E}',
    smile: '\u{1F603}'
};

// Add an event listener to the chat input field
document.getElementById('chat-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

// Add an event listener to the send button
document.getElementById('chat-submit').addEventListener('click', function () {
    handleUserInput();
});

