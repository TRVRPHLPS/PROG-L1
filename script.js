

/*
var memory;
var color;
var price = 0;






memory = prompt("How many memory do you need?");
if (memory === null) {
    alert('Goodbye!');
} else if (memory === 64) {
    alert("test");
}

*/

var img;



 while (true) {
  memory = prompt('How many memory do you need?');
   if (+memory === 64) {
     price = 200;
     break;
     }
     if (+memory === 128) {
         price = 300;
         break;
     }
     if (+memory === 256) {
         price = 400;
         break;
     }
   if (memory === null) {
     alert('Bye!');
     break;
   }
}



while (true) {
    color = prompt('What color do you need?');
    if (color === "black") {
        price += 20;
        img = "<img src=\"i/black.jpg\">"
        break;
    }
    if (color === "white") {
        price += 30;
        img = "<img src=\"i/white.jpg\">"
        break;
    }
    if (color === "gold") {
        price += 40;
        img = "<img src=\"i/gold.jpg\">"
        break;
    }
    if (color === null) {
        alert('Bye!');
        break;
    }
}




document.write("Price:" + price + "$" + img);
