let body=document.getElementsByTagName('body')[0];
body.style.backgroundColor="rgb(251,242,233)";
body.style.fontFamily="Segoe UI";
body.style.fontSize="14px";
let catalog=document.createElement('div');
body.append(catalog);
catalog.style.margin="10px";
catalog.style.display="flex";

let book1=document.createElement('div');
//book1.style.display="flex";
//book1.style.alignItems="flex-end";
book1.style.width="160px";
book1.style.border="1px grey solid";
book1.style.padding="5px";
book1.style.marginRight="10px";
catalog.append(book1);
let book1_image=document.createElement('div');
book1.append(book1_image);
book1_image.style.backgroundImage=`url("../img/1.jpg")`;
book1_image.style.backgroundSize="cover";
book1_image.style.width="150px";
book1_image.style.height="220px";
let book1_textBox=document.createElement('div');
book1.append(book1_textBox);
let book1Title=document.createElement('div');
let book1Title_name=document.createElement('div');
let book1Title_author=document.createElement('div');
book1_textBox.append(book1Title_name);
book1_textBox.append(book1Title_author);
book1Title_name.textContent="Learning JavaScript: JavaScript Essentials for Modern Application Development";
book1Title_name.style.fontWeight="bold";
book1Title_author.textContent="Ethan Brown";
let book1Price=document.createElement('div');
book1.append(book1Price);
book1Price.textContent="16$";
book1Price.style.fontWeight="bold";
book1Price.style.textAlign="right";
book1Price.style.fontSize="18px";
let book1_btn=document.createElement('button');
book1.append(book1_btn);
book1_btn.textContent="Select";
book1_btn.style.backgroundColor="#e1e1e1";
book1_btn.style.borderRadius="5px";
book1_btn.style.width="100%";
book1_btn.style.fontWeight="bold";
book1_btn.style.padding="5px";
book1_btn.style.fontSize="10px";

let book2=document.createElement('div');
book2.style.width="160px";
book2.style.border="1px grey solid";
book2.style.padding="5px";
book2.style.marginRight="10px";
catalog.append(book2);
let book2_image=document.createElement('div');
book2.append(book2_image);
book2_image.style.backgroundImage=`url("../img/2.jpg")`;
book2_image.style.backgroundSize="cover";
book2_image.style.width="150px";
book2_image.style.height="220px";
let book2_textBox=document.createElement('div');
book2.append(book2_textBox);
let book2Title=document.createElement('div');
let book2Title_name=document.createElement('div');
let book2Title_author=document.createElement('div');
book2_textBox.append(book2Title_name);
book2_textBox.append(book2Title_author);
book2Title_name.textContent="You Don't Know JS: Scope & Closures";
book2Title_name.style.fontWeight="bold";
book2Title_author.textContent="Kyle Simpson";
let book2Price=document.createElement('div');
book2.append(book2Price);
book2Price.textContent="20$";
book2Price.style.fontWeight="bold";
book2Price.style.textAlign="right";
book2Price.style.fontSize="18px";
let book2_btn=document.createElement('button');
book2.append(book2_btn);
book2_btn.textContent="Select";
book2_btn.style.backgroundColor="#e1e1e1";
book2_btn.style.borderRadius="5px";
book2_btn.style.width="100%";
book2_btn.style.fontWeight="bold";
book2_btn.style.padding="5px";
book2_btn.style.fontSize="10px";

let book3=document.createElement('div');
book3.style.width="160px";
book3.style.border="1px grey solid";
book3.style.padding="5px";
book3.style.marginRight="10px";
catalog.append(book3);
let book3_image=document.createElement('div');
book3.append(book3_image);
book3_image.style.backgroundImage=`url("../img/3.jpg")`;
book3_image.style.backgroundSize="cover";
book3_image.style.width="150px";
book3_image.style.height="220px";
let book3_textBox=document.createElement('div');
book3.append(book3_textBox);
let book3Title=document.createElement('div');
let book3Title_name=document.createElement('div');
let book3Title_author=document.createElement('div');
book3_textBox.append(book3Title_name);
book3_textBox.append(book3Title_author);
book3Title_name.textContent="JavaScript and JQuery: Interactive Front-End Web Development";
book3Title_name.style.fontWeight="bold";
book3Title_author.textContent="Jon Duckett";
let book3Price=document.createElement('div');
book3.append(book3Price);
book3Price.textContent="22$";
book3Price.style.fontWeight="bold";
book3Price.style.textAlign="right";
book3Price.style.fontSize="18px";
let book3_btn=document.createElement('button');
book3.append(book3_btn);
book3_btn.textContent="Select";
book3_btn.style.backgroundColor="#e1e1e1";
book3_btn.style.borderRadius="5px";
book3_btn.style.width="100%";
book3_btn.style.fontWeight="bold";
book3_btn.style.padding="5px";
book3_btn.style.fontSize="10px";

let order=document.createElement('div');
let form=document.createElement('form');
catalog.append(order);
order.append(form);
order.style.width="400px";
let orderBook=document.createElement('div');
let orderBook_text=document.createElement('div');
orderBook_text.textContent="Book:";
form.append(orderBook);
orderBook.append(orderBook_text);
order.style.border="1px grey solid";
order.style.padding="10px";
let orderBook_input=document.createElement('input');
orderBook_input.type="text";
orderBook_input.style.width="70%";
orderBook.append(orderBook_input);
orderBook.style.display="flex";
orderBook.style.justifyContent="space-between";
orderBook.style.marginBottom="8px";

let orderQuantity=document.createElement('div');
let orderQuantity_text=document.createElement('div');
orderQuantity_text.textContent="Quantity:";
form.append(orderQuantity);
orderQuantity.append(orderQuantity_text);
let orderQuantity_input=document.createElement('input');
orderQuantity_input.style.width="70%";
orderQuantity.append(orderQuantity_input);
orderQuantity.style.display="flex";
orderQuantity.style.justifyContent="space-between";
orderQuantity.style.marginBottom="8px";

let orderName=document.createElement('div');
let orderName_text=document.createElement('div');
orderName_text.textContent="Name:";
form.append(orderName);
orderName.append(orderName_text);
let orderName_input=document.createElement('input');
orderName_input.style.width="70%";
orderName.append(orderName_input);
orderName.style.display="flex";
orderName.style.justifyContent="space-between";
orderName.style.marginBottom="8px";

let orderAddress=document.createElement('div');
let orderAddress_text=document.createElement('div');
orderAddress_text.textContent="Delivery address:";
form.append(orderAddress);
orderAddress.append(orderAddress_text);
let orderAddress_input=document.createElement('textarea');
orderAddress_input.style.width="70%";
orderAddress_input.style.height="60px"
orderAddress.append(orderAddress_input);
orderAddress.style.display="flex";
orderAddress.style.justifyContent="space-between";
orderAddress.style.marginBottom="8px";

let orderDate=document.createElement('div');
let orderDate_text=document.createElement('div');
orderDate_text.textContent="Delivery date:";
form.append(orderDate);
orderDate.append(orderDate_text);
let orderDate_input=document.createElement('input');
orderDate_input.type="date";
orderDate_input.style.width="70%";
orderDate.append(orderDate_input);
orderDate.style.display="flex";
orderDate.style.justifyContent="space-between";
orderDate.style.marginBottom="8px";

let orderComment=document.createElement('div');
let orderComment_text=document.createElement('div');
orderComment_text.textContent="Comment:";
form.append(orderComment);
orderComment.append(orderComment_text);
let orderComment_input=document.createElement('textarea');
orderComment_input.style.width="70%";
orderComment_input.style.height="90px"
orderComment.append(orderComment_input);
orderComment.style.display="flex";
orderComment.style.justifyContent="space-between";
orderComment.style.marginBottom="8px";

let orderBtn=document.createElement('button');
order.append(orderBtn);
orderBtn.textContent="Buy";
orderBtn.style.backgroundColor="#e1e1e1";
orderBtn.style.borderRadius="5px";
orderBtn.style.width="100%";
orderBtn.style.fontWeight="bold";
orderBtn.style.padding="5px";
orderBtn.style.fontSize="10px";
orderBtn.style.marginTop="15px";

book1_btn.onclick=function(){
   orderBook_input.value=book1Title_name.textContent;
   orderBook_input.readOnly="true";
   orderBook_input.style.backgroundColor="#edede7";
}

book2_btn.onclick=function(){
   orderBook_input.value=book2Title_name.textContent;
   orderBook_input.readOnly="true";
   orderBook_input.style.backgroundColor="#edede7";
}

book3_btn.onclick=function(){
   orderBook_input.value=book3Title_name.textContent;
   orderBook_input.readOnly="true";
   orderBook_input.style.backgroundColor="#edede7";
}

orderBtn.onclick=function(){
   let confirmOrder=document.createElement('div');
   let confirmOrder_head=document.createElement('h2');
   confirmOrder_head.textContent="Result:";
   body.append(confirmOrder);
   confirmOrder.append(confirmOrder_head);
   confirmOrder.style.marginLeft="10px";
   let confirmOrder_text=document.createElement('div');
   confirmOrder_text.style.border="1px grey solid";
   confirmOrder_text.style.padding="10px";
   confirmOrder.append(confirmOrder_text);
   confirmOrder_text.innerHTML=`${orderName_input.value}, thanks for the order!<br><br>Book "${orderBook_input.value}" will be delivered on ${orderDate_input.value} to ${orderAddress_input.value}.`
}