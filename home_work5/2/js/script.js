/* ВЫДЕЛИТЬ ЦИФРУ В РЕЗУЛЬТАТЕ */
let body=document.getElementsByTagName('body')[0];
body.style.backgroundColor="rgb(251,242,233)";
body.style.padding="10px"
body.style.fontFamily="Segoe UI";
let test=document.createElement('ol');
let question1=document.createElement('li');
let question2=document.createElement('li');
let questionBox1=document.createElement('div');
let questionBox2=document.createElement('div');
body.append(test);
test.append(questionBox1);
test.append(questionBox2);
//test.style.listStyleType="none";
//test.style.counterReset="item";
question1.textContent='How many letters are there in the word "Hello"?';
//question1.style.listStyleType="none";
//question1.before.style.listStyleType="1)"
//question1.before.style.content="counter(item) ')'";
//question1.before.style.counterIncrement="item";
let answer1=document.createElement('form');
let variant1_1=document.createElement('div');
variant1_1__choice=document.createElement('input');
variant1_1__text=document.createElement('div');
variant1_1__choice.name="hello";
variant1_1__choice.type="radio";
variant1_1__choice.value="5";
variant1_1__text.textContent="5";

let variant1_2=document.createElement('div');
let variant1_2__choice=document.createElement('input');
variant1_2__choice.name="hello";
variant1_2__choice.type="radio";
variant1_2__choice.value="2";
variant1_2__text=document.createElement('div');
variant1_2__text.textContent="2";
questionBox1.append(question1);
questionBox1.append(answer1);
answer1.append(variant1_1);
variant1_1.append(variant1_1__choice);
variant1_1.append(variant1_1__text);
answer1.append(variant1_2);
variant1_2.append(variant1_2__choice);
variant1_2.append(variant1_2__text);

variant1_1.style.display="flex";
variant1_2.style.display="flex";

let button1=document.createElement('button');
questionBox1.append(button1);
button1.textContent="Next";
button1.style.padding="5px 40px";
button1.style.marginTop="5px";

let answer2=document.createElement('form');
let variant2_1=document.createElement('div');
variant2_1__choice=document.createElement('input');
variant2_1__text=document.createElement('div');
variant2_1__choice.name="world";
variant2_1__choice.type="radio";
variant2_1__choice.value="5";
variant2_1__text.textContent="4";

question2.textContent='How many letters are there in the word "World"?';
let variant2_2=document.createElement('div');
let variant2_2__choice=document.createElement('input');
variant2_2__choice.name="world";
variant2_2__choice.type="radio";
variant2_2__choice.value="2";
variant2_2__text=document.createElement('div');
variant2_2__text.textContent="5";
questionBox2.append(question2);
questionBox2.append(answer2);
answer2.append(variant2_1);
variant2_1.append(variant2_1__choice);
variant2_1.append(variant2_1__text);
answer2.append(variant2_2);
variant2_2.append(variant2_2__choice);
variant2_2.append(variant2_2__text);

variant2_1.style.display="flex";
variant2_2.style.display="flex";

let button2=document.createElement('button');
questionBox2.append(button2);
button2.textContent="Finish";
button2.style.padding="5px 35px";
button2.style.marginTop="5px";
button2.setAttribute('onclick','showResult()');

let sum=0;
let result1=0;
answer1.addEventListener("click", (event)=>{
   result1=event.target.value;
   if (result1==variant1_1__choice.value) sum++;
})
let result2=0;
answer2.addEventListener("click", (event)=>{
   result2=event.target.value;
   if (result2==variant2_2__choice.value) sum++;
})

function showResult(){
   let message=document.createElement('div');
   message.style.marginLeft="30px";
   body.append(message);
   message.textContent=`Result: ${sum} correct answers to 2 questions.`
   sum=0;
}

