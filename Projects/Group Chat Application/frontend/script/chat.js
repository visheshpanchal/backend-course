let chatForm = document.getElementById("chat-form");
let chatBox = document.getElementById("message-box");
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

window.addEventListener("DOMContentLoaded", getAllMessages);

async function getAllMessages(event) {
  let res = await axios({ method: "get", url: api + "message" });

  let data = res.data.data.message;

  let i = 0;

  for (const d of data) {
    if (i % 2 === 0) {
      let structure = `     
        <div class="col col-12 p-2">${d.message}</div>
     `;

      let ele = document.createElement("div");
      ele.setAttribute("class", "row");
      ele.innerHTML = structure;
      chatBox.appendChild(ele);
    } else {
      let structure = `     
        <div class="col col-12 text-end p-2">
            ${d.message}
     
        </div>
      `;

      let ele = document.createElement("div");
      ele.setAttribute("class", "row bg-chat");
      ele.innerHTML = structure;
      chatBox.appendChild(ele);
    }
    i++;
  }
}
