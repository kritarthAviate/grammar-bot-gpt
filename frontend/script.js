const submitButton = document.getElementById("submitButton");
const messageInput = document.getElementById("messageInput");
const messageOutput = document.getElementById("messageOutput");

submitButton.addEventListener("click", () => {
  const message = messageInput.value;
  console.log("Sending message:", message);
  if (message.trim() !== "") {
    // add loading text
    messageOutput.textContent = "Loading...";
    messageOutput.style.display = "block";
    fetch(`api/corrections`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sentence: message }),
    })
      .then((response) => response.json())
      .then((data) => {
        messageOutput.textContent = `Correct sentence: ${data.correctedSentence}`;
        messageOutput.style.display = "block";
      })
      .catch((error) => {
        console.error("Error:", error);
        messageOutput.textContent = "Error. Please try again.";
      });
  }
});
