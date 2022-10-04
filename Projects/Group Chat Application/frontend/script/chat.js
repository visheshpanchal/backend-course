let chatForm = document.getElementById("chat-form");

chatForm.addEventListener("submit", sendMessage);

async function sendMessage(event) {
  event.preventDefault();

  let formObj = new FormData(chatForm);

  let message = {};

  for (const [key, value] of formObj) {
    message[key] = value;
  }

  let res = await axios({
    method: "post",
    url: api + "message",
    data: message,
  });

  if (res.status === 201) {
    alert("Message Send");
  }
}
