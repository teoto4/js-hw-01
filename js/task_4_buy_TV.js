alert("Завдання номер 4");
let credits = 23580;
const pricePerDroid = 3000;
let numberProducts = prompt("Вкажіть кількість товару");
let totalPrice = pricePerDroid * numberProducts;

if (numberProducts === null || numberProducts === "") {
  alert("Операцію скасовано!");
} else if (credits >= totalPrice) {
  credits = credits - totalPrice;
  alert(
    `Ви купили ${numberProducts} телевізорів, на рахунку залишилось ${credits} кредитів`
  );
} else {
  alert("Недостатньо коштів на рахунку!");
}

// Альтернативні перевірки

let credits_2 = 23580;
let numberProducts_2 = prompt("Альтернативна перевірка");
let totalPrice_2 = pricePerDroid * numberProducts_2;

if (numberProducts_2 === null || numberProducts_2 === "") {
  alert("Операцію скасовано!");
} else if (credits_2 >= totalPrice_2) {
  credits_2 = credits_2 - totalPrice_2;
  alert(
    `Ви купили ${numberProducts_2} телевізорів, на рахунку залишилось ${credits_2} кредитів`
  );
} else {
  alert("Недостатньо коштів на рахунку!");
}

let credits_3 = 23580;
let numberProducts_3 = prompt("Альтернативна перевірка 2");
let totalPrice_3 = pricePerDroid * numberProducts_3;

if (numberProducts_3 === null || numberProducts_3 === "") {
  alert("Операцію скасовано!");
} else if (credits_3 >= totalPrice_3) {
  credits_3 = credits_3 - totalPrice_3;
  alert(
    `Ви купили ${numberProducts_3} телевізорів, на рахунку залишилось ${credits_3} кредитів`
  );
} else {
  alert("Недостатньо коштів на рахунку!");
}
