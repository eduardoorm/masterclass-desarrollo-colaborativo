const socket = io();

const send = document.getElementById("send-message");
const allMessages = document.getElementById("all-messages");

send.addEventListener("click", () => {
    const message = document.getElementById("message").value;
    socket.emit("message", message);
    document.getElementById("message").value = "";
});

socket.on("message", ({user, message}) => {

    const msg = document.createRange().createContextualFragment(`
    <div class="message">
                
        <div class="image-container">
            <img src="/images/octocat.svg">
        </div>

        <div class="message-body">
            
            <div class="user-info">
                <span class="username">${user}</span>
                <span class="time">Hace 1 segundo</span>
            </div>

            <p>${message}</p>

        </div>
        
    </div>
    `);

    allMessages.append(msg);

});

