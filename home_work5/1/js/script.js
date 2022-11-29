/* ПОДПРАВИТЬ ВРЕМЯ!!! */
let body=document.getElementsByTagName('body')[0];
body.style.backgroundColor="rgb(251,242,233)";
let allMessageBox=document.createElement('div');
body.append(allMessageBox);
let inputBox=document.createElement('div');
let headNewMessage=document.createElement('div');
body.append(inputBox);
inputBox.append(headNewMessage);
headNewMessage.textContent="Add new message:";
headNewMessage.style.textAlign="center";
headNewMessage.style.padding="5px";
headNewMessage.style.fontWeight="600";
let newNameBox=document.createElement('div');
let newMessageBox=document.createElement('div');
inputBox.append(newNameBox);
inputBox.append(newMessageBox);
let newName=document.createElement('div');
let newMessage=document.createElement('div');
let inputName=document.createElement('input');
let inputMessage=document.createElement('textarea');
newNameBox.append(newName);
newName.textContent="Your name: ";
newNameBox.append(inputName);
newMessageBox.append(newMessage);
newMessage.textContent="Your message: ";
newMessageBox.append(inputMessage);
newNameBox.style.display="flex";
newNameBox.style.justifyContent="space-between";
inputMessage.style.width="85%";
inputName.style.width="85%";
newMessageBox.style.display="flex";
newMessageBox.style.justifyContent="space-between";
newMessageBox.style.paddingTop="10px";
newMessageBox.style.fontWeight="600";
newNameBox.style.fontWeight="600";

let button=document.createElement('button');
inputBox.append(button);
button.style.width="100%";
button.style.height="30px";
button.style.marginTop="10px";
button.textContent="Send";
button.style.backgroundColor="rgb(225,225,225)";

button.setAttribute('onclick','sendMessage()');

function sendMessage(){
   let message=document.createElement('div');
   let messageName=document.createElement('div');
   let messageText=document.createElement('div');
   let line=document.createElement('hr');
   allMessageBox.append(message);
   message.append(messageName);
   message.append(line);
   message.append(messageText);
   let name=document.createElement('div');
   messageName.append(name);
   let time=document.createElement('div');
   messageName.append(time);
   name.textContent=inputName.value;
   let nowTime=new Date();
   console.log(nowTime.getHours())
   time.textContent=`${nowTime.getHours()}:${nowTime.getMinutes()}:${nowTime.getSeconds()} ${nowTime.getDate()}.${nowTime.getMonth()+1}.${nowTime.getFullYear()}`;
   messageText.textContent=inputMessage.value;
   body.style.padding="10px"
   body.style.fontFamily="Segoe UI";
   messageName.style.display="flex";
   messageName.style.justifyContent="space-between";
   messageName.style.paddingBottom="10px";
   messageName.style.padding="10px";
   message.style.border="1px grey solid";
   message.style.marginBottom="10px";
   messageText.style.padding="10px";
   line.style.border="none";
   line.style.borderTop="1px dashed grey";
   line.style.paddingLeft="0px";
}