document.getElementById('chatForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value.trim();
    messageInput.value = '';

    if (message !== '') {
        displayMessage(message, 'user');
        
        // Show loading indicator 
        var loadingMessage = displayMessage('Typing...', 'bot');

        fetch('https://ddff4771d6ee39b2da.gradio.live/api/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: [message] }),
        })
        .then(response => response.json())
        .then(data => {
            var botResponse = data.data[0];
            
            // Remove loading message
            loadingMessage.remove();
            
            displayMessage(botResponse, 'bot');
        })
        .catch(error => {
            console.error('Error:', error);
            
            // Remove loading message
            loadingMessage.remove();
            
            displayMessage('Oops! Something went wrong.', 'bot');
        });
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
    
    return messageElement;
}