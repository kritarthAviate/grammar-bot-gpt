const submitButton = document.getElementById("submitButton");
const messageInput = document.getElementById("messageInput");
const messageOutput = document.getElementById("messageOutput");

const baseUrl = "http://localhost:8080/api";

submitButton.addEventListener("click", () => {
  const message = messageInput.value;
  console.log("Sending message:", message);
  if (message.trim() !== "") {
    fetch(`${baseUrl}/corrections`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sentence: message }),
    })
      .then((response) => response.json())
      .then((data) => {
        messageOutput.textContent = `Received Message: ${data.correctedSentence}`;
        messageOutput.style.display = "block";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
