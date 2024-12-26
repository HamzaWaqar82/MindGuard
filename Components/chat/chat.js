// Handle chat switching
const contacts = document.querySelectorAll(".contact");
const chatHeaderName = document.getElementById("chat-header-name");
const chatMessages = document.getElementById("chat-messages");

contacts.forEach((contact) => {
  contact.addEventListener("click", () => {
    // Remove active class from all contacts
    contacts.forEach((c) => c.classList.remove("active"));
    contact.classList.add("active");

    // Update chat header and messages (simulate fetching chat history)
    const name = contact.getAttribute("data-name");
    chatHeaderName.textContent = name;
    chatMessages.innerHTML = `<div class="message received">Chat with ${name} loaded! <span>00:00</span></div>`;
  });
});

// Handle sending messages
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message) {
    const newMessage = document.createElement("div");
    newMessage.classList.add("message", "sent");
    newMessage.innerHTML = `${message} <span>${new Date().toLocaleTimeString()}</span>`;
    chatMessages.appendChild(newMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    messageInput.value = "";
  }
});
