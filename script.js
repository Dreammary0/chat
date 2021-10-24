let chat = document.querySelector('.chatbox');
function Click() //обработка ввода текста в форму
{
    let textarea = document.querySelector('.usermsg');
    let text = textarea.value; //сообщение от пользователя
    if (textarea.value.length <= 0) {
        return;
    }
    textarea.value = ''; //чистим форму
    creatMessage(text)
}
function creatMessage(text)
{
    let message = document.createElement("div");
    message.setAttribute("class", "send_message");
    message.innerHTML = text;
    chat.appendChild(message);
}
