document.getElementById('chatForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value.trim();
    messageInput.value = '';

    if (message !== '') {
        displayMessage(message, 'user');
        
        // Placeholder for loading indicator 
        displayMessage('Typing...', 'bot');

        // Simulated delay for bot response
        setTimeout(() => {
            // Remove "Typing..." message
            var messages = document.getElementById('chatMessages');
            messages.removeChild(messages.lastChild);

            // Here is where you would call your Python chatbot backend
            // and pass it the user's message, then display the bot's response
            var botResponse = 'This is where the bot response will go';
            displayMessage(botResponse, 'bot');
        }, 1000);
    }
});

function displayMessage(message, sender) {
    var chatMessages = document.getElementById('chatMessages');
    
    var messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}