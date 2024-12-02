document.getElementById('chatForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;
    messageInput.value = '';

    displayMessage(message, 'user');
    
    // Here is where you would call your Python chatbot backend
    // and pass it the user's message, then display the bot's response
    var botResponse = 'This is where the bot response will go';
    displayMessage(botResponse, 'bot');
});

function displayMessage(message, sender) {
    var chatContainer = document.getElementById('chatContainer');
    
    var messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}