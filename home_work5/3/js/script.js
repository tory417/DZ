let body=document.getElementsByTagName('body')[0];
body.style.backgroundColor="rgb(251,242,233)";
body.style.fontFamily="Segoe UI";
let form=document.createElement('div');
body.append(form);
form.style.display="flex";
form.style.flexDirection="column";
form.style.alignItems="baseline"
let checkBox=document.createElement('form');
let radioBox=document.createElement('form');
let choice=document.createElement('div');
form.append(choice);
choice.append(checkBox);
choice.append(radioBox);
choice.style.display="flex";
checkBox.style.display="flex";
radioBox.style.display="flex";

let boldStyle=document.createElement('div');
checkBox.append(boldStyle);
boldStyle.style.display="flex";
boldStyle.style.marginRight="10px";
let boldStyle_input=document.createElement('input');
boldStyle_input.name="textStyle";
boldStyle_input.type="checkbox";
boldStyle_input.id="one";
let boldStyle_text=document.createElement('div');
boldStyle_text.textContent="Bold";
boldStyle.append(boldStyle_input);
boldStyle.append(boldStyle_text);

let underlineStyle=document.createElement('div');
checkBox.append(underlineStyle);
underlineStyle.style.display="flex";
underlineStyle.style.marginRight="10px";
let underlineStyle_input=document.createElement('input');
underlineStyle_input.name="textStyle";
underlineStyle_input.type="checkbox";
underlineStyle_input.id="two";
let underlineStyle_text=document.createElement('div');
underlineStyle_text.textContent="Underline";
underlineStyle.append(underlineStyle_input);
underlineStyle.append(underlineStyle_text);

let italicsStyle=document.createElement('div');
checkBox.append(italicsStyle);
italicsStyle.style.display="flex";
italicsStyle.style.marginRight="10px";
let italicsStyle_input=document.createElement('input');
italicsStyle_input.name="textStyle";
italicsStyle_input.type="checkbox";
italicsStyle_input.id="three";
let italicsStyle_text=document.createElement('div');
italicsStyle_text.textContent="Italics";
italicsStyle.append(italicsStyle_input);
italicsStyle.append(italicsStyle_text);

let leftAlign=document.createElement('div');
radioBox.append(leftAlign);
leftAlign.style.display="flex";
leftAlign.style.marginRight="10px";
let leftAlign_input=document.createElement('input');
leftAlign_input.name="textAlign";
leftAlign_input.type="radio";
leftAlign_input.value="left";
let leftAlign_text=document.createElement('div');
leftAlign_text.textContent="Left";
leftAlign.append(leftAlign_input);
leftAlign.append(leftAlign_text);

let rightAlign=document.createElement('div');
radioBox.append(rightAlign);
rightAlign.style.display="flex";
rightAlign.style.marginRight="10px";
let rightAlign_input=document.createElement('input');
rightAlign_input.name="textAlign";
rightAlign_input.type="radio";
rightAlign_input.value="right";
let rightAlign_text=document.createElement('div');
rightAlign_text.textContent="Right";
rightAlign.append(rightAlign_input);
rightAlign.append(rightAlign_text);

let justifyAlign=document.createElement('div');
radioBox.append(justifyAlign);
justifyAlign.style.display="flex";
let justifyAlign_input=document.createElement('input');
justifyAlign_input.name="textAlign";
justifyAlign_input.type="radio";
justifyAlign_input.value="justify";
let justifyAlign_text=document.createElement('div');
justifyAlign_text.textContent="Justify";
justifyAlign.append(justifyAlign_input);
justifyAlign.append(justifyAlign_text);

let textInput=document.createElement('textarea');
form.append(textInput);
textInput.style.margin="10px 0px 0px 10px";
textInput.style.width="430px";
textInput.style.height="100px";

let button=document.createElement('button');
form.append(button);
button.textContent="Show text";
button.style.marginTop="10px";
button.style.width="440px";
//button.setAttribute('onclick','showResult()');
let resultBox=document.createElement('div');
resultBox.style.width="430px";
resultBox.style.padding="10px";
body.append(resultBox);

button.onclick=function (){
   
   let resHead=document.createElement('h4');
   resHead.textContent="Result:";
   let resText=document.createElement('div');
   resText.style.padding="10px";
   resText.style.border="1px grey solid";
   
   radioBox.addEventListener("click",(event)=>{
      if(event.target.value==leftAlign_input.value) resText.style.textAlign="left";
      else if(event.target.value==rightAlign_input.value) resText.style.textAlign="right";
      else if(event.target.value==justifyAlign_input.value) resText.style.textAlign="justify";
   })
   let ch1=document.getElementById('one');
   if(ch1.checked) resText.style.fontWeight="bold";
   let ch2=document.getElementById('two');
   if(ch2.checked) resText.style.textDecoration="underline";
   let ch3=document.getElementById('three');
   if(ch3.checked) resText.style.fontStyle="italic";
   resText.textContent=textInput.value;
   resultBox.append(resHead);
   resultBox.append(resText);
}